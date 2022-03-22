import classNames from 'classnames';
import { FC } from 'react';
import { ControlButtonProps } from './controlButton.interface';
import styles from './controlButton.module.scss';

const {
  'control-btn': cls_controlBtn,
  'control-btn_name': cls_controlBtnName
} = styles;

export const ControlButton: FC<ControlButtonProps> = ({
  icon,
  className,
  onClick = () => ({}),
  name
}) => {
  return (
    <span>
      <span
        onClick={onClick}
        className={classNames(className, cls_controlBtn)}
      >
        {icon}
      </span>
      {name && <p className={cls_controlBtnName} >{name}</p>}
    </span>
  )
}
