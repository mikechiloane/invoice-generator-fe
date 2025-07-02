"use client";
import React, { useState } from "react";
import { rBold, rDemiBold, rMed, rReg } from "../../fonts";
import { useFormStore } from "@/app/context/FormContext";


export interface TextInputProps {
    onChange: (field: string, value: string) => void;
    placeholder?: string;
    disabled?: boolean;
    className?: string;
    type?: string;
    required?: boolean;
    title?: string;
    fieldName: string;
    error?: string;
    isCalendarField?: boolean;
}

const TextInput: React.FC<TextInputProps> = ({
    onChange,
    placeholder = "",
    disabled = false,
    className = "",
    type = "text",
    required = false,
    title,
    fieldName = "",
    error,
    isCalendarField = false
}) => {
    const fieldValue = useFormStore((state) => state.formData[fieldName]);
    const isLoading = useFormStore((state) => state.isLoading);
    
    // Ensure fieldValue is treated as a string for input components
    const displayValue = typeof fieldValue === 'string' || typeof fieldValue === 'number' 
        ? String(fieldValue) 
        : "";

    if (isCalendarField) {
        return (
            <div className={`flex flex-col gap-2 ${className}`}>
                {title && <span className={`${rDemiBold.className} text-sm sm:text-[14px] text-gray-600`}>
                    {title}
                </span>
                }
                <div className="relative w-full flex">
                    <input
                        className={`
                            ${rMed.className} font-semibold text-sm sm:text-[14px] font-r-reg 
                            border-2 ${error ? 'border-red-500' : 'border-gray-400'} 
                            rounded p-3 sm:p-2 pr-10 placeholder:text-slate-400 
                            w-full h-[48px] sm:h-[42px] box-border 
                            [&::-webkit-calendar-picker-indicator]:opacity-0 
                            [&::-webkit-inner-spin-button]:appearance-none 
                            touch-manipulation
                            disabled:opacity-50 disabled:cursor-not-allowed
                            transition-all duration-200 ease-in-out
                            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1
                        `}
                        value={displayValue || ''}
                        onChange={(e) => onChange(fieldName, e.target.value)}
                        placeholder={placeholder}
                        disabled={disabled || isLoading}
                        type="date"
                        name={fieldName}
                        required={required}
                        style={{ colorScheme: 'light' }}
                    />
                    <div
                        className="absolute right-0 top-0 bottom-0 w-10 flex items-center justify-center cursor-pointer"
                        onClick={() => {
                            const input = document.querySelector(`input[name="${fieldName}"]`) as HTMLInputElement;
                            if (input) input.showPicker();
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-gray-400" viewBox="0 0 16 16">
                            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                        </svg>
                    </div>
                </div>
                {error && (
                    <span className={`${rReg.className} text-xs text-red-500 mt-1`}>
                        {error}
                    </span>
                )}
            </div>
        );
    }

    return (
        <div className={`flex flex-col gap-2 ${className}`}>
            {title && <span className={`${rDemiBold.className} text-sm sm:text-[14px] text-gray-600`}>
                {title}
            </span>
            }
            <input
                className={`
                    ${rMed.className} font-semibold text-sm sm:text-[14px] font-r-reg 
                    border-2 ${error ? 'border-red-500 focus:border-red-500' : 'border-gray-400 focus:border-blue-500'} 
                    rounded p-3 sm:p-2 placeholder:text-slate-400
                    h-[48px] sm:h-[42px]
                    touch-manipulation
                    disabled:opacity-50 disabled:cursor-not-allowed
                    transition-all duration-200 ease-in-out
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1
                `}
                value={displayValue || ""}
                onChange={(e) => onChange(fieldName, e.target.value)}
                placeholder={placeholder}
                disabled={disabled || isLoading}
                type={type}
                required={required}
            />
            {error && (
                <span className={`${rReg.className} text-xs text-red-500 mt-1`}>
                    {error}
                </span>
            )}
        </div>
    );
};

export default TextInput;