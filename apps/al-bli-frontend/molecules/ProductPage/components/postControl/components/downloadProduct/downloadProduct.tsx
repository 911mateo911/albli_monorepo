import { FC, useMemo, useState } from 'react';
import styles from './downloadProduct.module.scss';
import { DownloadProductProps } from './downloadProduct.interface';
import { Tabs, TabType } from '@al-bli/albli-ui';

export const DownloadProduct: FC<DownloadProductProps> = ({
  productTitle
}) => {
  const [activeTab, setActiveTab] = useState<string>('Basic');

  // Todo Refactor:
  const tabs = useMemo<TabType[]>(() => {
    return [
      {
        isActive: activeTab === 'Basic',
        tabName: 'Basic'
      },
      {
        isActive: activeTab === 'Advanced',
        tabName: 'Advanced'
      }
    ]
  }, [activeTab]);

  return (
    <div className={styles.wrapper} >
      <Tabs
        tabs={tabs}
        onTabChange={setActiveTab}
      />
    </div>
  )
}
