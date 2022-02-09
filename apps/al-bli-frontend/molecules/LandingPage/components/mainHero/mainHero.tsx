import { FC } from 'react';
import { MainHeroProps } from './mainHero.interface';
import { ReactComponent as LandingImage } from '@al-bli/icons/forest-landing.svg';
import styles from './mainHero.module.scss';

const {
    'mainHero-wrapper': cls_mainHeroWrapper,
    'mainHero-text-wrapper': cls_mainHeroTextWrapper,
    'mainHero-title': cls_mainHeroTitle,
    'mainHero-subtitle': cls_mainHeroSubtitle,
    'mainHero-svg': cls_mainHeroSvg,
    'mainHero-action': cls_mainHeroAction,
    'mainHero-input': cls_mainHeroInput,
    'mainHero-btn': cls_mainHeroBtn
} = styles;

export const MainHero: FC<MainHeroProps> = ({
    title,
    subtitle,
    onClick,
    onSearchChange
}) => {
    return (
        <div className={cls_mainHeroWrapper} >
            <span className={cls_mainHeroTextWrapper} >
                <h1 className={cls_mainHeroTitle} >{title}</h1>
                <h2 className={cls_mainHeroSubtitle} >{subtitle}</h2>
                <div className={cls_mainHeroAction} >
                    <input
                        className={cls_mainHeroInput}
                        type="text"
                        placeholder='Kerko gjithcka ne al-Bli'
                        onChange={({ target }) => onSearchChange(target.value)}
                    />
                    <button className={cls_mainHeroBtn} >Kerko</button>
                </div>
            </span>
            <LandingImage className={cls_mainHeroSvg} />
        </div>
    )
}
