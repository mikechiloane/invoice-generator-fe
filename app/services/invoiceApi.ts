import { buildAddressLines, FormData } from '../context/FormContext';

export interface InvoicePayload {
    customerName: string;
    addressLines: string[];
    invoiceDates: {
        invoiceDate: string;
        invoiceDueByDate: string;
    };
    items: {
        itemName: string;
        quantity: string;
        unitPrice: string;
        itemId: string;
        description: string;
    }[];
    totalsAndTaxInfo: {
        subTotal: string;
        tax: string;
        taxRate: string;
        total: string;
    };
}

export class InvoiceApiService {
    private static readonly API_URL = 'https://mv7vubgi4i.execute-api.us-east-1.amazonaws.com/prod/api/invoice/generate';

    static async generateInvoice(payload: InvoicePayload): Promise<Blob> {
        const response = await fetch(this.API_URL, {
            method: 'POST',
            headers: {
                'Accept': 'application/pdf',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.blob();
    }

    static buildPayload(formData: FormData, addressLines: string[]): InvoicePayload {
    return {
        customerName: this.extractCustomerName(formData),
        addressLines: buildAddressLines(formData),
        invoiceDates: this.extractInvoiceDates(formData),
        items: this.extractItems(formData),
        totalsAndTaxInfo: this.extractTotalsAndTaxInfo(formData)
    };
}

private static extractCustomerName(formData: FormData): string {
    return String(formData.customerName || "");
}

private static extractInvoiceDates(formData: FormData): { invoiceDate: string; invoiceDueByDate: string } {
    return {
        invoiceDate: String(formData.invoiceDate || ""),
        invoiceDueByDate: String(formData.dueDate || "")
    };
}

private static extractItems(formData: FormData): any[] {
    return (formData.items || []).map((item: any) => ({
        itemName: String(item.itemName || ""),
        quantity: String(item.quantity || "0"),
        unitPrice: String(item.price || "0"),
        itemId: String(item.itemId || item.itemName || ""),
        description: String(item.description || "")
    }));
}

private static extractTotalsAndTaxInfo(formData: FormData): { subTotal: string; tax: string; taxRate: string; total: string } {
    return {
        subTotal: String(formData.totals?.subTotal?.toFixed(2) ?? "0.00"),
        tax: String(formData.totals?.tax?.toFixed(2) ?? "0.00"),
        taxRate: String(formData.totals?.taxRate ? `${formData.totals.taxRate}%` : "0%"),
        total: String(formData.totals?.total?.toFixed(2) ?? "0.00")
    };
}
}
