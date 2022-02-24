import { debounceTime, fromEvent } from 'rxjs';

interface LocationsWithPersistedScroll {
  pathName: string;
  scrollPosition: number;
}

export class PersistedScroll {

  private static _lazy: PersistedScroll;
  private locationsToPersistScroll: LocationsWithPersistedScroll[] = [];

  static get instance(): PersistedScroll {
    if (!PersistedScroll._lazy) {
      PersistedScroll._lazy = new PersistedScroll();
    }

    return PersistedScroll._lazy;
  }

  private sessionStoreScrollSetter(pathName: string) {
    if (!window) return;

    fromEvent(window, 'scroll').pipe(
      debounceTime(500)
    ).subscribe(() => {
      if (window.location.pathname !== pathName) return;

      window.sessionStorage.setItem(pathName, window.scrollY.toString());
    });
  }

  addLocation(pathName: string): void {
    if (!window) return;

    this.locationsToPersistScroll = Array.from(new Set([...this.locationsToPersistScroll, { pathName, scrollPosition: 0 }]));

    const isPathnamePresent = window.sessionStorage.getItem(pathName);

    if (isPathnamePresent) return;

    this.sessionStoreScrollSetter(pathName);
  }

  persistScroll(): void {
    if (!window) return;

    const currentLocation = window.location.pathname;

    const previousScrollLocation = window.sessionStorage.getItem(currentLocation);

    if (!previousScrollLocation) return;

    window.scrollBy(0, parseInt(previousScrollLocation));
  }
}

export const PersistedScrollService = PersistedScroll.instance;
