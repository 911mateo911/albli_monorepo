import { useBehaviorSubject } from '../../../../../hooks';
import { FC } from 'react';
import { Input } from '../../../../../input';
import { PublishPageServiceInstance } from '../../../../publishPage.service';
import styles from './contactInfoInputs.module.scss';
import { emailValidatorRGX, fullNameRGX, testString } from '../../../../config';

const {
    'user-input': cls_userInput
} = styles;

export const ContactInfoInputs: FC = () => {
    const fullName = useBehaviorSubject(PublishPageServiceInstance.name);
    const email = useBehaviorSubject(PublishPageServiceInstance.email);

    return (<>
        <Input
            name='fullName'
            required
            placeholder='Emer Mbiemer'
            onChange={(value) => PublishPageServiceInstance.name.next(value)}
            value={fullName}
            className={cls_userInput}
            error={testString(fullName, fullNameRGX)}
        />
        <Input
            name='email'
            required
            placeholder='Email'
            onChange={(value) => PublishPageServiceInstance.email.next(value)}
            value={email}
            className={cls_userInput}
            error={testString(email, emailValidatorRGX)}
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
