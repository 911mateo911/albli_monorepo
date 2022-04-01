import classNames from 'classnames';
import { FC } from 'react';
import { useBodyScrollLock } from '../hooks';
import { ModalProps } from './modal.interface';
import styles from './modal.module.scss';

const {
  'backdrop': cls_backdrop,
  'modal-wrapper': cls_modalWrapper
} = styles;

export const Modal: FC<ModalProps> = ({
  open,
  backDropClassName,
  wrapperClassName,
  children,
  componentRef,
  onBackDropClick
}) => {
  useBodyScrollLock(open);

  return open ? (
    <>
      <div
        onClick={onBackDropClick}
        className={classNames(
          cls_backdrop,
          backDropClassName
        )} />
      <div
        ref={componentRef && componentRef}
        className={classNames(
          cls_modalWrapper,
          wrapperClassName
        )} >
        {children}
      </div>
    </>
  ) : (null)
}
