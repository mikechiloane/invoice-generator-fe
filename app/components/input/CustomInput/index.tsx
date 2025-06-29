import { rMed } from "@/app/components/fonts";
import { useFormStore } from "@/app/context/FormContext";

interface CustomInputProps {
    fieldName: string;
    placeholder: string;
    value?: string;
    align?: "left" | "right";
    type?: string;
    className?: string;
}

const CustomInput = ({ fieldName, placeholder, value, align = "left", type = "text", className = "" }: CustomInputProps) => {
    const { updateFormValue } = useFormStore();
    const fieldValue = useFormStore((state) => state.formData[fieldName]);

    return (
        <input
            value={fieldValue}
            type={type}
            placeholder={placeholder}
            onChange={(e) => updateFormValue(fieldName, e.target.value)}
            className={`w-full border-b text-[14px] font-semibold ${rMed.className} border-gray-300 focus:outline-none focus:border-blue-500 p-2 text-${align} ${className}`}
        />
    );
};

export default CustomInput;
