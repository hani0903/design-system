import React from 'react';

interface ITagButtonProps {
    children: string;
    onClick?: () => void;
    isChecked?: boolean;
}

export default function TagButton({ children, onClick, isChecked }: ITagButtonProps) {
    return (
        <button
            onClick={onClick}
            data-checked={isChecked}
            className={`h-[33px] px-2.5 rounded-tag-button border border-white text-sm font-medium ${isChecked ? 'bg-white text-primary' : 'bg-white/10 text-white'}`}
        >
            {children}
        </button>
    );
}
