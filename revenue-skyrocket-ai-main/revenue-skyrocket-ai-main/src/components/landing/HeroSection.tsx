import { useLanguage } from '@/contexts/LanguageContext';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="AI neural network visualization"
          className="w-full h-full object-cover opacity-20 dark:opacity-30"
          loading="eager"
        />
        <div className="absolute inset-0 hero-bg" />
        <div className="absolute inset-0 bg-background/60 dark:bg-background/70" />
      </div>

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/5 blur-3xl animate-float" style={{ animationDelay: '3s' }} />

      <div className="container-landing relative z-10 section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium text-muted-foreground mb-8">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse-glow" />
              Powered by Advanced AI — Trusted by 312+ Shopify Stores
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 text-balance">
              <span className="text-foreground">{t('hero_title').split(' ').slice(0, 3).join(' ')} </span>
              <span className="gradient-text">{t('hero_title').split(' ').slice(3).join(' ')}</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              {t('hero_subtitle')}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#pricing"
                className="gradient-bg text-primary-foreground px-8 py-4 rounded-xl text-lg font-semibold hover:opacity-90 transition-all hover:scale-105 flex items-center gap-2 glow-primary"
              >
                {t('hero_cta')}
                <ArrowRight size={20} />
              </a>
              <a
                href="#calculator"
                className="px-8 py-4 rounded-xl text-lg font-semibold border border-border text-foreground hover:bg-secondary transition-all flex items-center gap-2"
              >
                <Play size={18} />
                {t('hero_cta2')}
              </a>
            </div>
          </AnimatedSection>

          {/* Animated metrics */}
          <AnimatedSection delay={0.5}>
            <div className="mt-16 grid grid-cols-3 gap-4 sm:gap-8 max-w-lg mx-auto">
              {[
                { value: '10-20%', label: 'Revenue Boost' },
                { value: '24/7', label: 'Automated' },
                { value: '<5min', label: 'Setup' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + i * 0.15, duration: 0.5 }}
                  className="text-center"
                >
                  <div className="text-2xl sm:text-3xl font-bold gradient-text">{item.value}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground mt-1">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>

          {/* Chat demo preview */}
          <AnimatedSection delay={0.7}>
            <div className="mt-16 max-w-md mx-auto glass-card rounded-2xl p-5 text-left">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border">
                <div className="w-8 h-8 rounded-full gradient-bg flex items-center justify-center">
                  <span className="text-xs font-bold text-primary-foreground">AI</span>
                </div>
                <span className="text-sm font-medium text-foreground">Tengri Agent</span>
                <span className="ml-auto w-2 h-2 rounded-full bg-success animate-pulse-glow" />
              </div>
              <ChatMessages />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

const ChatMessages = () => {
  const messages = [
    { from: 'ai', text: "Hi Sarah! I noticed you left a beautiful silk blouse in your cart. Still interested? 😊" },
    { from: 'user', text: "Oh yes! But I wasn't sure about the shipping time..." },
    { from: 'ai', text: "Great news — it ships in 2-3 days with free express delivery! I can also add a 10% welcome discount. Shall I complete the order?" },
    { from: 'user', text: "That sounds perfect! Yes please! 🎉" },
  ];

  return (
    <div className="space-y-3">
      {messages.map((msg, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: msg.from === 'ai' ? -10 : 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 + i * 0.3, duration: 0.4 }}
          className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
        >
          <div
            className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
              msg.from === 'ai'
                ? 'bg-secondary text-secondary-foreground rounded-bl-sm'
                : 'gradient-bg text-primary-foreground rounded-br-sm'
            }`}
          >
            {msg.text}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default HeroSection;
