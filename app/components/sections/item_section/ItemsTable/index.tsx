import Image from "next/image";
import CustomInput from "../../../input/CustomInput";
import { rDemiBold } from "@/app/components/fonts";
import { Item, useFormStore } from "@/app/context/FormContext";
import Popup from "reactjs-popup";

function ItemsTable() {
    const items: Item[] = useFormStore((state) => state.formData.items);
    const { removeItem } = useFormStore();
    return (
        <div className="hidden md:block">
            <table className="w-full">
                <thead>
                    <tr className="bg-slate-200 rounded-t-lg">
                        <th className={`text-left p-2 px-4 ${rDemiBold.className} rounded-tl-lg`}>Item Name</th>
                        <th className={`text-left w-[150px] p-2 ${rDemiBold.className}`}>Quantity</th>
                        <th className={`text-left w-[150px] p-2 ${rDemiBold.className}`}>Unit Price</th>
                        <th className={`text-left w-[150px] p-2 ${rDemiBold.className}`}>Total</th>
                        <th className={`text-right p-2 px-4 ${rDemiBold.className} rounded-tr-lg`}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map((item, index) => (
                            <tr key={index} className="border-b text-left">
                                <td className="p-2 px-4 text-slate-700">
                                    <p className="text-[14px] text-left font-semibold">
                                        {item.itemName}
                                    </p>
                                </td>
                                <td className="p-2 text-right">
                                    <p className="text-[14px] text-left font-semibold">
                                        {item.quantity}
                                    </p>
                                </td>
                                <td className="p-2 text-right">
                                    <p className="text-[14px] text-left font-semibold">
                                        {item.price}
                                    </p>
                                </td>
                                <td className="p-2 text-right">
                                    <p className="text-[14px] text-left font-semibold">
                                        R{Number(item.quantity) * Number(item.price)}
                                    </p>
                                </td>
                                <td className="p-2 px-8">
                                    <div onClick={()=>removeItem(item.itemName)} className="flex justify-end">
                                        <Image
                                            src="/delete.svg"
                                            alt="delete icon"
                                            width={30}
                                            height={50}
                                            className="text-red-500 cursor-pointer"
                                        />
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                
                </tbody>
            </table>
        </div>
    );
}

export default ItemsTable;
