const modeToggle = document.getElementById('modeToggle');
const navToggle  = document.getElementById('navToggle');
const navLinks   = document.getElementById('navLinks');

// Theme: load preference
(function initTheme(){
  const saved = localStorage.getItem('cj-theme');
  if(saved === 'dark') {
    document.body.classList.replace('theme--light','theme--dark');
    modeToggle.checked = true;
  }
})();

modeToggle.addEventListener('change', () => {
  const isDark = document.body.classList.toggle('theme--dark');
  if(isDark){
    document.body.classList.remove('theme--light');
    localStorage.setItem('cj-theme','dark');
  }else{
    document.body.classList.add('theme--light');
    localStorage.setItem('cj-theme','light');
  }
});

// Mobile nav
navToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('nav__links--open');
  navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
});

// Close menu on link click
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navLinks.classList.remove('nav__links--open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Copy to clipboard
document.querySelectorAll('.copy-btn').forEach(btn => {
  btn.addEventListener('click', async () => {
    const text = btn.getAttribute('data-copy');
    try{
      await navigator.clipboard.writeText(text);
      const original = btn.textContent.trim();
      btn.textContent = 'Copied!';
      setTimeout(() => (btn.textContent = original), 1200);
    }catch(e){
      alert('Copy failed, please copy manually.');
    }
  });
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();