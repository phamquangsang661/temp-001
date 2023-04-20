import { Button, ButtonOutline } from "@components/common";
import { Logo1 } from "@components/vector";
import { ScrollInfo } from "./common/ScrollInfo";


export function Interested() {
    return (
        <section className="">
            <div className="flex justify-center">
                <Logo1 sizeDesktop={496.34} desktopClassName="" sizeMobile={325.64} mobileClassName="flex"></Logo1>
            </div>
            <div className="hidden md:flex w-full max-w-[100%] flex-col items-center">
                <p className="mx-[180px] text-center text-typo-h3 md:mt-[-30px]">
                    Interessiert uns kennenzulernen?<br />
                    Bei einem Kaffi oder Bier?<br />
                    Wir empfangen dich gerne!
                </p>
        
                <ButtonOutline className="w-[280.33px] h-[80px] py-[22.5px] mt-[33px] px-[28px] mb-[252px]"
                    textClassName="font-bold text-[28.33px] leading-[34.54px]" >
                    Bewerb dich!
                </ButtonOutline>
            </div>

            <div className="flex-col flex items-center md:hidden mx-[32px] ">
                <p className="text-center text-[23px] leading-[32px] tracking-[-0.5px] font-bold md:text-typo-h3 max-w-[296px] ">
                    Interessiert? <br />
                    Wir freuen uns immer darauf, neue Talente kennenzulernen!
                </p>
                <Button
                    className="w-[224px] h-[48px] mt-[20px] mb-[105.39px] py-[13.5px] md-[22.5px]"
                    textClassName="text-primary-contrast text-center font-bold"
                    props={{
                        onClick: () => console.log("Button clicked"),
                        disabled: true
                    }}>
                    Bewerb dich!
                </Button>
            </div>
            <ScrollInfo className="md:hidden !my-0" />
        </section>
    )
}