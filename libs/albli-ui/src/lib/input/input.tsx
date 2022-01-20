import classNames from 'classnames';
import { FC, useState, useEffect } from 'react';
import { InputProps } from './input.interface';
import styles from './input.module.scss';

export const Input: FC<InputProps> = ({
    name,
    onChange,
    value,
    id,
    className,
    type = 'text',
    placeholder
}) => {
    const [hasFocus, setHasFocus] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<string>(value);

    useEffect(() => {
        setInputValue(value)
    }, [value])

    return (
        <div className={classNames(styles['input-wrapper'], className)} >
            <span className={classNames(
                styles['input-placeholder'],
                {
                    [styles['input-placeholder_active']]: hasFocus || inputValue.length
                }
            )} >{placeholder}</span>
            <input
                className={classNames(
                    styles.input,
                    {
                        [styles.input_has_value]: inputValue.length
                    }
                )}
                type={type}
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
