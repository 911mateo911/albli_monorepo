import { FC } from 'react';
import styles from './publishPage.module.scss';
import { Input, DropdownInput } from '@al-bli/albli-ui';
import { ContactInfo } from './components/contactInfo';
import classNames from 'classnames';
import { Header } from './components/header';
import { PublishPageImagePicker } from './components/imagePicker';
import { ImagePickerPreview } from './components/imagePickerPreview/imagePickerPreview';
import { ReactComponent as BackArrow } from '@al-bli/icons/arrow-back-outline.svg';
import { useRouter } from 'next/router';

const {
    'container': cls_container,
    'left-container': cls_leftContainer
} = styles;

export const PublishPage: FC = () => {
    const { back: goBack } = useRouter();

    return (
        <div className={styles['root-container']} >
            <div className={styles.wrapper} >
                <button onClick={goBack} className={styles['mobile-back-btn']} >
                    <BackArrow />
                    Mbrapa
                </button>
                <div className={classNames(cls_container, cls_leftContainer)} >
                    <ContactInfo />
                </div>
                <div className={cls_container} >
                    <Header />
                    <div className={styles['form-container']} >
                        <h2 className={styles['your-product']} >Produkti juaj ?</h2>
                        <p className={styles['product-text']} >Titulli</p>
                        <p className={styles['product-text_secondary']} >
                            Nje titull i shkurter dhe permbledhes mbi produktin tend.
                        </p>
                        <Input
                            name='title'
                            placeholder='Titulli'
                            onChange={() => ({})}
                            placeholderClassName={styles['user-input_placeholder']}
                            value=''
                            className={styles['user-input']}
                        />
                        <div className={styles['flex-container']} >
                            <span className={styles['dropdown-input-wrapper']} >
                                <p className={styles['dropdown-input-label']} >Kategori</p>
                                <DropdownInput
                                    values={['Automjete', 'Shtepiake']}
                                    selectedValue='Automjete'
                                    onChange={() => ({})}
                                    className={styles['dropdown-input']}
                                />
                            </span>
                            <span className={styles['dropdown-input-wrapper']} >
                                <p className={styles['dropdown-input-label']} >Nenkategori</p>
                                <DropdownInput
                                    values={['Pjese kembimi', 'Traktore']}
                                    selectedValue='Pjese kembimi'
                                    onChange={() => ({})}
                                    className={styles['dropdown-input']}
                                />
                            </span>
                            <span className={styles['dropdown-input-wrapper']} >
                                <p className={styles['dropdown-input-label']} >Monedha</p>
                                <DropdownInput
                                    values={['Lek', 'Euro']}
                                    selectedValue='Lek'
                                    onChange={() => ({})}
                                    className={styles['dropdown-input']}
                                />
                            </span>
                        </div>
                        <p className={styles['product-text']} >Ngarko imazhe</p>
                        <div className={classNames(
                            styles['flex-container'],
                            styles['image-picker-wrapper']
                        )} >
                            <ImagePickerPreview />
                            <PublishPageImagePicker />
                        </div>
                        <p className={styles['product-text']} >Pershkrimi</p>
                        <Input
                            textArea
                            value=''
                            validateOn='blur'
                            placeholder='Nje permbledhje e vogel mbi produktin'
                            required
                            name='description'
                            pattern={/^[\S\s]{1,8000}$/}
                            textAreaClassName={styles.textarea}
                            onChange={() => ({})}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
