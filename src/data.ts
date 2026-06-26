import { Shield, Cpu, Zap, Database } from 'lucide-react';
import { FeatureItem, PricingConfig, TestimonialItem, FAQItem, ArticleItem } from './types';

export const FEATURES_DATA: FeatureItem[] = [
  {
    id: 'secure-guard',
    title: 'Secure Guard',
    tag: 'Safety & Compliance',
    desc: 'Enterprise-grade firewall with real-time prompt sanitation, sensitive data scrubbing, and policy enforcement.',
    detailedDesc: 'Our advanced firewall sits between your system and the models, scrubbing PII, intercepting prompt injections, and guaranteeing SOC-2 compliance with 11ms latency. Protect your corporate intelligence autonomously.',
    stat: '99.99% Secure',
    icon: Shield,
    color: 'from-blue-500/15 via-indigo-500/10 to-transparent'
  },
  {
    id: 'agent-builder',
    title: 'Agent Builder',
    tag: 'Visual Orchestration',
    desc: 'An intuitive, node-based drag-and-drop workspace to design complex multi-agent workflows with branching logic.',
    detailedDesc: 'Connect LLMs, vector search steps, and custom API integrations. Define conditional edges, loop parameters, and custom error boundaries visually, with zero programming required.',
    stat: '10x Speedup',
    icon: Cpu,
    color: 'from-amber-500/15 via-orange-500/10 to-transparent'
  },
  {
    id: 'cloud-scale',
    title: 'Cloud Scale',
    tag: 'Massive Throughput',
    desc: 'Serverless architecture that scales from zero to 10k agents in milliseconds, optimizing system loads.',
    detailedDesc: 'Run agents inside isolated sandbox containers. With automated load-balancing and caching, enjoy blazing fast execution speeds and consistent performance even during peak traffic.',
    stat: '11ms Execution',
    icon: Zap,
    color: 'from-purple-500/15 via-violet-500/10 to-transparent'
  },
  {
    id: 'data-intelligence',
    title: 'Data Intelligence',
    tag: 'Semantic Memory',
    desc: 'Continuous indexing, vectorizing, and syncing of your corporate databases, wikis, and cloud files.',
    detailedDesc: 'Connect your live PostgreSQL databases, Notion pages, and Drive files. Our continuous vector ingestion engine updates your agent memories instantly, giving models context-rich up-to-date data.',
    stat: '87% Context Gain',
    icon: Database,
    color: 'from-emerald-500/15 via-teal-500/10 to-transparent'
  }
];

export const PRICING_CONFIG: PricingConfig = {
  tiers: [
    {
      id: 'starter',
      name: 'Starter Agent',
      description: 'Perfect for small teams and developers beginning their autonomous agent journey.',
      basePriceUSD: 29,
      features: [
        '3 Active Agent Workflows',
        '10,000 Tasks / Month',
        'Standard Execution Latency',
        'Secure API & Webhook Access',
        'Community Forum & Email Support'
      ]
    },
    {
      id: 'pro',
      name: 'Professional',
      description: 'Designed for production workloads requiring high speed and advanced integration.',
      basePriceUSD: 79,
      features: [
        '15 Active Agent Workflows',
        '100,000 Tasks / Month',
        'Priority High-Speed Execution',
        'Custom External Tool Connections',
        'Shared Workspace Collaboration',
        '24/7 Email & Chat Support'
      ],
      isPopular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise Scale',
      description: 'Custom governance, unlimited scale, and dedicated reliability for global workloads.',
      basePriceUSD: 249,
      features: [
        'Unlimited Active Workflows',
        'Unlimited Task Executions',
        'Ultra-Low Latency Routing',
        'On-Premises / Private Cloud Install',
        'Custom Fine-Tuned Model Pipelines',
        'Dedicated Solutions Architect',
        'Strict 99.99% SLA Guarantees'
      ]
    }
  ],
  currencies: {
    USD: { symbol: '$', rate: 1.0, name: 'USD ($)' },
    EUR: { symbol: '€', rate: 0.92, name: 'EUR (€)' },
    INR: { symbol: '₹', rate: 83.0, name: 'INR (₹)' }
  },
  annualDiscount: 0.8 // 20% discount (basePriceUSD * rate * 0.8)
};

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    name: 'Sarah Jenkins',
    role: 'VP of Engineering',
    company: 'Aetna Health',
    rating: 5,
    comment: 'Nyx has completely overhauled our claims-processing workflows. We deployed intelligent, HIPAA-compliant agents in weeks rather than quarters. Absolutely indispensable.',
    avatarText: 'SJ'
  },
  {
    name: 'David K.',
    role: 'Head of Infrastructure',
    company: 'Cigna Corp',
    rating: 5,
    comment: 'The Secure Guard is unmatched. It blocks code injections and scrubs patient identifiers with zero measurable impact on our prompt latencies. Highly recommended.',
    avatarText: 'DK'
  },
  {
    name: 'Elena Rostova',
    role: 'Director of AI Strategy',
    company: 'Anthem Blue',
    rating: 5,
    comment: 'We scaled from 10 test workflows to over 100,000 automated daily tasks without a single hiccup. Nyx’s serverless agent cluster is exceptionally engineered.',
    avatarText: 'ER'
  },
  {
    name: 'Marcus Thorne',
    role: 'Principal Architect',
    company: 'CVS Pharmacy',
    rating: 5,
    comment: 'The visual node builder allowed our non-technical clinical analysts to design and audit workflows directly. It bridged the gap between code and operations.',
    avatarText: 'MT'
  }
];

export const FAQ_DATA: Record<string, FAQItem[]> = {
  Overview: [
    {
      question: 'What is the Nyx AI Platform?',
      answer: 'Nyx is a secure, serverless infrastructure platform designed to build, deploy, and scale custom autonomous AI agents. We provide visual agent orchestration, continuous semantic indexing, and a real-time safety guardrail layer for enterprise operations.'
    },
    {
      question: 'How do agents execute tasks?',
      answer: 'Agents run in isolated secure sandboxes. They trigger based on webhooks, schedules, or events, reason through step-by-step custom workflows, execute API calls, and deliver high-fidelity outputs safely.'
    }
  ],
  Security: [
    {
      question: 'How does Secure Guard protect corporate data?',
      answer: 'Secure Guard acts as a local proxy that scrubs sensitive PII, blocks prompt injection payloads, and enforces custom compliance checks before inputs reach external LLMs. In reverse, it scans outputs to prevent intellectual property leaks.'
    },
    {
      question: 'Is Nyx SOC-2 compliant?',
      answer: 'Yes, Nyx is SOC-2 Type II certified and complies with HIPAA and GDPR data governance requirements. We also offer on-premises deployment for teams with extreme data sovereignty requirements.'
    }
  ],
  Protocols: [
    {
      question: 'Which model providers are supported out of the box?',
      answer: 'We offer native integrations with Google Gemini Pro, OpenAI GPT-4, Anthropic Claude 3, and several fine-tuned open-source models like Llama 3 running on our low-latency infrastructure.'
    },
    {
      question: 'Can we connect our custom proprietary tools?',
      answer: 'Absolutely. Using the Agent Builder, you can define custom API schemas or connect standard databases to grant your agents secure tool-use capabilities.'
    }
  ],
  Licensing: [
    {
      question: 'How does the billing cycle and task execution quota work?',
      answer: 'Task quotas reset at the start of each billing period. Extra task executions beyond your tier limit are billed at a flat rate of $0.005 per task. Annual subscriptions receive an immediate 20% flat discount.'
    },
    {
      question: 'Can I cancel or change my plan anytime?',
      answer: 'Yes, you can upgrade, downgrade, or cancel your subscription at any point. Downgrades or cancellations will take effect at the end of your current billing cycle.'
    }
  ]
};

export const ARTICLES_DATA: ArticleItem[] = [
  {
    title: 'What It Takes to Turn AI Into a True Business Asset',
    category: 'AI Strategy',
    readTime: '4 Min Read',
    date: 'June 25, 2026',
    imageDesc: 'Abstract neural network grid'
  },
  {
    title: 'From Prompting to Systems: The Real Shift in Autonomous Agents',
    category: 'Engineering',
    readTime: '7 Min Read',
    date: 'May 18, 2026',
    imageDesc: 'Futuristic code blocks glowing'
  },
  {
    title: 'Why Your Large Language Model Outputs Feel Inconsistent',
    category: 'Data Logic',
    readTime: '5 Min Read',
    date: 'April 29, 2026',
    imageDesc: 'Fluctuating digital waves'
  }
];
