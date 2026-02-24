import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import AnimatedSection from './AnimatedSection';
import { ChevronDown } from 'lucide-react';

const FAQSection = () => {
  const { t } = useLanguage();
  const [open, setOpen] = useState<number | null>(null);

  const faqs = [1, 2, 3, 4, 5, 6, 7].map((i) => ({
    q: t(`faq${i}_q`),
    a: t(`faq${i}_a`),
  }));

  return (
    <section className="section-padding" id="faq">
      <div className="container-landing">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {t('faq_title')}
            </h2>
          </div>
        </AnimatedSection>

        <div className="max-w-2xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <AnimatedSection key={i} delay={i * 0.05}>
              <div className="glass-card rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="text-sm font-semibold text-foreground pr-4">{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className={`flex-shrink-0 text-muted-foreground transition-transform ${
                      open === i ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {open === i && (
                  <div className="px-5 pb-5 pt-0">
                    <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
