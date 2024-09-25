import Script from 'next/script';
import { useEffect } from 'react';

export default function CookieConsent() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.cookieconsent) {
      window.cookieconsent.run({
        notice_banner_type: 'simple',
        consent_type: 'express',
        palette: 'light',
        language: 'en',
        page_load_consent_levels: ['strictly-necessary'],
        notice_banner_reject_button_hide: false,
        preferences_center_close_button_hide: false,
        page_refresh_confirmation_buttons: false,
        website_name: 'Bamble',
        website_privacy_policy_url: 'https://bamble.io/privacy-policy',
      });
    }
  }, []);

  return (
    <div className="static bottom-4 text-yellow-50 right-4 z-50">
      <Script
        src="https://www.freeprivacypolicy.com/public/cookie-consent/4.2.0/cookie-consent.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (window.cookieconsent) {
            window.cookieconsent.run({
              notice_banner_type: 'simple',
              consent_type: 'express',
              palette: 'light',
              language: 'en',
              page_load_consent_levels: ['strictly-necessary'],
              notice_banner_reject_button_hide: false,
              preferences_center_close_button_hide: false,
              page_refresh_confirmation_buttons: false,
              website_name: 'Bamble',
              website_privacy_policy_url: 'https://bamble.io/privacy-policy',
            });
          }
        }}
      />

      <noscript>
        Cookie Consent by{' '}
        <a href="https://www.freeprivacypolicy.com/">
          Free Privacy Policy Generator
        </a>
      </noscript>

      {/* Link for updating cookie preferences */}
      <a
        href="#"
        id="open_preferences_center"
        className="rounded-full p-3 bg-blue-primary"
      >
        Update preferences 🍪
      </a>
    </div>
  );
}
