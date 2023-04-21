
export interface WhatWeDoCard {
    title: string;
    children: string;
    className?: string;
    imageUrl?: string;
}
export function WhatWeDoCard({
    title,
    children,
    className = "",
    imageUrl = ""
}: WhatWeDoCard) {
    return (
        <div
            className={`card scroll-mx-[25px] ${className}`}
        >
            <div className="image w-[calc(100vw-50px)] sm:w-[310px] max-w-[400px] flex justify-center overflow-hidden">
                <img src={imageUrl} alt="" className="image-mask w-[230px] h-full object-cover" />
            </div>

            <div className="pt-[26px] w-full items-center justify-center flex flex-col">
                <div className="text-[30px] leading-[32px] sm:w-[310px] max-w-[400px] text-center w-[calc(100vw-50px)] h-[64px] font-bold">
                    {title}
                </div>
                <div className="text-[16px] leading-[24px] sm:w-[310px] max-w-[400px] w-[calc(100vw-50px)] tracking-[0.15px] text-center pt-[42px]">
                    {children}
                </div>
            </div>
        </div>
    )
}