import React, {FC, ReactNode} from 'react';
import './Button.css'

export type ButtonProps = {
    onClick(): void;
    children: ReactNode;
    variant?: 'primary' | 'success';
    isDisabled?: boolean;
}

export const Button: FC<ButtonProps> = ({ onClick, variant = "primary", isDisabled = false, children }) => {
    const className = `button button-${variant}`

    return <button onClick={onClick} className={className} disabled={isDisabled}>{children}</button>
}