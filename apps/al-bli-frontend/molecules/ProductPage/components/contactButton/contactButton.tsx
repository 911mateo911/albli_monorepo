import { FC } from 'react';
import styles from './contactButton.module.scss';
import { ContactButtonProps } from './contactButton.interface';
import { ReactComponent as CopyIcon } from '@al-bli/icons/copy-outline.svg';

const {
  'contact-btn': cls_contactBtn,
  'contact-btn-main-icon': cls_contactBtnMainIcon,
  'contact-btn-action-icons-wrapper': cls_contactBtnActionIconsWrapper
} = styles;

export const ContactButton: FC<ContactButtonProps> = ({
  contact,
  mainIcon,
  secondaryIcons = []
}) => {
  return (
    <span className={cls_contactBtn} >
      <span className={cls_contactBtnMainIcon} >
        {mainIcon}
      </span>
      {contact}
      <span className={cls_contactBtnActionIconsWrapper} >
        {secondaryIcons.map(icon => icon)}
        <CopyIcon />
      </span>
    </span>
  )
}
