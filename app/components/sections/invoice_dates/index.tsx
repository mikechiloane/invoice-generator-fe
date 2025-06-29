import TextInput from "../../input/TextInputField/TextInput";
import { SectionTitle } from "../../SectionTitle";

interface InvoiceDatesSectionProps {
    onChange: (field: string, value: string) => void;
}

const InvoiceDatesSection = ({ onChange }: InvoiceDatesSectionProps) => {
    return (
        <div className="flex flex-col gap-4">
            <SectionTitle title='Invoice Dates' />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <TextInput
                    fieldName="invoiceDate"
                    title="Invoice Date"
                    placeholder="Enter invoice date"
                    isCalendarField={true}
                    onChange={onChange}
                />
                <TextInput
                    fieldName="dueDate"
                    title="Due Date"
                    placeholder="Enter due date"
                    isCalendarField={true}
                    onChange={onChange}
                />
            </div>
        </div>
    );
}

export { InvoiceDatesSection };