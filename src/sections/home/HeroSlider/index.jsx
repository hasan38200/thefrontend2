import {motion} from "framer-motion";
import {useRef} from "react";
import {Reveal,Words,Btn,Count,Eyebrow,H2,Rule,Sec,Tilt,ScrubText,Img,goTo,ease} from "../../../ui";
import {CATS,METHOD,SCORE,STEPS,DIFF,TALENT,CLIENTS,u,IMG} from "../../../data";
import {useMotionValue,useAnimationFrame,useScroll,useVelocity} from "framer-motion";
const SHAPES=["aspect-[4/5]","aspect-square","aspect-[3/4]"];
const MASK="linear-gradient(to bottom,transparent,#000 12%,#000 88%,transparent)";
function Col({c,dir,speed}){
 const y=useMotionValue(0),ref=useRef(),hover=useRef(false),v=useRef(speed),{scrollY}=useScroll(),sv=useVelocity(scrollY);
 useAnimationFrame((_,dt)=>{const h=ref.current?.scrollHeight/2;if(!h)return;
  v.current+=((hover.current?0:speed+Math.min(Math.abs(sv.get())*.04,140))-v.current)*.08;
  let n=y.get()+dir*v.current*dt/1000;if(n<=-h)n+=h;if(n>0)n-=h;y.set(n);});
 const items=[0,1,2,3,4].map(i=>[CATS[(i+c*2)%5],IMG.hero[(c*4+i)%IMG.hero.length]]);
 return <div onMouseEnter={()=>hover.current=true} onMouseLeave={()=>hover.current=false}>
  <motion.div ref={ref} style={{y}} className="flex flex-col gap-3">{[...items,...items].map(([t,id],i)=>
   <motion.div key={i} whileHover={{scale:1.03}} transition={{type:"spring",stiffness:300,damping:20}} className={`relative overflow-hidden rounded-3xl ${SHAPES[(i+c*2)%3]}`}>
    <Img src={u(id,600)} alt={t} parallax={false} className="absolute inset-0"/>
    <span className="absolute bottom-3 left-3 rounded-full bg-cream px-3 py-1 text-xs font-semibold text-navy">{t}</span></motion.div>)}</motion.div></div>;}
export default function HeroSlider(){
 return <div className="grid h-[340px] sm:h-[460px] grid-cols-3 gap-3 overflow-hidden lg:h-[calc(100vh-9rem)] lg:min-h-[520px]" style={{WebkitMaskImage:MASK,maskImage:MASK}}>
  <Col c={0} dir={-1} speed={34}/><Col c={1} dir={1} speed={28}/><Col c={2} dir={-1} speed={40}/></div>;}
