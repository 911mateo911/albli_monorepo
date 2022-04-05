import { FC, useEffect, useRef, useState } from 'react';
import {
  Document,
  Page,
  PDFViewer,
  View,
  Text,
  Image,
} from '@react-pdf/renderer';
import QRCode from 'qrcode';

export const BasicPdfRender: FC = () => {
  const documentRef = useRef();
  const [base64QrCode, setBase64QrCode] = useState<string>('');

  useEffect(() => {
    console.log(QRCode)

    if (!documentRef.current) return;

    QRCode.toString('mateoooo').then(console.log)
  }, [])

  // console.log(URL.createObjectURL(base64QrCode as Blob))

  return (
    <PDFViewer>
      <Document ref={documentRef} >
        <Page
          orientation='landscape'
          size="A4"
        >
          <View>
            <Text>
              Mateo
            </Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  )
}
