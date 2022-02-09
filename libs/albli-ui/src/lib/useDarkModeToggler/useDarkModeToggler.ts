import { useCallback, useMemo } from "react"

export const useDarkModeToggler = (): (() => void)[] => {
    const body = useMemo(() => {
        if (typeof window === 'undefined') return;

        return document.querySelector('body');
    }, []);

    const toggle = useCallback(() => {
        body?.classList.toggle('theme--dark');
        body?.classList.toggle('theme--white');
    }, [body]);

    return [toggle]
}
