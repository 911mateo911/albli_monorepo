import { BehaviorSubject, distinctUntilChanged, debounceTime, tap, skip } from 'rxjs';

type AutoCompleteResponse = { name: string }

export default class HoverSearchService {

    hoverSearchInputValue = new BehaviorSubject<string>('');
    autoCompleteResults = new BehaviorSubject<AutoCompleteResponse[]>([]);
    autoCompleteLoading = new BehaviorSubject<boolean>(false);

    // since this is a singleton we will get one subscription i think?
    private shouldFetchData = this.hoverSearchInputValue.pipe(
        skip(1),
        debounceTime(350),
        distinctUntilChanged(),
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

        this.autoCompleteLoading.next(true);
        setTimeout(() => {
            this.autoCompleteResults.next([
                {
                    name: 'mateo' + searchTerm
                }
            ]);
            this.autoCompleteLoading.next(false);
        }, 2000);
    }

    setHoverSearchInputValue(value: string): void {
        this.hoverSearchInputValue.next(value);
    }
}

export const hoverSearchService = HoverSearchService.instance;
