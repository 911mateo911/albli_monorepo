import { FC } from 'react'
import { ChipProps } from './chip.interface'

export const Chip: FC<ChipProps> = ({
    icon,
    text,
    wrapperClassName
}) => {
    return (
        <span className={wrapperClassName} >
            {icon}
            {text}
        </span>
    )
}
