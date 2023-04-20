import { ButtonOutline } from "@components/common";
import { useFixedPopup } from "@hooks/index";
import { DomainPopup } from "./DomainsPopup";

export interface DomainsCard {
  title: string;
  content: string;
  className?: string;
  imageUrl?: string;
}
export function DomainsCard({
  title,
  content = "",
  className = "",
  imageUrl = "",
}: DomainsCard) {
  const { isOpen, open, close } = useFixedPopup()
  return (

    <>
      <DomainPopup isOpen={isOpen} onClose={close} />
      <div
        className={`
        flex-col grow items-center w-full md:min-h-[80vh] xl:gap-[84px] md:gap-[64px] lg:flex-row-reverse md:items-center md:justify-center md:basis-full flex-1 md:px-[20%] lg:px-[10%] flex scroll-mx-[32px] md:scroll-mx-[unset] ${className}
    `}
      >
        <div className="px-[88px] md:px-0 md:max-h-[100vh] max-sm:h-full md:w-[460px] w-full flex justify-center overflow-hidden">
          <img src={imageUrl} alt="" className="image-mask h-full object-cover" />
        </div>

        <div className="content text-center mt-[40px] lg:text-start md:flex md:flex-col lg:items-start w-[400px]">
          <h2 className="font-bold text-[30px] md:text-[44px] md:leading-[48px] md:p-0 px-[85px] leading-[36px]">
            {title}
          </h2>
          <p className="leading-[24px] font-normal px-[32px] md:text-[16px] md:pt-[8px] md:p-0 tracking-[-0.5px]">
            {content}
          </p>
          {/* button */}
          <ButtonOutline onClick={open} children={"Referenzen Entdecken"} textClassName="text-[17px] py-[14px] px-[28px]" className="mt-[33px]" />
        </div>
      </div>
    </>
  );
}
