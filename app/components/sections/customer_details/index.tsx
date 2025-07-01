import { SectionTitle } from './../../SectionTitle';
import TextInput from "../../input/TextInputField/TextInput";

interface CustomerDetailsSectionProps {
    onChange: (field: string, value: string) => void;
}

const CustomerDetailsSection = ({ onChange }: CustomerDetailsSectionProps) => {
    return (
        <div className="flex flex-col gap-4 sm:gap-6">
            <SectionTitle title='Customer Details' />
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <TextInput
                    fieldName='customerName'
                    title="Customer Name"
                    placeholder="Enter customer name"
                    onChange={onChange}
                />
                <TextInput
                    fieldName='emailAddress'
                    title="Email Address"
                    placeholder="Enter email address"
                    onChange={onChange}
                />

                <TextInput
                    fieldName='streetAddress'
                    title="Street Address"
                    placeholder="Enter street address"
                    onChange={onChange}
                />

                <TextInput
                    fieldName='suburb'
                    title="Suburb"
                    placeholder="Enter suburb"
                    onChange={onChange}
                />
                
                <div className="flex w-full flex-col sm:flex-row gap-4 md:col-span-2">
                    <TextInput
                        fieldName='city'
                        title="City"
                        placeholder="Enter city"
                        className="flex-1"
                        onChange={onChange}
                    />

                    <TextInput
                        fieldName='postalCode'
                        title="Postal Code"
                        placeholder="Enter postal code"
                        className="w-full sm:w-40"
                        onChange={onChange}
                    />
                </div>

            </div>
        </div>
    );
}

export { CustomerDetailsSection };