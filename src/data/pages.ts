export type PageInfo = {
  path: string
  eyebrow: string
  title: string
  description: string
  points: string[]
}

export const infoPages: PageInfo[] = [
  {
    path: '/platform/omnichannel-sync',
    eyebrow: 'Platform',
    title: 'Omnichannel Sync',
    description:
      'Keep inventory, orders and customers perfectly consistent across every channel you sell on — one source of truth, always.',
    points: [
      'Unified stock ledger across every channel',
      'Two-way sync with marketplaces and POS',
      'Set up new channels in minutes, not weeks',
      'Conflict-free updates with automatic reconciliation',
    ],
  },
  {
    path: '/platform/global-checkout',
    eyebrow: 'Platform',
    title: 'Global Checkout',
    description:
      'A one-page checkout that speaks your customer’s language, currency and payment habits — wherever they are.',
    points: [
      '135+ currencies with smart rounding',
      'Local wallets, cards and bank transfers',
      'Tax and duties calculated at checkout',
      'Apple Pay, Google Pay and one-click wallets',
    ],
  },
  {
    path: '/platform/analytics',
    eyebrow: 'Platform',
    title: 'Real-time Analytics',
    description:
      'Dashboards that answer real questions the moment you ask them — revenue, conversion, cohorts and product performance.',
    points: [
      'Live revenue and conversion dashboards',
      'Cohort, retention and repeat-purchase reports',
      'Custom reports saved for your team',
      'CSV export and reporting API',
    ],
  },
  {
    path: '/platform/inventory',
    eyebrow: 'Platform',
    title: 'Inventory Automation',
    description:
      'Never oversell again. Zenvika watches every unit for you and reorders before you run dry.',
    points: [
      'Low-stock alerts on channels you choose',
      'Automatic reorder points per product',
      'Multi-warehouse and bin-level tracking',
      'Batch, serial and expiry tracking',
    ],
  },
  {
    path: '/platform/orders',
    eyebrow: 'Platform',
    title: 'Order Management',
    description:
      'From checkout to doorstep — every order in one queue with the next action always obvious.',
    points: [
      'Single fulfilment queue for all channels',
      'Split, merge and partial fulfilment',
      'Live shipping rates from 40+ carriers',
      'Returns and refunds handled in-place',
    ],
  },
  {
    path: '/solutions/direct-to-consumer',
    eyebrow: 'Solutions',
    title: 'Direct to Consumer',
    description:
      'Launch a storefront that feels like your brand and turns visitors into repeat customers.',
    points: [
      'Beautiful, fast storefront themes',
      'Abandoned cart recovery out of the box',
      'Loyalty, rewards and subscription tools',
      'Social and marketplace selling built in',
    ],
  },
  {
    path: '/solutions/b2b-wholesale',
    eyebrow: 'Solutions',
    title: 'B2B Wholesale',
    description:
      'Give wholesale buyers a self-serve portal with the pricing, terms and approvals they expect.',
    points: [
      'Customer-specific price lists',
      'Net terms, credit limits and approvals',
      'Bulk order forms and CSV ordering',
      'Quote-to-order in a single flow',
    ],
  },
  {
    path: '/solutions/cross-border',
    eyebrow: 'Solutions',
    title: 'Global Cross-Border',
    description:
      'Sell into new markets without standing up new infrastructure — pricing, tax and logistics included.',
    points: [
      'Localized pricing per region',
      'Duties and taxes handled upfront',
      'Regional carriers and localised delivery',
      'Translated storefront content',
    ],
  },
  {
    path: '/solutions/enterprise',
    eyebrow: 'Solutions',
    title: 'Enterprise Retail',
    description:
      'For established brands running many stores, many teams and zero tolerance for downtime.',
    points: [
      'Multiple stores and brands in one account',
      'SSO, granular roles and audit logs',
      '99.99% uptime SLA',
      'Dedicated success manager',
    ],
  },
  {
    path: '/solutions/developers',
    eyebrow: 'Solutions',
    title: 'Developer API',
    description:
      'Everything in Zenvika is accessible from code — build custom flows without fighting the platform.',
    points: [
      'REST API with predictable resources',
      'Real-time webhooks for every event',
      'Sandbox keys and test data',
      'Official SDKs for Node and Python',
    ],
  },
  {
    path: '/company/about',
    eyebrow: 'Company',
    title: 'About Zenvika',
    description:
      'Zenvika started when our own retail operation outgrew spreadsheets and duct-taped tools. Today it powers thousands of stores — from first-sale side projects to multi-warehouse brands.',
    points: [
      'Founded by merchants, for merchants',
      'Remote-first team across 9 countries',
      'Profitable and independent since day one',
      'Trusted by 12,000+ stores worldwide',
    ],
  },
  {
    path: '/company/careers',
    eyebrow: 'Company',
    title: 'Careers',
    description:
      'We are a small team with a large surface area. If you like ownership, shipping and honest feedback, you will like it here.',
    points: [
      'Remote-first with quarterly meetups',
      'Annual learning and conference budget',
      'Health cover for you and your family',
      'Meaningful equity for every role',
    ],
  },
  {
    path: '/legal/privacy',
    eyebrow: 'Legal',
    title: 'Privacy Policy',
    description:
      'We only collect what we need to run your store and improve the product — and we never sell your data.',
    points: [
      'Data you sell with, you own',
      'Encryption in transit and at rest',
      'GDPR and DPDP compliant workflows',
      'Export or delete your data any time',
    ],
  },
  {
    path: '/legal/terms',
    eyebrow: 'Legal',
    title: 'Terms of Service',
    description:
      'Plain-language terms that cover how you use Zenvika, what we promise and what we expect in return.',
    points: [
      'Month-to-month billing, cancel anytime',
      '99.9% platform uptime commitment',
      'Fair-use limits published openly',
      'Governing law: Bangladesh',
    ],
  },
]
