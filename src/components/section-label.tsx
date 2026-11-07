type SectionLabelProps = {
  id?: string;
  children: React.ReactNode;
};

/** The olive rule that runs in from the left edge of the window, followed by a label. */
export function SectionLabel({ id, children }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-[11px]">
      <span
        aria-hidden
        className="h-1 w-6 shrink-0 bg-olive sm:w-[max(88px,calc((100%-1280px)/2+88px))]"
      />
      <h2
        id={id}
        className="font-serif text-lg leading-[22.5px] font-semibold text-olive"
      >
        {children}
      </h2>
    </div>
  );
}
