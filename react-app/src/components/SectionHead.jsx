export default function SectionHead({ num, label, right, title }) {
  return (
    <>
      <div className="flex items-baseline justify-between gap-4 flex-wrap mb-7 sm:mb-10 md:mb-14 text-[12px] tracking-[0.14em] uppercase text-ink-400">
        <div><span className="text-imps-red">// {num}</span> &nbsp; {label}</div>
        <div>{right}</div>
      </div>
      <h2 className="font-sans font-bold text-white m-0 mb-8 sm:mb-10 tracking-[-0.03em]"
          style={{ fontSize: 'clamp(1.75rem, 6vw, 3.5rem)' }}>
        {title}
      </h2>
    </>
  );
}
