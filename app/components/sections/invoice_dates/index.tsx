import TextInput from "../../input/TextInputField/TextInput";
import { SectionTitle } from "../../SectionTitle";


const InvoiceDatesSection = () => {
    return (
        <div className="flex flex-col gap-4">
            <SectionTitle title='Invoice Dates' />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <TextInput
                    title="Invoice Date"
                    placeholder="Enter invoice date"
                    value=""
                    onChange={() => { }}
                />
                <TextInput
                    title="Due Date"
                    placeholder="Enter due date"
                    value=""
                    onChange={() => { }}
                />
            </div>
        </div>
    );
}

export { InvoiceDatesSection };