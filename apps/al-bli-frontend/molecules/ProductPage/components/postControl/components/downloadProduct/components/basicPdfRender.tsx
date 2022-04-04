import { FC } from 'react';
import { Document, Page } from '@react-pdf/renderer';
import QRCode from 'react-qr-code';

export const BasicPdfRender: FC = () => {
  return (
    <div>
      <Document>
        <Page>
          <QRCode
            value='malksda'
          />
        </Page>
      </Document>
    </div>
  )
}
