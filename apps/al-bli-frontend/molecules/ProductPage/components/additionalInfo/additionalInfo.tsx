import { FC } from 'react';
import styles from './additionalInfo.module.scss';
import { AdditionalInfoProps } from './additionalInfo.interface';
import classNames from 'classnames';
import { InfoBox } from '../infoBox';

const {
  'details-container': cls_rootWrapper
} = styles;

export const AdditionalInfo: FC<AdditionalInfoProps> = ({
  additionalInfos,
  wrapperClassName
}) => {
  return (
    <div className={classNames(cls_rootWrapper, wrapperClassName)} >
      {additionalInfos.map(info => <InfoBox key={info.info[0].type} {...info} />)}
    </div>
  )
}
