{\rtf1\ansi\ansicpg1252\cocoartf2865
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 /* Light interactivity (no deps)\
   - Dark/light mode with localStorage\
   - Mobile nav toggle\
   - Close menu after navigation\
   - Copy email to clipboard\
   - Footer year\
*/\
\
const modeToggle = document.getElementById('modeToggle');\
const navToggle  = document.getElementById('navToggle');\
const navLinks   = document.getElementById('navLinks');\
\
// Theme: load preference\
(function initTheme()\{\
  const saved = localStorage.getItem('cj-theme');\
  if(saved === 'dark') document.body.classList.replace('theme--light','theme--dark');\
\})();\
\
modeToggle.addEventListener('click', () => \{\
  const isDark = document.body.classList.toggle('theme--dark');\
  if(isDark)\{\
    document.body.classList.remove('theme--light');\
    localStorage.setItem('cj-theme','dark');\
  \}else\{\
    document.body.classList.add('theme--light');\
    localStorage.setItem('cj-theme','light');\
  \}\
\});\
\
// Mobile nav\
navToggle.addEventListener('click', () => \{\
  const open = navLinks.classList.toggle('nav__links--open');\
  navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');\
\});\
\
// Close menu on link click\
navLinks.querySelectorAll('a').forEach(a => \{\
  a.addEventListener('click', () => \{\
    navLinks.classList.remove('nav__links--open');\
    navToggle.setAttribute('aria-expanded', 'false');\
  \});\
\});\
\
// Copy to clipboard\
document.querySelectorAll('.copy-btn').forEach(btn => \{\
  btn.addEventListener('click', async () => \{\
    const text = btn.getAttribute('data-copy');\
    try\{\
      await navigator.clipboard.writeText(text);\
      const original = btn.textContent.trim();\
      btn.textContent = 'Copied!';\
      setTimeout(() => (btn.textContent = original), 1200);\
    \}catch(e)\{\
      alert('Copy failed, please copy manually.');\
    \}\
  \});\
\});\
\
// Footer year\
document.getElementById('year').textContent = new Date().getFullYear();}