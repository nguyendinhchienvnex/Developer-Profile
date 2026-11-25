document.addEventListener('DOMContentLoaded', () => {
  const dropdown = document.getElementById('langDropdown');
  const trigger = document.getElementById('langTrigger');
  const currentIcon = document.getElementById('langCurrentIcon');
  const currentText = document.getElementById('langCurrentText');
  const options = document.querySelectorAll('.lang-option');

  if (!dropdown || !trigger) return;

  const flagsSVG = {
    vi: `<svg width="18" height="13" viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg"><rect width="30" height="20" rx="2" fill="#DA251D"/><polygon points="15,4 16.76,9.41 22.46,9.41 17.85,12.76 19.61,18.18 15,14.83 10.39,18.18 12.15,12.76 7.54,9.41 13.24,9.41" fill="#FFFF00"/></svg>`,
    en: `<svg width="18" height="13" viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg"><rect width="30" height="20" rx="2" fill="#B22234"/><path d="M0,3.08H30M0,6.15H30M0,9.23H30M0,12.31H30M0,15.38H30M0,18.46H30" stroke="#FFF" stroke-width="1.5"/><rect width="13" height="10.8" rx="1" fill="#3C3B6E"/><circle cx="3.5" cy="3" r="0.8" fill="#FFF"/><circle cx="6.5" cy="3" r="0.8" fill="#FFF"/><circle cx="9.5" cy="3" r="0.8" fill="#FFF"/><circle cx="5" cy="5.4" r="0.8" fill="#FFF"/><circle cx="8" cy="5.4" r="0.8" fill="#FFF"/><circle cx="3.5" cy="7.8" r="0.8" fill="#FFF"/><circle cx="6.5" cy="7.8" r="0.8" fill="#FFF"/><circle cx="9.5" cy="7.8" r="0.8" fill="#FFF"/></svg>`
  };

  function closeDropdown() {
    dropdown.classList.remove('open');
    trigger.setAttribute('aria-expanded', 'false');
  }

  function applyLanguage(lang) {
    const validLang = (lang === 'en') ? 'en' : 'vi';
    document.documentElement.setAttribute('data-lang', validLang);
    document.documentElement.setAttribute('lang', validLang);
    localStorage.setItem('site_lang', validLang);

    if (currentIcon) currentIcon.innerHTML = flagsSVG[validLang];
    if (currentText) currentText.textContent = validLang.toUpperCase();

    options.forEach(opt => {
      const optLang = opt.getAttribute('data-set-lang');
      opt.classList.toggle('is-selected', optLang === validLang);
    });

    const titleEl = document.getElementById('page-title');
    if (titleEl) {
      document.title = (validLang === 'vi')
        ? titleEl.getAttribute('data-vi')
        : titleEl.getAttribute('data-en');
    }
  }

  // Khởi tạo ngôn ngữ khi tải trang
  const savedLang = document.documentElement.getAttribute('data-lang') || 'vi';
  applyLanguage(savedLang);

  // Mở/đóng dropdown khi bấm nút cờ
  trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = dropdown.classList.toggle('open');
    trigger.setAttribute('aria-expanded', isOpen);
  });

  // Chọn ngôn ngữ còn lại
  options.forEach(opt => {
    opt.addEventListener('click', (e) => {
      e.stopPropagation();
      const selectedLang = opt.getAttribute('data-set-lang');
      applyLanguage(selectedLang);
      closeDropdown();
    });
  });

  // Đóng khi click ra ngoài hoặc bấm phím ESC
  document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target)) {
      closeDropdown();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeDropdown();
    }
  });
});
