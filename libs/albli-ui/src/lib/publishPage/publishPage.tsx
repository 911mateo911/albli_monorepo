import classNames from 'classnames';
import { FC } from 'react';
import styles from './container.module.scss';
import { Input } from '../input';
import { Header } from './components/header';
import { PreferredContact } from './components/preferredContact';
import { Userlocation } from './components/userLocation';
import { UserProfile } from './components/userProfile';
import { DropdownInput } from '../dropdownInput';
import { ImagePicker } from '../imagePicker';
import { ContactInfo } from './components/contactInfo';

// TODO: refactor this nonsense, WTF
export const PublishPageContainer: FC = () => {
    return (
        <div className={styles.wrapper}>
            <div className={classNames(styles.container, styles['left-container'])} >
                <ContactInfo />
                <p className={styles.preferredContact} >Preferoj te pergjigjem ne:</p>
                <div className={styles.preferredContact_wrapper} >
                    <PreferredContact
                        contact='Telefon/Celular'
                        onClick={() => ({})}
                        isActive
                    />
                    <PreferredContact
                        contact='Whatsapp'
                        onClick={() => ({})}
                        isActive={false}
                    />
                    <PreferredContact
                        contact='Email'
                        onClick={() => ({})}
                        isActive={false}
                    />
                </div>
                <p className={styles['contact-info']} >Adresa juaj:</p>
                <Userlocation
                    streetAddress='Pallatet Fratari, Astir'
                    countryAddress='Tirane, Shqiperi'
                    kilometresAway={10}
                />
                <UserProfile />
            </div>
            <div className={styles.container} >
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
