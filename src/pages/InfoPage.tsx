import { ArrowRight, Check } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { PageInfo } from '../data/pages'

export default function InfoPage({ page }: { page: PageInfo }) {
  return (
    <>
      <section className="border-b border-slate-100 bg-[linear-gradient(180deg,#f9fbff_0%,#f1f5ff_100%)]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-600">
              {page.eyebrow}
            </p>
            <h1 className="mt-3 text-3xl font-black tracking-tight text-foreground sm:text-5xl">
              {page.title}
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-500 sm:text-base">
              {page.description}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/pricing"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-600 via-emerald-600 to-teal-600 bg-[length:200%_auto] px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_20px_-6px_rgba(13,148,136,0.7)] transition-all duration-300 hover:bg-[position:right_center] hover:shadow-[0_12px_28px_-6px_rgba(13,148,136,0.85)]"
              >
                View pricing
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-foreground transition-all duration-200 hover:border-teal-300 hover:text-teal-700"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-5 sm:grid-cols-2">
          {page.points.map((point) => (
            <div
              key={point}
              className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-teal-200 hover:shadow-lg hover:shadow-teal-600/10"
            >
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-gradient-to-br from-teal-500 to-emerald-600 text-white">
                <Check className="h-4 w-4" aria-hidden="true" />
              </span>
              <span className="text-sm font-medium text-slate-600">
                {point}
              </span>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
