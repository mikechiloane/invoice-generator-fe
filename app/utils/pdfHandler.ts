export class PdfHandler {
    static openPdf(blob: Blob): void {

        const pdfBlob = new Blob([blob], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(pdfBlob);

        const newWindow = window.open(url, '_blank');
        if (!newWindow || newWindow.closed) {
            window.location.href = url;
        }
        
        setTimeout(() => window.URL.revokeObjectURL(url), 3000);
    }

    static downloadPdf(blob: Blob, filename?: string): void {
        const pdfBlob = new Blob([blob], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(pdfBlob);
        
        const link = document.createElement('a');
        link.href = url;
        link.download = filename || `invoice-${new Date().toISOString().split('T')[0]}.pdf`;
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        setTimeout(() => window.URL.revokeObjectURL(url), 1000);
    }
}
