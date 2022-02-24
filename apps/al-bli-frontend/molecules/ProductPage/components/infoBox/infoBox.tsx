import { FC } from 'react';
import styles from './infoBox.module.scss';
import { InfoBoxProps } from './infoBox.interface';

export const InfoBox: FC<InfoBoxProps> = ({
  icon,
  info,
  color = '#76a9ff'
}) => {
  return (
    <div className={styles['root-container']} >
      <span className={styles['border-top']} style={{ backgroundColor: color }} ></span>
      <div className={styles['content-wrapper']} >
        <div className={styles['text-wrapper']} >
          {info.map(({ type, value }) => (
            <div key={type} className={styles['box-content-wrapper']} >
              <p className={styles.value} >{value}</p>
              <p className={styles.type} >{type}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
