import { Totals, useFormStore } from "@/app/context/FormContext";


const TotalSection = () => {

    const totals: Totals = useFormStore((state) => state.formData.totals);

    return (
        <div className="flex h-full  w-full ">
            <div className="flex text-[14px] w-full h-full gap-4  justify-end">
                <div className="flex flex-col gap-y-2">
                    <p>Subtotal</p>
                    <p>Tax rate</p>
                    <p>Tax</p>
                    <p>Total</p>
                </div>
                <div className="flex flex-col gap-y-2">
                    <p className="">R{totals.subTotal.toFixed(2)}</p>
                    <p className="">{totals.taxRate}%</p>
                    <p className="">R{totals.tax.toFixed(2)}</p>
                    <p className="">R{totals.total.toFixed(2)}</p>
                </div>

            </div>
        </div>
    );
}


export { TotalSection };