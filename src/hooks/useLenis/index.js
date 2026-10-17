import {useEffect} from "react";import Lenis from "lenis";
export default function useLenis(){useEffect(()=>{history.scrollRestoration="manual";const l=new Lenis({lerp:.1});window.__lenis=l;let id;const raf=t=>{l.raf(t);id=requestAnimationFrame(raf)};id=requestAnimationFrame(raf);return()=>{cancelAnimationFrame(id);l.destroy()}},[])}
