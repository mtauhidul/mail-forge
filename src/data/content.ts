// ============================================
// MailForge AI — All Landing Page Copy
// Edit text here, it propagates everywhere
// ============================================

export const content = {
  nav: {
    logo: 'MailForge',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'How it works', href: '#how-it-works' },
      { label: 'Demo', href: '#demo' },
      { label: 'Pricing', href: '#pricing' },
    ],
    cta: 'Get started free',
  },

  hero: {
    badge: 'AI-powered email writing',
    headline: 'Write perfect emails',
    headlineAccent: 'in 10 seconds',
    subheadline:
      'MailForge AI writes professional, personalized emails for any scenario — cold outreach, follow-ups, newsletters, and more. Just describe what you need.',
    ctaPrimary: 'Start writing for free',
    ctaSecondary: 'See how it works',
    trust: '10,000+ professionals trust MailForge',
    trustStats: [
      { value: '10K+', label: 'Active users' },
      { value: '4.9★', label: 'Average rating' },
      { value: '2 min', label: 'Avg. time saved per email' },
    ],
    demoPlaceholder:
      'e.g. "Follow up with a lead I met at a conference last week..."',
    demoButton: 'Generate email',
    demoTones: ['Professional', 'Friendly', 'Casual', 'Persuasive'],
  },

  problem: {
    badge: 'Sound familiar?',
    headline: 'Email is killing your productivity',
    subheadline:
      'The average professional spends 2.5 hours a day on email. Most of that time is wasted.',
    items: [
      {
        icon: '⏰',
        title: 'Staring at a blank screen',
        desc: "Writer's block hits every time you need to send an important email.",
      },
      {
        icon: '🔄',
        title: 'Writing the same emails over',
        desc: 'You rewrite nearly identical follow-ups and outreach emails every single day.',
      },
      {
        icon: '😬',
        title: 'Worrying about your tone',
        desc: 'Is this too formal? Too casual? Does it sound desperate? The second-guessing never ends.',
      },
      {
        icon: '🌐',
        title: 'Struggling in a second language',
        desc: "Writing professional English emails is exhausting when it's not your first language.",
      },
      {
        icon: '📉',
        title: 'Low reply rates on outreach',
        desc: "Your cold emails get ignored because they sound like everyone else's cold emails.",
      },
    ],
  },

  howItWorks: {
    badge: 'Simple by design',
    headline: 'From blank page to perfect email in three steps',
    steps: [
      {
        number: '01',
        title: 'Choose your email type',
        desc: 'Pick from cold outreach, follow-up, newsletter, support reply, job application, and more.',
        icon: '📋',
      },
      {
        number: '02',
        title: 'Add context',
        desc: "Tell MailForge who you're writing to, what you want to say, and what tone fits best.",
        icon: '✍️',
      },
      {
        number: '03',
        title: 'Get your perfect email',
        desc: 'Instantly receive a polished, ready-to-send email. Edit, copy, or regenerate in one click.',
        icon: '✨',
      },
    ],
  },

  features: {
    badge: 'Everything you need',
    headline: 'Built for people who take email seriously',
    subheadline:
      'Every feature is designed to save time and help you communicate better.',
    items: [
      {
        title: '20+ Email Templates',
        desc: 'Ready-made templates for every situation — sales, HR, support, marketing, and more.',
        icon: '📂',
        size: 'large',
      },
      {
        title: 'Tone Selector',
        desc: 'Switch between Professional, Friendly, Casual, and Persuasive with one click.',
        icon: '🎭',
        size: 'small',
      },
      {
        title: '30+ Languages',
        desc: 'Write in your language, send globally. MailForge handles translation and localization.',
        icon: '🌍',
        size: 'small',
      },
      {
        title: 'Subject Line Generator',
        desc: 'Get 5 subject line variations ranked by predicted open rate.',
        icon: '📧',
        size: 'small',
      },
      {
        title: 'Email Sequence Builder',
        desc: 'Build multi-step drip campaigns that feel personal at every touchpoint.',
        icon: '🔗',
        size: 'large',
      },
      {
        title: 'One-Click Rewrite',
        desc: 'Paste any existing email and instantly improve the clarity, tone, and impact.',
        icon: '⚡',
        size: 'small',
      },
    ],
  },

  demo: {
    badge: 'See it in action',
    headline: 'Before MailForge. After MailForge.',
    subheadline: 'See the difference a well-crafted email makes.',
    tabs: ['Cold Outreach', 'Follow-up', 'Newsletter', 'Support'],
  },

  useCases: {
    badge: "Who it's for",
    headline: 'Great emails for every profession',
    items: [
      {
        icon: '🚀',
        title: 'Sales Teams',
        desc: 'Write cold outreach and follow-ups that actually get responses.',
      },
      {
        icon: '💼',
        title: 'Entrepreneurs',
        desc: 'Communicate professionally with partners, investors, and clients.',
      },
      {
        icon: '🎓',
        title: 'Students',
        desc: 'Email professors, apply for internships, and reach out to mentors confidently.',
      },
      {
        icon: '🌍',
        title: 'Non-native Speakers',
        desc: 'Write flawless professional English without the second-guessing.',
      },
      {
        icon: '💼',
        title: 'Job Seekers',
        desc: 'Stand out with compelling cover letters and follow-up emails.',
      },
      {
        icon: '🎧',
        title: 'Support Teams',
        desc: 'Respond to customer issues with empathy, clarity, and speed.',
      },
    ],
  },

  testimonials: {
    badge: 'Loved by thousands',
    headline: 'What our users say',
  },

  pricing: {
    badge: 'Simple pricing',
    headline: 'Start free, scale when ready',
    subheadline: 'No hidden fees. Cancel anytime.',
    annualDiscount: 'Save 20%',
    plans: [
      {
        name: 'Free',
        price: { monthly: 0, annual: 0 },
        desc: 'Perfect for trying it out.',
        cta: 'Get started',
        ctaVariant: 'secondary' as const,
        features: [
          '10 emails per month',
          '5 templates',
          '3 tones',
          'Basic subject lines',
          'Email support',
        ],
        highlighted: false,
      },
      {
        name: 'Pro',
        price: { monthly: 12, annual: 9 },
        desc: 'For professionals who email every day.',
        cta: 'Start free trial',
        ctaVariant: 'primary' as const,
        badge: 'Most popular',
        features: [
          'Unlimited emails',
          'All 20+ templates',
          'All tones & languages',
          'Subject line generator',
          'One-click rewrite',
          'Email sequence builder',
          'Priority support',
        ],
        highlighted: true,
      },
      {
        name: 'Enterprise',
        price: { monthly: null, annual: null },
        desc: 'For teams with custom needs.',
        cta: 'Contact sales',
        ctaVariant: 'secondary' as const,
        features: [
          'Everything in Pro',
          'Team collaboration',
          'Custom templates',
          'API access',
          'SSO / SAML',
          'Dedicated account manager',
          'SLA guarantee',
        ],
        highlighted: false,
      },
    ],
  },

  cta: {
    badge: 'Ready to start?',
    headline: 'Write better emails starting today',
    subheadline:
      'Join 10,000+ professionals who save hours every week with MailForge AI.',
    ctaPrimary: 'Start for free',
    ctaSecondary: 'See pricing',
    note: 'No credit card required. Free plan available forever.',
  },

  footer: {
    tagline: 'Write perfect emails in seconds with AI.',
    columns: [
      {
        title: 'Product',
        links: [
          { label: 'Features', href: '#features' },
          { label: 'Pricing', href: '#pricing' },
          { label: 'Changelog', href: '#' },
          { label: 'Roadmap', href: '#' },
        ],
      },
      {
        title: 'Resources',
        links: [
          { label: 'Blog', href: '#' },
          { label: 'Documentation', href: '#' },
          { label: 'Templates', href: '#' },
          { label: 'API', href: '#' },
        ],
      },
      {
        title: 'Company',
        links: [
          { label: 'About', href: '#' },
          { label: 'Careers', href: '#' },
          { label: 'Privacy', href: '#' },
          { label: 'Terms', href: '#' },
        ],
      },
    ],
    socials: [
      { label: 'Twitter', href: '#', icon: 'twitter' },
      { label: 'GitHub', href: '#', icon: 'github' },
      { label: 'LinkedIn', href: '#', icon: 'linkedin' },
    ],
    copyright: `© ${new Date().getFullYear()} MailForge AI. All rights reserved.`,
  },
}
