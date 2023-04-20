import { Bubble1 } from "./Bubble1";
import { Bubble2 } from "./Bubble2";

export interface Logo1 {
    sizeDesktop?: number;
    sizeMobile?: number;
    textClassName?: string;
    desktopClassName?: string;
    mobileClassName?: string;
}
export function Logo1({
    textClassName = "",
    desktopClassName = "",
    mobileClassName = "",
    sizeDesktop = 340,
    sizeMobile = 240
}: Logo1) {
    return <>
        <div className="hidden sm:block">
            <Bubble1 size={sizeDesktop} className={desktopClassName}>
                <p className={`text-[120px] leading-[132px] tracking-[-1.65px] text-primary-contrast font-bold ${textClassName}`}>ICG</p>
            </Bubble1></div>
        <div className="block sm:hidden">
            <Bubble2 size={sizeMobile} className={mobileClassName}>
                <p className={`text-[95px] leading-[104.8px] tracking-[-1.31px] text-primary-contrast font-bold ${textClassName}`}>ICG</p>
            </Bubble2 >
        </div>
    </>
}