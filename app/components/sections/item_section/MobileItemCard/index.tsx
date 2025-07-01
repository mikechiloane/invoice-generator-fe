import { rBold } from "@/app/components/fonts";
import { useFormStore } from "@/app/context/FormContext";
import Image from "next/image";

interface MobileItemCardProps {
    itemName: string;
    quantity: number;
    price: number;
}

const MobileItemCard = ({ itemName, quantity, price }: MobileItemCardProps) => {
    const { removeItem } = useFormStore();
    return (
        <div className="flex bg-slate-50 justify-between md:hidden rounded-lg border border-gray-200 shadow-sm">
            <div className="flex-1">
                <div className="flex flex-col gap-2 p-4">
                    <span className="text-[15px] font-medium text-gray-900 leading-tight">{itemName}</span>
                    <span className="text-[13px] text-gray-600 font-medium">
                        Quantity {quantity} × R{price}
                    </span>
                    <span className={`text-[18px] font-bold text-blue-600 ${rBold.className}`}>
                        R{Number(quantity) * Number(price)}
                    </span>
                </div>
            </div>
            <div className="flex items-center justify-center p-4">
                <button
                    onClick={() => removeItem(itemName)}
                    className="p-2 rounded-full hover:bg-red-50 transition-colors duration-200 touch-manipulation"
                    aria-label={`Remove ${itemName}`}
                >
                    <Image
                        src="/delete.svg"
                        alt="delete icon"
                        width={24}
                        height={24}
                        className="text-red-500"
                    />
                </button>
            </div>
        </div>
    );
};

export default MobileItemCard;
