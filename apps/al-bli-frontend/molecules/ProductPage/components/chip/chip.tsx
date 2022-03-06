import classNames from 'classnames';
import { FC } from 'react';
import { ChipProps } from './chip.interface';
import styles from './chip.module.scss';

export const Chip: FC<ChipProps> = ({
  onClick,
  text,
  className
}) => {
  return (
    <p
      onClick={() => onClick(text)}
      className={classNames(
        styles.chip,
        className
      )}
    >
      {text}
    </p>
  )
}
