import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="section-padding border-t border-border">
      <div className="container-landing">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 text-lg font-bold text-foreground mb-3">
              <div className="w-7 h-7 rounded-lg gradient-bg flex items-center justify-center">
                <span className="text-xs font-black text-primary-foreground">T</span>
              </div>
              Tengri Digital
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{t('footer_description')}</p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-foreground mb-3 text-sm">{t('footer_product')}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#solution" className="hover:text-foreground transition-colors">{t('nav_features')}</a></li>
              <li><a href="#pricing" className="hover:text-foreground transition-colors">{t('nav_pricing')}</a></li>
              <li><a href="#how" className="hover:text-foreground transition-colors">{t('nav_how')}</a></li>
              <li><a href="#faq" className="hover:text-foreground transition-colors">{t('nav_faq')}</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-foreground mb-3 text-sm">{t('footer_company')}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">{t('footer_about')}</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">{t('footer_careers')}</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">{t('footer_blog')}</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">{t('footer_contact')}</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-foreground mb-3 text-sm">{t('footer_legal')}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">{t('footer_privacy')}</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">{t('footer_terms')}</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">{t('footer_cookie')}</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          {t('footer_rights')}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
