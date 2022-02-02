import { FC } from 'react';
import { Input } from '../../../../../input';
import { PublishPageServiceInstance } from '../../../../publishPage.service';
import styles from './contactInfoInputs.module.scss';
import { emailValidatorRGX, fullNameRGX } from '../../../../config';

const {
    'user-input': cls_userInput
} = styles;

export const ContactInfoInputs: FC = () => {
    return (<>
        <Input
            name='fullName'
            required
            placeholder='Emer Mbiemer'
            onChange={(value) => PublishPageServiceInstance.name.next(value)}
            value=''
            className={cls_userInput}
            pattern={fullNameRGX}
        />
        <Input
            name='email'
            required
            validateOn='blur'
            placeholder='Email'
            onChange={(value) => PublishPageServiceInstance.email.next(value)}
            value=''
            className={cls_userInput}
            pattern={emailValidatorRGX}
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
