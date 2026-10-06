import { useState, type FormEvent } from 'react'
import {
  ArrowUpRight,
  Clock,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  Tag,
  User,
} from 'lucide-react'
import heroImg from '../assets/brands/hero.png'
import { contact } from '../data/site'

const infoItems = [
  {
    label: 'Email',
    value: contact.email,
    href: `mailto:${contact.email}`,
    Icon: Mail,
  },
  {
    label: 'Phone',
    value: contact.phone,
    href: `tel:${contact.phone.replace(/[^\d+]/g, '')}`,
    Icon: Phone,
  },
  {
    label: 'Address',
    value: contact.address,
    href: '',
    Icon: MapPin,
  },
]

const fieldClass =
  'w-full rounded-xl border border-slate-200/70 bg-[#f6f7fb] py-3 pl-11 pr-4 text-sm text-slate-800 shadow-[0_1px_2px_rgba(16,24,40,0.03)] outline-none transition-all placeholder:text-slate-400 focus:border-emerald-400 focus:bg-white focus:ring-4 focus:ring-emerald-100'

const labelClass =
  'mb-2 block text-[13px] font-semibold text-slate-700 [&>span]:text-rose-500'

const iconWrapClass =
  'pointer-events-none absolute start-3.5 top-1/2 -translate-y-1/2 text-slate-400'

export default function ContactPage() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSent(true)
  }

  return (
    <>
      <header className="relative overflow-hidden border-b border-emerald-100/80 bg-[linear-gradient(90deg,#e7fbf3_0%,#fbfefd_28%,#ffffff_50%,#fbfefd_72%,#e9fbf3_100%)]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(15,23,42,0.05)_1px,transparent_1px)] [background-size:26px_26px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-emerald-200/50 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-teal-100/70 blur-3xl"
        />
        <span
          aria-hidden="true"
          className="absolute left-[14%] top-10 h-2.5 w-2.5 rounded-full bg-teal-400"
        />
        <span
          aria-hidden="true"
          className="absolute right-[16%] top-24 h-2 w-2 rounded-full bg-emerald-400"
        />
        <div className="relative mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-24">
          <h1 className="text-[2rem] font-black leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Let&apos;s Talk About
            <br />
            Your Store
          </h1>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-6 lg:grid-cols-[2fr_3fr] lg:gap-8">
          <div className="space-y-4 rounded-[2rem] bg-[linear-gradient(180deg,#e9faf2_0%,#f4fdf9_55%,#ffffff_100%)] p-5 ring-1 ring-inset ring-emerald-100/70 sm:p-6">
            <div className="relative overflow-hidden rounded-3xl bg-[linear-gradient(135deg,#062e23_0%,#0a3d2f_55%,#0f5137_100%)] p-5 shadow-[0_18px_40px_-18px_rgba(6,46,35,0.6)] sm:p-7">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:30px_30px]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full border border-white/10"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-6 top-16 h-40 w-40 rounded-full border border-white/10"
              />
              <img
                src={heroImg}
                alt="Friendly Zenvika support agent celebrating"
                width={699}
                height={1024}
                className="pointer-events-none absolute -top-1 right-1 z-10 w-28 rounded-2xl sm:right-2 sm:w-40 lg:w-44"
              />
              <div className="relative z-20 max-w-[58%] sm:max-w-[60%]">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-emerald-100/90 backdrop-blur-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  <Clock className="h-3 w-3" aria-hidden="true" />
                  Response time
                </span>
                <h2 className="mt-4 text-xl font-black leading-tight text-white sm:mt-5 sm:text-2xl lg:text-3xl">
                  Talk To A Real Human
                </h2>
                <p className="mt-2 text-xs leading-relaxed text-emerald-100/70 sm:mt-3 sm:text-sm">
                  Friendly support, no bots — reach us any day of the week.
                </p>
              </div>
            </div>

            {infoItems.map(({ label, value, href, Icon }) => {
              const body = (
                <>
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-emerald-50 text-emerald-600 ring-1 ring-inset ring-emerald-100">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[11px] font-black uppercase tracking-[0.16em] text-slate-400">
                      {label}
                    </span>
                    <span className="mt-0.5 block text-sm font-bold leading-snug text-slate-800">
                      {value}
                    </span>
                  </span>
                  <ArrowUpRight
                    className="h-4 w-4 shrink-0 text-slate-300 transition-colors group-hover:text-emerald-500"
                    aria-hidden="true"
                  />
                </>
              )
              const cardClass =
                'group flex items-center gap-4 rounded-2xl border border-slate-200/80 bg-white px-5 py-4 shadow-[0_4px_18px_rgba(16,24,40,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-200 hover:shadow-[0_14px_30px_-14px_rgba(16,24,40,0.25)]'

              return href ? (
                <a key={label} href={href} className={cardClass}>
                  {body}
                </a>
              ) : (
                <div key={label} className={cardClass}>
                  {body}
                </div>
              )
            })}
          </div>

          <div className="rounded-3xl border border-emerald-200/70 bg-[linear-gradient(160deg,#ffffff_0%,#f2fdf7_55%,#e6fbf1_100%)] p-6 shadow-[0_18px_44px_-24px_rgba(16,24,40,0.25)] sm:p-8">
            <div className="flex items-start gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-teal-500 to-emerald-600 text-white shadow-[0_10px_22px_-8px_rgba(13,148,136,0.8)]">
                <Mail className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h2 className="text-xl font-black text-slate-900 sm:text-2xl">
                  Send Us A Message
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Fill in the form and our team will reply shortly.
                </p>
              </div>
            </div>

            <hr className="my-6 border-emerald-100" />

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className={labelClass} htmlFor="contact-name">
                    Full Name <span aria-hidden="true">*</span>
                  </label>
                  <div className="relative">
                    <User className={iconWrapClass} aria-hidden="true" />
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className={fieldClass}
                    />
                  </div>
                </div>
                <div>
                  <label className={labelClass} htmlFor="contact-email">
                    Email Address <span aria-hidden="true">*</span>
                  </label>
                  <div className="relative">
                    <Mail className={iconWrapClass} aria-hidden="true" />
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@company.com"
                      className={fieldClass}
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className={labelClass} htmlFor="contact-subject">
                  Subject
                </label>
                <div className="relative">
                  <Tag className={iconWrapClass} aria-hidden="true" />
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    placeholder="What is this about?"
                    className={fieldClass}
                  />
                </div>
              </div>

              <div>
                <label className={labelClass} htmlFor="contact-message">
                  Message <span aria-hidden="true">*</span>
                </label>
                <div className="relative">
                  <MessageSquare
                    className="pointer-events-none absolute start-3.5 top-5 -translate-y-1/2 text-slate-400"
                    aria-hidden="true"
                  />
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Tell us how we can help…"
                    className={`${fieldClass} resize-y py-4`}
                  />
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-1">
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-teal-600 via-emerald-600 to-teal-600 bg-[length:200%_auto] px-7 py-3.5 text-sm font-bold text-white shadow-[0_10px_24px_-8px_rgba(13,148,136,0.75)] transition-all duration-300 hover:bg-[position:right_center] hover:shadow-[0_14px_30px_-8px_rgba(13,148,136,0.9)] active:scale-[0.98] sm:w-auto sm:py-3"
                >
                  Send Message
                  <Send className="h-4 w-4" aria-hidden="true" />
                </button>
                {sent && (
                  <p
                    role="status"
                    className="text-sm font-semibold text-emerald-600"
                  >
                    Thanks! We&apos;ll get back to you shortly.
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
