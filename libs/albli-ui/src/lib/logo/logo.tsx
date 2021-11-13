import { FC } from 'react';
import styles from './logo.module.scss';
import Link from 'next/link';

export const Logo: FC = () => {
    return (<Link href='/' ><p className={styles.logo} >B</p></Link>)
}
