import {Link} from "react-router";import Mag from "../Mag";
export default function Btn({to,href,onClick,children,v="red",arrow=true}){
 const c=`group inline-flex items-center gap-3 rounded-full px-7 py-4 text-sm font-semibold transition-colors ${v==="red"?"bg-red text-cream hover:bg-navy":v==="navy"?"bg-navy text-cream hover:bg-red":"border border-navy text-navy hover:bg-navy hover:text-cream"}`;
 const T=to?Link:href?"a":"button";
 return <Mag><T to={to} href={href} onClick={onClick} className={c}>{children}{arrow&&<span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">→</span>}</T></Mag>}
