import {motion} from "framer-motion";import Words from "../Words";import Letters from "../Letters";import {ease} from "../utils";
export const Eyebrow=({children,dark,className=""})=><p className={`mb-3 text-sm font-semibold ${dark?"text-sky":"text-red"} ${className}`}><Letters text={children}/></p>;
export const Rule=({className=""})=><motion.div className={`mb-5 h-px origin-left bg-current opacity-40 ${className}`} initial={{scaleX:0}} whileInView={{scaleX:1}} viewport={{once:false}} transition={{duration:1.1,ease}}/>;
export const H2=({children,className=""})=><h2 className={`max-w-5xl font-display text-4xl leading-[1.02] sm:text-5xl md:text-6xl lg:text-7xl ${className}`}><Words text={children}/></h2>;
