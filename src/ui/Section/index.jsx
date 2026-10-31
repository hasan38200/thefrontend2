export const Sec = ({ id, bg = "bg-white", className = "", children }) => (
  <section
    id={id}
    className={`${bg} px-4 py-10 sm:px-5 md:px-10 md:py-14 ${bg === "bg-navy" ? "text-cream" : "text-navy"} ${className}`}
  >
    <div className="mx-auto max-w-6xl">{children}</div>
  </section>
);