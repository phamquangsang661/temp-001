import { Bubble2 } from "@components/vector";
import { ScrollInfo } from "./common/ScrollInfo";

export function Hero() {
    return (
        <>
            <section className="hero-banner flex flex-col items-center gap-1 w-full h-fit px-[5px] mx-auto  mt-[136px] md:mt-[83px]">
                <Bubble2 className="md:w-[760px] max-md:w-[365px]" textClassName="md:flex md:flex-col">
                    <div className="text-[56px] !font-semibold text-primary-contrast md:text-[100px] w-full flex flex-col items-center">
                        <div className="title-content color-primary-contrast drop-shadow-exl leading-none shadow-black md:ml-[-280px]">
                            Innovation
                        </div>
                        <div className="title-content md:block max-md:hidden color-primary-contrast drop-shadow-exl leading-[1.05em] ml-[280px]">
                            Consulted
                        </div>

                        <div className="title-content-mobile md:hidden color-primary-contrast drop-shadow-exl leading-[1.1em]">
                            Designed.
                        </div>
                    </div>
                    {/* content for desktop */}
                    <div className="content max-md:hidden font-semibold text-primary-contrast mt-[29px] text-center text-[24px] drop-shadow-xl leading-[32px]">
                        Wir sind eine 360° IT Beratung <br /> mit dem Fokus Public, Transport und
                        Finance.
                    </div>
                </Bubble2>

                {/* mobile div content */}
                <div className="title text-center font-[700] text-[21px] leading-[32px] tracking-[-0.5px] mt-[-38px] md:hidden">
                    <div className="text-center font-bold">We are a Consulting Group.</div>
                    <div className="text-center">
                        And this is how we do it: <br />
                        Centralized.
                    </div>
                </div>

                {/* scroll */}
                <ScrollInfo className="mb-[259px] mt-[109px] md:mt-0 md:mb-[236px]"></ScrollInfo>
            </section>

        </>
    );
}
