import classNames from 'classnames';
import { FC, useState, useEffect, useRef } from 'react';
import { testString } from '../publishPage/config';
import { InputProps } from './input.interface';
import styles from './input.module.scss';

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
            styles['input-wrapper'],
            className,
            (error) && styles.input_error)} >
            <span
                onClick={handlePlaceholderClick}
                className={classNames(
                    styles['input-placeholder'],
                    {
                        [styles['input-placeholder_active']]: hasFocus,
                        [styles['input-placeholder_hidden']]: inputValue.length && !hasFocus
                    }
                )} >{placeholder}</span>
            <input
                className={classNames(
                    styles.input,
                    {
                        [styles.input_has_value]: inputValue.length && hasFocus
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
