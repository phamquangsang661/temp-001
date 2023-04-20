import { HomeTitle } from "./common/HomeTitle";
import { ScrollInfo } from "./common/ScrollInfo";
import { DomainsCard } from "./domain/DomainsCard";
import ImgExample01 from "/images/example/imgexample01.jpg";
import { useHorizontalScroll } from "@hooks/index";

export function Domain() {
  const { elRef } = useHorizontalScroll<HTMLDivElement>({
    isOffsetItem: true,
    offset: -111,
    areaCheckOffset: 500,
    autoCenterItem: true
  })

  return (
    <>

      <section id="domain-container" className="domain flex flex-col gap-1 w-full justify-center h-fit md:min-h-screen mx-auto md:pl-[70px] max-md:pl-0">
        <HomeTitle textClassName="text-black" className="hidden md:flex">
          Domains
        </HomeTitle>

        <div className="flex w-full xl:px-[66px] lg:px-[13px] md:px-[33px] h-full items-center">
          <div ref={elRef} className="overscroll-auto scroll-custom pb-[84px] !scroll-px-[unset]  flex overflow-x-auto overflow-y-hidden md:gap-[84px] max-md:scroll-mx-8 scroll-mx-110p max-sm:gap-[24px] w-full flex-nowrap !snap-none">
            <DomainsCard
              title={"Offentclicher CVerkher"}
              imageUrl={ImgExample01}
              content="ICG revolutioniert den Verkehrssektor durch innovative IT-Lösungen für nachhaltige Mobilität. Wir gestalten die Zukunft der Mobilität nach den Bedürfnissen unserer Gesellschaft."
            />

            <DomainsCard
              title={"Offentclicher CVerkhsadadser"}
              imageUrl={ImgExample01}
              content="ICG revolutioniert den Verkehrssektor durch innovative IT-Lösungen für nachhaltige Mobilität. Wir gestalten die Zukunft der Mobilität nach den Bedürfnissen unserer Gesellschaft."
            />

            <DomainsCard
              title={"Offentclicher CVerkhsadadser"}
              imageUrl={ImgExample01}
              content="ICG revolutioniert den Verkehrssektor durch innovative IT-Lösungen für nachhaltige Mobilität. Wir gestalten die Zukunft der Mobilität nach den Bedürfnissen unserer Gesellschaft."
            />
          </div>
        </div>
      </section>
      <ScrollInfo className="my-10 md:mt-[163px] md:mb-[288px]" />
    </>
  );
}
