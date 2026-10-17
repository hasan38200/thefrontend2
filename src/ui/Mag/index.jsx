import {motion,useMotionValue,useSpring} from "framer-motion";
export default function Mag({children}){const x=useMotionValue(0),y=useMotionValue(0),sx=useSpring(x,{stiffness:200,damping:14}),sy=useSpring(y,{stiffness:200,damping:14});
 return <motion.div className="inline-block" style={{x:sx,y:sy}} onMouseMove={e=>{const r=e.currentTarget.getBoundingClientRect();x.set((e.clientX-r.left-r.width/2)*.3);y.set((e.clientY-r.top-r.height/2)*.3)}} onMouseLeave={()=>{x.set(0);y.set(0)}}>{children}</motion.div>}
