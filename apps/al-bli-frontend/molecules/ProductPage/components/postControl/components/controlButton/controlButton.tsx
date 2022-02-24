import classNames from 'classnames';
import { FC } from 'react';
import { ControlButtonProps } from './controlButton.interface';
import styles from './controlButton.module.scss';

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
                className={classNames(className, styles['control-btn'])}
            >
                {icon}
            </span>
            {name && <p className={styles['control-btn_name']} >{name}</p>}
        </span>
    )
}
