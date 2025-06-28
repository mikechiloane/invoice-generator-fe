import Image from "next/image";
import { rBold, rDemiBold } from "../../fonts";
import TextInput from "../../input/TextInputField/TextInput";
import { SectionTitle } from "../../SectionTitle";

const ItemSection = () => {
    return (
        <div className="flex flex-col gap-4">
            <SectionTitle title='Items' />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <MobileItemCard />
                <AddItemMobile />
            </div>
        </div>
    );
}


const MobileItemCard = () => {
    return (
        <div className="flex bg-slate-200 justify-between md:hidden">
            <div>
                <div className="flex flex-col gap-1 p-4">
                    <span className="text-[14px] font-r-reg font-medium">Then name of the Item here</span>
                    <span className="text-[12px] text-slate-700 font-r-bold">Quantity 3 x 400</span>
                    <span className={`text-[18px] font-bold text-[var(--secondary)] ${rBold.className}`}>R300</span>
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
}



function AddItemMobile({ }) {
    return (<div className="flex gap-2 items-center">
        <Image src="/add.svg" alt="add icon" width={30} height={50} />
        <p className="text-[var(--secondary)] text-sm">Add Item</p>
    </div>);
}
export { ItemSection };