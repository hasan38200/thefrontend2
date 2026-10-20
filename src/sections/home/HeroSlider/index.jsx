import {motion} from "framer-motion";
import {useRef} from "react";
import {Reveal,Words,Btn,Count,Eyebrow,H2,Rule,Sec,Tilt,ScrubText,Img,goTo,ease} from "../../../ui";
import {CATS,METHOD,SCORE,STEPS,DIFF,TALENT,CLIENTS,u,IMG} from "../../../data";
import {useMotionValue,useAnimationFrame,useScroll,useVelocity} from "framer-motion";

const SHAPES=["aspect-[4/5]","aspect-square","aspect-[3/4]"];
const MASK="linear-gradient(to bottom,transparent,#000 12%,#000 88%,transparent)";

// Local video paths (make sure these files exist in public/videos/)
const VIDEOS = [
  "/videos/video-1.mp4",
  "/videos/video-2.mp4",
  "/videos/video-3.mp4",
  "/videos/video-1.mp4",
];

const playVideo = (e) => {
  const v = e.currentTarget.querySelector("video");
  if (v) v.play().catch(() => {});
};
const stopVideo = (e) => {
  const v = e.currentTarget.querySelector("video");
  if (v) { v.pause(); v.currentTime = 0; }
};

function Col({c,dir,speed}){
 const y=useMotionValue(0),ref=useRef(),hover=useRef(false),v=useRef(speed),{scrollY}=useScroll(),sv=useVelocity(scrollY);

 useAnimationFrame((_,dt)=>{const h=ref.current?.scrollHeight/2;if(!h)return;
  v.current+=((hover.current?0:speed+Math.min(Math.abs(sv.get())*.04,140))-v.current)*.08;
  let n=y.get()+dir*v.current*dt/1000;if(n<=-h)n+=h;if(n>0)n-=h;y.set(n);});

 // Removed the image ID from the items, keeping only the category name and video source
 const items=[0,1,2,3,4].map(i=>[CATS[(i+c*2)%5], VIDEOS[(c*2+i)%VIDEOS.length]]);

 return <div onMouseEnter={()=>hover.current=true} onMouseLeave={()=>hover.current=false}>
  <motion.div ref={ref} style={{y}} className="flex flex-col gap-3">{[...items,...items].map(([t,vid],i)=>
   <motion.div
     key={i}
     whileHover={{scale:1.03}}
     transition={{type:"spring",stiffness:300,damping:20}}
     onMouseEnter={playVideo}
     onMouseLeave={stopVideo}
     className={`relative overflow-hidden rounded-3xl ${SHAPES[(i+c*2)%3]} group`}
   >
    {/* Video only, no poster image */}
    <video
      src={vid}
      muted
      loop
      playsInline
      preload="metadata"
      className="absolute inset-0 h-full w-full object-cover"
    />

    {/* Category text in #92EEFF */}
    <span className="pointer-events-none absolute bottom-3 left-3 z-10 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-[#92EEFF] backdrop-blur-md">{t}</span>
   </motion.div>)}
  </motion.div></div>;}

export default function HeroSlider(){
 return <div className="grid h-[340px] sm:h-[460px] grid-cols-3 gap-3 overflow-hidden lg:h-[calc(100vh-9rem)] lg:min-h-[520px] text-white" style={{WebkitMaskImage:MASK,maskImage:MASK}}>
  <Col c={0} dir={-1} speed={15}/><Col c={1} dir={1} speed={15}/><Col c={2} dir={-1} speed={15}/></div>;}