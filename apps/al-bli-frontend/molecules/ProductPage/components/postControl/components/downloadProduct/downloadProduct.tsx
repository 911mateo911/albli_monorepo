import { FC, useMemo, useState } from 'react';
import styles from './downloadProduct.module.scss';
import { DownloadProductProps } from './downloadProduct.interface';
import { Tabs, TabType } from '@al-bli/albli-ui';
import { BasicPdfRender } from './components';

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
      <p className={styles.title} >Shkarko produktin si PDF</p>
      <Tabs
        tabs={tabs}
        wrapperClassName={styles.tabWrapper}
        onTabChange={setActiveTab}
      />
      <p className={styles.preview} >Inspektim:</p>
      <BasicPdfRender />
    </div>
  )
}
