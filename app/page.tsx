"use client";

import { InvoiceForm } from "./components/form";

export default function Home() {
  return (
      <div className="flex flex-col mt-6 sm:mt-10 md:mt-18 min-h-screen h-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <InvoiceForm />
      </div>
  );
}
