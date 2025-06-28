import { SectionTitle } from './../../SectionTitle';
import TextInput from "../../input/TextInputField/TextInput";


const CustomerDetailsSection = () => {
    return (
        <div className="flex flex-col gap-4">
            <SectionTitle title='Customer Details' />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <TextInput
                    title="Customer Name"
                    placeholder="Enter customer name"
                    value=""
                    onChange={() => { }}
                />
                <TextInput
                    title="Email Address"
                    placeholder="Enter email address"
                    value=""
                    onChange={() => { }}
                />

                <TextInput
                    title="Street Address"
                    placeholder="Enter street address"
                    value=""
                    onChange={() => { }}
                />

                <TextInput
                    title="Suburb"
                    placeholder="Enter suburb"
                    value=""
                    onChange={() => { }}
                />
                <div className="flex w-full flex-col md:flex-row gap-4">
                    <TextInput
                        title="City"
                        placeholder="Enter city"
                        value=""
                        className="md:w-1/2"
                        onChange={() => { }}
                    />

                    <TextInput
                        title="Postal Code"
                        placeholder="Enter postal code"
                        value=""
                        className="md:w-1/3 w-[200px]"
                        onChange={() => { }}
                    />
                </div>

            </div>
        </div>
    );
}

export { CustomerDetailsSection };