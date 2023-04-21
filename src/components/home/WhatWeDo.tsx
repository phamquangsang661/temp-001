import { HomeMobileTitle } from "./common/HomeMobileTitle";
import WhatWeDo1 from '/images/example/what-we-do-1.png'
import WhatWeDo2 from '/images/example/what-we-do-2.png'
import WhatWeDo3 from '/images/example/what-we-do-3.png'
import { HomeTitle } from "./common/HomeTitle";
import { WhatWeDoCard } from "./whatWeDo/WhatWeDoCard";
import { ScrollInfo } from "./common/ScrollInfo";

export function WhatWeDo() {
    return (
        <section className="mb-[213px] md:mb-0">
            <HomeMobileTitle className="md:hidden mt-20">What We <span className="text-primary-light">Do</span></HomeMobileTitle>

            <HomeTitle textClassName="text-black" className="hidden md:flex md:pl-[70px]">
                Was wir tun.
            </HomeTitle>

            <div className="card mt-[45px] h-full w-full">
                <div className="card-item flex flex-row md:gap-x-[75px] pb-[71px] gap-x-[40px] scroll-mx-8
                 overflow-x-auto overflow-y-hidden w-full md:justify-center hide-scroll-desktop scroll-custom md:px-0 px-[40px]">
                    <WhatWeDoCard title="Process Engineering" imageUrl={WhatWeDo1}>
                        This is a brief explanation of the service with USP and an attractive product value for it.
                    </WhatWeDoCard>

                    <WhatWeDoCard title="Business Analyse" imageUrl={WhatWeDo2}>
                        Als Experten im System Engineering entwickeln wir maßgeschneiderte Systeme für unsere Kunden, um deren
                        Anforderungen zu erfüllen.
                    </WhatWeDoCard>

                    <WhatWeDoCard title="DevOps Engineering" imageUrl={WhatWeDo3}>
                        Als DevOps Engineers optimieren wir die Zusammenarbeit zwischen Softwareentwicklung und IT-Betrieb für
                        schnelle und zuverlässige Software-Lieferungen.
                    </WhatWeDoCard>
                </div>
            </div>

            {/* scroll */}
            <ScrollInfo className="md:mt-[185px] md:mb-[154px] hidden md:flex"></ScrollInfo>
        </section>
    )
}