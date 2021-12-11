import { FC } from 'react';
import { MainHeroProps } from './mainHero.interface';
import { ReactComponent as LandingImage } from '../icons/forest-landing.svg';
import styles from './mainHero.module.scss';

export const MainHero: FC<MainHeroProps> = ({
    title,
    subtitle,
    onClick,
    onSearchChange
}) => {
    return (
        <div className={styles['mainHero-wrapper']} >
            <span className={styles['mainHero-text-wrapper']} >
                <h1 className={styles['mainHero-title']} >{title}</h1>
                <h2 className={styles['mainHero-subtitle']} >{subtitle}</h2>
                <div className={styles['mainHero-action']} >
                    <input
                        className={styles['mainHero-input']}
                        type="text"
                        placeholder='Kerko gjithcka ne al-Bli'
                        onChange={({ target }) => onSearchChange(target.value)}
                    />
                    <button className={styles['mainHero-btn']} >Kerko</button>
                </div>
            </span>
            <LandingImage className={styles['mainHero-svg']} />
        </div>
    )
}
