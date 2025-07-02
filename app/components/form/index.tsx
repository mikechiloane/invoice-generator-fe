"use client";
import React from "react";
import { CustomerDetailsSection } from "../sections/customer_details";
import { InvoiceDatesSection } from "../sections/invoice_dates";
import { ItemSection } from "../sections/item_section";
import { useFormStore } from "@/app/context/FormContext";
import { TotalSection } from "../sections/total_section";
import Toast from "../ui/Toast";


const InvoiceForm = () => {
    const { updateFormValue, submitInvoice, isLoading, error, toast, hideToast } = useFormStore();
    const handleChange = (field: string, value: any) => {
        updateFormValue(field, value);
    };

    return (
        <div className="flex w-full h-full flex-col gap-4 px-4 sm:px-6 lg:px-8">
            <InvoiceFormTitle />
            {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md mb-4">
                    <p className="text-sm">{error}</p>
                </div>
            )}
            <InvoiceSectionsContainer>
                <CustomerDetailsSection onChange={handleChange} />
                <InvoiceDatesSection onChange={handleChange} />
                <ItemSection />
                <TotalSection />
                <SubmitButton onSubmit={submitInvoice} isLoading={isLoading} />
            </InvoiceSectionsContainer>
            
            {toast && (
                <Toast
                    message={toast.message}
                    type={toast.type}
                    isVisible={toast.isVisible}
                    onClose={hideToast}
                />
            )}
        </div>
    );
}


const InvoiceSectionsContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex  relative h-full flex-col gap-6 sm:gap-8">
            {children}
        </div>
    );
}

function InvoiceFormTitle() {
    return (
        <div className="flex mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-[2rem] font-bold text-gray-900 leading-tight">
                Invoice Generator
            </h1>
        </div>
    );
}

function SubmitButton({ onSubmit, isLoading }: { onSubmit: () => void; isLoading: boolean }) {
    return (
        <div className="flex justify-end mt-10 px-4 sm:px-0">
            <button 
                className={`
                    px-6 py-3 rounded-md font-medium transition-all duration-200 ease-in-out
                    min-w-[120px] h-[44px] flex items-center justify-center
                    ${isLoading 
                        ? 'bg-blue-400 cursor-not-allowed' 
                        : 'bg-blue-500 hover:bg-blue-600 active:bg-blue-700'
                    } 
                    text-white shadow-sm hover:shadow-md
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                    touch-manipulation
                `}
                onClick={() => onSubmit()}
                disabled={isLoading}
            >
                {isLoading ? (
                    <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Generating...
                    </>
                ) : (
                    'Submit Invoice'
                )}
            </button>
        </div>
    );
}
export { InvoiceForm };