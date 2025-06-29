import { Totals, useFormStore } from "@/app/context/FormContext";


const TotalSection = () => {

    const totals: Totals = useFormStore((state) => state.formData.totals);

    return (
        <div className="flex h-full  w-full ">
            <div className="flex text-[14px] w-full h-full font-semibold gap-4  justify-end">
                <div>
                    <p>Subtotal</p>
                    <p>Tax rate</p>
                    <p>Tax</p>
                    <p>Total</p>
                </div>
                <div className="">
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