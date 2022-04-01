import { FC, ReactElement, useCallback, useMemo, useState } from 'react';
import { PostControlProps } from './postControl.interface';
import styles from './postControl.module.scss';
import { ReactComponent as AnalyticsBtn } from '@al-bli/icons/analytics.svg';
import { ReactComponent as EditBtn } from '@al-bli/icons/pencil.svg';
import { ReactComponent as TrashIcon } from '@al-bli/icons/trash-outline.svg';
import { ControlButton } from './components';
import { UserProfile } from '../../../../components';
import { ReactComponent as LikeIcon } from '@al-bli/icons/heart-outline.svg';
import { ReactComponent as ShareIcon } from '@al-bli/icons/share-outline.svg';
import { ReactComponent as DownloadIcon } from '@al-bli/icons/cloud-download.svg';
import classNames from 'classnames';
import { Modal } from '@al-bli/albli-ui';
import { ReactComponent as WarningIcon } from '@al-bli/icons/warning-outline.svg';
import { ConfirmationDialog } from '../../../../components';

export enum PostControlAllButtons {
  Ecuria = 'Ecuria',
  Ndrysho = 'Ndrysho',
  Fshi = 'Fshi',
  Shperndaj = 'Shperndaj',
  Shkarko = 'Shkarko'
}

export type PostControlButtonType = {
  isSmallerIcon?: boolean;
  onClick: (name: string) => void;
  name: keyof typeof PostControlAllButtons;
  icon: ReactElement;
}

type PostControlModalElement = { [key in PostControlAllButtons]: ReactElement | null }

const {
  'post-control-wrapper': cls_postControlWrapper,
  'post-user-not-logged': cls_postUserNotLogged,
  'post-profile': cls_postProfile,
  'btn-wrapper': cls_btnWrapper,
  'btn-smaller-icon': cls_btnSmallerIcon,
  'post-time-like': cls_postTimeLike,
  'post-time': cls_postTime,
  'post-like': cls_postLike,
  'like-icon-wrapper': cls_likeIconWrapper,
  'like-icon': cls_likeIcon,
  'like-number': cls_likeNumber,
  'like-icon_liked': cls_likeIconLiked,
  'like-number_liked': cls_likeNumberLiked
} = styles;

export const PostControl: FC<PostControlProps> = ({
  isLoggedIn,
  hasLikedPost = false
}) => {
  // TODO: in the useUser hook check to see if it is logged in and if it is not redirect to login and then auto like
  const [isPostLiked, setPostLiked] = useState<boolean>(hasLikedPost);
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [modalElement, setModalElement] = useState<keyof typeof PostControlAllButtons>('Shperndaj');

  const postControlModalElement = useMemo<PostControlModalElement>(() => {
    return {
      Ecuria: null,
      Fshi: (null),
      Ndrysho: null,
      Shkarko: <>Download here</>,
      Shperndaj: <>Share here</>
    }
  }, []);

  const handlePostControlButtonClick = useCallback((name: keyof typeof PostControlAllButtons) => {
    if (postControlModalElement[name] === null) return;

    setModalElement(name);
    setModalOpen(true);
  }, [postControlModalElement]);

  const postControlButtons = useMemo<PostControlButtonType[]>(() => {
    return [
      {
        icon: (<AnalyticsBtn />),
        name: 'Ecuria',
        onClick: handlePostControlButtonClick
      },
      {
        icon: (<EditBtn />),
        name: 'Ndrysho',
        isSmallerIcon: true,
        onClick: handlePostControlButtonClick
      },
      {
        name: 'Fshi',
        icon: (<TrashIcon />),
        isSmallerIcon: true,
        onClick: handlePostControlButtonClick
      },
      {
        icon: (<ShareIcon />),
        name: 'Shperndaj',
        onClick: handlePostControlButtonClick
      },
      {
        icon: (<DownloadIcon />),
        name: 'Shkarko',
        onClick: handlePostControlButtonClick
      }
    ]
  }, [handlePostControlButtonClick]);

  return (
    <div className={classNames(
      cls_postControlWrapper,
      {
        [cls_postUserNotLogged]: !isLoggedIn
      }
    )} >
      {isLoggedIn ? (
        <span className={cls_btnWrapper} >
          {postControlButtons.map(({
            icon,
            name,
            onClick,
            isSmallerIcon
          }) => {
            return (
              <ControlButton
                key={name}
                icon={icon}
                className={classNames(
                  isSmallerIcon && cls_btnSmallerIcon
                )}
                name={name}
                onClick={() => onClick(name)}
              />
            )
          })}
        </span>
      ) : (
        <>
          <UserProfile wrapperClassName={cls_postProfile} />
          <span className={cls_postTimeLike} >
            <p className={cls_postTime} >5 minuta me pare</p>
            <ControlButton
              icon={(
                <span className={cls_likeIconWrapper} >
                  <LikeIcon className={classNames(
                    cls_likeIcon,
                    {
                      [cls_likeIconLiked]: isPostLiked
                    }
                  )} />
                  <p className={classNames(
                    cls_likeNumber,
                    {
                      [cls_likeNumberLiked]: isPostLiked
                    }
                  )} >{12 + Number(isPostLiked)}</p>
                </span>
              )}
              onClick={() => setPostLiked(liked => !liked)}
              className={cls_postLike}
            />
          </span>
        </>
      )}
      <Modal
        onBackDropClick={() => setModalOpen(false)}
        open={isModalOpen}
      >
        <ConfirmationDialog
          title='Fshi produktin?'
          onAccept={() => ({})}
          onDecline={() => ({})}
          content="Fshirja e produktit eshte permanente dhe nuk mund te reversohet"
          icon={<WarningIcon className={styles['warning-icon']} />}
        />
      </Modal>
    </div>
  )
}
