// ============================================
// MailForge AI — Mock Data
// Demo emails, testimonials, use-case previews
// ============================================

export type EmailTone = 'Professional' | 'Friendly' | 'Casual' | 'Persuasive'

export interface EmailExample {
  type: string
  before: string
  after: Record<EmailTone, { subject: string; body: string }>
}

// ── Demo Email Examples ───────────────────────────────────────────────────────

export const emailExamples: EmailExample[] = [
  {
    type: 'Cold Outreach',
    before:
      'Hi, I wanted to reach out about possibly working together. I think we could do some good business. Let me know if you want to talk.',
    after: {
      Professional: {
        subject: 'Helping [Company] reduce email response time by 60%',
        body: `Hi Sarah,

I came across [Company]'s recent expansion into enterprise markets and noticed your team is scaling quickly.

At MailForge, we help sales teams write better outreach emails in a fraction of the time — companies like Acme Corp reduced their email drafting time by 60% in the first month.

Would you be open to a 15-minute call this week to explore if there's a fit?

Best,
Alex`,
      },
      Friendly: {
        subject: "Quick question about [Company]'s email workflow",
        body: `Hey Sarah!

I've been following [Company]'s growth and I'm genuinely impressed with what you've built.

I run MailForge — we help teams like yours spend less time writing emails and more time closing deals. Thought it might be worth a quick chat!

Would love to grab 15 minutes if you're up for it. No pressure at all!

Cheers,
Alex`,
      },
      Casual: {
        subject: 'Had an idea for [Company]',
        body: `Hey Sarah,

Saw you guys just hit 500 customers — congrats!

I've got a tool that could probably save your team a couple hours a week on email. Happy to show you a quick demo if you're curious.

Let me know!
Alex`,
      },
      Persuasive: {
        subject: "Your team is losing 2+ hours daily to email (here's the fix)",
        body: `Hi Sarah,

The average sales rep spends 2.5 hours every day writing emails. That's 12+ hours a week not selling.

MailForge cuts that in half — our AI writes personalized, high-converting outreach in seconds, not minutes.

[Company]'s competitors are already using tools like this. I'd love to show you how it works in a 15-minute demo.

Are you free Thursday or Friday this week?

Alex`,
      },
    },
  },
  {
    type: 'Follow-up',
    before:
      'Hi, just following up on my last email. Did you get a chance to look at it? Let me know.',
    after: {
      Professional: {
        subject: 'Following up — MailForge demo for [Company]',
        body: `Hi Sarah,

I wanted to follow up on my email from last week regarding MailForge.

I understand you're busy, so I'll keep this brief: we're currently offering a 30-day free trial with full access, and I'd love to get you set up before month-end.

If now isn't the right time, just let me know and I'll circle back in Q3.

Best,
Alex`,
      },
      Friendly: {
        subject: 'Circling back 👋',
        body: `Hey Sarah,

Just bubbling this back up in case it got buried!

Would still love to show you what MailForge can do for your team. Even a quick 10-minute chat would be great.

If the timing is off, totally fine — just say the word and I'll reach out again later!

Alex`,
      },
      Casual: {
        subject: 'Still interested?',
        body: `Hey Sarah,

Just checking in on my last message. Still think MailForge could be a good fit for what you're doing.

If you're keen, let's find 15 minutes. If not, no worries at all!

Alex`,
      },
      Persuasive: {
        subject: 'Last follow-up — free trial ending soon',
        body: `Hi Sarah,

I'll be honest — I don't want to keep pinging you, so this will be my last follow-up.

The 30-day free trial I mentioned is open for one more week. After that, we're switching to a waitlist model.

If saving your team 5+ hours a week on email sounds valuable, now's the best time to try it.

Here's the link to get started: [link]

Alex`,
      },
    },
  },
  {
    type: 'Newsletter',
    before:
      'Here is our monthly newsletter. We have some updates and news to share with you this month.',
    after: {
      Professional: {
        subject: 'MailForge Monthly: 3 email trends reshaping sales in 2026',
        body: `Hi [First Name],

This month we're covering three shifts in email communication that top sales teams are already acting on.

**1. AI-personalized subject lines outperform generic ones by 47%**
Our data shows that subject lines tailored to recipient context are driving significantly higher open rates...

**2. Shorter emails are winning**
The sweet spot? 75–125 words. Here's how to cut the fluff without losing the message...

**3. Follow-up sequences are back**
After years of "one and done" outreach, multi-step sequences are seeing a revival...

Read the full breakdown →

Best,
The MailForge Team`,
      },
      Friendly: {
        subject: "✉️ This month in email: what's actually working",
        body: `Hey [First Name]!

Happy [Month]! We've been digging through a ton of data this month and found some really interesting stuff about what's making emails land in 2026.

Here's the quick version:

🎯 Personalized subject lines = 47% better open rates
✂️ 75–125 words is the sweet spot for replies
🔁 Multi-step follow-ups are making a comeback

We wrote a full breakdown on the blog — it's a good one, promise!

Read it here →

Have a great week,
The MailForge Team 👋`,
      },
      Casual: {
        subject: 'Email stuff you should know this month',
        body: `Hey [First Name],

Quick one this month — three things that are actually working in email right now:

1. Personalized subject lines (47% better opens)
2. Short emails win (75-125 words)
3. Follow-up sequences are back

Full post on the blog if you want the details.

- MailForge`,
      },
      Persuasive: {
        subject:
          'Your competitors are sending better emails than you (data inside)',
        body: `Hi [First Name],

We analyzed 500,000 emails sent through MailForge last month. The results are clear:

Teams using AI-assisted email are seeing:
• 47% higher open rates
• 3x more replies to cold outreach
• 60% less time spent drafting

The gap between manual emailers and AI-assisted teams is growing every month.

Don't get left behind — read this month's data breakdown and see exactly what the top performers are doing differently.

Read the full report →

The MailForge Team`,
      },
    },
  },
  {
    type: 'Support',
    before: 'Sorry for the problem. We will look into it and get back to you.',
    after: {
      Professional: {
        subject: "Re: Issue with email generation — We're on it",
        body: `Hi [Customer Name],

Thank you for reaching out, and I sincerely apologize for the inconvenience you're experiencing.

I've escalated this to our technical team as a priority. Based on your description, this appears to be related to a recent update we pushed on Tuesday — we're actively working on a fix.

Expected resolution: within 24 hours.

In the meantime, you can work around this by [workaround steps]. I'll follow up personally once the issue is resolved.

Best regards,
Jordan — MailForge Support`,
      },
      Friendly: {
        subject: "Re: Issue with email generation — We've got you!",
        body: `Hi [Customer Name]!

Oh no, I'm really sorry this happened — that's definitely not the experience we want you to have!

Good news: our team is already aware of this issue and working on a fix. We expect it to be resolved within the next 24 hours.

In the meantime, [workaround] should help you get back on track.

I'll personally ping you the moment it's fixed. Thanks so much for your patience! 🙏

Jordan — MailForge Support`,
      },
      Casual: {
        subject: "Re: Issue — we're fixing it",
        body: `Hey [Customer Name],

Sorry about that! We're aware of the issue and working on a fix — should be sorted within 24 hours.

For now, [workaround] should do the trick.

I'll let you know as soon as it's resolved!

Jordan`,
      },
      Persuasive: {
        subject: 'Re: Your issue — fixed by tomorrow + something extra',
        body: `Hi [Customer Name],

First — I'm truly sorry for the disruption. Your time is valuable and we dropped the ball here.

Here's what we're doing about it:
• Fix is in progress — live within 24 hours
• Workaround available now: [steps]
• We're crediting your account with 7 extra days of Pro as an apology

We want to earn back your trust. If there's anything else I can do, reply directly to this email — I'll personally take care of it.

Jordan — MailForge Support`,
      },
    },
  },
]

// ── Testimonials ──────────────────────────────────────────────────────────────

export interface Testimonial {
  name: string
  role: string
  company: string
  avatar: string
  rating: number
  text: string
}

export const testimonials: Testimonial[] = [
  {
    name: 'Sarah Chen',
    role: 'Head of Sales',
    company: 'Growthly',
    avatar: 'SC',
    rating: 5,
    text: 'MailForge completely changed how our sales team operates. We went from spending 2 hours on outreach emails to 20 minutes. Our reply rates went up 40% in the first month.',
  },
  {
    name: 'Marcus Rivera',
    role: 'Founder & CEO',
    company: 'Stacklane',
    avatar: 'MR',
    rating: 5,
    text: "As a non-native English speaker running a startup, writing professional emails was always stressful. Now I just describe what I need and get a perfect email instantly. It's genuinely life-changing.",
  },
  {
    name: 'Emily Watson',
    role: 'Product Manager',
    company: 'Notion',
    avatar: 'EW',
    rating: 5,
    text: 'The tone selector is brilliant. I used to agonize over whether to be formal or casual. Now I generate both versions and pick the one that feels right. Saves me so much mental energy.',
  },
  {
    name: 'David Park',
    role: 'Senior Recruiter',
    company: 'Talent.io',
    avatar: 'DP',
    rating: 5,
    text: 'I send 50+ outreach emails a day. MailForge cut my drafting time by 70%. The emails it writes are genuinely better than what I was writing myself — more personalized, better subject lines.',
  },
  {
    name: 'Priya Sharma',
    role: 'Customer Success Lead',
    company: 'Intercom',
    avatar: 'PS',
    rating: 5,
    text: "Our support team's response time dropped by half after we started using MailForge. The empathy and clarity in the AI-generated responses is impressive. Customers notice the difference.",
  },
  {
    name: 'Tom Lindqvist',
    role: 'Freelance Consultant',
    company: 'Independent',
    avatar: 'TL',
    rating: 5,
    text: "I was skeptical about AI writing tools but MailForge nailed it. The emails don't feel generic at all. I've been using it for 6 months and I can't imagine going back to writing from scratch.",
  },
]

// ── Hero Demo Suggestions ─────────────────────────────────────────────────────

export const demoSuggestions = [
  'Follow up with a lead I met at a conference last week',
  'Cold outreach to a VP of Sales at a SaaS company',
  'Apologize to a client for missing a deadline',
  'Ask my manager for a raise',
  'Reach out to a potential mentor in my industry',
  'Newsletter announcing our new product feature',
]

// ── Generated Demo Email (shown in hero) ─────────────────────────────────────

export const heroDemoResult = {
  subject: 'Great meeting you at SaaStr — quick follow-up',
  body: `Hi [Name],

It was genuinely great meeting you at SaaStr last week. I loved your perspective on building sales teams that prioritize quality over volume.

I'd love to continue the conversation — specifically around how [their company] is approaching outbound in this market. I have a few ideas I think could be relevant.

Would you be open to a 20-minute call sometime next week?

Best,
[Your name]`,
}
