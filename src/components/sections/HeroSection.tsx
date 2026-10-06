import { ArrowRight, Check, Package, TrendingUp } from 'lucide-react'
import { Link } from 'react-router-dom'
import heroImg from '../../assets/brands/hero.png'

const checklistLeft = ['Unlimited products', '20+ sales channels', '0% setup fee']

const checklistRight = [
  '7 languages + RTL',
  'Real-time inventory sync',
  '24/7 merchant support',
]

const bars = [9, 15, 11, 20, 27]

function CheckItem({ label }: { label: string }) {
  return (
    <li className="flex items-center gap-2.5 text-sm font-semibold text-slate-600">
      <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-teal-50 text-teal-600 ring-1 ring-teal-100">
        <Check className="h-3 w-3" strokeWidth={3} aria-hidden="true" />
      </span>
      {label}
    </li>
  )
}

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-slate-100 scroll-mt-24 bg-[linear-gradient(180deg,#f9fbff_0%,#f1f5ff_100%)]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 -top-52 h-[30rem] w-[30rem] rounded-full bg-orange-200/50 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-44 -top-40 h-[36rem] w-[36rem] rounded-full bg-indigo-200/60 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-violet-200/40 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(15,23,42,0.06)_1px,transparent_1px)] [background-size:26px_26px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-6 select-none text-center text-[clamp(5rem,17vw,15rem)] font-black leading-none tracking-tight text-transparent [-webkit-text-stroke:1.5px_rgba(15,23,42,0.07)]"
      >
        ZENVIKA
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-9 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-2 lg:gap-6 lg:px-8 lg:py-24">
        <div className="max-w-xl">
          <p className="flex items-center gap-3 text-sm font-bold text-slate-500">
            <span
              aria-hidden="true"
              className="h-1.5 w-10 rounded-full bg-gradient-to-r from-teal-600 to-emerald-600"
            />
            Zenvika commerce engine
          </p>

          <h1 className="mt-5 text-[2.1rem] font-black leading-[1.1] tracking-tight text-slate-900 sm:mt-6 sm:text-5xl lg:text-[3.4rem]">
            Grow your online business with
            <span className="relative mt-2 block w-fit">
              <span className="bg-gradient-to-r from-teal-600 via-emerald-500 to-emerald-600 bg-clip-text text-transparent">
                Zenvika
              </span>
              <svg
                viewBox="0 0 320 14"
                fill="none"
                aria-hidden="true"
                className="absolute -bottom-2 left-0 h-3.5 w-full text-emerald-500"
              >
                <path
                  d="M5 9.5C72 3.5 248 2.5 315 7"
                  stroke="currentColor"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-slate-500 sm:text-lg">
            From seamless checkout to rock-solid security, Zenvika gives you
            everything you need to sell across every channel — and reach new
            heights.
          </p>

          <div className="mt-7 flex flex-wrap gap-x-8 gap-y-3 sm:mt-8 sm:gap-x-10">
            <ul className="space-y-3">
              {checklistLeft.map((item) => (
                <CheckItem key={item} label={item} />
              ))}
            </ul>
            <ul className="space-y-3">
              {checklistRight.map((item) => (
                <CheckItem key={item} label={item} />
              ))}
            </ul>
          </div>

          <div className="mt-8 flex w-full flex-col items-stretch gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <Link
              to="/features"
              className="inline-flex w-full items-center justify-center rounded-full border-2 border-slate-900 px-7 py-3.5 text-sm font-bold text-slate-900 shadow-[0_10px_26px_-10px_rgba(15,23,42,0.45)] transition-all duration-300 hover:border-transparent hover:bg-gradient-to-r hover:from-teal-600 hover:to-emerald-600 hover:text-white hover:shadow-[0_10px_24px_-8px_rgba(13,148,136,0.75)] sm:w-auto sm:py-3"
            >
              View live site
            </Link>
            <Link
              to="/open-store"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-teal-600 via-emerald-600 to-teal-600 bg-[length:200%_auto] px-7 py-3.5 text-sm font-bold text-white shadow-[0_10px_24px_-8px_rgba(13,148,136,0.75)] transition-all duration-300 hover:bg-[position:right_center] hover:shadow-[0_14px_30px_-8px_rgba(13,148,136,0.9)] sm:w-auto"
            >
              Open your free store
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        <div className="relative order-first mx-auto w-full max-w-sm sm:max-w-md lg:order-none lg:max-w-lg">
          <img
            src={heroImg}
            alt="Excited Zenvika merchant celebrating a new sale on her phone"
            width={699}
            height={1024}
            className="relative z-10 mx-auto w-full max-w-[19rem] drop-shadow-2xl sm:max-w-[22rem] lg:max-w-[26rem]"
          />

          <span
            aria-hidden="true"
            className="absolute left-[14%] top-[6%] z-20 grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-teal-500 to-emerald-600 text-white shadow-[0_14px_28px_-10px_rgba(13,148,136,0.9)] sm:h-14 sm:w-14"
          >
            <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6" />
          </span>

          <div className="absolute right-0 top-[40%] z-20 rounded-2xl border border-slate-100 bg-white/95 px-4 py-3 shadow-[0_18px_40px_-18px_rgba(16,24,40,0.35)] backdrop-blur-sm sm:px-5 sm:py-4">
            <p className="text-[10px] font-black uppercase tracking-[0.14em] text-slate-400">
              Revenue this week
            </p>
            <div className="mt-1 flex items-center gap-3">
              <span className="text-xl font-black text-slate-900 sm:text-2xl">
                $48,920
              </span>
              <span
                aria-hidden="true"
                className="flex h-7 items-end gap-0.5"
              >
                {bars.map((height, index) => (
                  <span
                    key={index}
                    className={`w-1.5 rounded-sm ${
                      index === bars.length - 1
                        ? 'bg-teal-600'
                        : 'bg-emerald-400'
                    }`}
                    style={{ height }}
                  />
                ))}
              </span>
            </div>
          </div>

          <div className="absolute bottom-[5%] left-[8%] z-20 flex items-center gap-2 rounded-xl bg-gradient-to-r from-teal-600 to-emerald-600 px-3.5 py-2.5 text-xs font-bold text-white shadow-[0_16px_32px_-12px_rgba(13,148,136,0.9)] sm:text-sm">
            <Package className="h-4 w-4 shrink-0" aria-hidden="true" />
            New order #1042
          </div>
        </div>
      </div>
    </section>
  )
}
