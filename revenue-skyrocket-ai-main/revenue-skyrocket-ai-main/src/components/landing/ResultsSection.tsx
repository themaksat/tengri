import { useLanguage } from '@/contexts/LanguageContext';
import AnimatedSection from './AnimatedSection';
import { Star } from 'lucide-react';

const ResultsSection = () => {
  const { t } = useLanguage();

  const results = [
    { value: t('result1'), label: t('result1_label') },
    { value: t('result2'), label: t('result2_label') },
    { value: t('result3'), label: t('result3_label') },
    { value: t('result4'), label: t('result4_label') },
  ];

  return (
    <section className="section-padding mesh-bg" id="results">
      <div className="container-landing">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {t('results_title')}
            </h2>
            <p className="text-lg text-muted-foreground">{t('results_subtitle')}</p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16">
          {results.map((r, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="glass-card rounded-2xl p-6 text-center">
                <div className="text-3xl sm:text-4xl font-extrabold gradient-text mb-2">{r.value}</div>
                <div className="text-sm text-muted-foreground font-medium">{r.label}</div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Testimonial */}
        <AnimatedSection delay={0.3}>
          <div className="max-w-2xl mx-auto glass-card rounded-2xl p-8 text-center">
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="text-accent fill-accent" />
              ))}
            </div>
            <blockquote className="text-lg text-foreground italic mb-4 leading-relaxed">
              {t('testimonial')}
            </blockquote>
            <p className="text-sm text-muted-foreground font-medium">{t('testimonial_author')}</p>
          </div>
        </AnimatedSection>

        {/* Trust logos */}
        <AnimatedSection delay={0.4}>
          <div className="flex items-center justify-center gap-8 mt-12 opacity-50">
            <span className="text-sm font-semibold text-muted-foreground tracking-wider">SHOPIFY</span>
            <span className="text-sm font-semibold text-muted-foreground tracking-wider">STRIPE</span>
            <span className="text-sm font-semibold text-muted-foreground tracking-wider">GOOGLE</span>
            <span className="text-sm font-semibold text-muted-foreground tracking-wider hidden sm:block">SLACK</span>
            <span className="text-sm font-semibold text-muted-foreground tracking-wider hidden sm:block">HUBSPOT</span>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ResultsSection;
