import { FC } from 'react';
import styles from './confirmationDialog.module.scss';
import { ConfirmationDialogProps } from './confirmationDialog.interface';
import classNames from 'classnames';

export const ConfirmationDialog: FC<ConfirmationDialogProps> = ({
  onAccept,
  onDecline,
  title,
  icon,
  content,
  acceptButton,
  declineButton
}) => {
  return (
    <div className={styles.container} >
      <span className={styles['title-container']} >
        <p className={styles.title} >{title}</p>
        {icon}
      </span>
      {content && (
        <p className={styles.content} >{content}</p>
      )}
      <span className={styles.btnContainer} >
        {onDecline && (
          declineButton ? declineButton : (
            <span className={classNames(
              styles.declineBtn,
              styles.btn
            )} >
              Mbrapa
            </span>
          )
        )}
        {onAccept && (
          acceptButton ? acceptButton : (
            <span className={classNames(
              styles.acceptBtn,
              styles.btn
            )} >
              OK
            </span>
          )
        )}
      </span>
    </div>
  )
}
