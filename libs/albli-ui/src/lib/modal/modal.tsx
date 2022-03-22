import classNames from 'classnames';
import { FC } from 'react';
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
  children
}) => {
  return open ? (
    <>
      <div className={classNames(
        cls_backdrop,
        backDropClassName
      )} />
      <div className={classNames(
        cls_modalWrapper,
        wrapperClassName
      )} >
        {children}
      </div>
    </>
  ) : (null)
}
