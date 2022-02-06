import classNames from 'classnames';
import { FC, useState, useEffect, useRef } from 'react';
import { testString } from '../utils';
import { InputProps } from './input.interface';
import styles from './input.module.scss';

const {
    'input-wrapper': cls_inputWrapper,
    'input': cls_input,
    'input_error': cls_inputError,
    'input_has_value': cls_inputHasValue,
    'input-placeholder': cls_inputPlaceholder,
    'input-placeholder_active': cls_inputPlaceholderActive,
    'input-placeholder_hidden': cls_inputPlaceholderHidden
} = styles;

export const Input: FC<InputProps> = ({
    name,
    onChange,
    value,
    id,
    className,
    type = 'text',
    placeholder,
    validateOn = 'change',
    pattern,
    required,
    onError = () => ({})
}) => {
    const [error, setError] = useState(false);
    const [hasFocus, setHasFocus] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<string>(value);
    const hasBeenFocused = useRef(false);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (!error) return;

        onError(name);
    }, [error, name, onError])

    const checkForError = (currentVal: string) => {
        if (pattern) setError(testString(currentVal, pattern));
    }

    const handlePlaceholderClick = () => {
        if (hasFocus || !inputRef.current) return;

        setHasFocus(true);
        inputRef.current.focus();
        hasBeenFocused.current = true;
    }

    const handleChange = (value: string) => {
        setInputValue(value);
        onChange(value);
        if (validateOn === 'change' || error) checkForError(value);
    }

    const handleFocus = () => {
        setHasFocus(true);
        hasBeenFocused.current = true;
    }

    const handleBlur = () => {
        setHasFocus(false);
        if (validateOn === 'blur') {
            checkForError(inputValue);
            return;
        }
        if (hasBeenFocused.current && required) checkForError(inputValue);
    }

    return (
        <div className={classNames(
            cls_inputWrapper,
            className,
            (error) && cls_inputError)} >
            <span
                onClick={handlePlaceholderClick}
                className={classNames(
                    cls_inputPlaceholder,
                    {
                        [cls_inputPlaceholderActive]: hasFocus,
                        [cls_inputPlaceholderHidden]: inputValue.length && !hasFocus
                    }
                )} >{placeholder}</span>
            <input
                className={classNames(
                    cls_input,
                    {
                        [cls_inputHasValue]: inputValue.length && hasFocus
                    }
                )}
                type={type}
                ref={inputRef}
                onFocus={handleFocus}
                onBlur={handleBlur}
                value={inputValue}
                onChange={({ target }) => handleChange(target.value)}
                name={name}
                id={id}
            />
        </div>
    )
}
