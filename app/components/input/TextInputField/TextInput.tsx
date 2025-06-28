"use client";
import React from "react";
import { rBold, rDemiBold, rMed, rReg } from "../../fonts";


export interface TextInputProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    disabled?: boolean;
    className?: string;
    type?: string;
    required?: boolean;
    title: string;
}

const TextInput: React.FC<TextInputProps> = ({
    value,
    onChange,
    placeholder = "",
    disabled = false,
    className = "",
    type = "text",
    required = false,
    title,
}) => {
    return (
        <div className={`flex flex-col gap-2 ${className}`}>
            <span className={`${rDemiBold.className} text-[14px] text-slate-700]`}>
                {title}
            </span>
            <input
                className={`${rMed.className} font-semibold text-[14px]  font-r-reg border-2 border-slate-600  rounded p-2 placeholder:text-slate-400`}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                disabled={disabled}
                type={type}
                required={required}
            />
        </div>
    );
};

export default TextInput;