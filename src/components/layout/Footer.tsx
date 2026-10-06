import { ArrowUp, Globe, Heart, Mail, MapPin, Phone, type LucideIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'
import { contact } from '../../data/site'

const text = {
  description:
    'The next-generation omnichannel commerce engine engineered for high-growth global brands. Sync inventory, accept instant payments, and delight customers worldwide.',
  status: 'All Systems Operational',
  rights: 'All rights reserved.',
  engine: 'Global Commerce Engine',
  madeWith: 'Made with',
  forMerchants: 'for modern merchants',
  backToTop: 'Back to top',
  hiring: 'Hiring',
  platformTitle: 'Platform',
  solutionsTitle: 'Solutions',
  companyTitle: 'Company',
  contactTitle: 'Contact',
} as const

type FooterLink = {
  label: string
  href: string
  badge?: string
}

const platformLinks: FooterLink[] = [
  { label: 'Omnichannel Sync', href: '#' },
  { label: 'Global Checkout', href: '#' },
  { label: 'Real-time Analytics', href: '#' },
  { label: 'Inventory Automation', href: '#' },
  { label: 'Pricing Plans', href: '#' },
]

const solutionsLinks: FooterLink[] = [
  { label: 'Direct to Consumer', href: '#' },
  { label: 'B2B Wholesale', href: '#' },
  { label: 'Global Cross-Border', href: '#' },
  { label: 'Enterprise Retail', href: '#' },
  { label: 'Developer API', href: '#' },
]

const companyLinks: FooterLink[] = [
  { label: 'About Us', href: '#' },
  { label: 'Careers', href: '#', badge: text.hiring },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Contact Support', href: '#' },
]

type Social = {
  href: string
  label: string
  path: string
}

const socials: Social[] = [
  {
    href: 'https://x.com',
    label: 'X (Twitter)',
    path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
  },
  {
    href: 'https://github.com',
    label: 'GitHub',
    path: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z',
  },
  {
    href: 'https://linkedin.com',
    label: 'LinkedIn',
    path: 'M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.6 1.6 0 0 0 1.6-1.6 1.6 1.6 0 0 0-1.6-1.6 1.6 1.6 0 0 0-1.6 1.6c0 .88.72 1.6 1.6 1.6m1.4 9.74v-8.37H5.06v8.37h2.8z',
  },
  {
    href: 'https://youtube.com',
    label: 'YouTube',
    path: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
  },
]

type ContactItem = {
  label: string
  value: string
  href: string
  Icon: LucideIcon
  tone: string
}

export default function Footer() {
  const contactItems: ContactItem[] = [
    {
      label: 'Address',
      value: contact.address,
      href: '',
      Icon: MapPin,
      tone: 'from-teal-500 to-teal-600',
    },
    {
      label: 'Phone',
      value: contact.phone,
      href: `tel:${contact.phone.replace(/[^\d+]/g, '')}`,
      Icon: Phone,
      tone: 'from-emerald-500 to-emerald-600',
    },
    {
      label: 'Email',
      value: contact.email,
      href: `mailto:${contact.email}`,
      Icon: Mail,
      tone: 'from-green-500 to-green-600',
    },
  ]

  const column = (title: string, items: FooterLink[]) => (
    <div>
      <h4 className="text-xs font-black uppercase tracking-[0.14em] text-slate-900">
        {title}
      </h4>
      <span
        aria-hidden="true"
        className="mt-3 block h-1 w-7 rounded-full bg-gradient-to-r from-teal-600 to-green-600"
      />
      <ul className="mt-5 space-y-3 text-sm">
        {items.map((item) => (
          <li key={item.label}>
            <Link
              to={item.href}
              className="relative inline-block text-slate-500 transition-colors after:absolute after:-bottom-1 after:start-0 after:h-0.5 after:w-0 after:rounded-full after:bg-teal-600 after:transition-all after:duration-300 hover:text-teal-700 hover:after:w-full"
            >
              {item.label}
            </Link>
            {item.badge && (
              <span className="ms-2 inline-flex items-center rounded-full bg-teal-50 px-2 py-0.5 align-middle text-[10px] font-bold tracking-wide text-teal-700 ring-1 ring-teal-200">
                {item.badge}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  )

  return (
    <footer className="relative isolate overflow-hidden bg-white text-slate-600">
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-teal-600 via-emerald-500 to-teal-500"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-6 left-1/2 -z-10 w-screen -translate-x-1/2 select-none whitespace-nowrap text-center text-[16vw] font-black leading-none tracking-[-0.02em] text-transparent"
        style={{ WebkitTextStroke: '2px rgba(16,185,129,0.10)' }}
      >
        ZENVIKA
      </span>

      <div className="mx-auto max-w-[1400px] px-4 pt-16 pb-10 sm:px-6 lg:px-10 lg:pt-20">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-4 lg:grid-cols-7 lg:gap-x-12">
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <Logo />
            <p className="mt-5 max-w-sm text-[13px] leading-relaxed text-slate-500">
              {text.description}
            </p>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-200/80 bg-emerald-50 px-3.5 py-1.5 text-[11px] font-semibold text-emerald-600 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span>{text.status}</span>
            </div>

            <div className="mt-7 flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-teal-300 hover:text-teal-600 hover:shadow-md hover:shadow-teal-600/15"
                >
                  <svg
                    className="h-4 w-4 fill-current"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {column(text.platformTitle, platformLinks)}
          {column(text.solutionsTitle, solutionsLinks)}
          {column(text.companyTitle, companyLinks)}

          <div className="col-span-2 md:col-span-2 lg:col-span-2">
            <h4 className="text-xs font-black uppercase tracking-[0.14em] text-slate-900">
              {text.contactTitle}
            </h4>
            <span
              aria-hidden="true"
              className="mt-3 block h-1 w-7 rounded-full bg-gradient-to-r from-teal-600 to-green-600"
            />
            <ul className="mt-5 space-y-5">
              {contactItems.map(({ label, value, href, Icon, tone }) => (
                <li key={label} className="flex items-start gap-3">
                  <span
                    className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${tone} text-white shadow-md shadow-teal-600/25`}
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[10px] font-black uppercase tracking-[0.14em] text-slate-400">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="mt-1 block break-words text-[13px] font-medium text-slate-600 transition-colors hover:text-teal-700"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="mt-1 break-words text-[13px] font-medium text-slate-600">
                        {value}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-5 border-t border-slate-200/80 pt-7 sm:flex-row">
          <p className="text-[11px] text-slate-400">
            © {new Date().getFullYear()} Zenvika Inc. {text.rights}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[11px] text-slate-400">
            <span className="inline-flex items-center gap-1.5">
              <Globe className="h-3.5 w-3.5 text-teal-600" />
              <span>{text.engine}</span>
            </span>
            <span aria-hidden="true">•</span>
            <span className="inline-flex items-center gap-1.5">
              <span>{text.madeWith}</span>
              <Heart className="h-3 w-3 fill-rose-500 text-rose-500" />
              <span>{text.forMerchants}</span>
            </span>
          </div>

          <Link
            to="/#home"
            className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-[11px] font-bold text-slate-600 shadow-sm transition-all duration-300 hover:border-teal-300 hover:text-teal-700 hover:shadow-md hover:shadow-teal-600/15"
          >
            <ArrowUp className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
            <span>{text.backToTop}</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
