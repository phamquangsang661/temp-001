import { HomeTitle } from "./common/HomeTitle";
import { ScrollInfo } from "./common/ScrollInfo";
import { SocialBenefitsCard } from "./socialBenefits/SocialBenefitsCard";
import SocialLogoExample from '/images/example/logo-example-social-benefits.png'

export function SocialBenefits() {

    return (
        <>
            <section
                className="social-benefits-container overflow-hidden flex flex-col md:flex-row gap-[47px]   h-fit md:!h-[1116px] mb-[90px]  md:justify-center md:mb-0  md:pr-0 md:pl-[70px]">
                <div className="pt-0  px-[32px] md:px-0 md:pt-[304px] flex flex-col gap-[79px] w-full md:w-fit">
                    <HomeTitle textClassName="text-black" className="hidden md:flex">
                        Social <span className="text-primary-light">Benefits</span>
                    </HomeTitle>
                    <div className="md:ml-[110px] flex flex-col gap-[37px]  md:w-[420px]">
                        <h5 className="text-typo-h5 text-black text-center md:text-left">
                            <span className="text-primary-light">Adapter</span> to each team member.
                        </h5>
                        <p className="text-typo-body text-black text-left hidden md:block ">
                            In unserem Unternehmen sind wir uns bewusst, dass jedes Teammitglied seine eigenen Bedürfnisse und Vorlieben hat, wenn es um die Leistungen geht, die es zu schätzen weiß.
                            <br />
                            Deshalb bieten wir eine Reihe von Sozialleistungen, die auf jeden Einzelnen zugeschnitten werden können. Ganz gleich, ob Sie sich für Sport, Kultur, Gesundheit oder etwas ganz anderes begeistern, wir haben für jeden etwas dabei.
                            <br />
                            Unser Ziel ist es, dass sich unser Team in allen Lebensbereichen unterstützt und wertgeschätzt fühlt, nicht nur bei der Arbeit.
                        </p>
                        <ScrollInfo className="hidden md:flex md:mt-[99px]  " />
                    </div>
                </div>
                {/* No hide scroll now */}
                <div className="social-benefits-cards flex flex-row md:flex-col overflow-x-auto hide-scroll-desktop scroll-custom sm:md:overflow-x-hidden   md:overflow-x-hidden md:overflow-y-auto h-fit md:h-[1026px] 
           pb-[94px]  md:py-[242px] pl-[32px] md:pl-[55px] pr-[32px] md:pr-[105px]  gap-[42px]  w-full  md:w-fit relative scroll-mx-8">
                    <SocialBenefitsCard title="Hybrides Arbeiten" imageUrl={SocialLogoExample}>
                        Da wir den Wert von Freizeit und Erholung für unsere Mitarbeiter anerkennen, investiert unser Unternehmen in verschiedene Unterhaltungsmöglichkeiten, die es den Teammitgliedern ermöglichen, sich während ihrer Freizeit zu entspannen, aufzutanken und abzuschalten.
                    </SocialBenefitsCard>
                    <SocialBenefitsCard title="Mensch im Zentrum" imageUrl={SocialLogoExample} >
                        Da wir den Wert von Freizeit und Erholung für unsere Mitarbeiter anerkennen, investiert unser Unternehmen in verschiedene Unterhaltungsmöglichkeiten, die es den Teammitgliedern ermöglichen, sich während ihrer Freizeit zu entspannen, aufzutanken und abzuschalten.
                    </SocialBenefitsCard>
                    <SocialBenefitsCard title="Starke Firmenkultur" imageUrl={SocialLogoExample}>
                        This is a brief explanation of the service with USP and an attractive product value for the client. This is a brief explanation of the service with USP.
                    </SocialBenefitsCard>
                    <SocialBenefitsCard title="Starke" imageUrl={SocialLogoExample}>
                        This is a brief explanation of the service with USP and an attractive product value for the client. This is a brief explanation of the service with USP.
                    </SocialBenefitsCard>
                    <SocialBenefitsCard title="Firmenkultur" imageUrl={SocialLogoExample}>
                        This is a brief explanation of the service with USP and an attractive product value for the client. This is a brief explanation of the service with USP.
                    </SocialBenefitsCard>
                </div>

                {/* Add hor scroll and add scroll block */}
                <ScrollInfo className="md:hidden !w-full" />
            </section>

        </>
    )
}