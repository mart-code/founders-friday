import Hero from "@/components/Hero";
import StateVisit from "@/components/StateVisit";
import WhoWeAre from "@/components/WhoWeAre";
import AboutVideo from "@/components/AboutVideo";
import Attendees from "@/components/Attendees";
import Founders from "@/components/Founders";
import Sponsor from "@/components/Sponsor";
import WhatWeOffer from "@/components/WhatWeOffer";
import PreFooter from "@/components/PreFooter";
import Register from "@/components/Register";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <WhatWeOffer />
      <Register />
      <AboutVideo />
      <Founders />
      <Sponsor />
      <StateVisit />
      <Attendees />
      <FAQ/>
      <PreFooter />
    </>
  );
}
