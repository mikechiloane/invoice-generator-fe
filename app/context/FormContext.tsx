import { create } from 'zustand';

export interface FormData {
    [key: string]: any;
    invoiceDate?: string;
    dueDate?: string;
    items: Item[] | [];
    totals: {
        subTotal: string;
        taxRate: string;
        tax: string;
        total: string;
    };
}

export interface Item {
    itemName: string;
    quantity: string;
    price: string;
}


interface FormState {
    formData: FormData;
    setFormData: (data: FormData) => void;
    updateFormValue: (field: string, value: any) => void;
    resetForm: () => void;
    addItem: (item: Item) => void;
    resetItemFormData: () => void;
    removeItem: (name: string) => void;
}

export const useFormStore = create<FormState>((set) => ({
    formData: {
        invoiceDate: '',
        dueDate: '',
        items: [],
        totals: {
            subTotal: '0',
            taxRate: '0',
            tax: '0',
            total: '0'
        }
    },

    setFormData: (data) => set({ formData: data }),

    updateFormValue: (field, value) => set((state) => {
        console.log(`Updating field: ${field} with value: ${JSON.stringify(state.formData)}`);
        return ({
            formData: { ...state.formData, [field]: value }
        })
    }),

    

    addItem: (item: Item) => set((state) => ({
        formData: {
            ...state.formData,
            items: [...state.formData.items, item]
        }
    })),

    removeItem: (name: string) => set((state) => {
        const updatedItems = state.formData.items.filter(item => item.itemName !== name);
        return {
            formData: {
                ...state.formData,
                items: updatedItems
            }
        };
    }),

    resetItemFormData: () => set((state) => ({
        formData: {
            ...state.formData,
            itemName: "", quantity: "", price: ''
        }
    })),

    resetForm: () => set(() => ({
        formData: {
            invoiceDate: '',
            dueDate: '',
            items: [],
            totals: {
                subTotal: '0',
                taxRate: '0',
                tax: '0',
                total: '0'
            }
        }

    }))
}));
