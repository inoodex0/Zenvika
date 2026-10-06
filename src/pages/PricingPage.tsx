import { ChevronDown } from 'lucide-react'
import PricingOffer from '../components/PricingOffer'
import PricingPlans, { type Plan } from '../components/PricingPlans'

const plans: Plan[] = [
  {
    name: 'Starter',
    tagline: 'For solo sellers getting started.',
    cta: 'Start for free',
    price: 0,
    period: 'Forever',
    href: '/open-store',
    features: [
      '1 online store',
      '100 products',
      '2% transaction fee',
      'Community support',
      'Basic analytics',
    ],
  },
  {
    name: 'Growth',
    tagline: 'For growing brands selling everywhere.',
    cta: 'Start 14-day trial',
    price: 29,
    period: 'Monthly',
    href: '/open-store',
    features: [
      '5 online stores',
      '10,000 products',
      '0% platform fee',
      'Omnichannel sync',
      'Real-time analytics',
      'Priority support',
    ],
  },
  {
    name: 'Scale',
    tagline: 'For high-volume teams and retailers.',
    cta: 'Start 14-day trial',
    price: 79,
    period: 'Monthly',
    href: '/open-store',
    popular: true,
    features: [
      'Unlimited stores',
      'Unlimited products',
      '0% platform fee',
      'Advanced analytics & roles',
      'SSO & audit logs',
      'Dedicated manager',
    ],
  },
  {
    name: 'Enterprise',
    tagline: 'Custom contracts, SLAs and onboarding for large teams.',
    cta: 'Contact sales',
    price: null,
    period: 'Custom',
    href: '/contact',
    features: [
      'Secure global checkout',
      'Instant payouts',
      '99.99% uptime SLA',
      '24/7 support',
      'Unlimited teammates',
      'Developer API',
    ],
  },
]

type FaqItem = { q: string; a: string }

const faq: FaqItem[] = [
  {
    q: 'Can I change plans later?',
    a: 'Yes — upgrade or downgrade anytime from your dashboard. Changes are prorated automatically.',
  },
  {
    q: 'Is there a free trial?',
    a: 'Every paid plan comes with a 14-day free trial. No credit card required to start.',
  },
  {
    q: 'Do you charge transaction fees?',
    a: 'Starter has a 2% transaction fee. Growth and Scale include 0% platform fees — you only pay your payment provider.',
  },
  {
    q: 'Which payment methods are supported?',
    a: 'Cards, wallets, bank transfers and local methods across 130+ currencies via our global checkout.',
  },
]

export default function PricingPage() {
  return (
    <main className="flex flex-1 flex-col">
      <section className="relative isolate overflow-hidden border-b border-slate-200/80 bg-gradient-to-b from-white via-white to-teal-50/60">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(rgba(23,23,23,0.12)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_at_top,rgba(0,0,0,0.5),transparent_70%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -start-40 top-0 -z-10 h-96 w-96 rounded-full bg-teal-200/50 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -end-40 -top-20 -z-10 h-96 w-96 rounded-full bg-green-200/50 blur-3xl"
        />

        <div className="relative mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:py-24">
          <span className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white px-4 py-1.5 text-xs font-bold text-teal-700 shadow-sm">
            Simple, transparent pricing
          </span>
          <h1 className="mt-6 text-balance text-4xl font-black leading-[1.05] tracking-[-0.035em] text-slate-900 sm:text-5xl lg:text-6xl">
            Pricing that grows with you
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-balance text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Start free, upgrade when you&apos;re ready. No hidden fees, cancel
            anytime.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pt-14 pb-4 sm:px-6 lg:px-8">
        <PricingPlans plans={plans} learnMore="Learn more" />
      </section>

      <PricingOffer />

      <section
        id="faq"
        className="mx-auto w-full max-w-3xl scroll-mt-24 px-4 pb-20 pt-16 sm:px-6 sm:pt-20"
      >
        <h2 className="text-center text-balance text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
          Frequently asked questions
        </h2>
        <div className="mt-8 space-y-3">
          {faq.map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl border border-slate-200 bg-white transition-colors open:border-teal-300/80"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-[15px] font-bold text-slate-900 [&::-webkit-details-marker]:hidden">
                {item.q}
                <ChevronDown
                  className="h-4 w-4 shrink-0 text-teal-600 transition-transform duration-200 group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <p className="px-5 pb-5 text-sm leading-6 text-slate-600">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </section>
    </main>
  )
}
