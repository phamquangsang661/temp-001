import { ReactNode } from "react"

export interface FocusPointTag {
    children: ReactNode;
    isSelected?: boolean;
    href?: string;
    onClick?: () => void
}
export function FocusPointTag({ children, isSelected = false, href = "#", onClick = () => { } }: FocusPointTag) {
    return <div
        onClick={onClick}
        className={`w-full relative 
    before:content-[""] 
    before:block
    before:absolute 
    before:bottom-[-2px]
    before:left-0 
    before:h-[3px] 
    before:bg-primary-light
    before:
    before:w-0
    before:hover:w-full
    before:duration-[1000ms]
    before:transition-all

    `}>
        <a href={href} className="text-typo-h5 cursor-pointer">{children}</a>
        {/* <div className="absolute bottom-0 left-0 w-full flex items-center justify-center">
            <div className="w-full h-[3px] bg-primary-light"></div>
        </div> */}
    </div>

}