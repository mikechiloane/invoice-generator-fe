import React from "react";

interface SectionTitleProps {
    title: string;
}

export function SectionTitle({ title }: SectionTitleProps) {
    return <h2 className="text-[20px] font-r-bold">{title}</h2>;
}
