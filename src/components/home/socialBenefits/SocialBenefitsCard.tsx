
export interface SocialBenefitsCard {
    title: string;
    children: string;
    className?: string;
    typeName?: string;
    imageUrl?: string;
}
export function SocialBenefitsCard({
    title,
    children,
    className = "",
    typeName = "entertainment",
    imageUrl = ""
}: SocialBenefitsCard) {
    return <div
        className={`
        pt-[34px] md:pt-[35px] pl-[22px] md:pl-[26px]  pr-[23px] md:pr-[25px] pb-[34px] md:pb-10 flex flex-col md:flex-row 
        gap-[29px] bg-primary-contrast rounded-[15px]   md:h-[293px] w-min  md:min-w-[570px] md:w-min
    shadow-[0px_15px_46px_8px_rgba(38,38,38,0.08)] max-md:scroll-mx-[32px]  ${className}
    `}>
        <div className="flex flex-row gap-[6px] w-max">
            {/* Example circle */}
            {/* <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="35" cy="35" r="35" fill="#FF303E" />
            </svg> */}
            {/* Change image here */}
            <div className="w-[70px] h-[70px]">
                <img src={imageUrl} alt="logo" className="w-[70px] h-[70px]" />
            </div>
            <div className="md:hidden">
                <div className="relative h-[24px]">
                    <p className="text-typo-overline absolute ">
                        {typeName}
                    </p>
                </div>

                <h5 className="text-typo-h5 -light w-full text-primary-light ">
                    {title}
                </h5>
            </div>

        </div>

        <div className="flex flex-col gap-6">
            <h5 className="text-typo-h5 text-primary-light hidden md:block whitespace-nowrap">
                {title}
            </h5>
            <p className="text-typo-body text-black text-center min-w-[243px] md:min-w-0 md:text-left md:text-ellipsis overflow-hidden">
                {children}
            </p>
        </div>
    </div>
}