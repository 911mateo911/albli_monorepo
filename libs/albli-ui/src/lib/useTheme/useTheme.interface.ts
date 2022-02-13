export enum THEME_TYPE {
    DARK_THEME = 'theme--dark',
    WHITE_THEME = 'theme--white'
}

export type useThemeHook = () => {
    toggle: () => void;
    initTheme: () => void;
}
