import {motion} from "framer-motion";import {ease} from "../utils";
export default function Letters({text,className=""}){return <span className={className} aria-label={text}>{[...text].map((c,i)=>
 <motion.span key={i} aria-hidden className="inline-block whitespace-pre" initial={{opacity:0,y:"70%"}} whileInView={{opacity:1,y:0}} viewport={{once:false,amount:1}} transition={{duration:.5,delay:i*.025,ease}}>{c}</motion.span>)}</span>}
