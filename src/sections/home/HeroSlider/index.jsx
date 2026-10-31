import {motion} from "framer-motion";
import {useRef} from "react";
import {CATS,IMG} from "../../../data";
import {useMotionValue,useAnimationFrame,useScroll,useVelocity} from "framer-motion";

const SHAPES=["aspect-[4/5]","aspect-square","aspect-[3/4]"];

// "#t=0.1" makes the browser show a frame at 0.1s straight away,
// so the card is never blank before you hover it
const VIDEOS = [
  "/videos/video-1.mp4",
  "/videos/video-2.mp4",
];

const playVideo = (e) => {
  const v = e.currentTarget.querySelector("video");
  if (v) v.play().catch((err) => console.log("Video play failed:", v.src, err));
};

const stopVideo = (e) => {
  const v = e.currentTarget.querySelector("video");
  if (v) { v.pause(); v.currentTime = 0.1; }  // back to the visible frame, not a blank 0
};

function Col({c,dir,speed}){
 const y=useMotionValue(0),ref=useRef(),hover=useRef(false),v=useRef(speed),{scrollY}=useScroll(),sv=useVelocity(scrollY);

 useAnimationFrame((_,dt)=>{
  const h=ref.current?.scrollHeight/2;
  if(!h)return;
  const d=Math.min(dt,50);
  v.current+=((hover.current?0:speed+Math.min(Math.abs(sv.get())*.04,140))-v.current)*.08;
  let n=y.get()+dir*v.current*d/1000;
  if(n<=-h)n+=h;
  if(n>0)n-=h;
  y.set(n);
 });

 const items=[0,1,2,3,4,5].map(i=>[
   CATS[(i+c*2)%5],
   IMG.hero[(c*4+i)%IMG.hero.length],
   VIDEOS[(i+c)%VIDEOS.length]
 ]);

 return (
  <div onMouseEnter={()=>hover.current=true} onMouseLeave={()=>hover.current=false}>
   <motion.div ref={ref} style={{y}} className="flex flex-col will-change-transform">
    {[...items,...items].map(([t,id,vid],i)=>
     <motion.div
       key={i}
       whileHover={{scale:1.03}}
       transition={{type:"spring",stiffness:300,damping:20}}
       onMouseEnter={playVideo}
       onMouseLeave={stopVideo}
       className={`relative mb-2 overflow-hidden rounded-2xl bg-navy sm:mb-3 sm:rounded-3xl ${SHAPES[(i+c*2)%3]} group`}
     >
      <video
        src={vid}
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <span className="pointer-events-none absolute bottom-2 left-2 z-10 rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-semibold text-white backdrop-blur-md sm:bottom-3 sm:left-3 sm:px-3 sm:py-1 sm:text-xs">
        {t}
      </span>
     </motion.div>
    )}
   </motion.div>
  </div>
 );
}

export default function HeroSlider(){
 return (
  <div className="grid h-[300px] grid-cols-3 gap-2 overflow-hidden text-white min-[400px]:h-[340px] sm:h-[440px] sm:gap-3 md:h-[520px] lg:h-[calc(100vh-9rem)] lg:min-h-[520px]">
   <Col c={0} dir={-1} speed={15}/>
   <Col c={1} dir={1} speed={15}/>
   <Col c={2} dir={-1} speed={15}/>
  </div>
 );
}