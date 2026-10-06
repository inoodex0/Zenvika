import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from '../Logo'
import {
  ArrowRight,
  Boxes,
  ChartColumn,
  Check,
  ChevronDown,
  ClipboardList,
  Coins,
  Menu,
  X,
  type LucideIcon,
} from 'lucide-react'

const text = {
  home: 'Home',
  pricing: 'Pricing',
  solutions: 'Solutions',
  features: 'Features',
  testimonials: 'Testimonials',
  contactUs: 'Contact Us',
  openStore: 'Open Free Store',
  menuLabel: 'Open menu',
  languageLabel: 'Language',
  currencyLabel: 'Currency',
} as const

const currencies = ['USD ($)', 'BDT (৳)', 'EUR (€)', 'SAR (ر.س)']

const solutionKeys = ['inventory', 'orders', 'analytics'] as const

type SolutionKey = (typeof solutionKeys)[number]

const solutionIcons: Record<SolutionKey, LucideIcon> = {
  inventory: Boxes,
  orders: ClipboardList,
  analytics: ChartColumn,
}

const solutions: Record<SolutionKey, { label: string; caption: string }> = {
  inventory: {
    label: 'Inventory',
    caption: 'Track stock across warehouses',
  },
  orders: {
    label: 'Orders',
    caption: 'Manage orders end to end',
  },
  analytics: {
    label: 'Analytics',
    caption: 'Insights that drive sales',
  },
}

const languages = [
  { code: 'en', abbr: 'US', name: 'English' },
  { code: 'bn', abbr: 'BD', name: 'বাংলা' },
  { code: 'ar', abbr: 'SA', name: 'العربية' },
  { code: 'es', abbr: 'ES', name: 'Español' },
  { code: 'fr', abbr: 'FR', name: 'Français' },
  { code: 'de', abbr: 'DE', name: 'Deutsch' },
  { code: 'it', abbr: 'IT', name: 'Italiano' },
] as const

type LocaleCode = (typeof languages)[number]['code']

type OpenMenu = 'lang' | 'curr' | 'solutions' | null

const linkClass =
  'relative text-[15px] font-medium text-foreground/60 transition-colors hover:text-foreground ' +
  'after:absolute after:-bottom-2 after:start-0 after:h-[2px] after:w-0 after:rounded-full ' +
  'after:bg-gradient-to-r after:from-teal-600 after:to-emerald-600 ' +
  'after:transition-all after:duration-300 hover:after:w-full'

const toolClass =
  'flex h-9 items-center gap-2 rounded-full border px-2.5 ' +
  'text-[13px] font-semibold text-foreground/85 transition-all ' +
  'shadow-[0_1px_2px_rgba(16,24,40,0.05)] hover:border-teal-300 hover:bg-white ' +
  'hover:text-foreground hover:shadow-[0_8px_18px_-10px_rgba(13,148,136,0.55)]'

const toolOpenClass =
  'border-teal-300 bg-white text-foreground shadow-[0_8px_18px_-10px_rgba(13,148,136,0.55)]'

const chipClass =
  'flex h-6 w-6 shrink-0 items-center justify-center rounded-full ring-1 ring-inset'

const chevronClass = (open: boolean) =>
  `h-3.5 w-3.5 shrink-0 opacity-40 transition-transform duration-200 ${
    open ? 'rotate-180' : ''
  }`

const panelClass =
  'absolute top-full z-50 mt-2.5 rounded-2xl border border-nav-border bg-card p-1.5 ' +
  'shadow-[0_24px_56px_-24px_rgba(16,24,40,0.5)] animate-drop-in'

const panelLabelClass =
  'px-3 pb-1 pt-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-foreground/40'

const itemClass = (selected: boolean) =>
  `flex h-9 w-full items-center gap-2.5 rounded-xl px-3 text-[13px] font-medium transition-colors ${
    selected
      ? 'bg-teal-50 text-teal-700'
      : 'text-foreground/80 hover:bg-muted hover:text-foreground'
  }`

const symbolOf = (currency: string) =>
  currency.match(/\(([^)]+)\)/)?.[1] ?? currency

export default function Navbar() {
  const headerRef = useRef<HTMLElement>(null)
  const [openMenu, setOpenMenu] = useState<OpenMenu>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [selectedCurr, setSelectedCurr] = useState<string>(currencies[0])
  const [selectedLang, setSelectedLang] = useState<LocaleCode>('en')
  const { pathname } = useLocation()

  const currentLang =
    languages.find((lang) => lang.code === selectedLang) ?? languages[0]

  const toggle = (menu: Exclude<OpenMenu, null>) =>
    setOpenMenu((value) => (value === menu ? null : menu))

  const canHover = () =>
    typeof window !== 'undefined' &&
    window.matchMedia('(hover: hover) and (pointer: fine)').matches

  const closeAll = () => {
    setOpenMenu(null)
    setMobileOpen(false)
  }

  useEffect(() => {
    const onPointerDown = (event: PointerEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        closeAll()
      }
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeAll()
    }

    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [])

  const goHome = () => {
    closeAll()
    if (pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const navLinks = (
    <>
      <Link to="/" className={linkClass} onClick={goHome}>
        {text.home}
      </Link>
      <Link to="/pricing" className={linkClass} onClick={closeAll}>
        {text.pricing}
      </Link>
      <div
        className="relative"
        onMouseEnter={() => {
          if (canHover()) setOpenMenu('solutions')
        }}
        onMouseLeave={() => {
          if (canHover())
            setOpenMenu((value) => (value === 'solutions' ? null : value))
        }}
      >
        <button
          type="button"
          aria-haspopup="menu"
          aria-expanded={openMenu === 'solutions'}
          onClick={() => {
            if (canHover()) setOpenMenu('solutions')
            else toggle('solutions')
          }}
          className={`${linkClass} flex items-center gap-1 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500/45`}
        >
          {text.solutions}
          <ChevronDown
            className={`h-3.5 w-3.5 transition-transform duration-200 ${
              openMenu === 'solutions' ? 'rotate-180' : 'rotate-0'
            }`}
          />
        </button>
        {openMenu === 'solutions' && (
          <div className={`${panelClass} start-0 w-[19.5rem] p-2`}>
            <p className={panelLabelClass}>{text.solutions}</p>
            {solutionKeys.map((key) => {
              const Icon = solutionIcons[key]
              const solution = solutions[key]
              return (
                <Link
                  key={key}
                  to={`/solutions/${key}`}
                  onClick={closeAll}
                  className="group flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-teal-50/70 focus-visible:bg-teal-50/70 focus-visible:outline-none"
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-teal-500 to-emerald-600 text-white shadow-[0_6px_14px_-6px_rgba(13,148,136,0.85)] transition-transform duration-200 group-hover:scale-105">
                    <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-[13.5px] font-semibold text-slate-900">
                      {solution.label}
                    </span>
                    <span className="mt-0.5 block truncate text-[11.5px] font-medium leading-4 text-slate-500">
                      {solution.caption}
                    </span>
                  </span>
                  <ArrowRight
                    className="h-3.5 w-3.5 shrink-0 translate-x-0 text-teal-600 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100"
                    aria-hidden="true"
                  />
                </Link>
              )
            })}
          </div>
        )}
      </div>
      <Link to="/features" className={linkClass} onClick={closeAll}>
        {text.features}
      </Link>
      <Link to="/testimonials" className={linkClass} onClick={closeAll}>
        {text.testimonials}
      </Link>
    </>
  )

  const languageMenu = (align: 'start' | 'end') => (
    <div className="relative">
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={openMenu === 'lang'}
        aria-label={text.languageLabel}
        onClick={() => toggle('lang')}
        className={`${toolClass} border-nav-border ${
          openMenu === 'lang' ? toolOpenClass : ''
        } cursor-pointer`}
      >
        <span
          className={`${chipClass} bg-teal-50 px-1.5 text-[11px] leading-none ring-teal-100 font-bold`}
        >
          {currentLang.abbr}
        </span>
        <span className="hidden sm:inline">{currentLang.name}</span>
        <ChevronDown className={chevronClass(openMenu === 'lang')} />
      </button>
      {openMenu === 'lang' && (
        <div
          className={`${panelClass} ${align === 'end' ? 'end-0' : 'start-0'} w-52`}
        >
          <p className={panelLabelClass}>{text.languageLabel}</p>
          {languages.map((lang) => (
            <button
              key={lang.code}
              type="button"
              onClick={() => {
                setSelectedLang(lang.code)
                closeAll()
              }}
              className={`${itemClass(selectedLang === lang.code)} cursor-pointer`}
            >
              <span className="grid h-6 w-7 shrink-0 place-items-center rounded-md bg-slate-100 text-[10.5px] font-bold uppercase leading-none text-slate-700 ring-1 ring-inset ring-slate-200">
                {lang.abbr}
              </span>
              <span>{lang.name}</span>
              {selectedLang === lang.code && (
                <Check className="ms-auto h-4 w-4 shrink-0 text-teal-700" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )

  const currencyMenu = (align: 'start' | 'end') => (
    <div className="relative">
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={openMenu === 'curr'}
        aria-label={text.currencyLabel}
        onClick={() => toggle('curr')}
        className={`${toolClass} border-nav-border ${
          openMenu === 'curr' ? toolOpenClass : ''
        } cursor-pointer`}
      >
        <span className={`${chipClass} bg-amber-50 text-amber-600 ring-amber-100`}>
          <Coins className="h-3.5 w-3.5" />
        </span>
        <span className="hidden sm:inline">{selectedCurr}</span>
        <span className="sm:hidden">{symbolOf(selectedCurr)}</span>
        <ChevronDown className={chevronClass(openMenu === 'curr')} />
      </button>
      {openMenu === 'curr' && (
        <div
          className={`${panelClass} ${align === 'end' ? 'end-0' : 'start-0'} w-44`}
        >
          <p className={panelLabelClass}>{text.currencyLabel}</p>
          {currencies.map((curr) => (
            <button
              key={curr}
              type="button"
              onClick={() => {
                setSelectedCurr(curr)
                closeAll()
              }}
              className={`${itemClass(selectedCurr === curr)} cursor-pointer`}
            >
              <span>{curr}</span>
              {selectedCurr === curr && (
                <Check className="ms-auto h-4 w-4 shrink-0 text-teal-700" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )

  const actions = (
    <>
      <Link
        to="/contact"
        onClick={closeAll}
        className="shrink-0 whitespace-nowrap rounded-full border border-nav-border/80 bg-white/80 px-4 py-2 text-[13px] font-semibold text-foreground/80 shadow-[0_1px_2px_rgba(16,24,40,0.04)] backdrop-blur-sm transition-all duration-200 hover:border-teal-300 hover:bg-white hover:text-foreground hover:shadow-[0_4px_12px_-4px_rgba(13,148,136,0.2)] active:scale-[0.98] cursor-pointer"
      >
        {text.contactUs}
      </Link>
      <Link
        to="/open-store"
        onClick={closeAll}
        className="group relative inline-flex shrink-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-full bg-gradient-to-r from-teal-600 via-emerald-600 to-teal-600 bg-[length:200%_auto] px-5 py-2 text-[13px] font-semibold text-white shadow-[0_8px_20px_-6px_rgba(13,148,136,0.7)] ring-1 ring-inset ring-white/25 transition-all duration-300 hover:bg-[position:right_center] hover:shadow-[0_12px_28px_-6px_rgba(13,148,136,0.85)] active:scale-[0.97] cursor-pointer"
      >
        <span>{text.openStore}</span>
        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
      </Link>
    </>
  )

  return (
    <header
      ref={headerRef}
      className="relative z-40 w-full border-b border-nav-border bg-[linear-gradient(180deg,#f9fbff_0%,#f1f5ff_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:h-20 lg:px-8">
        <Link
          to="/"
          onClick={goHome}
          aria-label={text.home}
          className="flex shrink-0 items-center gap-2.5 rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-teal-500/40"
        >
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 xl:flex xl:gap-9">
          {navLinks}
        </nav>

        <div className="hidden items-center gap-2.5 lg:flex">
          {currencyMenu('end')}
          {languageMenu('end')}
          <span
            className="mx-1.5 h-6 w-px bg-gradient-to-b from-transparent via-[#c8d6f2] to-transparent"
            aria-hidden="true"
          />
          <div className="flex items-center gap-1.5">{actions}</div>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label={text.menuLabel}
          aria-expanded={mobileOpen}
          className="-me-2 rounded-xl border border-transparent p-2 text-foreground transition-all hover:border-nav-border hover:bg-white xl:hidden"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-nav-border bg-[linear-gradient(180deg,#f9fbff_0%,#f1f5ff_100%)] px-4 pb-6 pt-5 sm:px-6 animate-slide-down xl:hidden">
          <nav className="flex flex-col gap-5 text-sm font-medium text-foreground/75">
            {navLinks}
          </nav>
          <div className="mt-6 flex flex-wrap items-center gap-2">
            {currencyMenu('start')}
            {languageMenu('start')}
          </div>
          <div className="mt-6 flex flex-col gap-2 sm:flex-row">{actions}</div>
        </div>
      )}
    </header>
  )
}
