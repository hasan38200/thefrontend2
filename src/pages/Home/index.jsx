import { useEffect } from "react";
import { useLocation } from "react-router";
import { goTo } from "../../ui";
import {
  Hero, Marquee, Why, Method, Services, HowWeWork, 
  Difference, Talent, Testimonials, WhoWeWork, JoinTalent, FinalCta,
} from "../../sections/home";

export default function Home() {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const x = setTimeout(() => goTo(hash.slice(1)), 500);
      return () => clearTimeout(x);
    }
  }, [hash]);
  return (
    <>
      <Hero />
      <Marquee/>
      <Why />
      <Method />
      <Services />
      <HowWeWork />
      <Difference />
      <Talent />
      <Testimonials />
      <WhoWeWork />
      <JoinTalent />
      <FinalCta />
    </>
  );
}