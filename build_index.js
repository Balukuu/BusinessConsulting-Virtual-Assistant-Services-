const fs = require('fs');
const { getHead, getFooter } = require('./layout');

// ============== INDEX PAGE ==============
const indexBody = `
<!-- Hero Section -->
<section class="hero-section py-hero" style="background-color: var(--primary); position: relative; overflow: hidden;">
    <div class="container grid-2" style="align-items: center;">
        <div class="reveal" style="z-index: 2;">
            <h1 style="color: white; font-size: 3.5rem; margin-bottom: 24px; line-height: 1.15; letter-spacing: -0.02em;">Welcome to Business Consulting</h1>
            <p style="color: rgba(255,255,255,0.9); font-size: 1.1rem; font-family: 'Inter', sans-serif; line-height: 1.6; margin-bottom: 32px; max-width: 500px;">
                The importance of optimized operations to any fast-growing business cannot be overemphasized. We are a registered firm set out to meet the needs of modern workflows professionally.
            </p>
            <div style="display: flex; gap: 16px; flex-wrap: wrap;">
                <a href="about.html" class="btn btn-white">
                    READ MORE &rarr;
                </a>
                <a href="contact.html" class="btn btn-outline-white">
                    CONTACT US <i class="fa-solid fa-phone" style="margin-left: 8px;"></i>
                </a>
            </div>
        </div>
        
        <div class="reveal" style="position: relative; z-index: 2; transition-delay: 0.2s;">
            <img src="hero-split.png" alt="Business Professionals Handshake" class="hero-img">
        </div>
    </div>
</section>

<!-- About Preview -->
<section class="py-section" style="background-color: var(--surface); position: relative; z-index: 2;">
    <div class="container flex-split">
        <div style="flex: 0 0 55%; padding-right: 20px;" class="reveal">
            <div class="section-label">Who We Are</div>
            <h2 style="color: var(--dark); font-size: 2.5rem; margin-bottom: 24px;">Empowering Businesses Through Operational Efficiency</h2>
            <p style="color: var(--text-muted); margin-bottom: 20px; font-size: 1.1rem;">
                Business Consulting (Virtual Assistant Services) was founded with the vision of enabling businesses to scale efficiently through virtual solutions. We specialize in Administrative, Customer & Client, Marketing, and Operational support. 
            </p>
            <p style="color: var(--text-muted); margin-bottom: 32px; font-size: 1.1rem;">
                Our philosophy centers on practical, effective solutions tailored strictly to individual client needs. We streamline operations to help you reclaim your time and achieve measurable results.
            </p>
            <a href="about.html" style="color: var(--primary); font-weight: 600; text-transform: uppercase; letter-spacing: 0.04em; display: inline-flex; align-items: center; gap: 8px; font-size: 0.95rem; border-bottom: 2px solid transparent; padding-bottom: 2px;">
                Learn More <i class="fa-solid fa-arrow-right"></i>
            </a>
        </div>
        <div style="flex: 0 0 45%; position: relative;" class="reveal">
            <div style="aspect-ratio: 4/5; border-radius: var(--radius-lg); position: relative; overflow: hidden; box-shadow: var(--shadow-lg); background: var(--primary-light);">
                <img src="growth_data.png" alt="Operational Data Illustration" style="width: 100%; height: 100%; object-fit: cover; animation: floatSlow 6s ease-in-out infinite;">
            </div>
            <div style="position: absolute; bottom: 40px; left: -40px; background: white; padding: 24px 32px; border-radius: var(--radius-md); box-shadow: var(--shadow-lg); border-left: 4px solid var(--primary);">
                <div class="do-count" data-target="100" data-suffix="+" style="font-family: 'Bricolage Grotesque', sans-serif; font-weight: 800; font-size: 2rem; color: var(--dark);">0+</div>
                <div class="caption" style="color: var(--text-muted);">Missions Delivered</div>
            </div>
        </div>
    </div>
</section>

<!-- Services Section -->
<section class="py-section" style="background-color: var(--surface-alt); position: relative; z-index: 3;">
    <!-- Top divider (white to surface-alt) -->
    <div class="shape-divider surface-alt top">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 120L0 120 0 0z" class="shape-fill"></path>
        </svg>
    </div>
    <div class="container">
        <div class="text-center reveal" style="margin-bottom: 64px;">
            <div class="section-label center">Our Services</div>
            <h2 style="color: var(--dark);">What We Do</h2>
            <p style="color: var(--text-muted); max-width: 600px; margin: 20px auto 0;">Comprehensive Administrative and Technical Virtual Assistant solutions designed to support growing businesses, executives, and entrepreneurs.</p>
        </div>
        
        <div class="grid-3" style="margin-bottom: 56px;">
            <!-- Service 1 -->
            <div class="service-card reveal">
                <div class="service-icon-wrap">
                    <i class="fa-solid fa-briefcase"></i>
                </div>
                <h3 style="color: var(--dark); margin-bottom: 12px;">Core Administrative</h3>
                <p style="color: var(--text-muted); line-height: 1.65; margin-bottom: 24px;">Optimizing daily workflows through managed email &amp; calendar coordination, precise document preparation, detailed data entry, and seamless travel and meeting arrangements.</p>
                <a href="services.html" style="color: var(--primary); font-weight: 600; font-size: 0.875rem; letter-spacing: 0.03em; display: inline-flex; align-items: center; gap: 6px;">View Details <i class="fa-solid fa-arrow-right"></i></a>
            </div>
            
            <!-- Service 2 -->
            <div class="service-card reveal" style="transition-delay: 0.1s;">
                <div class="service-icon-wrap">
                    <i class="fa-solid fa-headset"></i>
                </div>
                <h3 style="color: var(--dark); margin-bottom: 12px;">Customer &amp; Client</h3>
                <p style="color: var(--text-muted); line-height: 1.65; margin-bottom: 24px;">Enhancing client satisfaction by swiftly resolving email, chat, and phone inquiries, meticulous CRM management, and streamlined appointment booking processes.</p>
                <a href="services.html" style="color: var(--primary); font-weight: 600; font-size: 0.875rem; letter-spacing: 0.03em; display: inline-flex; align-items: center; gap: 6px;">View Details <i class="fa-solid fa-arrow-right"></i></a>
            </div>
            
            <!-- Service 3 -->
            <div class="service-card reveal" style="transition-delay: 0.2s;">
                <div class="service-icon-wrap">
                    <i class="fa-solid fa-users-gear"></i>
                </div>
                <h3 style="color: var(--dark); margin-bottom: 12px;">HR &amp; People Admin</h3>
                <p style="color: var(--text-muted); line-height: 1.65; margin-bottom: 24px;">A specialized add-on for comprehensive recruitment coordination, effective onboarding administration, robust employee records management, and strict policy implementation.</p>
                <a href="services.html" style="color: var(--primary); font-weight: 600; font-size: 0.875rem; letter-spacing: 0.03em; display: inline-flex; align-items: center; gap: 6px;">View Details <i class="fa-solid fa-arrow-right"></i></a>
            </div>
        </div>
        
        <div class="text-center reveal" style="transition-delay: 0.3s;">
            <a href="services.html" class="btn btn-primary">See All Services &rarr;</a>
        </div>
    </div>
</section>

<!-- Why Choose Us -->
<section class="py-section" style="background-color: var(--dark); color: white; position: relative;">
    <div class="shape-divider top">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 120L0 120 0 0z" class="shape-fill"></path>
        </svg>
    </div>
    <div class="container grid-2" style="align-items: center;">
        <div class="reveal">
            <div class="section-label">Why Choose Us</div>
            <h2 style="font-size: 2.75rem; margin-bottom: 24px;">The Smart Choice for Growing Teams</h2>
            <p style="color: rgba(255,255,255,0.7); max-width: 480px; margin-bottom: 40px; font-size: 1.1rem;">
                We don't just complete tasks; we align with your specific objectives. Our solution-oriented approach ensures you get high-quality deliverables securely, confidently, and on time. Let us handle the backend so you can focus on core growth.
            </p>
            <a href="contact.html" class="btn btn-primary">Start Today</a>
        </div>
        <div>
            <div class="reveal" style="padding-bottom: 32px; border-bottom: 1px solid rgba(27, 79, 216, 0.3); margin-bottom: 32px;">
                <div style="font-family: 'Bricolage Grotesque'; font-size: 1.5rem; font-weight: 800; color: var(--primary); margin-bottom: 8px;">01. Alignment</div>
                <h4 style="margin-bottom: 12px; font-weight: 600;">Tailored Solutions</h4>
                <p style="color: rgba(255,255,255,0.65);">We thoroughly align with your core business vision to provide practical, effective solutions.</p>
            </div>
            
            <div class="reveal" style="transition-delay: 0.15s; padding-bottom: 32px; border-bottom: 1px solid rgba(27, 79, 216, 0.3); margin-bottom: 32px;">
                <div style="font-family: 'Bricolage Grotesque'; font-size: 1.5rem; font-weight: 800; color: var(--primary); margin-bottom: 8px;">02. Solution-Oriented</div>
                <h4 style="margin-bottom: 12px; font-weight: 600;">Actionable Outcomes</h4>
                <p style="color: rgba(255,255,255,0.65);">Focused strictly on producing actionable outcomes, timely delivery, and measurable progress.</p>
            </div>
            
            <div class="reveal" style="transition-delay: 0.3s; padding-bottom: 0;">
                <div style="font-family: 'Bricolage Grotesque'; font-size: 1.5rem; font-weight: 800; color: var(--primary); margin-bottom: 8px;">03. Trust & Confidentiality</div>
                <h4 style="margin-bottom: 12px; font-weight: 600;">Strong Client Relationships</h4>
                <p style="color: rgba(255,255,255,0.65);">We believe in total security and cultivating long-term trust, punctuated by thorough post-project reviews.</p>
            </div>
        </div>
    </div>
</section>

<!-- Client Logos Marquee -->
<section class="py-section" style="background-color: var(--surface-alt); overflow: hidden;">
    <div class="container text-center reveal">
        <div class="section-label center">Trusted By</div>
        <h2 style="margin-bottom: 40px; color: var(--dark);">Our Partner Network</h2>
    </div>
    
    <div class="marquee-container" style="display: flex; flex-direction: column; gap: 24px; position: relative;">
        <!-- Marquee Row 1 (Left to Right) -->
        <div class="marquee-row" style="display: flex; width: max-content; gap: 24px; animation: scrollLeft 40s linear infinite;">
            <!-- Logo set -->
            <div class="marquee-item"><img src="OHMS Network and Infrastructure Company.jpg" alt="OHMS Network" style="height: 50px; object-fit: contain;"></div>
            <div class="marquee-item"><img src="Kila Kitu Interior Shop.avif" alt="Kila Kitu Interior Shop" style="height: 50px; object-fit: contain;"></div>
            <div class="marquee-item"><img src="REMAX Advisory.png" alt="REMAX Advisory" style="height: 50px; object-fit: contain;"></div>
            <!-- Duplicated for loop -->
            <div class="marquee-item"><img src="OHMS Network and Infrastructure Company.jpg" alt="OHMS Network" style="height: 50px; object-fit: contain;"></div>
            <div class="marquee-item"><img src="Kila Kitu Interior Shop.avif" alt="Kila Kitu Interior Shop" style="height: 50px; object-fit: contain;"></div>
            <div class="marquee-item"><img src="REMAX Advisory.png" alt="REMAX Advisory" style="height: 50px; object-fit: contain;"></div>
            <div class="marquee-item"><img src="OHMS Network and Infrastructure Company.jpg" alt="OHMS Network" style="height: 50px; object-fit: contain;"></div>
            <div class="marquee-item"><img src="Kila Kitu Interior Shop.avif" alt="Kila Kitu Interior Shop" style="height: 50px; object-fit: contain;"></div>
            <div class="marquee-item"><img src="REMAX Advisory.png" alt="REMAX Advisory" style="height: 50px; object-fit: contain;"></div>
        </div>
        
        <!-- Marquee Row 2 (Right to Left) -->
        <div class="marquee-row" style="display: flex; width: max-content; gap: 24px; animation: scrollRight 40s linear infinite;">
            <!-- Logo set -->
            <div class="marquee-item"><img src="REMAX Advisory.png" alt="REMAX Advisory" style="height: 50px; object-fit: contain;"></div>
            <div class="marquee-item"><img src="Kila Kitu Interior Shop.avif" alt="Kila Kitu Interior Shop" style="height: 50px; object-fit: contain;"></div>
            <div class="marquee-item"><img src="OHMS Network and Infrastructure Company.jpg" alt="OHMS Network" style="height: 50px; object-fit: contain;"></div>
            <!-- Duplicated for loop -->
            <div class="marquee-item"><img src="REMAX Advisory.png" alt="REMAX Advisory" style="height: 50px; object-fit: contain;"></div>
            <div class="marquee-item"><img src="Kila Kitu Interior Shop.avif" alt="Kila Kitu Interior Shop" style="height: 50px; object-fit: contain;"></div>
            <div class="marquee-item"><img src="OHMS Network and Infrastructure Company.jpg" alt="OHMS Network" style="height: 50px; object-fit: contain;"></div>
            <div class="marquee-item"><img src="REMAX Advisory.png" alt="REMAX Advisory" style="height: 50px; object-fit: contain;"></div>
            <div class="marquee-item"><img src="Kila Kitu Interior Shop.avif" alt="Kila Kitu Interior Shop" style="height: 50px; object-fit: contain;"></div>
            <div class="marquee-item"><img src="OHMS Network and Infrastructure Company.jpg" alt="OHMS Network" style="height: 50px; object-fit: contain;"></div>
        </div>
        
        <style>
        .marquee-item { background: white; border: 1px solid var(--border); border-radius: var(--radius-sm); padding: 24px 40px; color: var(--text-muted); display: flex; align-items: center; justify-content: center; min-width: 300px; filter: grayscale(100%); transition: all 0.3s; }
        .marquee-item:hover { filter: grayscale(0); color: var(--primary); box-shadow: var(--shadow-sm); transform: translateY(-3px); border-color: var(--primary-light); }
        .marquee-row:hover { animation-play-state: paused !important; }
        @keyframes scrollLeft { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes scrollRight { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
        </style>
    </div>
</section>

<!-- Testimonials -->
<section class="py-section" style="background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%); text-align: center; position: relative;">
    <div class="container reveal">
        <div class="section-label center" style="color: white;">Testimonials</div>
        <h2 style="color: white; margin-bottom: 64px;">What Our Clients Say</h2>
        
        <div class="test-carousel" style="position: relative; max-width: 800px; margin: 0 auto; height: 320px;">
            <div class="test-slide" style="position: absolute; top:0; left:0; width:100%; height:100%; transition: opacity 0.7s ease; opacity: 1;">
                <div style="background: white; border-radius: var(--radius-lg); padding: 48px; box-shadow: var(--shadow-md); position: relative;">
                    <div style="font-family: 'Bricolage Grotesque', serif; font-size: 6rem; color: rgba(27,79,216,0.1); position: absolute; top: 16px; left: 32px; line-height: 1;">"</div>
                    <p style="font-size: 1.25rem; color: var(--dark); font-style: italic; line-height: 1.8; margin-bottom: 32px; position:relative; z-index: 2;">
                        Their team efficiently manages our recruitment, procurement, and social media activities while providing consistent HR guidance. They're a true partner to our growth.
                    </p>
                    <div style="color: var(--secondary); font-size: 20px; margin-bottom: 16px;">
                        <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                    </div>
                    <div>
                        <h4 style="margin:0; font-weight: 700; color: var(--dark);">Agnes Kisuule</h4>
                        <div class="caption" style="color: var(--text-muted); margin-top: 4px;">Kila Kitu Interior Shop</div>
                    </div>
                </div>
            </div>
            
            <div class="test-slide" style="position: absolute; top:0; left:0; width:100%; height:100%; transition: opacity 0.7s ease; opacity: 0;">
                <div style="background: white; border-radius: var(--radius-lg); padding: 48px; box-shadow: var(--shadow-md); position: relative;">
                    <div style="font-family: 'Bricolage Grotesque', serif; font-size: 6rem; color: rgba(27,79,216,0.1); position: absolute; top: 16px; left: 32px; line-height: 1;">"</div>
                    <p style="font-size: 1.25rem; color: var(--dark); font-style: italic; line-height: 1.8; margin-bottom: 32px; position:relative; z-index: 2;">
                        The team supported us in preparing and organizing departmental documents with remarkable accuracy and efficiency. Highly recommended.
                    </p>
                    <div style="color: var(--secondary); font-size: 20px; margin-bottom: 16px;">
                        <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                    </div>
                    <div>
                        <h4 style="margin:0; font-weight: 700; color: var(--dark);">Raymond</h4>
                        <div class="caption" style="color: var(--text-muted); margin-top: 4px;">REMAX Advisory</div>
                    </div>
                </div>
            </div>

            <div class="test-slide" style="position: absolute; top:0; left:0; width:100%; height:100%; transition: opacity 0.7s ease; opacity: 0;">
                <div style="background: white; border-radius: var(--radius-lg); padding: 48px; box-shadow: var(--shadow-md); position: relative;">
                    <div style="font-family: 'Bricolage Grotesque', serif; font-size: 6rem; color: rgba(27,79,216,0.1); position: absolute; top: 16px; left: 32px; line-height: 1;">"</div>
                    <p style="font-size: 1.25rem; color: var(--dark); font-style: italic; line-height: 1.8; margin-bottom: 32px; position:relative; z-index: 2;">
                        Their professional and structured approach ensured that all processes were handled efficiently and effectively without any disruption.
                    </p>
                    <div style="color: var(--secondary); font-size: 20px; margin-bottom: 16px;">
                        <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                    </div>
                    <div>
                        <h4 style="margin:0; font-weight: 700; color: var(--dark);">Khasim Nziraguhunga</h4>
                        <div class="caption" style="color: var(--text-muted); margin-top: 4px;">OHMS Network and Infrastructure Company</div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="test-dots" style="display: flex; justify-content: center; gap: 8px; margin-top: 40px;">
            <div class="test-dot active"></div>
            <div class="test-dot"></div>
            <div class="test-dot"></div>
        </div>
        <style>
        .test-dot { width: 12px; height: 12px; border-radius: 50%; background: rgba(255,255,255,0.3); transition: all 0.3s; cursor: pointer; }
        .test-dot.active { background: white; width: 32px; border-radius: var(--radius-pill); }
        .test-carousel:hover .test-slide { animation-play-state: paused; }
        </style>
    </div>
</section>

<!-- CTA Strip -->
<section class="py-section" style="background-color: var(--surface); text-align: center; position: relative;">
    <div class="container reveal">
        <h2 style="font-size: 2.75rem; color: var(--dark); margin-bottom: 24px;">Ready to Reclaim Your Time?</h2>
        <p style="color: var(--text-muted); font-size: 1.15rem; max-width: 600px; margin: 0 auto 40px;">
            Book a free 30-minute consultation and let's discuss how we can transform your workflow and optimize your operations today.
        </p>
        <div style="display: flex; justify-content: center; gap: 16px; margin-bottom: 32px;">
            <a href="contact.html" class="btn btn-primary">Book Free Consultation</a>
            <a href="services.html" class="btn btn-outline">Explore Services</a>
        </div>
        <div style="display: flex; justify-content: center; gap: 32px; color: var(--dark);">
            <span><i class="fa-solid fa-phone" style="color:var(--primary); margin-right:8px;"></i> <a href="tel:+256780545636">+256 780 545 636</a></span>
            <span><i class="fa-solid fa-envelope" style="color:var(--primary); margin-right:8px;"></i> <a href="mailto:hr.business477@gmail.com">hr.business477@gmail.com</a></span>
        </div>
    </div>
</section>

<!-- Cookie Banner -->
<div id="cookieBanner" style="position: fixed; bottom: 0; width: 100%; background: var(--dark); border-left: 4px solid var(--primary); z-index: 1000; display: none; padding: 24px 40px; box-shadow: 0 -4px 16px rgba(0,0,0,0.2);">
    <div class="container" style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px;">
        <div style="color: white;">We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.</div>
        <div style="display: flex; gap: 16px; align-items: center;">
            <a href="#" style="color: rgba(255,255,255,0.7); font-size: 0.9rem;">Learn More</a>
            <button id="acceptCookies" class="btn btn-primary" style="padding: 8px 24px;">Accept</button>
        </div>
    </div>
</div>
<script>
document.addEventListener('DOMContentLoaded', () => {
    if(!localStorage.getItem('cookiesAccepted')) {
        const banner = document.getElementById('cookieBanner');
        banner.style.display = 'block';
        document.getElementById('acceptCookies').addEventListener('click', () => {
            banner.style.transform = 'translateY(100%)';
            banner.style.transition = 'transform 0.5s ease';
            setTimeout(() => banner.style.display = 'none', 500);
            localStorage.setItem('cookiesAccepted', 'true');
        });
    }
});
</script>
`;

let indexHtml = getHead('Home', true);
indexHtml = indexHtml.replace('</head>', `
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Business Consulting (Virtual Assistant Services)",
      "description": "Virtual Assistant and Business Consulting Services",
      "url": "https://businessvcon.mystrikingly.com/",
      "telephone": "+256 780 545 636",
      "email": "hr.business477@gmail.com",
      "address": "Kamwokya, Kampala Uganda",
      "serviceType": ["Virtual Assistant", "Business Consulting", "Administrative Support", "HR Management"]
    }
    </script>
</head>`);
indexHtml += indexBody + getFooter();

fs.writeFileSync('index.html', indexHtml);
console.log('index.html written');
