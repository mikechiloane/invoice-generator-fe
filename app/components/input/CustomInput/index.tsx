import { rMed } from "@/app/components/fonts";
import { useFormStore } from "@/app/context/FormContext";

interface CustomInputProps {
    fieldName: string;
    placeholder: string;
    value?: string;
    align?: "left" | "right";
    type?: string;
    className?: string;
    disabled?: boolean;
    error?: string;
}

const CustomInput = ({ 
    fieldName, 
    placeholder, 
    value, 
    align = "left", 
    type = "text", 
    className = "",
    disabled = false,
    error
}: CustomInputProps) => {
    const { updateFormValue } = useFormStore();
    const fieldValue = useFormStore((state) => state.formData[fieldName]);
    const isLoading = useFormStore((state) => state.isLoading);
    
    // Ensure fieldValue is treated as a string for input components
    const displayValue = typeof fieldValue === 'string' || typeof fieldValue === 'number' 
        ? String(fieldValue) 
        : "";

    return (
        <div className="w-full">
            <input
                value={displayValue || ""}
                type={type}
                placeholder={placeholder}
                onChange={(e) => updateFormValue(fieldName, e.target.value)}
                disabled={disabled || isLoading}
                className={`
                    w-full border-b text-[14px] font-semibold ${rMed.className} 
                    ${error ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-blue-500'} 
                    focus:outline-none p-2 text-${align} 
                    transition-all duration-200 ease-in-out
                    disabled:opacity-50 disabled:cursor-not-allowed
                    sm:text-[16px] md:text-[14px]
                    touch-manipulation
                    ${className}
                `}
            />
            {error && (
                <span className="text-xs text-red-500 mt-1 block">
                    {error}
                </span>
            )}
        </div>
    );
};

export default CustomInput;
