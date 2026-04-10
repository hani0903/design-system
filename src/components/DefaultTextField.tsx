import type React from 'react';
import ErrorMessage from './ErrorMessage';
import IconButton from './IconButton';
import { useState } from 'react';

interface IDefaultTextFieldProps {
    id: string;
    errorMessage: string;
    iconPath: string;
    onIconClick: React.MouseEventHandler<HTMLButtonElement>;
    placeholder: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    value: string;
    iconAlt: string;
    isError: boolean;
}

export default function DefaultTextField({
    id,
    errorMessage,
    iconPath,
    onIconClick,
    placeholder,
    onChange,
    value,
    iconAlt,
    isError,
}: IDefaultTextFieldProps) {
    const [isFocused, setIsFocused] = useState(false);
    const borderColor = isFocused
        ? 'border-secondary'
        : !value
          ? 'border-mono300'
          : isError
            ? 'border-error'
            : 'border-primary';

    return (
        <div className="relative text-field">
            <div
                onBlur={() => setIsFocused(false)}
                onFocus={() => setIsFocused(true)}
                className={`text-primary border-b ${borderColor}`}
            >
                <input id={id} onChange={onChange} value={value} placeholder={placeholder} type="text" />
                {value.length > 0 && <IconButton onClick={onIconClick} alt={iconAlt} iconPath={iconPath} />}
            </div>
            {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </div>
    );
}
