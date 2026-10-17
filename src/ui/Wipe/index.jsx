import {motion} from "framer-motion";import {ease} from "../utils";
// reveals children with a sideways wipe; replays when scrolled back
export default function Wipe({children,from="left",className=""}){
 const h=from==="left"?"inset(0% 100% 0% 0%)":"inset(0% 0% 0% 100%)";
 return <motion.div className={className} initial="hide" whileInView="show" viewport={{once:false,amount:.2}}>
  <motion.div className="h-full" variants={{hide:{clipPath:h},show:{clipPath:"inset(0% 0% 0% 0%)"}}} transition={{duration:1.2,ease}}>{children}</motion.div></motion.div>}
