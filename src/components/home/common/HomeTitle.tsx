import { Cursor } from "@components/vector";
import { ReactNode } from "react";

export interface HomeTitle {
    children: ReactNode,
    className?: string
    textClassName?: string;
}
export function HomeTitle({ children, className = "", textClassName = "" }: HomeTitle) {
    return <div className={`flex flex-row gap-4 items-center ${className} `}>
        <Cursor />
        <h3 className={`text-typo-h3 ${textClassName}`}>{children}</h3>
    </div >
}