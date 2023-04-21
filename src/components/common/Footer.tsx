import { Bubble2, Cursor, Logo2 } from "@components/vector";
import { ButtonOutline } from "./button/ButtonOutline";
export interface Footer {
}

const footerMenuData = [
    {
        title: "Home",
        link: "#",
    },
    {
        title: "Career",
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
]

export function Footer() {
    return (
        <footer className="bg-primary-default">
            <div className="md:flex absolute mt-[55px] ml-[114px] hidden">
                <Logo2 size={265}></Logo2>
            </div>
            <div className="h-[802px] w-[100% flex-col flex justify-around">
                <div className="flex-col justify-around">
                    <div className="flex text-center justify-center md:hidden">
                        <Logo2 size={140}></Logo2>
                    </div>
                    <p className="text-[40px] md:text-[60px] font-bold leading-[48px] text-center text-primary-contrast mt-[23px] md:mt-[288px]">Let’s Connect.</p>
                    <div className="xl:mx-[400px] mt-[11px] mx-[88px] md:w-auto h-0 border-solid border-[1px] border-primary-light md:mt-[40px]"></div>
                </div>
                <div className="md:hidden text-center">
                    <p className="text-[18.38px] font-semibold leading-[24.5px] text-center text-primary-contrast">
                        Looking for an exciting career?<br />
                        You’re One click away.
                    </p>
                    <ButtonOutline
                        className="w-[224px] h-[48px] mt-[14px] mb-[44px] px-[26px] py-[11.5px]"
                        textClassName="text-primary-contrast text-center !font-[500] !leading-[20.72px]"
                        props={{
                            onClick: () => console.log("Button clicked"),
                            disabled: true
                        }}>
                        Join the adventure!
                    </ButtonOutline>
                    <p className="text-[18.38px] font-semibold leading-[24.5px] text-center text-primary-contrast">Looking for a collaboration?<br />
                        We’re ready for it!
                    </p>
                    <ButtonOutline
                        className="w-[224px] h-[48px] mt-[14px] px-[26px] py-[11.5px]"
                        textClassName="text-primary-contrast text-center !font-[500] !leading-[20.72px]"
                        props={{
                            onClick: () => console.log("Button clicked"),
                            disabled: true
                        }}>
                        Contact us!
                    </ButtonOutline>
                </div>
                <div className="md:flex justify-center hidden">
                    <div className="flex-col mr-[106px] text-right">
                        <p className="text-[24px] font-semibold leading-[32px] text-primary-contrast text-right">
                            Spannenden Karriere gesucht ?<br />
                            Klicke hier! :)
                        </p>
                        <ButtonOutline
                            className="w-[224px] h-[48px] mt-[16px] mb-[44px] px-[26px] py-[11.5px]"
                            textClassName="text-primary-contrast text-center text-[17px] !font-[500] !leading-[20.72px]"
                            props={{
                                onClick: () => console.log("Button clicked"),
                                disabled: true
                            }}>
                            Join the adventure!
                        </ButtonOutline>
                    </div>
                    <div className="flex-col">
                        <p className="text-[24px] font-semibold leading-[32px] text-primary-contrast text-left">
                            Willst du zusammenarbeiten?<br />
                            Wir sind immer offen.
                        </p>
                        <ButtonOutline
                            className="w-[224px] h-[48px] mt-[16px] mb-[44px] px-[26px] py-[11.5px]"
                            textClassName="text-primary-contrast text-center text-[17px] !font-[500] !leading-[20.72px]"
                            props={{
                                onClick: () => console.log("Button clicked"),
                                disabled: true
                            }}>
                            Kontaktiere uns!
                        </ButtonOutline>
                    </div>
                </div>
                <div className="">
                    <div className="mx-[88px] w-auto h-0 border-solid border-[1px] border-primary-light mb-[28px] md:hidden"></div>
                    <ul className="grid grid-cols-4 text-primary-contrast gap-[23px] justify-items-center mb-[13px] w-fit mx-auto">
                        {footerMenuData.map(item => (
                            <li className="hover:text-primary-light text-[17px] font-[500] leading-[25px] w-full text-center" key={item.title}>
                                <a className="w-full text-center" href={item.link}>{item.title}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="text-primary-contrast text-center hover:text-primary-light text-[17px] font-[500] leading-[25px] mt-[13px] md:mt-[24px]">
                        <a href="">Office</a>
                    </div>
                </div>
            </div>
            <div className="md:flex justify-center hidden mt-[120.68px]">
                <svg width="1072" height="173" viewBox="0 0 1072 173" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M331.26 39.2611C652.841 -63.5776 970.246 44.759 1046.62 278.044C1122.99 511.306 1016.54 832.799 815.255 992.884C614.934 1152.47 297.529 1044.14 99.8738 754.106C-97.7536 464.092 8.71024 142.593 331.26 39.2611Z" fill="url(#paint0_linear_548_574)" />
                    <defs>
                        <linearGradient id="paint0_linear_548_574" x1="1080.48" y1="426.878" x2="29.9802" y2="644.96" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#C1121F" />
                            <stop offset="1" stopColor="#6C151C" />
                        </linearGradient>
                    </defs>
                    <path d="M1066.68 411.81C1107.34 746.977 941.358 1038.41 697.885 1069.64C454.436 1100.88 158.631 935.994 39.1667 708.237C-79.9944 481.526 85.9851 190.092 407.958 50.379C729.908 -89.3096 1025.71 75.5985 1066.68 411.81Z" fill="url(#paint0_linear_548_576)" />
                    <defs>
                        <linearGradient id="paint0_linear_548_576" x1="545.342" y1="1074.97" x2="528.282" y2="2.21074" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#C1121F" />
                            <stop offset="1" stopColor="#6C151C" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <div className="md:hidden flex justify-center">
                <svg width="360" height="61" viewBox="0 0 360 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M78.0519 18.0925C220.33 -27.4067 360.76 20.525 394.55 123.738C428.337 226.94 381.244 369.18 292.187 440.006C203.559 510.615 63.1282 462.683 -24.3211 334.363C-111.758 206.052 -64.6548 63.8101 78.0519 18.0925Z" fill="url(#paint0_linear_548_667)" />
                    <defs>
                        <linearGradient id="paint0_linear_548_667" x1="409.529" y1="189.587" x2="-55.2442" y2="286.074" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#C1121F" />
                            <stop offset="1" stopColor="#6C151C" />
                        </linearGradient>
                    </defs>
                    <path d="M401.655 182.114C419.644 330.403 346.209 459.343 238.489 473.162C130.779 486.981 -0.0948243 414.031 -52.9496 313.264C-105.67 212.959 -32.2357 84.019 110.216 22.2054C252.657 -39.5974 383.531 33.3634 401.655 182.114Z" fill="url(#paint0_linear_548_824)" />
                    <defs>
                        <linearGradient id="paint0_linear_548_824" x1="170.999" y1="475.518" x2="163.451" y2="0.89426" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#C1121F" />
                            <stop offset="1" stopColor="#6C151C" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </footer>
    )
}