import { motion } from "framer-motion";
import { Reveal, Words, Btn, Eyebrow, Rule, ScrubText, Wipe, Img, goTo, ease } from "../../../ui";
import { CATS, HERO_LABELS, u, IMG } from "../../../data";
export default function Why() {
    return <section className="grid bg-navy text-cream md:grid-cols-2">
        <div className="flex flex-col justify-center px-5 py-10 md:px-12 md:py-14"><Eyebrow dark className="!text-[14px] ">Why The Right Talent</Eyebrow><Rule />
            <ScrubText className="font-display text-2xl leading-snug sm:text-3xl lg:text-4xl" text="We don't just provide talent. We research, recommend and direct the right talent for each brand, based on niche, audience, geography and campaign goals. Not popularity alone." /></div>
        <Wipe from="right" className="min-h-[300px] md:min-h-[460px]"><Img src={u(IMG.why, 1200)} className="h-full min-h-[300px] md:min-h-[460px]" /></Wipe></section>;
}
