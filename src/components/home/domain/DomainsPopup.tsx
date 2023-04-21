import { CloseIcon } from "@components/vector/Close";
import { DomainsPopupCard } from "./DomainsPopupCard";
import { HomeTitle } from "../common/HomeTitle";
import { HomeMobileTitle } from "../common/HomeMobileTitle";
import { useFixedPopup } from "@hooks/index";
export interface DomainPopup {
  isOpen: boolean;
  onClose: () => void;
}
export const DomainPopup = ({ isOpen, onClose }: DomainPopup) => {
  return (
    <>
      {isOpen && (
        <div
          className={`h-screen min-h-full popup-active flex flex-row justify-center items-center text-center fixed top-0 bottom-0 right-0 left-0 z-[1000] overscroll-none `}
        >
          <div
            onClick={onClose}
            className=" bg-[rgb(0,0,0,0.5)] w-full h-full absolute top-0 left-0 z-[0]"
          ></div>
          
          <div className="z-[1] bg-primary-contrast min-h-[529px] w-[calc(100%-30px)] box-border rounded-[30px] md:flex md:flex-col md:justify-center md:items-center overflow-hidden xl:items-start xl:max-w-[1400px] xl:max-h-[691px]">
            <div
              className="close flex justify-end w-full px-[15px] py-[15px] md:px-[27px] md:py-[21px]"
              onClick={onClose}
            >
              <CloseIcon className="w-[14px] h-[14px]" />
            </div>

            {/* title - mobile */}
            <HomeMobileTitle className="text-center md:hidden font-bold text-[30px] px-[53px] leading-[36.57px]">
              <h1>Öffentlicher Verkehr</h1>
            </HomeMobileTitle>

            {/* title - desktop */}
            <HomeTitle className="max-md:hidden text-[44px] leading-[48px] font-bold xl:pl-[50px] xl:mb-[65px]">
              <h1>Öffentlicher Verkehr</h1>
            </HomeTitle>

            {/* divider */}
            <div className="flex xl:gap-[20px] w-full justify-center">
              <div className="divider mx-[17px] h-[1px] bg-primary-main mt-[17px] xl:mt-0 mb-[50px] md:min-w-[640px] md:m-[29px] xl:mx-0"></div>
              <div className="divider mx-[17px] h-[1px] bg-primary-main mt-[17px] xl:mt-0 mb-[50px] md:min-w-[640px] md:m-[29px] max-xl:hidden xl:mx-0"></div>
            </div>

            {/* card */}
            <div className="flex flex-row w-full overflow-x-auto scroll-custom  hide-scroll-desktop !overscroll-auto scroll-mx-8 gap-[50px] mb-[50px] md:mb-0 pb-[40px] md:max-h-[691px] box-border md:overflow-visible md:flex-col md:items-center md:overflow-y-auto xl:grid xl:grid-cols-2 xl:px-[50px] xl:gap-[55px]">
              <DomainsPopupCard
                title={"ACCUS Lorem lorem axus asus mira Totem."}
                content={
                  "service description in brief. ACCUS Lorem lorem axus asus mira Totem. HAREM MALA in BOLGOM SCHIA. "
                }
              />
              <DomainsPopupCard
                title={"ACCUS Lorem lorem axus asus mira Totem."}
                content={
                  "service description in brief. ACCUS Lorem lorem axus asus mira Totem. HAREM MALA in BOLGOM SCHIA. "
                }
              />
              <DomainsPopupCard
                title={"ACCUS Lorem lorem axus asus mira Totem."}
                content={
                  "service description in brief. ACCUS Lorem lorem axus asus mira Totem. HAREM MALA in BOLGOM SCHIA. "
                }
              />
              <DomainsPopupCard
                title={"ACCUS Lorem lorem axus asus mira Totem."}
                content={
                  "service description in brief. ACCUS Lorem lorem axus asus mira Totem. HAREM MALA in BOLGOM SCHIA. "
                }
              />
              <DomainsPopupCard
                title={"ACCUS Lorem lorem axus asus mira Totem."}
                content={
                  "service description in brief. ACCUS Lorem lorem axus asus mira Totem. HAREM MALA in BOLGOM SCHIA. "
                }
              />
              <DomainsPopupCard
                title={"ACCUS Lorem lorem axus asus mira Totem."}
                content={
                  "service description in brief. ACCUS Lorem lorem axus asus mira Totem. HAREM MALA in BOLGOM SCHIA. "
                }
              />{" "}
              <DomainsPopupCard
                title={"ACCUS Lorem lorem axus asus mira Totem."}
                content={
                  "service description in brief. ACCUS Lorem lorem axus asus mira Totem. HAREM MALA in BOLGOM SCHIA. "
                }
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
