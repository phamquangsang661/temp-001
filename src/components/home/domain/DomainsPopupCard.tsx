import { ButtonOutline } from "@components/common";
import { RefreshedPopup } from "@components/popup";
import { usePopup } from "@hooks/index";
import { useState } from "react";
import { DomainPopup } from "./DomainsPopup";

export interface DomainsPopupCard {
  title: string;
  content: string;
  className?: string;
  imageUrl?: string;
}
export function DomainsPopupCard({
  title,
  content = "",
  className = "",
  imageUrl = "",
}: DomainsPopupCard) {
  return (
    <div
      className={`
        flex-col flex md:max-w-[640px] md:items-center md:justify-center md:w-full xl:max-w-full ${className}
    `}
    >
      <div className="content text-center flex flex-col justify-center items-center max-sm:px-[12px] w-full flex-1 mx-[33px] md:flex-row md:justify-center md:gap-[57px] md:items-start ">
        <div className="image md:w-1/3">
          <img
            className="h-[72px] bg-[#D9D9D9] w-[136px] object-cover mb-[53px] "
            src=""
            alt=""
          />
        </div>

        <div className="content md:flex md:w-full md:text-start md:gap-[20px]">
          <h2 className="font-normal text-[12px] leading-[14.63px] uppercase break-words">
            {title}
          </h2>
          <p className="font-normal text-[12px] md:p-0 leading-[14.63px] uppercase break-words mt-[30px] md:m-0 ">
            {content}
          </p>
        </div>
      </div>

      {/* divider - only for desktop */}

      <div className="divider mx-[17px] h-[1px] bg-primary-main mt-[17px] mb-[50px] max-md:hidden md:min-w-[640px] md:m-[29px] xl:min-w-full"></div>

    </div>
  );
}
