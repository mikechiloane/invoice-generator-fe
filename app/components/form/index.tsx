import Item from "antd/es/list/Item";
import TextInput from "../input/TextInputField/TextInput"
import { CustomerDetailsSection } from "../sections/customer_details";
import { InvoiceDatesSection } from "../sections/invoice_dates";
import { ItemSection } from "../sections/item_section";


const InvoiceForm = () => {

    return (
        <div className="flex flex-col gap-4 ">
            <InvoiceFormTitle />
            <InvoiceSectionsContainer>
                <CustomerDetailsSection />
                <InvoiceDatesSection />
                <ItemSection />
            </InvoiceSectionsContainer>
        </div>
    );
}


const InvoiceSectionsContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col gap-8">
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