import TrustedBy1 from '/images/example/bundeshaus-5.png'
import TrustedBy2 from '/images/example/trusted-by-2.png'
import TrustedBy3 from '/images/example/trusted-by-3.png'
import TrustedBy4 from '/images/example/trusted-by-4.png'
import TrustedBy5 from '/images/example/trusted-by-5.png'
import TrustedBy6 from '/images/example/trusted-by-6.png'
import { HomeMobileTitle } from './common/HomeMobileTitle'
import { ScrollInfo } from './common/ScrollInfo'

export function TrustedBy() {
    return (
        <>
            <section className="mb-[404px] md:mb-0">
                {/* Spacing */}
      

                <HomeMobileTitle className="md:hidden mt-20">Trusted by</HomeMobileTitle>

                <div className="hidden md:block mx-auto text-typo-h3 w-fit">
                    Unsere begeisterten Kunden
                </div>

                <div className="md:w-fit md:grid w-full mx-auto md:gap-x-[20px] md:gap-y-[22px] md:grid-cols-4 mt-[64px] flex flex-col 
            gap-y-[27px]">
                    <div className="w-[184px] ml-[32px] md:w-[200px] md:h-[132px] md:ml-0 px-[15px] pt-[37px] pb-[36px] 
                md:pt-[42px] rounded-[15px] shadow-[0_15px_46px_8px_rgba(38,38,38,0.08)] md:py-[42px] md:px-[23px]">
                        <img src={TrustedBy1} className={`w-[154px] h-[49px]`} />
                    </div>

                    <div className="w-[184px] md:w-[200px] md:h-[132px] md:ml-0 h-[122px] pt-[41px] pb-[33px] pl-[45px] mr-[32px]
                pr-[35px] rounded-[15px] shadow-[0_15px_46px_8px_rgba(38,38,38,0.08)] md:pt-[41px] md:pb-[43px] md:pr-[51px] ml-auto">
                        <img src={TrustedBy2} className={`w-[104px] h-[48px]`} />
                    </div>

                    <div className="w-[184px]   md:w-[200px] ml-[32px] md:h-[132px] md:ml-0 h-[122px] rounded-[15px] pt-[51px] 
                pb-[41px] pl-[48px] pr-[32px] shadow-[0_15px_46px_8px_rgba(38,38,38,0.08)]">
                        <img src={TrustedBy3} className={`w-[104px] h-[30px]`} />
                    </div>

                    <div className="w-[184px]   md:w-[200px] md:h-[132px] md:ml-0 h-[122px] py-[50px] px-[36px]
                rounded-[15px] shadow-[0_15px_46px_8px_rgba(38,38,38,0.08)] mr-[32px] ml-auto">
                        <img src={TrustedBy4} className={`w-[128px] h-[32px]`} />
                    </div>

                    <div className="w-[184px] ml-[32px] md:w-[200px] md:h-[132px] md:ml-0 h-[122px] pt-[37px] pb-[27px] pl-[48px]
                pr-[31px] md:py-[37px] md:pl-[48px] md:pr-[47px] rounded-[15px] shadow-[0_15px_46px_8px_rgba(38,38,38,0.08)]">
                        <img src={TrustedBy5} className={`w-[105px] h-[58px]`} />
                    </div>

                    <div className="w-[184px]  md:w-[200px] md:h-[132px] md:ml-0 h-[122px] py-[44px] px-[40px]
                rounded-[15px] shadow-[0_15px_46px_8px_rgba(38,38,38,0.08)] mr-[32px] ml-auto">
                        <img src={TrustedBy6} className={`w-[120px] h-[44 px]`} />
                    </div>

                    <div className="w-[184px] ml-[32px] h-[122px] md:w-[200px] md:h-[132px] md:ml-0 px-[15px] pt-[37px] pb-[36px] 
                md:pt-[42px] rounded-[15px] shadow-[0_15px_46px_8px_rgba(38,38,38,0.08)] md:py-[42px] md:px-[23px]">
                        <img src={TrustedBy1} className={`w-[154px] h-[49px]`} />
                    </div>

                    <div className="w-[184px]  md:w-[200px] md:h-[132px] md:ml-0 h-[122px] pt-[41px] pb-[33px] pl-[45px] pr-[35px] 
                rounded-[15px] shadow-[0_15px_46px_8px_rgba(38,38,38,0.08)] md:pt-[41px] md:pb-[43px] md:pr-[51px] mr-[32px] ml-auto">
                        <img src={TrustedBy2} className={`w-[104px] h-[48px]`} />
                    </div>
                </div>

               
            </section>
            <ScrollInfo className=" md:mt-[253px] md:mb-[159px] hidden md:flex" />
        </>
    )
}