import classNames from 'classnames';
import { FC, useState, useEffect, SyntheticEvent } from 'react';
import { DropdownInputProps } from './dropdownInput.interface';
import { ReactComponent as DropdownArrowIcon } from '../icons/dropdown-arrow.svg';
import styles from './dropdownInput.module.scss';
import { useClickOutside } from '../hooks';

const {
    wrapper: cls_wrapper,
    placeholder: cls_placeholder,
    'dropdown-arrow': cls_dropdownArrow,
    'dropdown-arrow_open': cls_dropdownArrow_open,
    'dropdown-container': cls_dropdownContainer,
    'dropdown-container_open': cls_dropdownContainer_open,
    'selected-value': cls_selectedValue,
    'dropdown-values': cls_dropdownValues
} = styles;

// TODO: fix dropdown arrow weird rotation on fast click
export const DropdownInput: FC<DropdownInputProps> = ({
    selectedValue,
    onChange,
    values,
    placeholder,
    className,
    id
}) => {
    // saving state here to not rerender the whole form component
    // as we are using rxjs its better to isolate the rerender to the component itself rather than
    // saving the state on the form component and making input components stateless
    const [selectedDropdownValue, setSelectedDropdownValue] = useState<string | null>(selectedValue);
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
    // handle click outside of component to close the dropdown
    const ref = useClickOutside<HTMLDivElement>(() => setDropdownOpen(false));

    // change selectedValue if we are obliged to
    useEffect(() => {
        setSelectedDropdownValue(selectedValue);
    }, [selectedValue]);

    const handleOnChange = (event: SyntheticEvent, value: string) => {
        event.stopPropagation();
        setSelectedDropdownValue(value);
        onChange(value);
        setDropdownOpen(false);
    }

    return (
        <div
            id={id}
            ref={ref}
            onClick={() => setDropdownOpen(isOpen => !isOpen)}
            className={classNames(cls_wrapper, className)} >
            {!selectedDropdownValue && <p className={cls_placeholder} >{placeholder}</p>}
            <DropdownArrowIcon className={classNames(cls_dropdownArrow, {
                [cls_dropdownArrow_open]: dropdownOpen
            })} />
            <p className={cls_selectedValue} >{selectedDropdownValue}</p>
            <div className={classNames(cls_dropdownContainer, {
                [cls_dropdownContainer_open]: dropdownOpen
            })} >
                {values.map(value => (<p
                    key={value}
                    className={cls_dropdownValues}
                    onClick={(event) => handleOnChange(event, value)}
                >
                    {value}
                </p>))}
            </div>
        </div>
    )
}
