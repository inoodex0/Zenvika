import { Check, Star } from 'lucide-react'
import { Link } from 'react-router-dom'

export type Plan = {
  name: string
  tagline: string
  price: number | null
  period: string
  cta: string
  href: string
  features: string[]
  popular?: boolean
}

type Props = {
  plans: Plan[]
  learnMore?: string
  learnMoreHref?: string
}

export default function PricingPlans({
  plans,
  learnMore = 'Learn more',
  learnMoreHref = '#faq',
}: Props) {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
      {plans.map((plan) => {
        const popular = Boolean(plan.popular)

        return (
          <div
            key={plan.name}
            className={
              popular
                ? 'group relative z-10 flex flex-col rounded-2xl bg-gradient-to-b from-teal-600 via-emerald-600 to-green-600 p-7 pt-9 text-white shadow-[0_34px_66px_-30px_rgba(13,148,136,0.75)] ring-1 ring-emerald-400/40 lg:-my-6'
                : 'group relative flex flex-col rounded-2xl border border-slate-200/80 bg-white p-7 shadow-[0_1px_2px_rgba(16,24,40,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:border-teal-300 hover:shadow-[0_24px_48px_-24px_rgba(13,148,136,0.4)]'
            }
          >
            {/* top accent hairline */}
            <span
              aria-hidden="true"
              className={`absolute inset-x-6 top-0 h-0.5 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${
                popular ? 'opacity-100' : ''
              }`}
            />

            {popular ? (
              <span className="absolute -top-3.5 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-white px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-teal-700 shadow-[0_10px_22px_-10px_rgba(15,23,42,0.45)] ring-1 ring-emerald-500/25">
                <Star className="h-3 w-3 text-amber-400" fill="currentColor" />
                Most popular
              </span>
            ) : null}

            <h3
              className={`text-xs font-black uppercase tracking-[0.16em] ${
                popular ? 'text-white/70' : 'text-slate-400'
              }`}
            >
              {plan.name}
            </h3>

            <div className="mt-3 flex items-baseline gap-2">
              {plan.price !== null ? (
                <>
                  <span
                    className={`text-[2.6rem] font-black leading-none tracking-[-0.04em] ${
                      popular ? 'text-white' : 'bg-gradient-to-br from-teal-700 to-emerald-600 bg-clip-text text-transparent'
                    }`}
                  >
                    ${plan.price}
                  </span>
                  <span
                    className={`rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide ${
                      popular
                        ? 'bg-white/15 text-white/85'
                        : 'bg-teal-50 text-teal-700'
                    }`}
                  >
                    {plan.period}
                  </span>
                </>
              ) : (
                <span
                  className={`text-[2.6rem] font-black leading-none tracking-[-0.04em] ${
                    popular ? 'text-white' : 'bg-gradient-to-br from-teal-700 to-emerald-600 bg-clip-text text-transparent'
                  }`}
                >
                  {plan.period}
                </span>
              )}
            </div>

            <p
              className={`mt-5 min-h-10 text-sm leading-relaxed ${
                popular ? 'text-white/85' : 'text-slate-500'
              }`}
            >
              {plan.tagline}
            </p>

            <div
              className={`mt-5 border-t border-dashed ${
                popular ? 'border-white/25' : 'border-slate-200'
              }`}
            />

            <ul className="mt-5 space-y-2.5">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-sm">
                  <span
                    className={`mt-0.5 grid h-4.5 w-4.5 shrink-0 place-items-center rounded-full ${
                      popular
                        ? 'bg-white/20 text-white'
                        : 'bg-teal-50 text-teal-700'
                    }`}
                  >
                    <Check className="h-2.5 w-2.5" strokeWidth={4} />
                  </span>
                  <span
                    className={popular ? 'text-white/90' : 'text-slate-600'}
                  >
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-7">
              <Link
                to={plan.href}
                className={`block w-full rounded-xl px-6 py-3.5 text-center text-sm font-bold transition-all duration-300 ${
                  popular
                    ? 'bg-white text-emerald-700 shadow-[0_14px_28px_-14px_rgba(15,23,42,0.5)] hover:-translate-y-0.5 hover:bg-emerald-50'
                    : 'bg-gradient-to-r from-teal-600 to-green-600 text-white shadow-[0_14px_28px_-14px_rgba(5,150,105,0.9)] hover:-translate-y-0.5 hover:shadow-[0_18px_34px_-14px_rgba(5,150,105,1)]'
                }`}
              >
                {plan.cta}
              </Link>
              <a
                href={learnMoreHref}
                className={`mt-4 block py-1.5 text-center text-sm font-bold underline-offset-4 transition-colors hover:underline ${
                  popular
                    ? 'text-white/90 hover:text-white'
                    : 'text-teal-700 hover:text-teal-800'
                }`}
              >
                {learnMore}
              </a>
            </div>
          </div>
        )
      })}
    </div>
  )
}
