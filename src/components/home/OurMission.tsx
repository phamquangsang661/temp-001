import { Bubble2 } from "@components/vector";
import { ScrollInfo } from "./common/ScrollInfo";


export function OurMission() {
    return (
        <section className="w-full relative h-fit flex items-center justify-center text-center mx-auto flex-col mb-0 md:mb-[255px]">
            <div className="w-fit h-fit flex justify-center ">
                <Bubble2 size={824} className="md:w-[760px]  opacity-20 hidden md:block">
                </Bubble2>
                <Bubble2 size={350} className=" w-[365px] opacity-20 block md:hidden ">
                </Bubble2>
                <div className="absolute left-0 top-[-10px] w-full h-full justify-center items-center  md:flex hidden">
                    <div className=" h-fit w-[1110px]">
                        <p className="text-center text-typo-h3">Unsere Mission</p>
                        <p className="mt-[10px] mb-[64px] text-center text-typo-h2 text-primary-main ">
                            Innovationen für Menschen schaffen durch massgeschneiderte Beratungen und IT-Lösungen.
                        </p>
                        <ScrollInfo className="my-0" />
                    </div>

                </div>
                <div className="absolute left-0 top-[61px] md:hidden">
                    <p className="text-center font-bold text-typo-h3">Our Mission</p>
                    <p className="mx-[32px] mt-[10px] text-center font-bold text-[23px] leading-[32px] tracking-[-0.5px] text-[#C1121F]">
                        We innovate for humans,
                        with customized solutions that integrate data and engineering.
                    </p>
                </div>
            </div>
            <ScrollInfo className="mt-[96px] mb-[161px] flex md:hidden" />
        </section>
    );
}
