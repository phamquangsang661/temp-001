import { ButtonOutline } from "@components/common";
import { useFixedPopup, usePopup } from "@hooks/index";
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
  const { isOpen, open, close } = useFixedPopup();
  return (
    <>
      <DomainPopup isOpen={isOpen} onClose={close} />
      <div
        className={`
        flex-col grow items-center w-full md:min-h-[80vh] xl:gap-[84px] md:gap-[64px] lg:flex-row-reverse md:items-center md:justify-center md:basis-full flex-1 md:px-[20%] lg:px-[10%] flex scroll-mx-[32px] md:scroll-mx-[unset] ${className}
    `}
      >
        <div className="px-[88px] md:px-0 md:max-h-[100vh] w-[calc(100vw-64px)] max-sm:h-full md:w-[420px] flex justify-center overflow-hidden">
          <img
            src={imageUrl}
            alt=""
            className="image-mask h-full object-cover"
          />
        </div>

        <div className="content text-center mt-[40px] w-[calc(100vw-64px)] max-w-[500px] lg:text-start md:flex md:flex-col lg:items-start">
          <h2 className="font-bold max-md:text-center text-[30px] md:text-[44px] md:leading-[48px] md:p-0 px-0 leading-[36px]">
            {title}
          </h2>
          <p className="leading-[24px] max-md:text-center font-normal  md:text-[16px] md:pt-[8px] md:p-0 tracking-[-0.5px]">
            {content}
          </p>
          {/* button */}
          <ButtonOutline
            onClick={open}
            children={"Referenzen Entdecken"}
            textClassName="text-[17px] py-[14px] px-[28px]"
            className="mt-[33px]"
          />
        </div>
      </div>
    </>
  );
}
