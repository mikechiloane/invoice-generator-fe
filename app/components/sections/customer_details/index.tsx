import { SectionTitle } from './../../SectionTitle';
import TextInput from "../../input/TextInputField/TextInput";

interface CustomerDetailsSectionProps {
    onChange: (field: string, value: string) => void;
}

const CustomerDetailsSection = ({ onChange }: CustomerDetailsSectionProps) => {
    return (
        <div className="flex flex-col gap-4">
            <SectionTitle title='Customer Details' />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    fieldName='phoneNumber'
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
                <div className="flex w-full flex-col md:flex-row gap-4">
                    <TextInput
                        fieldName='city'
                        title="City"
                        placeholder="Enter city"
                        className="md:w-1/2"
                        onChange={onChange}
                    />

                    <TextInput
                        fieldName='postalCode'
                        title="Postal Code"
                        placeholder="Enter postal code"
                        className="md:w-1/3 w-[200px]"
                        onChange={onChange}
                    />
                </div>

            </div>
        </div>
    );
}

export { CustomerDetailsSection };