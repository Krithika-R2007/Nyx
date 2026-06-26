import { LucideIcon } from 'lucide-react';

export interface FeatureItem {
  id: string;
  title: string;
  tag: string;
  desc: string;
  detailedDesc: string;
  stat: string;
  icon: LucideIcon;
  color: string;
}

export interface PricingTier {
  id: string;
  name: string;
  description: string;
  basePriceUSD: number;
  features: string[];
  isPopular?: boolean;
}

export interface CurrencyConfig {
  symbol: string;
  rate: number;
  name: string;
}

export interface PricingConfig {
  tiers: PricingTier[];
  currencies: Record<string, CurrencyConfig>;
  annualDiscount: number;
}

export interface TestimonialItem {
  name: string;
  role: string;
  company: string;
  rating: number;
  comment: string;
  avatarText: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ArticleItem {
  title: string;
  category: string;
  readTime: string;
  date: string;
  imageDesc: string;
}
