import Image from "next/image";
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';
import { useState } from 'react';
import TextInput from "@/app/components/input/TextInputField/TextInput";
import { useFormStore } from "@/app/context/FormContext";

const AddItemForm = ({ onClose }: { onClose: () => void }) => {

    const { addItem, resetItemFormData, formData, setFormData } = useFormStore();
    const [errors, setErrors] = useState<{ itemName?: string; quantity?: string; price?: string }>({});

    const validateForm = () => {
        const newErrors: { itemName?: string; quantity?: string; price?: string } = {};
        let isValid = true;

        if (!formData.itemName || formData.itemName.trim() === '') {
            newErrors.itemName = 'Item name is required';
            isValid = false;
        }

        if (!formData.quantity || formData.quantity <= 0) {
            newErrors.quantity = 'Quantity must be greater than 0';
            isValid = false;
        }

        if (!formData.price || formData.price <= 0) {
            newErrors.price = 'Price must be greater than 0';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }
        
        const { itemName, quantity, price } = formData;
        addItem({ itemName, quantity, price });
        resetItemFormData();
        onClose();
    }

    const handleClose = () => {
        resetItemFormData();
        setErrors({});
        onClose();
    }


    return (
        <div className="form-container">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Add New Item</h2>

            </div>

            <div className="space-y-4">

                <TextInput
                    fieldName="itemName"
                    onChange={(field, value) => setFormData({ ...formData, [field]: value })}
                    title="Item Name"
                    placeholder="Enter item name"
                    error={errors.itemName}
                />
                <TextInput
                    fieldName="quantity"
                    onChange={(field, value) => setFormData({ ...formData, [field]: value })}
                    title="Quantity"
                    placeholder="Enter quantity"
                    type="number"
                    error={errors.quantity}
                />
                <TextInput
                    fieldName="price"
                    onChange={(field, value) => setFormData({ ...formData, [field]: value })}
                    title="Price"
                    placeholder="Enter price"
                    type="number"
                    error={errors.price}
                />

                <div className="flex justify-end pt-4">
                    <button
                        type="button"
                        className="mr-2 px-4 py-2 border border-gray-400 rounded-md text-sm font-medium ]"
                        onClick={handleClose}
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSubmit}
                        className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[var(--secondary)]"
                    >
                        Add Item
                    </button>
                </div>
            </div>
        </div>
    );
};



const AddItemMobile = () => {
    const [open, setOpen] = useState(false);

    const handleClose = () => setOpen(false);

    return (
        <>
            <div className="flex gap-2 items-center cursor-pointer" onClick={() => setOpen(true)}>
                <Image src="/add.svg" alt="add icon" width={30} height={50} />
                <p className="text-[var(--secondary)] text-sm">Add Item</p>
            </div>

            <Popup
                open={open}
                closeOnDocumentClick
                onClose={handleClose}
                className="full-screen-popup"
                overlayStyle={{
                    background: 'rgba(0, 0, 0, 0.7)',
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 1000
                }}
                contentStyle={{
                    width: '90%',
                    maxWidth: '500px',
                    background: 'white',
                    padding: '20px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                    margin: '0',
                    border: 'none',
                    position: 'relative'
                }}
            >
                <AddItemForm onClose={handleClose} />
            </Popup>
        </>
    );
};

export default AddItemMobile;
