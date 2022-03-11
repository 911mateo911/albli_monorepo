import { FC, useState } from 'react';
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

  return (
    <div className={classNames(
      cls_postControlWrapper,
      {
        [cls_postUserNotLogged]: !isLoggedIn
      }
    )} >
      {isLoggedIn ? (
        <span className={cls_btnWrapper} >
          <ControlButton
            name='Ecuria'
            icon={<AnalyticsBtn />}
          />
          <ControlButton
            name='Ndrysho'
            className={cls_btnSmallerIcon}
            icon={<EditBtn />}
          />
          <ControlButton
            name='Fshi'
            className={cls_btnSmallerIcon}
            icon={<TrashIcon />}
          />
          <ControlButton
            name='Shperndaj'
            icon={<ShareIcon />}
          />
          <ControlButton
            name='Shkarko'
            icon={<DownloadIcon />}
          />
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
    </div>
  )
}
