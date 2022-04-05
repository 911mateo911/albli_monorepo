import { FC, useMemo, useState } from 'react';
import styles from './downloadProduct.module.scss';
import { DownloadProductProps } from './downloadProduct.interface';
import { Tabs, TabType } from '@al-bli/albli-ui';
import { BasicPdfRender } from './components';
import { PDFExportMethods, PDFExportMethodsType } from '@al-bli/al-bli-config-files';
import QRCode from 'react-qr-code';

export const DownloadProduct: FC<DownloadProductProps> = ({
  productTitle
}) => {
  const [activeTab, setActiveTab] = useState<PDFExportMethodsType>('E thjeshte');

  // Todo Refactor:
  const tabs = useMemo<TabType<PDFExportMethodsType>[]>(() => {
    return PDFExportMethods.map(method => ({
      isActive: activeTab === method,
      tabName: method
    }))
  }, [activeTab]);

  return (
    <div className={styles.wrapper} >
      <p className={styles.title} >Shkarko produktin si PDF</p>
      <p>Menyrat</p>
      <Tabs<PDFExportMethodsType>
        tabs={tabs}
        wrapperClassName={styles.tabWrapper}
        onTabChange={setActiveTab}
      />
      <p className={styles.preview} >Inspektim:</p>
      <div className={styles.pdfContainer} >
        <BasicPdfRender />
      </div>
    </div>
  )
}
