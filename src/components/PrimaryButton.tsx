import React from 'react';

type PrimaryButtonTheme = 'dark' | 'light' | 'social' | 'text';

interface IPrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    theme?: PrimaryButtonTheme;
    children: React.ReactNode;
    isDisabled?: boolean;
}

const dark = 'bg-primary text-white';
const light = 'bg-white text-primary';
const social = 'bg-social text-white';
const text = 'bg-transparent text-white';
const disabledStyle = 'disabled:bg-mono100 disabled:text-mono200 cursor-not-allowed';

const color: Record<PrimaryButtonTheme, string> = {
    dark,
    light,
    social,
    text,
};

export default function PrimaryButton({ children, theme, isDisabled = false, ...props }: IPrimaryButtonProps) {
    return (
        <button
            disabled={isDisabled}
            className={`cursor-pointer w-full h-[59px] rounded-primary-button ${color[theme || 'dark']} ${disabledStyle}`}
            {...props}
        >
            {children}
        </button>
    );
}
