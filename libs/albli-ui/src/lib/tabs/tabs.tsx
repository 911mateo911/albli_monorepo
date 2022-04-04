import classNames from 'classnames';
import { FC } from 'react';
import { TabsProps } from './tabs.interface';
import styles from './tabs.module.scss';

export const Tabs: FC<TabsProps> = ({
  onTabChange,
  wrapperClassName,
  tabs
}) => {
  return (
    <div
      style={{
        gridTemplateColumns: `repeat(${tabs.length}, 1fr)`
      }}
      className={classNames(styles.tabContainer, wrapperClassName)}
    >
      {tabs.map(({ isActive, tabName }, tabIndex) => (
        <span
          className={classNames(
            styles.tab,
            isActive && styles.tabActive
          )}
          key={tabIndex}
          onClick={() => onTabChange(tabName)}
        >
          {tabName}
        </span>
      ))}
    </div>
  )
}
