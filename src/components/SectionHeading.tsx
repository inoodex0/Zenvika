type SectionHeadingProps = {
  eyebrow: string
  title: string
  caption?: string
}

export default function SectionHeading({
  eyebrow,
  title,
  caption,
}: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-600">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-black tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {caption && (
        <p className="mt-3 text-sm leading-relaxed text-slate-500 sm:text-base">
          {caption}
        </p>
      )}
    </div>
  )
}
