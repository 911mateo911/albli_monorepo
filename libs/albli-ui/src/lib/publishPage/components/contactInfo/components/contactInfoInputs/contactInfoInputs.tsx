import { FC } from 'react';
import { Input } from '../../../../../input';
import styles from './contactInfoInputs.module.scss';

const {
    'user-input': cls_userInput
} = styles;

export const ContactInfoInputs: FC = () => {
    return (<>
        <Input
            name='fullName'
            placeholder='Emer Mbiemer'
            onChange={() => ({})}
            value=''
            className={cls_userInput}
        />
        <Input
            name='email'
            placeholder='Email'
            onChange={() => ({})}
            value=''
            className={cls_userInput}
        />
        <Input
            name='telephone'
            placeholder='Telefon/Celular'
            onChange={() => ({})}
            value=''
            className={cls_userInput}
        />
        <Input
            name='whatsapp'
            placeholder='Whatsapp'
            onChange={() => ({})}
            value=''
            className={cls_userInput}
        />
    </>);
};
