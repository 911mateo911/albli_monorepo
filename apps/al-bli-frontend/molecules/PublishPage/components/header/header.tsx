import { FC } from 'react';
import styles from './header.module.scss';
import { useRouter } from 'next/router';
import { ReactComponent as BackIcon } from '@al-bli/icons/arrow-back-outline.svg';
import { formStepElements } from '../../config';
import classNames from 'classnames';
import { PublishPageServiceInstance } from '../../publishPage.service';
import { useBehaviorSubject } from '@al-bli/albli-ui';

const {
    'root-container': cls_rootContainer,
    'back-button': cls_backButton,
    'form-steps-container': cls_formStepsContainer,
    'form-step': cls_formStep,
    'form-step-active': cls_formStepActive
} = styles;

export const Header: FC = () => {
    const { back: goBack } = useRouter();
    const activeStep = useBehaviorSubject(PublishPageServiceInstance.formStep);

    return (
        <div className={cls_rootContainer} >
            <button
                onClick={goBack}
                className={cls_backButton}
            >
                <BackIcon />
                Mbrapa
            </button>
            <div className={cls_formStepsContainer} >
                {formStepElements.map(step => (
                    <p
                        key={step}
                        className={classNames(
                            cls_formStep,
                            {
                                [cls_formStepActive]: activeStep === step
                            }
                        )}
                    >
                        {step}
                    </p>
                ))}
            </div>
        </div>
    )
}
