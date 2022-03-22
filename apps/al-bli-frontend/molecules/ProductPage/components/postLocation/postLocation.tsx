import { FC } from 'react';
import { PostLocationProps } from './postLocation.interface';
import styles from './postLocation.module.scss';
import { ReactComponent as LocationIcon } from '@al-bli/icons/location-outline.svg';
import classNames from 'classnames';

const {
  'location': cls_location
} = styles;

export const PostLocation: FC<PostLocationProps> = ({
  location,
  wrapperClassName
}) => {
  return (
    <p className={classNames(wrapperClassName, cls_location)} >
      <LocationIcon />
      {location}
    </p>
  )
}
