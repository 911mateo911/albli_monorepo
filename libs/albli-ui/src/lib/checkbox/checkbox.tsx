import { FC } from 'react';
import { CheckBoxProps } from './checkbox.interface';
import styles from './checkbox.module.scss';

export const Checkbox: FC<CheckBoxProps> = ({
    checked,
    onChange,
    id,
    className
}) => {
    return <div className={styles['checkbox-wrapper']} >

    </div>;
};
