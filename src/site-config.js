const SITE_CONFIG = {
  chromeExtensionUrl: 'https://chromewebstore.google.com/detail/ochakcekieihhfoefaokllabgkgbcedf',
  appDownloadUrl: 'https://github.com/onevcat/MeetCat/releases/latest/download/MeetCat_macos_universal.dmg',
};

const CTA_LINKS = [
  { selector: '[data-i18n="hero.cta.chrome"]', href: SITE_CONFIG.chromeExtensionUrl },
  { selector: '[data-i18n="hero.cta.app"]', href: SITE_CONFIG.appDownloadUrl },
];

function applyCtaLinks() {
  CTA_LINKS.forEach(({ selector, href }) => {
    document.querySelectorAll(selector).forEach((element) => {
      if (!(element instanceof HTMLAnchorElement)) {
        return;
      }

      element.setAttribute('href', href);
      element.setAttribute('target', '_blank');
      element.setAttribute('rel', 'noopener noreferrer');
    });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', applyCtaLinks);
} else {
  applyCtaLinks();
}

export { SITE_CONFIG };
