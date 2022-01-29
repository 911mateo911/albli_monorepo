import { FC } from 'react';
import { Input } from '../../../../../input';
import styles from './contactInfoInputs.module.scss';

export const ContactInfoInputs: FC = () => {
    return (<>
        <Input
            name='fullName'
            placeholder='Emer Mbiemer'
            onChange={() => ({})}
            value=''
            className={styles['user-input']}
        />
        <Input
            name='email'
            placeholder='Email'
            onChange={() => ({})}
            value=''
            className={styles['user-input']}
        />
        <Input
            name='telephone'
            placeholder='Telefon/Celular'
            onChange={() => ({})}
            value=''
            className={styles['user-input']}
        />
        <Input
            name='whatsapp'
            placeholder='Whatsapp'
            onChange={() => ({})}
            value=''
            className={styles['user-input']}
        />
    </>);
};
