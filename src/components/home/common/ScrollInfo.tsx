export interface ScrollInfo {
    className?: string;
}
export function ScrollInfo({ className }: ScrollInfo) {
    return <div className={`w-full font-normal text-[16px] my-[109px] md:my-[3px] flex flex-col items-center ${className}`}>
        <span className="leading-none">Scroll</span>
        <div className=" w-[1px] h-[63px] bg-gradient-to-b mt-3 from-primary-default to-primary-contrast"></div>
    </div>
}