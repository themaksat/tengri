import { useLanguage } from '@/contexts/LanguageContext';
import AnimatedSection from './AnimatedSection';
import { Radar, MessageCircle, HelpCircle, Shield, TrendingUp, BarChart3 } from 'lucide-react';

const SolutionSection = () => {
  const { t } = useLanguage();

  const steps = [
    { icon: Radar, titleKey: 'step1_title', descKey: 'step1_desc', num: '01' },
    { icon: MessageCircle, titleKey: 'step2_title', descKey: 'step2_desc', num: '02' },
    { icon: HelpCircle, titleKey: 'step3_title', descKey: 'step3_desc', num: '03' },
    { icon: Shield, titleKey: 'step4_title', descKey: 'step4_desc', num: '04' },
    { icon: TrendingUp, titleKey: 'step5_title', descKey: 'step5_desc', num: '05' },
    { icon: BarChart3, titleKey: 'step6_title', descKey: 'step6_desc', num: '06' },
  ];

  return (
    <section className="section-padding" id="solution">
      <div className="container-landing">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
              {t('solution_title')}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('solution_subtitle')}
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {steps.map((step, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="group glass-card rounded-2xl p-7 hover:glow-primary transition-all duration-300 hover:-translate-y-1 h-full">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl gradient-bg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <step.icon size={22} className="text-primary-foreground" />
                  </div>
                  <span className="text-xs font-mono text-muted-foreground/50 mt-1">{step.num}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{t(step.titleKey)}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t(step.descKey)}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
