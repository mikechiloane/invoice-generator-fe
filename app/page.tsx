"use client";

import { InvoiceForm } from "./components/form";

export default function Home() {
  return (
      <div className="flex flex-col mt-10 md:mt-18 min-h-screen h-full  ">
        <InvoiceForm />
      </div>
  );
}
