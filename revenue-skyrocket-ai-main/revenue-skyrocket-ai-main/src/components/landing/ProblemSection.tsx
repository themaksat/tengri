import { useLanguage } from '@/contexts/LanguageContext';
import AnimatedSection from './AnimatedSection';
import { ShoppingCart, TrendingDown, DollarSign } from 'lucide-react';

const ProblemSection = () => {
  const { t } = useLanguage();

  const stats = [
    { icon: ShoppingCart, value: t('problem_stat1'), label: t('problem_stat1_label'), color: 'text-destructive' },
    { icon: TrendingDown, value: t('problem_stat2'), label: t('problem_stat2_label'), color: 'text-primary' },
    { icon: DollarSign, value: t('problem_stat3'), label: t('problem_stat3_label'), color: 'text-success' },
  ];

  return (
    <section className="section-padding mesh-bg" id="problem">
      <div className="container-landing">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
              {t('problem_title')}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('problem_subtitle')}
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {stats.map((stat, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <div className="glass-card rounded-2xl p-8 text-center hover:scale-105 transition-transform">
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-secondary mb-4`}>
                  <stat.icon size={28} className={stat.color} />
                </div>
                <div className={`text-4xl font-extrabold mb-2 ${stat.color}`}>{stat.value}</div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
