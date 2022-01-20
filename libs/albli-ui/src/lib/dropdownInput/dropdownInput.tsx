import classNames from 'classnames';
import { FC, useState, useEffect } from 'react';
import { DropdownInputProps } from './dropdownInput.interface';
import { ReactComponent as DropdownArrowIcon } from '../icons/dropdown-arrow.svg';
import styles from './dropdownInput.module.scss';
import { useClickOutside } from '../hooks';

export const DropdownInput: FC<DropdownInputProps> = ({
    selectedValue,
    onChange,
    values,
    placeholder,
    className
}) => {
    const [selectedDropdownValue, setSelectedDropdownValue] = useState<string | null>(selectedValue);
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
    const ref = useClickOutside<HTMLDivElement>(() => setDropdownOpen(false));

    useEffect(() => {
        setSelectedDropdownValue(selectedValue);
    }, [selectedValue]);

    return (
        <div
            ref={ref}
            onClick={() => setDropdownOpen(isOpen => !isOpen)}
            className={classNames(styles.wrapper, className)} >
            {!selectedDropdownValue && <p className={styles.placeholder} >{placeholder}</p>}
            <DropdownArrowIcon className={classNames(
                styles['dropdown-arrow'],
                {
                    [styles['dropdown-arrow_open']]: dropdownOpen
                }
            )} />
            <div className={classNames(
                styles['dropdown-container'],
                {
                    [styles['dropdown-container_open']]: dropdownOpen
                }
            )} >
                {values.map(value => <p key={value} >{value}</p>)}
            </div>
        </div>
    )
}
