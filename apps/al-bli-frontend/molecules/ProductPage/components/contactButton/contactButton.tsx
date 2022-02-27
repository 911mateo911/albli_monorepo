import { FC } from 'react';
import { ContactButtonProps } from './contactButton.interface';
import styles from './contactButton.module.scss';

export const ContactButton: FC<ContactButtonProps> = ({
  text,
  icon,
  children
}) => {
  return (
    <div className={styles['root-wrapper']} >
      <div className={styles['svg-wrapper']} >
        {icon}
      </div>
      <p className={styles.text} >
        {text}
      </p>
      {children}
    </div>
  )
}
