import { useLanguage } from '@/contexts/LanguageContext';
import AnimatedSection from './AnimatedSection';
import { Plug, Brain, Rocket } from 'lucide-react';

const HowItWorksSection = () => {
  const { t } = useLanguage();

  const steps = [
    { icon: Plug, titleKey: 'how_step1_title', descKey: 'how_step1_desc', num: '1' },
    { icon: Brain, titleKey: 'how_step2_title', descKey: 'how_step2_desc', num: '2' },
    { icon: Rocket, titleKey: 'how_step3_title', descKey: 'how_step3_desc', num: '3' },
  ];

  return (
    <section className="section-padding" id="how">
      <div className="container-landing">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {t('how_title')}
            </h2>
            <p className="text-lg text-muted-foreground">{t('how_subtitle')}</p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-16 left-[16%] right-[16%] h-0.5 bg-border" />

          {steps.map((step, i) => (
            <AnimatedSection key={i} delay={i * 0.2}>
              <div className="relative text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl gradient-bg mb-6 relative z-10">
                  <step.icon size={28} className="text-primary-foreground" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent flex items-center justify-center text-sm font-bold text-accent-foreground z-20">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{t(step.titleKey)}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t(step.descKey)}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
