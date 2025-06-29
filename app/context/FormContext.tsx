import { create } from 'zustand';

export interface FormData {
    [key: string]: any;
    invoiceDate?: string;
    dueDate?: string;
    items: Item[] | [];
    totals: Totals;
}

export interface Totals {
    subTotal: number;
    taxRate: number;
    tax: number;
    total: number;
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
    updateTotals: () => void;
}

export const useFormStore = create<FormState>((set) => ({
    formData: {
        invoiceDate: '',
        dueDate: '',
        items: [],
        totals: {
            subTotal: 0,
            taxRate: 15,
            tax: 0,
            total: 0
        }
    },

    setFormData: (data) => set({ formData: data }),

    updateFormValue: (field, value) => set((state) => {
        return ({
            formData: { ...state.formData, [field]: value }
        })
    }),

    updateTotals: () => set((state) => {
        console.log('Updating totals...');
        const items = state.formData.items;
        const subTotal = items.reduce((acc, item) => acc + (Number(item.quantity) * Number(item.price)), 0);
        const taxRate = Number(state.formData.totals.taxRate) || 0;
        const tax = subTotal * (taxRate / 100);
        const total = subTotal + tax;
        console.log(`Calculating totals: subTotal=${subTotal}, taxRate=${taxRate}, tax=${tax}, total=${total}`);
        return {
            formData: {
                ...state.formData,
                totals: {
                    subTotal,
                    taxRate,
                    tax,
                    total
                }
            }
        };
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
                subTotal: 0,
                taxRate: 0,
                tax: 15,
                total: 0
            }
        }

    }))
}));