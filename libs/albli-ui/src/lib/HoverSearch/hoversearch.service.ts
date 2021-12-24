import { BehaviorSubject, distinctUntilChanged, debounceTime, tap, skip, skipWhile } from 'rxjs';
import { mockApiCall, auto_complete_dummy_response } from '@al-bli/al-bli-dummy-data';
import { AutoCompleteProduct } from '@al-bli/al-bli-data-types';

export default class HoverSearchService {

    hoverSearchInputValue = new BehaviorSubject<string>('');
    autoCompleteResults = new BehaviorSubject<AutoCompleteProduct[]>([]);
    autoCompleteLoading = new BehaviorSubject<boolean>(false);

    // since this is a singleton we will get one subscription i think?
    private shouldFetchData = this.hoverSearchInputValue.pipe(
        skip(1),
        skipWhile(() => this.autoCompleteLoading.getValue()),
        tap(() => {
            if (this.autoCompleteLoading.value) this.autoCompleteLoading.next(false);
        }),
        debounceTime(350),
        distinctUntilChanged(),
        // use switchMapTo
        tap((hoverInputValue) => {
            if (!hoverInputValue) return;

            this.getAutoCompleteResults(hoverInputValue);
        })
    ).subscribe();

    private static _lazy: HoverSearchService;

    static get instance(): HoverSearchService {
        if (!HoverSearchService._lazy) {
            HoverSearchService._lazy = new HoverSearchService;
        }

        return HoverSearchService._lazy;
    }

    getAutoCompleteResults(searchTerm: string): void {
        // call api here
        if (this.autoCompleteLoading.value) return;

        console.log(searchTerm);

        this.autoCompleteLoading.next(true);
        mockApiCall(() => {
            this.autoCompleteResults.next(auto_complete_dummy_response());
            this.autoCompleteLoading.next(false);
        }, 2000);
    }

    setHoverSearchInputValue(value: string): void {
        this.hoverSearchInputValue.next(value);
    }
}

export const hoverSearchService = HoverSearchService.instance;
