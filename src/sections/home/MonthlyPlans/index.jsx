import { motion } from "framer-motion";
import { Link } from "react-router";
import { Mag, Reveal, ease } from "../../../ui";
import { RET } from "../../../data";

const RULE = ["bg-navy", "bg-red", "bg-sky"];

export default function MonthlyPlans() {
  return (
    <motion.div
      className="mt-12 rounded-bl-[4rem] rounded-tr-[4rem] border-[1.5px] border-navy p-7 md:rounded-bl-[6rem] md:rounded-tr-[6rem] md:p-14"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.9, ease }}
    >
      <h3 className="font-display !text-3xl !font-extrabold md:!text-4xl">We also work on a monthly basis</h3>
      <p className="mt-4 max-w-xl text-lg leading-relaxed text-navy/80">
        For brands with a steady flow of briefs. Defined monthly scope, regular planning, one team that knows your brand.
      </p>
      <div className="mt-6">
        <Mag>
          <Link
            to="/brief"
            className="inline-block rounded-full bg-red px-8 py-4 text-base font-semibold text-cream transition-colors hover:bg-navy"
          >
            Discuss a monthly partnership
          </Link>
        </Mag>
      </div>

      <div className="mt-10 grid gap-8 md:grid-cols-3 md:gap-10">
        {RET.map((r, i) => (
          <Reveal key={r[0]} delay={i * 0.12}>
            <motion.div
              className={`h-1 origin-left ${RULE[i]}`}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.9, delay: 0.2 + i * 0.12, ease }}
            />
            <h4 className="mt-5 font-display !text-xl !font-semibold md:!text-2xl">{r[0]}</h4>
            <p className="mt-1 text-xl font-semibold text-red">Monthly retainer</p>
            <p className="mt-3 leading-relaxed text-navy/80">{r[1]}</p>
          </Reveal>
        ))}
      </div>
    </motion.div>
  );
}