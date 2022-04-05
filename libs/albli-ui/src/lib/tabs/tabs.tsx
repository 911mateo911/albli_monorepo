import classNames from 'classnames';
import { TabsProps } from './tabs.interface';
import styles from './tabs.module.scss';

export const Tabs = <T extends string,>({
  onTabChange,
  wrapperClassName,
  tabs
}: TabsProps<T>): JSX.Element => {
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
