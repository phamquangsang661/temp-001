import { ReactNode } from "react";

export interface HomeMobileTitle {
    children: ReactNode,
    className?: string
    textClassName?: string;
}
export function HomeMobileTitle({ children, className = "", textClassName = "" }: HomeMobileTitle) {
    return <div className={`flex flex-col gap-[11px] justify-center items-center ${className} `}>
        <h3 className={`text-[40px] leading-[48px] font-bold ${textClassName}`}>{children}</h3>
        <div className="bg-primary-light h-[3px] w-[184px]"></div>
    </div >
}