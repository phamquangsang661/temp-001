import { ReactNode } from "react";

export interface FocusPointCard {
    title: string;
    children: ReactNode;
    imageUrl?: string;
    className?: string;
}
export function FocusPointCard({
    title,
    children,
    imageUrl,
    className
}: FocusPointCard) {
    return <div
        className={`flex flex-col scroll-mx-[32px] md:scroll-mx-[41px] shadow-[0px_15px_46px_8px_rgba(38,38,38,0.08)] h-fit rounded-[34px]  min-w-[286.39px] overflow-hidden ${className}`}>
        <div className="h-[211.62px] w-full ">
            <img src={imageUrl} alt="image" className="w-full object-cover h-full" />
        </div>
        <div className="flex flex-col gap-[7.5px] pt-[10.91px] pb-[19px] px-[13px] ">
            <h4 className="text-typo-h4 p-[5.46px] pb-0">{title}</h4>
            <p className="p-[5.46px] text-[12px] pr-0  text-primary-default">{children}</p>
        </div>
    </div>
}