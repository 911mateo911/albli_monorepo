import { FC } from 'react';
import { PostControlProps } from './postControl.interface';
import styles from './postControl.module.scss';
import { ReactComponent as AnalyticsBtn } from '@al-bli/icons/analytics.svg';
import { ReactComponent as EditBtn } from '@al-bli/icons/pencil.svg';
import { ReactComponent as TrashIcon } from '@al-bli/icons/trash-outline.svg';
import { ControlButton } from './components';

export const PostControl: FC<PostControlProps> = ({
    isInSale
}) => {
    return (
        <div className={styles['post-control-wrapper']} >
            <span className={styles['btn-wrapper']} >
                <ControlButton name='Ecuria' icon={<AnalyticsBtn />} />
                <ControlButton name='Ndrysho' icon={<EditBtn />} />
                <ControlButton name='Fshi' icon={<TrashIcon />} />
            </span>
        </div>
    )
}
