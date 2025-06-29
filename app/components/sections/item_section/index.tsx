import { SectionTitle } from "../../SectionTitle";
import MobileItemCard from "./MobileItemCard";
import AddItemMobile from "./AddItemPopupCard";
import ItemsTable from "./ItemsTable";
import { useFormStore } from "@/app/context/FormContext";

const ItemSection = () => {
    const { formData } = useFormStore();
    const items = formData.items;

    return (
        <div className="flex flex-col gap-4">
            <SectionTitle title='Items' />
            <div className="flex flex-col  gap-4 md:gap-8">
                <div className="flex flex-col md:hidden gap-y-4">
                    {items.map((item, index) => (
                        <MobileItemCard
                            key={index}
                            itemName={item.itemName}
                            quantity={item.quantity}
                            price={item.price}
                        />
                    ))}
                </div>
                <ItemsTable />
                <AddItemMobile />
            </div>
        </div>
    );
}


export { ItemSection };