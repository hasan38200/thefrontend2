import { motion } from "framer-motion";
import { Reveal, Words, Btn, Eyebrow, Rule, ScrubText, Wipe, Img, goTo, ease } from "../../../ui";
import { CATS, HERO_LABELS, u, IMG } from "../../../data";
export default function Why() {
    return <section className="grid bg-white text-navy md:grid-cols-2">
        <div className="flex flex-col justify-center px-4 py-8 sm:px-5 sm:py-10 md:px-8 md:py-14 lg:px-12 text-navy"><Eyebrow dark className="!text-[14px] !text-red ">Why The Right Talent</Eyebrow><Rule />
            <ScrubText className="font-display text-xl leading-snug min-[400px]:text-2xl sm:text-3xl md:text-2xl lg:text-3xl xl:text-4xl" text="We don't just provide talent. We research, recommend and direct the right talent for each brand, based on niche, audience, geography and campaign goals. Not popularity alone." /></div>
        <Wipe from="right" className="min-h-[240px] sm:min-h-[340px] md:min-h-[460px]"><Img src={u(IMG.why, 1200)} className="h-full min-h-[240px] sm:min-h-[340px] md:min-h-[460px]" /></Wipe></section>;
}