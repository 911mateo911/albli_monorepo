import { useEffect } from 'react'
import { timer, tap } from 'rxjs'

export const usePolling = (callBack: () => void, interval = 2000): void => {
    const polling$ = timer(0, interval).pipe(
        tap(() => callBack())
    );

    useEffect(() => {
        const sub = polling$.subscribe();

        return () => sub.unsubscribe();
    }, [polling$]);
}
