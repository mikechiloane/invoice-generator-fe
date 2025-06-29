import { rBold } from "@/app/components/fonts";
import Image from "next/image";

interface MobileItemCardProps {
    itemName: string;
    quantity: string;
    price: string;
}

const MobileItemCard = ({ itemName, quantity, price }: MobileItemCardProps) => {
    return (
        <div className="flex bg-slate-200 justify-between md:hidden">
            <div>
                <div className="flex flex-col gap-1 p-4">
                    <span className="text-[14px] font-r-reg font-medium">{itemName}</span>
                    <span className="text-[12px] text-slate-700 font-r-bold">Quantity {quantity} x R{price}</span>
                    <span className={`text-[18px] font-bold text-[var(--secondary)] ${rBold.className}`}>R{Number(quantity) * Number(price)}</span>
                </div>
            </div>
            <div className="flex items-center justify-center p-4">
                <Image
                    src="/delete.svg"
                    alt="delete icon"
                    width={30}
                    height={50}
                />
            </div>
        </div>
    );
};

export default MobileItemCard;
