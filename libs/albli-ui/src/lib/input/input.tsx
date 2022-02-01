import classNames from 'classnames';
import { FC, useState, useEffect, useRef } from 'react';
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
    error = false,
    required
}) => {
    const [hasFocus, setHasFocus] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<string>(value);
    const hasErroredBefore = useRef(error);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (!required) return;

        if (!error && inputValue.length) {
            hasErroredBefore.current = false;
            return;
        }

        hasErroredBefore.current = true;
    }, [error, required, inputValue])

    useEffect(() => {
        setInputValue(value);
    }, [value])

    const handlePlaceholderClick = () => {
        if (hasFocus || !inputRef.current) return;

        setHasFocus(true);
        inputRef.current.focus();
    }

    return (
        <div className={classNames(
            styles['input-wrapper'],
            className,
            (error || hasErroredBefore.current) && styles.input_error)} >
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
                onFocus={() => setHasFocus(true)}
                onBlur={() => setHasFocus(false)}
                value={inputValue}
                onChange={({ target }) => onChange(target.value)}
                name={name}
                id={id}
            />
        </div>
    )
}
