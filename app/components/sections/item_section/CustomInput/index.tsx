import { rMed } from "@/app/components/fonts";
import { useState } from "react";


interface CustomInputProps {
    fieldName: string;
    placeholder: string;
    value?: string;
    align?: "left" | "right";
    type?: string;
    className?: string;
    isCalendarField?: boolean;
}

const CustomInput = ({ 
    fieldName, 
    placeholder, 
    value, 
    align = "left", 
    type = "text", 
    className = "",
    isCalendarField = false 
}: CustomInputProps) => {
    const { formData, updateFormValue } = useFormContext();
    const [dateValue, setDateValue] = useState<Date | null>(
        formData[fieldName] ? new Date(formData[fieldName]) : null
    );

    // If using react-datepicker, you would return this component for calendar fields
    if (isCalendarField) {
        return (
            <div className={`w-full ${className}`}>
                {/* Replace this comment with your date picker component
                <DatePicker
                    selected={dateValue}
                    onChange={(date: Date) => {
                        setDateValue(date);
                        updateFormValue(fieldName, date.toISOString().split('T')[0]);
                    }}
                    placeholderText={placeholder}
                    className={`w-full border-b text-[14px] font-semibold ${rMed.className} border-gray-300 focus:outline-none focus:border-blue-500 p-2 text-${align}`}
                />
                */}
                <p className="text-sm text-gray-500">
                    Please install a date picker library like react-datepicker
                </p>
                <input
                    type="date"
                    placeholder={placeholder}
                    value={value ?? formData[fieldName] ?? ""}
                    onChange={(e) => updateFormValue(fieldName, e.target.value)}
                    className={`w-full border-b text-[14px] font-semibold ${rMed.className} border-gray-300 focus:outline-none focus:border-blue-500 p-2 text-${align}`}
                />
            </div>
        );
    }

    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value ?? formData[fieldName] ?? ""}
            onChange={(e) => updateFormValue(fieldName, e.target.value)}
            className={`w-full border-b text-[14px] font-semibold ${rMed.className} border-gray-300 focus:outline-none focus:border-blue-500 p-2 text-${align} ${className}`}
        />
    );
};

export default CustomInput;
function useFormContext(): { formData: any; updateFormValue: any; } {
    throw new Error("Function not implemented.");
}

