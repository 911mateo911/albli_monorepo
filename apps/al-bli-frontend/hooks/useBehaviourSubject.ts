import { useObservable } from "./useObservable";
import { BehaviorSubject } from "rxjs";

export const useBehaviorSubject = <T>(subject$: BehaviorSubject<T>): T => {
    return useObservable(subject$, [subject$], subject$.getValue());
}
