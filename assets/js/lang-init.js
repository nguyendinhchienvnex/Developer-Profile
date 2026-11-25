(function () {
  const savedLang = localStorage.getItem('site_lang') || 'vi';
  document.documentElement.setAttribute('data-lang', savedLang);
  document.documentElement.setAttribute('lang', savedLang);
})();
