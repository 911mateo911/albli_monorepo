import classNames from 'classnames';
import { FC } from 'react';
import styles from './publishPage.module.scss';
import { Input } from '../input';
import { Header } from './components/header';
import { DropdownInput } from '../dropdownInput';
import { ImagePicker } from '../imagePicker';
import { ContactInfo } from './components/contactInfo';

const {
    'container': cls_container,
    'left-container': cls_leftContainer
} = styles;

// TODO: differ company and user here
export const PublishPageContainer: FC = () => {
    return (
        <div className={styles.wrapper}>
            <div className={classNames(cls_container, cls_leftContainer)} >
                <ContactInfo />
            </div>
            <div className={cls_container} >
                <Header />
                <div className={styles['form-container']} >
                    <h2 className={styles['your-product']} >Produkti juaj ?</h2>
                    <p className={styles['product-text']} >Titulli</p>
                    <p className={styles['product-text_secondary']} >
                        Nje titull i shkurter dhe permbledhes mbi produktin tend
                    </p>
                    <Input
                        name='title'
                        placeholder='Titulli'
                        onChange={() => ({})}
                        value=''
                        className={styles['user-input']}
                    />
                    <div className={styles['flex-container']} >
                        <span className={styles['dropdown-input-wrapper']} >
                            <p className={styles['dropdown-input-label']} >Qyteti</p>
                            <DropdownInput
                                values={['Tirane', 'Durres']}
                                selectedValue='Tirane'
                                onChange={() => ({})}
                                className={styles['dropdown-input']}
                            />
                        </span>
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
                    </div>
                    <div className={styles['flex-container']} >
                        <ImagePicker />
                    </div>
                </div>
            </div>
        </div>
    )
}
