import { FC, useRef } from 'react';
import styles from './hoversearch.module.scss';
import classNames from 'classnames';
import { HoverSearchProps } from './hoversearch.interface';
import { ReactComponent as SearchIcon } from '@al-bli/icons/search.svg';
import { useObservable, useBehaviorSubject, useClickOutside, useBodyScrollLock } from '@al-bli/albli-ui';
import { hoverSearchService } from './hoversearch.service';
import { ReactComponent as AnimatedSearchIcon } from '@al-bli/icons/search-anim.svg';
import { AutoCompleteItem } from './components/autocompleteitem';

export const Hoversearch: FC<HoverSearchProps> = ({
  open,
  onClose
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const ref = useClickOutside<HTMLDivElement>(() => onClose());
  const inputValue = useBehaviorSubject(hoverSearchService.hoverSearchInputValue);
  const autoCompleteResults = useObservable(hoverSearchService.autoCompleteResults, [], []);
  const isLoading = useBehaviorSubject(hoverSearchService.autoCompleteLoading);

  useBodyScrollLock(open, () => {
    if (!inputRef.current) return;
    inputRef.current.focus();
  });

  return (
    <>
      {open && <div className={styles.backdrop} ></div>}
      <div
        ref={ref}
        className={classNames(
          styles.wrapper,
          open && styles.wrapper_open,
          {
            [styles.wrapper_populated]: autoCompleteResults.length >= 1 && !isLoading && open
          }
        )} >
        <div className={styles['search-wrapper']} >
          <SearchIcon className={styles['search-icon']} />
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={({ target }) => hoverSearchService.setHoverSearchInputValue(target.value)}
            placeholder='Kerko dhe gjej gjithcka ne al-Bli'
            className={styles['search-input']}
          />
        </div>
        <div className={classNames(
          styles['autoCompleteItems-wrapper'],
          {
            [styles['indent-autocomplete']]: autoCompleteResults.length >= 1 || isLoading
          }
        )} >
          {isLoading && <AnimatedSearchIcon className={styles['animated-search-icon']} />}
          {(autoCompleteResults.length >= 1 && !isLoading && open) && autoCompleteResults.map(item =>
            <AutoCompleteItem key={item.postId} {...item} />
          )}
        </div>
      </div>
    </>
  )
}
