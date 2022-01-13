import classNames from 'classnames';
import { FC } from 'react';
import styles from './container.module.scss';
import { Header } from './components/header';

export const Container: FC = () => {
    return (
        <div className={styles.wrapper}>
            <div className={classNames(styles.container, styles['left-container'])} >

            </div>
            <div className={styles.container} >
                <Header />
                <h1 className={styles['your-product']} >Produkti juaj ?</h1>
            </div>
        </div>
    )
}
