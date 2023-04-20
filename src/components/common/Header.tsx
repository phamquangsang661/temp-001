import { Logo2 } from "@components/vector"
import { useState } from "react"

export interface Header {

}

const navMenuData = [
    {
        title: "dienstleistungen",
        link: "#",
    },
    {
        title: "karriere",
        link: "#",
    },
    {
        title: "Jobs",
        link: "#",
    },
    {
        title: "About",
        link: "#",
    },
    {
        title: "Kontakt",
        link: "#",
    },
]

export function Header({ }: Header) {
    let [open, setopen] = useState(false)
    return (
        <header className="fixed w-full justify-center shadow-[0_2px_4px_-1px_rgba(0,0,0,0.2)] bg-primary-contrast z-[999] md:flex">

            <div className="hidden max-w-[1440px] h-[69px] px-180 py-13 sm:gap-[200px] lg:gap-[490px] justify-between flex-row items-center md:flex">
                <a className="flex" href="/" title="logo">
                    <Logo2 size={130} textFillColor="black" className=""></Logo2>
                </a>
                <div className="">
                    <ul className="flex items-center gap-x-[24px]">
                        {navMenuData.map(item => (
                            <li key={item.title}>
                                <a className="flex text-[13px] font-[500] leading-[19.5px] text-center tracking-[0.15px] uppercase" href={item.link}>{item.title}</a>
                            </li>
                        ))}
                    </ul>

                </div>
            </div>

            <div className="bt-button-1 w-[42.26px] h-[43px] absolute top-[16.37px] right-[37.74px] hover:opacity-75 md:hidden" onClick={() => setopen(!open)}>
                <svg className="" width="45" height="46" viewBox="0 0 45 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path d="M0.685376 27.6711L0.685396 27.6713C1.40045 34.5561 4.71236 39.7834 9.52751 42.587C14.342 45.3902 20.589 45.7294 27.0946 42.9809C33.5634 40.2492 38.5269 35.9408 41.2961 31.1198C44.0677 26.2945 44.6484 20.9325 42.2833 16.1722C39.9512 11.4688 35.8484 7.40116 31.1203 4.64783C26.394 1.89552 20.998 0.430858 16.0614 0.994502C11.0603 1.5655 6.85557 4.85847 4.09137 9.67114C1.32671 14.4846 -0.0204282 20.8496 0.685376 27.6711Z" fill="#C1121F" stroke="#C1121F" />
                        {!open && (
                            <>
                                <line x1="12" y1="23" x2="30" y2="23" stroke="#FFFFFF" strokeWidth="2" />
                                <line x1="12" y1="28" x2="30" y2="28" stroke="#FFFFFF" strokeWidth="2" />
                            </>
                        )}
                        {open && (
                            <>
                                <line x1="12" y1="20" x2="25" y2="33" stroke="#FFFFFF" strokeWidth="2" />
                                <line x1="12" y1="33" x2="25" y2="20" stroke="#FFFFFF" strokeWidth="2" />
                            </>
                        )}
                    </g>
                </svg>
            </div>
        </header >
    )
}