import { useCallback, useMemo } from "react";
import { LOCALSTORE_KEYS } from '@al-bli/al-bli-config-files';
import { THEME_TYPE, useThemeHook } from "./useTheme.interface";

export const inPromise = (cb: () => void): Promise<void> => Promise.resolve().then(cb);

export const useTheme: useThemeHook = () => {
    const body = useMemo(() => {
        if (typeof window === 'undefined') return;

        return document.querySelector('body');
    }, []);

    const initTheme = useCallback(() => {
        if (typeof window === 'undefined') return;

        const savedTheme = window.localStorage.getItem(LOCALSTORE_KEYS.THEME);

        if (!savedTheme) {
            inPromise(() => window.localStorage.setItem(LOCALSTORE_KEYS.THEME, THEME_TYPE.WHITE_THEME));
            if (body) body.classList.add(THEME_TYPE.WHITE_THEME);
        } else {
            if (body) body.classList.add(savedTheme);
        }
    }, [body])

    const toggle = useCallback(() => {
        if (typeof window === 'undefined') return;

        body?.classList.toggle(THEME_TYPE.DARK_THEME);
        body?.classList.toggle(THEME_TYPE.WHITE_THEME);

        if (body?.classList.contains(THEME_TYPE.DARK_THEME)) {
            inPromise(() => window.localStorage.setItem(LOCALSTORE_KEYS.THEME, THEME_TYPE.DARK_THEME));
        }
        else inPromise(() => window.localStorage.setItem(LOCALSTORE_KEYS.THEME, THEME_TYPE.WHITE_THEME));
    }, [body]);

    return {
        toggle,
        initTheme
    }
}
