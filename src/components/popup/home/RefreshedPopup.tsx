import { Button } from "@components/common";
import { Logo2 } from "@components/vector";


export interface RefreshedPopup {
    isOpen: boolean;
    onClose: () => void
}

export function RefreshedPopup({ isOpen, onClose }: RefreshedPopup) {

    return (
        <>
            {isOpen && <div
                className="w-screen h-screen min-h-full popup-active flex flex-row justify-center items-center text-center fixed top-0 bottom-0 right-0 left-0 z-[1000] overscroll-none ">
                <div onClick={onClose} className=" bg-[rgb(0,0,0,0.5)] w-full h-full absolute top-0 left-0 z-[0]"></div>
                <div className="z-[1] mx-5 md:mx-0 w-[640px] md:h-[416.65px] relative bg-[url('/images/example/background_refreshedpopup2.png')] bg-no-repeat bg-cover rounded-[33.2474px] shadow-[0_15px_46px_8px_rgba(38,38,38,0.08)]">
                    <div className="flex justify-center items-center absolute bg-primary-contrast rounded-[22.5806px] shadow-[0_11.2983px_34.6237px_6.02151px_rgba(38,38,38,0.15)] top-[-11%] md:top-[-22%] right-[17.2%] py-[21.83px] p-0 md:px-[33.12px] md:h-[169.35px] w-[66%] h-[90px] md:w-[420px]">
                        <Logo2 size={400} textFillColor="black" className="hidden md:block" ></Logo2>
                        <Logo2 size={200} textFillColor="black" className="block md:hidden my-3" ></Logo2>
                    </div>
                    <div className="flex h-[100%] flex-col items-center  ">
                        <div className="absolute top-0 right-0 mt-[20px] mr-[21px] cursor-pointer" onClick={onClose}>
                            <svg className="px-0 py-0" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="black" fillOpacity="0.56" />
                            </svg>
                        </div>
                        <p className="text-primary-light mt-[65px] md:mt-[124px] font-bold text-[30px] md:text-[48.76px] leading-[53.2px] mb-[9px]">Refreshed!</p>
                        <p className=" text-[#000000] md:h-[120px] font-normal text-center mx-[32px] md:mx-[83px] text-typo-body mb-6 md:mb-0">Wir sind stolz darauf, unser brandneues Rebranding zu präsentieren
                            , das unseren Fokus auf zukunftsorientierte IT-Lösungen und kundenorientierte Dienstleistungen
                            unterstreicht. Taucht ein in unsere neue Welt der digitalen Möglichkeiten!</p>
                        <Button className=" py-[13.5px] px-[36px] !bg-primary-light mb-[16px] md:mt-[31px] md:mb-[32px]"
                            textClassName=" font-bold text-[17px] leading-[21px]" props={{}}>
                            Mehr erfahren
                        </Button>
                    </div>
                </div>
            </div>}
        </>
    )
}