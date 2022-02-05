import {
    BehaviorSubject,
    distinctUntilChanged,
    debounceTime,
    tap,
    skip,
    switchMap,
    of,
    delay,
    Observable
} from 'rxjs';
import { auto_complete_dummy_response } from '@al-bli/al-bli-dummy-data';
import { AutoCompleteProduct } from '@al-bli/al-bli-data-types';

export default class HoverSearchService {

    hoverSearchInputValue = new BehaviorSubject<string>('');
    autoCompleteLoading = new BehaviorSubject<boolean>(false);
    autoCompleteResults = this.hoverSearchInputValue.pipe(
        skip(1),
        tap(() => {
            if (this.autoCompleteLoading.value) this.autoCompleteLoading.next(false);
        }),
        debounceTime(350),
        distinctUntilChanged((prev, curr) => prev.trim() === curr.trim()),
        tap(() => this.autoCompleteLoading.next(true)),
        switchMap(this.getAutoCompleteResults),
        tap(() => this.autoCompleteLoading.next(false))
    );

    private static _lazy: HoverSearchService;

    static get instance(): HoverSearchService {
        if (!HoverSearchService._lazy) {
            HoverSearchService._lazy = new HoverSearchService();
        }

        return HoverSearchService._lazy;
    }

    getAutoCompleteResults(searchTerm: string): Observable<AutoCompleteProduct[]> {
        if (!searchTerm.length) return of([]);

        // return ajax here bro
        return of(auto_complete_dummy_response()).pipe(
            delay(2000)
        )
    }

    setHoverSearchInputValue(value: string): void {
        this.hoverSearchInputValue.next(value);
    }
}

export const hoverSearchService = HoverSearchService.instance;
