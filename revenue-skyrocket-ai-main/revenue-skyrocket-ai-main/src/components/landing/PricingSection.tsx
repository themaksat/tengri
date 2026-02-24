import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import AnimatedSection from './AnimatedSection';
import { Check, ArrowRight, Calculator } from 'lucide-react';

const PricingSection = () => {
  const { t } = useLanguage();

  const plans = [
    {
      name: t('pricing_starter'),
      price: t('pricing_starter_price'),
      features: ['Up to 500 carts/mo', 'Basic AI conversations', 'Email recovery', 'Standard analytics', '1 store'],
      popular: false,
    },
    {
      name: t('pricing_growth'),
      price: t('pricing_growth_price'),
      features: ['Up to 5,000 carts/mo', 'Advanced AI + objection handling', 'Chat + email + SMS', 'Real-time ROI dashboard', 'Cross-sell engine', '3 stores'],
      popular: true,
    },
    {
      name: t('pricing_enterprise'),
      price: t('pricing_enterprise_price'),
      features: ['Unlimited carts', 'Custom AI training', 'All channels', 'Dedicated account manager', 'Custom integrations', 'Unlimited stores'],
      popular: false,
    },
  ];

  return (
    <section className="section-padding mesh-bg" id="pricing">
      <div className="container-landing">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {t('pricing_title')}
            </h2>
            <p className="text-lg text-muted-foreground">{t('pricing_subtitle')}</p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20">
          {plans.map((plan, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <div className={`rounded-2xl p-8 h-full flex flex-col ${
                plan.popular
                  ? 'gradient-bg text-primary-foreground glow-primary relative'
                  : 'glass-card'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-bold px-4 py-1 rounded-full">
                    MOST POPULAR
                  </div>
                )}
                <h3 className={`text-lg font-semibold mb-2 ${plan.popular ? '' : 'text-foreground'}`}>
                  {plan.name}
                </h3>
                <div className={`text-4xl font-extrabold mb-6 ${plan.popular ? '' : 'text-foreground'}`}>
                  {plan.price}
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f, j) => (
                    <li key={j} className={`flex items-start gap-2 text-sm ${
                      plan.popular ? 'text-primary-foreground/90' : 'text-muted-foreground'
                    }`}>
                      <Check size={16} className="flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-xl font-semibold text-sm transition-all hover:scale-105 ${
                  plan.popular
                    ? 'bg-primary-foreground text-primary'
                    : 'gradient-bg text-primary-foreground'
                }`}>
                  {i === 2 ? t('pricing_contact') : t('pricing_cta')}
                </button>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* ROI Calculator */}
        <ROICalculator />

        {/* Demo Form */}
        <AnimatedSection delay={0.2}>
          <div className="max-w-lg mx-auto mt-20 glass-card rounded-2xl p-8 text-center" id="demo">
            <h3 className="text-2xl font-bold text-foreground mb-2">{t('form_submit')}</h3>
            <p className="text-sm text-muted-foreground mb-6">Get a personalized walkthrough for your store.</p>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder={t('form_email')}
                className="w-full px-4 py-3 rounded-xl bg-secondary text-foreground placeholder:text-muted-foreground border border-border focus:outline-none focus:ring-2 focus:ring-primary text-sm"
              />
              <input
                type="url"
                placeholder={t('form_store')}
                className="w-full px-4 py-3 rounded-xl bg-secondary text-foreground placeholder:text-muted-foreground border border-border focus:outline-none focus:ring-2 focus:ring-primary text-sm"
              />
              <button
                type="submit"
                className="w-full gradient-bg text-primary-foreground py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-all"
              >
                {t('form_submit')}
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

const ROICalculator = () => {
  const { t } = useLanguage();
  const [revenue, setRevenue] = useState(50000);

  const abandoned = revenue * 0.7 * (revenue / (revenue + 30000)); // ~70% but scaled
  const lost = revenue * 0.7;
  const recoverable = lost * 0.15;
  const annual = recoverable * 12;

  const fmt = (n: number) => '$' + Math.round(n).toLocaleString();

  return (
    <AnimatedSection>
      <div className="max-w-2xl mx-auto glass-card rounded-2xl p-8" id="calculator">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center">
            <Calculator size={20} className="text-primary-foreground" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground">{t('calc_title')}</h3>
            <p className="text-sm text-muted-foreground">{t('calc_subtitle')}</p>
          </div>
        </div>

        <div className="mb-6">
          <label className="text-sm font-medium text-foreground mb-2 block">{t('calc_input')}</label>
          <input
            type="range"
            min={5000}
            max={500000}
            step={5000}
            value={revenue}
            onChange={(e) => setRevenue(Number(e.target.value))}
            className="w-full accent-[hsl(var(--primary))] h-2 rounded-full"
          />
          <div className="text-2xl font-bold text-foreground mt-2">{fmt(revenue)}</div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-destructive/10 rounded-xl p-4 text-center">
            <div className="text-xs text-muted-foreground mb-1">{t('calc_lost')}</div>
            <div className="text-xl font-bold text-destructive">{fmt(lost)}</div>
          </div>
          <div className="bg-success/10 rounded-xl p-4 text-center">
            <div className="text-xs text-muted-foreground mb-1">{t('calc_recoverable')}</div>
            <div className="text-xl font-bold text-success">{fmt(recoverable)}</div>
          </div>
          <div className="bg-primary/10 rounded-xl p-4 text-center">
            <div className="text-xs text-muted-foreground mb-1">{t('calc_annual')}</div>
            <div className="text-xl font-bold text-primary">{fmt(annual)}</div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default PricingSection;
