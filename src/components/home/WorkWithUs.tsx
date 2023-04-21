import { Bubble1 } from "@components/vector";
import { HomeMobileTitle } from "./common/HomeMobileTitle";
import { Button, ButtonOutline } from "@components/common";
import { HomeTitle } from "./common/HomeTitle";
import { ScrollInfo } from "./common/ScrollInfo";


export function WorkWithUs() {
    return (
        <section>
            <HomeMobileTitle className="md:hidden mt-20 mb-[587px]">ICG <span className="text-primary-light">x</span> Career</HomeMobileTitle>

            {/* Bubbles */}
            <div className="w-full flex flex-col justify-center items-center md:relative">
                {/* Bubble Growth */}
                <div className="md:mt-[200px] md:absolute md:left-[90px] md:top-[200px]">
                    <Bubble1 size={423.34}>
                        <div className="w-[300.86px] h-[97.05px]
                        font-semibold text-primary-contrast tracking-[-0.91px] leading-[72.79px] rotate-[-8.43deg] 
                        text-[66.12px] pl-[27px]">
                            Growth
                        </div>
                    </Bubble1>
                </div>

                {/* Bubble Vibes */}
                <div className="mt-[96px] md:absolute">
                    <Bubble1 size={285} className="ml-[96px] md:absolute md:left-[250px] md:top-[370px]">
                        <div className="w-[276px] h-[89.03px]
                        font-semibold text-primary-contrast tracking-[-0.81px] leading-[64.62px] rotate-[7.22deg] 
                        text-[58.7px] pl-[46px]">
                            Vibes
                        </div>
                    </Bubble1>
                </div>

                {/* Bubble Vorzuge */}
                <div className="mt-[155.98px] md:absolute md:right-[-24px] top-[-200px]">
                    <Bubble1 size={384}>
                        <div className="w-[251.16px] h-[81.02px]
                        font-semibold text-primary-contrast tracking-[-0.76px] leading-[60.76px] rotate-[-5.25deg] 
                        text-[55.19px] pl-[2px]">
                            Vorzüge
                        </div>
                    </Bubble1>
                </div>
            </div>

            <div className="font-bold leading-[48px] text-[40px] ml-[39.5px] mr-[40.5px] text-center mt-[222px] md:hidden">
                Work <span className="text-primary-light">with</span> us
                <div className="mt-[11px] h-[3px] w-[184px] bg-primary-light mx-auto" />
            </div>

            <HomeTitle textClassName="text-black" className="hidden md:flex md:pl-[70px]">
                Arbeite <span className="text-primary-light">mit</span> uns.
            </HomeTitle>

            <div className="mt-[45px] font-bold text-[30px] leading-[37px] w-full justify-center flex flex-row items-center 
            gap-x-[7px] md:text-[45px] md:leading-[54.86px] md:mt-[138px]">
                <div className="h-[3px] bg-black w-[36px] md:hidden" />
                One for All.
            </div>

            <div className="mt-[8px] text-typo-body text-center w-[288px] mx-auto md:mt-[6px] md:leading-[32px] md:text-[24px]
             md:font-semibold md:w-[640px]">
                This is a brief explanation of the service with USP and an attractive product value for the client. This is a
                brief explanation of the service with USP and an attractive product.
            </div>

            <div className="w-full mt-[53px] md:mt-[25px] flex flex-col gap-y-[16px] md:flex-row md:gap-x-[32px] md:justify-center">
                {/* Button Zu allen Jobs */}
                <div className="w-fit h-fit mx-auto md:mx-0">
                    <Button className="py-[13.5px] px-[36px]"
                        textClassName="font-bold text-[17px] leading-[21px]" props={{}}>
                        Zu allen Jobs!
                    </Button>
                </div>

                {/* Button Mehr anzeigen! */}
                <div className="w-fit h-fit mx-auto md:mx-0">
                    <ButtonOutline className="py-[13.5px] px-[28px]"
                        textClassName="font-bold text-[17px] leading-[20.72px]" props={{}}>
                        Mehr anzeigen!
                    </ButtonOutline>
                </div>
            </div>

            {/* scroll */}
            <ScrollInfo className="mb-[109px] mt-[155px] md:mt-[264px] md:mb-0"></ScrollInfo>
        </section>
    )
}