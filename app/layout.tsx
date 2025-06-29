import type { Metadata } from "next";
import "./globals.css";
import { rBold, rDemiBold, rMed, rReg } from "./components/fonts";
import { Header } from "./components/header";
import 'reactjs-popup/dist/index.css';



export const metadata: Metadata = {
  title: "Recceda Invoice Generator",
  description: "Generate invoices with ease using Recceda's Invoice Generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rReg.className} ${rMed.className} ${rBold.className} ${rDemiBold.className}h-full w-screen antialiased`}
      >
        <div className="max-w-4xl mx-auto px-4 py-8 h-full">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
