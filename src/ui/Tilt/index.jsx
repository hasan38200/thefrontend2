import {motion,useMotionValue,useSpring,useTransform} from "framer-motion";
export default function Tilt({children,className=""}){const x=useMotionValue(0),y=useMotionValue(0);
 const rx=useSpring(useTransform(y,[-.5,.5],[8,-8]),{stiffness:200,damping:18}),ry=useSpring(useTransform(x,[-.5,.5],[-8,8]),{stiffness:200,damping:18});
 return <motion.div style={{rotateX:rx,rotateY:ry,transformPerspective:800}} whileHover={{y:-8}} className={className}
  onMouseMove={e=>{const r=e.currentTarget.getBoundingClientRect();x.set((e.clientX-r.left)/r.width-.5);y.set((e.clientY-r.top)/r.height-.5)}} onMouseLeave={()=>{x.set(0);y.set(0)}}>{children}</motion.div>}
