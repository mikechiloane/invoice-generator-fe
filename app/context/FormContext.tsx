import { create } from 'zustand';
import { InvoiceApiService } from '../services/invoiceApi';
import { PdfHandler } from '../utils/pdfHandler';

export interface FormData {
    [key: string]: any;
    itemName: string, quantity: number, price: number;
    customerName: string;
    addressLines: {
        emailAddress: string;
        streetAddress: string;
        suburb: string;
        city: string;
        postalCode: string;
    };
    invoiceDate: string;
    dueDate: string;
    items: Item[];
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
    quantity: number;
    price: number;
}


interface FormState {
    formData: FormData;
    isLoading: boolean;
    error: string | null;
    toast: {
        message: string;
        type: 'success' | 'error' | 'info';
        isVisible: boolean;
    } | null;
    setFormData: (data: FormData) => void;
    updateFormValue: (field: string, value: any) => void;
    resetForm: () => void;
    addItem: (item: Item) => void;
    resetItemFormData: () => void;
    removeItem: (name: string) => void;
    updateTotals: () => void;
    submitInvoice: () => Promise<Response | void>;
    setLoading: (loading: boolean) => void;
    setError: (error: string | null) => void;
    showToast: (message: string, type: 'success' | 'error' | 'info') => void;
    hideToast: () => void;
}

export const useFormStore = create<FormState>((set, get) => ({
    formData: {
        itemName: "",
        price: 0,
        quantity: 0,
        customerName: '',
        addressLines: {
            emailAddress: '',
            streetAddress: '',
            suburb: '',
            city: '',
            postalCode: ''
        },
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
    isLoading: false,
    error: null,
    toast: null,

    setFormData: (data) => set({ formData: data }),

    updateFormValue: (field, value) => set((state) => {
        return ({
            formData: { ...state.formData, [field]: value }
        })
    }),

    updateTotals: () => set((state) => {
        const items = state.formData.items;
        const subTotal = items.reduce((acc, item) => acc + (Number(item.quantity) * Number(item.price)), 0);
        const taxRate = Number(state.formData.totals.taxRate) || 0;
        const tax = subTotal * (taxRate / 100);
        const total = subTotal + tax;
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
            itemName: "",
            quantity: 0,
            price: 0
        }
    })),

    resetForm: () => set(() => ({
        formData: {
            itemName: "",
            quantity: 0,
            price: 0,

            customerName: '',
            addressLines: {
                emailAddress: '',
                streetAddress: '',
                suburb: '',
                city: '',
                postalCode: ''
            },
            invoiceDate: '',
            dueDate: '',
            items: [],
            totals: {
                subTotal: 0,
                taxRate: 15,
                tax: 0,
                total: 0
            }
        }
    })),

    submitInvoice: async () => {
        const { formData } = get();
        const addressLines = buildAddressLines(formData);

        set({ isLoading: true, error: null });

        try {
            const payload = InvoiceApiService.buildPayload(formData, addressLines);
            const blob = await InvoiceApiService.generateInvoice(payload);
            PdfHandler.openPdf(blob);
            set({ isLoading: false });
            set({ 
                toast: { 
                    message: 'Invoice generated successfully!', 
                    type: 'success', 
                    isVisible: true 
                } 
            });
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Failed to generate invoice. Please try again.';
            set({ 
                isLoading: false, 
                error: errorMessage,
                toast: { 
                    message: errorMessage, 
                    type: 'error', 
                    isVisible: true 
                } 
            });
        }
    },

    setLoading: (loading: boolean) => set({ isLoading: loading }),
    
    setError: (error: string | null) => set({ error }),

    showToast: (message: string, type: 'success' | 'error' | 'info') => {
        set({ 
            toast: { 
                message, 
                type, 
                isVisible: true 
            } 
        });
    },

    hideToast: () => {
        set({ 
            toast: null 
        });
    },
}));


export const buildAddressLines = (addressLines: FormData): string[] => {
    const lines: string[] = [];
    if (addressLines.streetAddress) {
        lines.push(addressLines.streetAddress);
    }
    if (addressLines.suburb) {
        lines.push(addressLines.suburb);
    }
    if (addressLines.city) {
        lines.push(addressLines.city);
    }
    if (addressLines.postalCode) {
        lines.push(addressLines.postalCode);
    }
    return lines;
}