import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Language } from '@/i18n/translations';
import { Menu, X, Sun, Moon, Globe, ChevronDown } from 'lucide-react';
import { useTheme } from 'next-themes';

const Header = () => {
  const { t, language, setLanguage, languageNames } = useLanguage();
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { key: 'nav_features', href: '#solution' },
    { key: 'nav_how', href: '#how' },
    { key: 'nav_pricing', href: '#pricing' },
    { key: 'nav_faq', href: '#faq' },
  ];

  const langs = Object.keys(languageNames) as Language[];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass-card shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-landing flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 text-xl font-bold tracking-tight text-foreground">
          <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
            <span className="text-sm font-black text-primary-foreground">T</span>
          </div>
          Tengri Digital
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {t(item.key)}
            </a>
          ))}
        </nav>

        {/* Right controls */}
        <div className="hidden md:flex items-center gap-3">
          {/* Language */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 px-3 py-2 text-sm rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            >
              <Globe size={16} />
              <span className="uppercase">{language}</span>
              <ChevronDown size={14} />
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-2 glass-card rounded-xl shadow-xl p-2 min-w-[160px]">
                {langs.map((l) => (
                  <button
                    key={l}
                    onClick={() => { setLanguage(l); setLangOpen(false); }}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                      l === language ? 'bg-primary/10 text-primary font-medium' : 'text-foreground hover:bg-secondary'
                    }`}
                  >
                    {languageNames[l]}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Theme toggle */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* CTA */}
          <a
            href="#pricing"
            className="gradient-bg text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            {t('nav_cta')}
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-foreground"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden glass-card mt-2 mx-4 rounded-2xl p-6 shadow-xl">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-foreground"
              >
                {t(item.key)}
              </a>
            ))}
          </nav>
          <div className="mt-6 flex items-center gap-3">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-lg bg-secondary text-foreground"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as Language)}
              className="bg-secondary text-foreground rounded-lg px-3 py-2 text-sm"
            >
              {langs.map((l) => (
                <option key={l} value={l}>{languageNames[l]}</option>
              ))}
            </select>
          </div>
          <a
            href="#pricing"
            onClick={() => setMobileOpen(false)}
            className="block mt-4 gradient-bg text-primary-foreground px-5 py-3 rounded-lg text-center font-semibold"
          >
            {t('nav_cta')}
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
