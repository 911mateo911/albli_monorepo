import { FC } from 'react';
import styles from './infoBox.module.scss';
import { InfoBoxProps } from './infoBox.interface';

const {
  'root-container': cls_rootContainer,
  'border-top': cls_borderTop,
  'content-wrapper': cls_contentWrapper,
  'text-wrapper': cls_textWrapper,
  'box-content-wrapper': cls_boxContentWrapper
} = styles;

export const InfoBox: FC<InfoBoxProps> = ({
  icon,
  info,
  color = '#76a9ff'
}) => {
  return (
    <div className={cls_rootContainer} >
      <span className={cls_borderTop} style={{ backgroundColor: color }} ></span>
      <div className={cls_contentWrapper} >
        <div className={cls_textWrapper} >
          {info.map(({ type, value }) => (
            <div key={type} className={cls_boxContentWrapper} >
              <p className={styles.value} >{value}</p>
              <p className={styles.type} >{type}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
