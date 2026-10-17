import {useRef,useState} from "react";import {motion,useScroll,useTransform} from "framer-motion";
// online image with parallax; tries each link in turn, then shows a navy block
export default function Img({src,alt="",className="",parallax=true}){
 const L=[].concat(src),[k,setK]=useState(0),r=useRef(),{scrollYProgress:p}=useScroll({target:r,offset:["start end","end start"]}),y=useTransform(p,[0,1],parallax?["-8%","8%"]:["0%","0%"]);
 return <div ref={r} className={`overflow-hidden bg-navy ${className}`}>{k<L.length&&<motion.img key={k} src={L[k]} alt={alt} loading="lazy" onError={()=>setK(k+1)} style={{y,scale:1.18}} className="h-full w-full object-cover"/>}</div>}
