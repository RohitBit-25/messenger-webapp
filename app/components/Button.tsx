'use client';

import clsx from 'clsx'
interface ButtonProps {
    type?: 'button' | 'submit' | 'reset' | undefined;
    fullWidth?: boolean;
    children?: React.ReactNode;
    onClick?: () => void;
    secondary?: boolean;
    danger?: boolean;
    disabled?: boolean;
}
const Button: React.FC<ButtonProps> = ({
    type, fullWidth, children, onClick, secondary, danger,
    disabled
}) => {
    return (
        <button onClick={onClick}
            type={type}
            disabled={disabled}
            className={clsx(`
        flex
        justify-center
        rounded-full
        px-3
        py-2 
        text-sm 
        font-bold
        tracking-wide
        shadow-sm
        focus-visible:outline
        focus-visible:outline-2
        focus-visible:outline-offset-2
        transition-all
        duration-300
        `,
                disabled && "opacity-50 cursor-default",
                fullWidth && "w-full",
                secondary ? 'bg-volo-surface text-volo-text border border-volo-muted hover:bg-volo-surface/80' : 'text-white',
                danger && "bg-rose-500 hover:bg-rose-600 focus-visible:outline-rose-600",
                !secondary && !danger && "btn-volo"
            )} >
            {children}

        </button>
    )
}

export default Button;