import { useState } from "react"
import { HomeTitle } from "./common/HomeTitle"
import { FocusPointTag } from "./focusPoint/FocusPointTag"
import { FocusPointCard } from "./focusPoint/FocusPointCard"
import FocusPointExampleImage from '/images/example/focus-point-example-image.jpg'
import { HomeMobileTitle } from "./common/HomeMobileTitle"
import { useHorizontalScroll } from "@hooks/index"
import { ScrollInfo } from "./common/ScrollInfo"


export function FocusPoint() {
    const [selectedPoint, setSelectedPoint] = useState(-1);
 
    const onClickSetSelectedPoint = (point: number) => () => {
        setSelectedPoint(point)
    }
    return <section className="md:pl-[70px] md:pr-0 md:pt-[81px] flex flex-col gap-[67px] md:gap-[81px] overflow-visible pb-[192px] md:pb-[218px] mx-auto md:max-w-[1440px]">
        <HomeTitle className="hidden md:flex md:w-full">Konzentriert auf das Wesentliche. </HomeTitle>
        <HomeMobileTitle className="md:hidden">Focus Point</HomeMobileTitle>
        <div className="flex flex-row gap-[10px] ">
            <div className="pl-[44px] pt-[42px] hidden md:flex flex-col gap-[9px] text-typo-h5 w-max whitespace-nowrap ">
                <FocusPointTag isSelected={selectedPoint == 1} onClick={onClickSetSelectedPoint(1)}>Project Manager</FocusPointTag>
                <FocusPointTag isSelected={selectedPoint == 2} onClick={onClickSetSelectedPoint(2)}>Scrum Master</FocusPointTag>
                <FocusPointTag isSelected={selectedPoint == 3} onClick={onClickSetSelectedPoint(3)}>Product Owner</FocusPointTag>
                <FocusPointTag isSelected={selectedPoint == 4} onClick={onClickSetSelectedPoint(4)}>DevOps Engineer</FocusPointTag>
                <FocusPointTag isSelected={selectedPoint == 5} onClick={onClickSetSelectedPoint(5)}>Process Engineer</FocusPointTag>
                <FocusPointTag isSelected={selectedPoint == 6} onClick={onClickSetSelectedPoint(6)}>System Administrator</FocusPointTag>
                <FocusPointTag isSelected={selectedPoint == 7} onClick={onClickSetSelectedPoint(7)}>Business Analyst</FocusPointTag>
            </div>
            <div className="px-[32px] md:pl-[41px] flex flex-row overflow-x-auto !overscroll-auto  hide-scroll-desktop   w-full gap-[43px] pb-[63px] md:pb-[100px]  md:pr-[70px] scroll-custom scroll-mx-8">
                <FocusPointCard title="Fokus 1" imageUrl={FocusPointExampleImage}>
                    This is a brief explanation of the service with USP and an attractive product value for the client in general and this is a text. USP and an attractive product value for the client in general and this is a text.
                </FocusPointCard>
                <FocusPointCard title="Fokus 1" imageUrl={FocusPointExampleImage}>
                    This is a brief explanation of the service with USP and an attractive product value for the client in general and this is a text. USP and an attractive product value for the client in general and this is a text.
                </FocusPointCard>
                <FocusPointCard title="Fokus 1" imageUrl={FocusPointExampleImage}>
                    This is a brief explanation of the service with USP and an attractive product value for the client in general and this is a text. USP and an attractive product value for the client in general and this is a text.
                </FocusPointCard>
                <FocusPointCard title="Fokus 1" imageUrl={FocusPointExampleImage}>
                    This is a brief explanation of the service with USP and an attractive product value for the client in general and this is a text. USP and an attractive product value for the client in general and this is a text.
                </FocusPointCard>
                <FocusPointCard title="Fokus 1" imageUrl={FocusPointExampleImage}>
                    This is a brief explanation of the service with USP and an attractive product value for the client in general and this is a text. USP and an attractive product value for the client in general and this is a text.
                </FocusPointCard>
            </div>
        </div>
        <ScrollInfo className="hidden md:flex !mt-[88px]" />

    </section>
}