import { BackToTop, Footer, Header, ScrollIndicator } from "@components/common";
import {
    Domain,
    FocusPoint,
    Hero,
    Interested,
    OurMission,
    SocialBenefits,
    TrustedBy,
    WhatWeDo,
    WorkWithUs,
} from "@components/home";
import { RefreshedPopup } from "@components/popup";
import { usePopup } from "@hooks/index";
import { useEffect } from "react";

export default function () {
    const { isOpen, close, open } = usePopup()
    useEffect(() => {
        let timeout = setTimeout(() => { open() }, 5000)
        return () => {
            clearTimeout(timeout)
        }
    }, [])
    return (
        <>
            <Header />
            <BackToTop />
            <RefreshedPopup isOpen={isOpen} onClose={close} />
            <ScrollIndicator className="max-md:hidden" />
            <div className="sm:overflow-hidden m-auto min-h-screen md:flex md:flex-col md:overflow-y-auto">
                <Hero />
                <OurMission />
                <WhatWeDo />
                <FocusPoint />
                <Domain />
                <TrustedBy />
                <WorkWithUs />
                <SocialBenefits />
                <Interested />
            </div>
            <Footer />
        </>
    );
}
