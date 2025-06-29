"use client";
import React from "react";
import { CustomerDetailsSection } from "../sections/customer_details";
import { InvoiceDatesSection } from "../sections/invoice_dates";
import { ItemSection } from "../sections/item_section";
import { useFormStore } from "@/app/context/FormContext";
import { TotalSection } from "../sections/total_section";


const InvoiceForm = () => {
    const { updateFormValue } = useFormStore();
    const handleChange = (field: string, value: any) => {
        updateFormValue(field, value);
    };

    return (
        <div className="flex w-full  h-full flex-col gap-4 ">
            <InvoiceFormTitle />
            <InvoiceSectionsContainer>
                <CustomerDetailsSection onChange={handleChange} />
                <InvoiceDatesSection onChange={handleChange} />
                <ItemSection />
                <TotalSection />
            </InvoiceSectionsContainer>
        </div>
    );
}


const InvoiceSectionsContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex overflow-hidden relative h-full flex-col gap-8 ">
            {children}
        </div>
    );
}

function InvoiceFormTitle({ }) {
    return (<div className="flex mb-8  md:mb-8 ">
        <p className="text-3xl md:text-[2rem]">Invoice Generator</p>
    </div>);
}
export { InvoiceForm };