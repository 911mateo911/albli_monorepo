import { useState, useEffect } from 'react';
import { distinctUntilChanged } from 'rxjs/operators';
import { Observable } from 'rxjs';
import isEqual from 'lodash.isequal';

type useObservableType = {
    <T>(observable$: Observable<T>, dependencies: unknown[], initialValue: T): T;
};

export const useObservable: useObservableType = <T>(
    observable$: Observable<T>,
    dependencies: unknown[],
    initialValue: T
) => {
    const [state, setState] = useState<T>(initialValue);

    useEffect(() => {
        const subscription = observable$
            .pipe(distinctUntilChanged(isEqual))
            .subscribe(setState);
        return () => subscription.unsubscribe();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [...dependencies]);

    return state;
};
