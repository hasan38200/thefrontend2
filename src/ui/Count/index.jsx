import {useRef,useState,useEffect} from "react";import {useInView,animate} from "framer-motion";import {ease} from "../utils";
export default function Count({to,suffix="%"}){const r=useRef(),v=useInView(r,{once:false}),[n,set]=useState(0);
 useEffect(()=>{if(!v){set(0);return}const c=animate(0,to,{duration:1.6,ease,onUpdate:x=>set(Math.round(x))});return()=>c.stop()},[v,to]);
 return <span ref={r}>{n}{suffix}</span>}
