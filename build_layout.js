const fs = require('fs');
const path = require('path');

const css = `
:root {
  --primary: #1B4FD8;
  --primary-dark: #1e40af;
  --primary-light: #eff6ff;
  --secondary: #F59E0B;
  --dark: #0F172A;
  --dark-mid: #3D3D3D;
  --text: #111827;
  --text-muted: #6B7280;
  --surface: #FFFFFF;
  --surface-alt: #F8F9FB;
  --border: #E5E7EB;
  --success: #10B981;
  --shadow-sm: 0 1px 4px rgba(0,0,0,0.06);
  --shadow-md: 0 6px 28px rgba(0,0,0,0.10);
  --shadow-lg: 0 16px 56px rgba(0,0,0,0.14);
  --radius-sm: 6px;
  --radius-md: 14px;
  --radius-lg: 24px;
  --radius-pill: 999px;
  --transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  --nav-height: 72px;
}

body {
  font-family: 'Inter', sans-serif;
  color: var(--text);
  line-height: 1.75;
  margin: 0;
  padding: 0;
  background-color: var(--surface);
  opacity: 0;
  transition: opacity 0.4s ease;
  overflow-x: hidden;
}

body.loaded { opacity: 1; }

h1, h2, h3, h4, h5, h6 { font-family: 'Bricolage Grotesque', sans-serif; margin-top: 0; }
h1 { font-size: 3.25rem; font-weight: 700; letter-spacing: -0.02em; }
h2 { font-size: 2.25rem; font-weight: 700; letter-spacing: -0.015em; }
h3 { font-size: 1.5rem; font-weight: 600; }
h4 { font-size: 1.2rem; font-family: 'Inter', sans-serif; font-weight: 600; }
.display { font-size: 4.5rem; font-weight: 800; letter-spacing: -0.03em; }
.caption { font-size: 0.8rem; font-weight: 500; letter-spacing: 0.06em; text-transform: uppercase; }

a { text-decoration: none; color: inherit; transition: var(--transition); }
img { max-width: 100%; height: auto; display: block; }

.navbar { position: fixed; top: 0; width: 100%; z-index: 1000; height: var(--nav-height); background: transparent; transition: var(--transition); display: flex; align-items: center; padding: 0 40px; box-sizing: border-box; justify-content: space-between; }
.navbar.scrolled { background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); box-shadow: var(--shadow-sm); height: 60px; }
.navbar.scrolled .nav-link { color: var(--text); }
.navbar.scrolled .logo img { transform: scale(0.88); filter: none !important; }
.logo img { max-height: 42px; width: auto; transition: var(--transition); }
.nav-links { display: flex; gap: 32px; }
.nav-link { font-family: 'Inter', sans-serif; font-weight: 500; font-size: 0.9rem; color: var(--text); position: relative; }
.navbar:not(.scrolled) .nav-link.header-light { color: white; }
.nav-link::after { content: ''; position: absolute; width: 0; height: 2px; bottom: -4px; left: 0; background-color: var(--primary); transition: width 0.35s ease; }
.nav-link:hover::after, .nav-link.active::after { width: 100%; }
.nav-link:hover, .nav-link.active { color: var(--primary) !important; }

.hamburger { display: none; cursor: pointer; flex-direction: column; gap: 6px; z-index: 1002; }
.hamburger span { display: block; width: 24px; height: 2px; background-color: white; transition: var(--transition); }
.navbar.scrolled .hamburger span { background-color: var(--dark); }

.mobile-menu-overlay { position: fixed; top: 0; right: 0; width: 100vw; height: 100vh; background-color: var(--dark); z-index: 1001; transform: translateX(100%); transition: transform 0.45s cubic-bezier(0.4, 0, 0.2, 1); display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 24px; }
.mobile-menu-overlay.open { transform: translateX(0); }
.mobile-nav-link { color: white; font-size: 1.5rem; font-weight: 600; opacity: 0; transform: translateX(30px); transition: opacity 0.4s ease, transform 0.4s ease; }

.btn { display: inline-flex; align-items: center; justify-content: center; padding: 12px 28px; border-radius: var(--radius-pill); font-family: 'Inter', sans-serif; font-weight: 600; font-size: 0.95rem; text-transform: uppercase; letter-spacing: 0.04em; cursor: pointer; position: relative; overflow: hidden; transition: var(--transition); border: none; }
.btn-primary { background-color: var(--primary); color: white; }
.btn-primary:hover { background-color: var(--primary-dark); transform: translateY(-2px); }
.btn-primary::after { content: ''; position: absolute; top: 0; left: -100%; width: 100%; height: 100%; background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.25) 50%, transparent 100%); transition: var(--transition); }
.btn-primary:hover::after { transform: translateX(250%); transition: transform 0.55s ease; }
.btn-outline { background: transparent; border: 1.5px solid white; color: white; }
.btn-outline:hover { background-color: white; color: var(--dark); transform: translateY(-2px); }

.site-footer { background-color: var(--dark); color: white; padding: 100px 40px 40px; position: relative; clip-path: polygon(0 40px, 100% 0, 100% 100%, 0 100%); margin-top: 80px; }
.footer-grid { display: grid; grid-template-columns: 2fr 1.5fr 1fr 1.5fr; gap: 40px; max-width: 1200px; margin: 0 auto; }
.footer-logo img { max-height: 42px; filter: brightness(0) invert(1); margin-bottom: 24px; }
.footer-socials { display: flex; gap: 16px; margin-top: 24px; }
.social-icon { width: 40px; height: 40px; border-radius: 50%; border: 1.5px solid var(--primary); display: flex; align-items: center; justify-content: center; color: var(--primary); transition: var(--transition); }
.social-icon:hover { background-color: var(--primary); color: white; transform: translateY(-3px); }
.footer-col h4 { color: var(--primary); margin-bottom: 24px; }
.footer-col ul { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 12px; }
.footer-col ul li a { color: rgba(255, 255, 255, 0.6); transition: var(--transition); }
.footer-col ul li a:hover { color: var(--primary); }
.footer-contact-item { display: flex; align-items: flex-start; gap: 12px; margin-bottom: 16px; color: rgba(255, 255, 255, 0.6); }
.footer-contact-item i { color: var(--primary); margin-top: 4px; }
.footer-bottom { max-width: 1200px; margin: 60px auto 0; padding-top: 24px; border-top: 1px solid rgba(27, 79, 216, 0.2); display: flex; justify-content: space-between; color: rgba(255, 255, 255, 0.6); font-size: 0.9rem; }

.section-padding { padding: 100px 20px; }
.container { max-width: 1200px; margin: 0 auto; }
.text-center { text-align: center; }
.section-label { font-family: 'Inter', sans-serif; font-weight: 600; font-size: 0.85rem; color: var(--primary); text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 16px; display: flex; align-items: center; gap: 16px; }
.section-label::before { content: ''; display: inline-block; width: 40px; height: 2px; background-color: var(--primary); }
.section-label.center { justify-content: center; }
.section-label.center::before, .section-label.center::after { content: ''; width: 40px; height: 2px; background-color: var(--primary); display: inline-block; }
.grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; }
.grid-2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 48px; }

.reveal { opacity: 0; transform: translateY(40px); transition: all 0.55s ease; }
.reveal.active { opacity: 1; transform: translateY(0); }

.whatsapp-widget { position: fixed; bottom: 24px; right: 24px; width: 56px; height: 56px; background-color: #25D366; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 28px; z-index: 999; box-shadow: var(--shadow-md); animation: pulse-wa 2s infinite; transition: var(--transition); }
.whatsapp-widget:hover { transform: scale(1.1); }
@keyframes pulse-wa { 0% { box-shadow: 0 0 0 0 rgba(37,211,102,0.7); } 70% { box-shadow: 0 0 0 16px transparent; } 100% { box-shadow: 0 0 0 0 transparent; } }

.back-to-top { position: fixed; bottom: 104px; right: 30px; width: 44px; height: 44px; background-color: var(--primary); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 20px; z-index: 998; opacity: 0; pointer-events: none; transition: var(--transition); }
.back-to-top.visible { opacity: 1; pointer-events: all; }
.back-to-top:hover { background-color: var(--primary-dark); transform: translateY(-3px); }

*:focus-visible { outline: 2.5px solid var(--primary); outline-offset: 3px; }

@media (max-width: 1024px) { .footer-grid { grid-template-columns: 1fr 1fr; } .grid-3, .grid-2 { grid-template-columns: 1fr 1fr; } }
@media (max-width: 768px) { .nav-links, .nav-btn-wrapper { display: none; } .hamburger { display: flex; } .footer-grid { grid-template-columns: 1fr; } .grid-3, .grid-2 { grid-template-columns: 1fr; } .footer-bottom { flex-direction: column; gap: 16px; text-align: center; } h1 { font-size: 2.5rem; } }
`;

const js = `
document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('loaded');

  const navbar = document.querySelector('.navbar');
  const backToTop = document.querySelector('.back-to-top');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');

    if (window.scrollY > 500) backToTop?.classList.add('visible');
    else backToTop?.classList.remove('visible');
  });

  const hamburger = document.querySelector('.hamburger');
  const overlay = document.querySelector('.mobile-menu-overlay');
  const overlayLinks = document.querySelectorAll('.mobile-nav-link');
  let menuOpen = false;

  hamburger?.addEventListener('click', () => {
    menuOpen = !menuOpen;
    if (menuOpen) {
      hamburger.children[0].style.transform = 'rotate(45deg) translateY(9px)';
      hamburger.children[1].style.opacity = '0';
      hamburger.children[2].style.transform = 'rotate(-45deg) translateY(-9px)';
      overlay.classList.add('open');
      overlayLinks.forEach((link, i) => {
        setTimeout(() => {
          link.style.opacity = '1';
          link.style.transform = 'translateX(0)';
        }, 200 + (i * 60));
      });
    } else {
      hamburger.children[0].style.transform = 'none';
      hamburger.children[1].style.opacity = '1';
      hamburger.children[2].style.transform = 'none';
      overlay.classList.remove('open');
      overlayLinks.forEach((link) => {
        link.style.opacity = '0';
        link.style.transform = 'translateX(30px)';
      });
    }
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        if(entry.target.classList.contains('do-count') && !entry.target.dataset.counted) {
          startCounter(entry.target);
          entry.target.dataset.counted = true;
        }
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal, .do-count').forEach(el => observer.observe(el));

  function startCounter(el) {
    const target = parseInt(el.dataset.target, 10);
    let count = 0;
    const dur = 2000;
    const step = target / (dur / 16);
    const animateCount = () => {
      count += step;
      if (count < target) {
        el.innerText = Math.floor(count) + (el.dataset.suffix || '');
        requestAnimationFrame(animateCount);
      } else {
        el.innerText = target + (el.dataset.suffix || '');
      }
    };
    requestAnimationFrame(animateCount);
  }

  backToTop?.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  const splitText = document.querySelector('.split-text');
  if (splitText) {
    const words = splitText.innerText.split(' ');
    splitText.innerHTML = '';
    words.forEach((word, i) => {
      const span = document.createElement('span');
      span.innerText = word + ' ';
      span.style.display = 'inline-block';
      span.style.opacity = '0';
      span.style.transform = 'translateY(28px)';
      span.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      span.style.transitionDelay = (i * 0.08) + 's';
      splitText.appendChild(span);
      
      setTimeout(() => { span.style.opacity = '1'; span.style.transform = 'translateY(0)'; }, 100);
    });
  }

  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const content = btn.nextElementSibling;
      const isOpen = content.style.maxHeight;
      document.querySelectorAll('.faq-answer').forEach(ans => { ans.style.maxHeight = null; ans.previousElementSibling.querySelector('i').className = 'fa-solid fa-plus'; });
      if (!isOpen) {
        content.style.maxHeight = content.scrollHeight + 'px';
        btn.querySelector('i').className = 'fa-solid fa-minus';
      }
    });
  });

  const testSlides = document.querySelectorAll('.test-slide');
  const testDots = document.querySelectorAll('.test-dot');
  let currentSlide = 0;
  if(testSlides.length > 0) {
    const showSlide = (idx) => {
      testSlides.forEach(s => s.style.opacity = '0');
      testDots.forEach(d => d.classList.remove('active'));
      testSlides[idx].style.opacity = '1';
      testDots[idx].classList.add('active');
    };
    setInterval(() => {
      currentSlide = (currentSlide + 1) % testSlides.length;
      showSlide(currentSlide);
    }, 6000);
  }
});
`;

function getHead(title, isDarkHero = true) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title} | Business Consulting (Virtual Assistant Services)</title>
    <meta name="description" content="Comprehensive Administrative and Technical Virtual Assistant solutions designed to support growing businesses, executives, and entrepreneurs.">
    <link rel="icon" href="https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_32,w_32,f_auto,q_auto/11105459/781534_911366.png">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,700;12..96,800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
    <style>
      ${css}
    </style>
</head>
<body>
    <!-- Navbar -->
    <nav class="navbar" aria-label="Main Navigation">
        <a href="index.html" class="logo">
            <img src="https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1000,w_1000,f_auto,q_auto/11105459/781534_911366.png" alt="Business Consulting Logo" style="${isDarkHero ? 'filter: brightness(0) invert(1);' : ''}">
        </a>
        <div class="nav-links">
            <a href="index.html" class="nav-link ${isDarkHero ? 'header-light' : ''}">Home</a>
            <a href="services.html" class="nav-link ${isDarkHero ? 'header-light' : ''}">Services</a>
            <a href="about.html" class="nav-link ${isDarkHero ? 'header-light' : ''}">About Us</a>
            <a href="resources.html" class="nav-link ${isDarkHero ? 'header-light' : ''}">Resources</a>
            <a href="contact.html" class="nav-link ${isDarkHero ? 'header-light' : ''}">Contact Us</a>
        </div>
        <div class="nav-btn-wrapper">
            <a href="contact.html" class="btn btn-primary">Book a Free Consultation</a>
        </div>

        <div class="hamburger">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </nav>

    <!-- Mobile Menu -->
    <div class="mobile-menu-overlay">
        <a href="index.html" class="mobile-nav-link">Home</a>
        <a href="services.html" class="mobile-nav-link">Services</a>
        <a href="about.html" class="mobile-nav-link">About Us</a>
        <a href="resources.html" class="mobile-nav-link">Resources</a>
        <a href="contact.html" class="mobile-nav-link">Contact Us</a>
        <div class="footer-socials" style="margin-top:24px;">
            <a href="#" class="social-icon" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
        </div>
    </div>
`;
}

function getFooter() {
  return `
    <footer class="site-footer">
        <div class="footer-grid container">
            <div class="footer-col" style="grid-column: span 1;">
                <a href="index.html" class="footer-logo">
                    <img src="https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1000,w_1000,f_auto,q_auto/11105459/781534_911366.png" alt="Logo">
                </a>
                <p style="color: rgba(255,255,255,0.7); font-size:0.95rem;">Registered Business Consulting & Virtual Assistant Agency</p>
                <div class="footer-socials">
                    <a href="#" class="social-icon" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
                </div>
            </div>
            
            <div class="footer-col reveal">
                <h4>Services</h4>
                <ul>
                    <li><a href="services.html">Administrative Support</a></li>
                    <li><a href="services.html">Customer & Client Support</a></li>
                    <li><a href="services.html">Marketing & Social Media</a></li>
                    <li><a href="services.html">Strategic & Executive Support</a></li>
                    <li><a href="services.html">Operational Support</a></li>
                </ul>
            </div>
            
            <div class="footer-col reveal" style="transition-delay: 0.1s;">
                <h4>Quick Links</h4>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="services.html">Services</a></li>
                    <li><a href="about.html">About Us</a></li>
                    <li><a href="resources.html">Resources</a></li>
                    <li><a href="contact.html">Contact Us</a></li>
                </ul>
            </div>
            
            <div class="footer-col reveal" style="transition-delay: 0.2s;">
                <h4>Contact Us</h4>
                <div class="footer-contact-item">
                    <i class="fa-solid fa-phone"></i>
                    <div>
                        <a href="tel:+256780545636">+256 780 545 636</a><br>
                        <a href="tel:+256704188127">+256 704 188 127</a>
                    </div>
                </div>
                <div class="footer-contact-item">
                    <i class="fa-solid fa-envelope"></i>
                    <a href="mailto:hr.business477@gmail.com">hr.business477@gmail.com</a>
                </div>
                <div class="footer-contact-item">
                    <i class="fa-solid fa-map-pin"></i>
                    <span>Kamwokya, Kampala Uganda</span>
                </div>
            </div>
        </div>
        
        <div class="footer-bottom reveal">
            <p>©2025 - BusinessConsulting(Virtual Assistant Services). Built with expert care.</p>
            <div>
                <a href="#">Privacy Policy</a>
            </div>
        </div>
    </footer>

    <!-- Global Floating Elements -->
    <a href="https://wa.me/256780545636?text=Hello!%20I'm%20interested%20in%20your%20Virtual%20Assistant%20&%20Business%20Consulting%20services.%20Can%20we%20discuss?" target="_blank" rel="noopener noreferrer" class="whatsapp-widget" aria-label="Chat on WhatsApp">
        <i class="fa-brands fa-whatsapp"></i>
    </a>
    
    <a href="#" class="back-to-top" aria-label="Back to Top">
        <i class="fa-solid fa-chevron-up"></i>
    </a>

    <!-- Scripts -->
    <script>
      ${js}
    </script>
</body>
</html>`;
}

fs.writeFileSync('layout.js', 'module.exports = { getHead, getFooter };');
console.log('layout built successfully!');
