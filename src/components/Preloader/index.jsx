import {motion,AnimatePresence,useScroll,useTransform,useSpring} from "framer-motion";
import {useState,useEffect,useRef} from "react";
import {Link,useLocation,useNavigate} from "react-router";
import {Reveal,Words,Btn,Count,Eyebrow,H2,Sec,Tilt,ScrubText,goTo,ease} from "../../ui";
import {CATS,HERO_LABELS,METHOD,SCORE,PKGS,RET,STEPS,DIFF,TALENT,CLIENTS,NAV} from "../../data";
export default function Preloader({done}){
 const [p,setP]=useState(0);
 useEffect(()=>{const t0=performance.now();let id;const f=t=>{const k=Math.min((t-t0)/2000,1);setP(Math.round(k*100));k<1?id=requestAnimationFrame(f):setTimeout(done,350)};id=requestAnimationFrame(f);return()=>cancelAnimationFrame(id)},[]);
 return <motion.div className="fixed inset-0 z-[100] grid place-items-center bg-navy" exit={{y:"-100%"}} transition={{duration:.9,ease}}>
  <div className="w-[min(80vw,520px)]">
   <motion.div className="rounded-2xl bg-cream p-3" initial={{clipPath:"inset(0 100% 0 0)"}} animate={{clipPath:"inset(0 0% 0 0)"}} transition={{duration:1.2,ease}}>
    <img src="/logo-transparent.png" alt="The Right Talent Agency" className="w-full"/></motion.div>
   <div className="mt-8 h-[3px] bg-sky/30"><div className="h-full bg-red" style={{width:p+"%"}}/></div>
   <p className="mt-3 text-right text-sm text-cream tabular-nums">{p}</p></div></motion.div>;}

