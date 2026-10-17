import {motion,useScroll,useTransform} from "framer-motion";import {useRef} from "react";
const W=({w,p,a,b})=>{const o=useTransform(p,[a,b],[.1,1]);return <motion.span style={{opacity:o}} className="mr-[.26em] inline-block">{w}</motion.span>};
// each word fades in as you scroll down and fades back out as you scroll up
export default function ScrubText({text,className=""}){const r=useRef();const {scrollYProgress:p}=useScroll({target:r,offset:["start 0.9","end 0.5"]});const ws=text.split(" ");
 return <p ref={r} className={className}>{ws.map((w,i)=><W key={i} w={w} p={p} a={i/ws.length} b={Math.min((i+1)/ws.length+.06,1)}/>)}</p>}
