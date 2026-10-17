import {motion} from "framer-motion";import {ease} from "../utils";
// replays: hides again when scrolled back out of view
export default function Reveal({children,delay=0,className=""}){return <motion.div className={className} initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:false,margin:"-8% 0px"}} transition={{duration:.9,delay,ease}}>{children}</motion.div>}
