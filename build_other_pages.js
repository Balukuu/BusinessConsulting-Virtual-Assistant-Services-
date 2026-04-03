const fs = require('fs');
const { getHead, getFooter } = require('./layout');

// ============== ABOUT PAGE ==============
const aboutBody = `
<!-- Hero Section -->
<section style="position: relative; height: 50vh; overflow: hidden; background-color: var(--dark); display: flex; align-items: center; justify-content: center; text-align: center;">
    <div style="position: absolute; top: 0; right: 0; width: 60%; height: 100%; background: var(--primary); clip-path: polygon(100% 0, 0% 100%, 100% 100%); opacity: 0.15;"></div>
    
    <div class="container reveal" style="position: relative; z-index: 10;">

        <h1 style="color: white; font-size: 3.5rem; margin-bottom: 16px;">About Us</h1>
        <p style="color: var(--primary); font-family: 'Inter', sans-serif; font-weight: 500; font-size: 1.2rem; max-width: 600px; margin: 0 auto;">
            We streamline your admin, operations, and coordination so you can focus on growth.
        </p>
    </div>
</section>

<!-- Company Story -->
<section class="py-section" style="background-color: var(--surface);">
    <div class="container grid-2" style="align-items: center;">
        <div class="reveal">
            <div class="section-label">Our Story</div>
            <h2 style="color: var(--dark); margin-bottom: 24px;">Built on Practicality & Excellence</h2>
            <p style="color: var(--text-muted); margin-bottom: 16px; font-size: 1.1rem;">
                Business Consulting (Virtual Assistant Services) was founded with the vision of enabling businesses to scale efficiently through virtual solutions. We recognized a critical gap where entrepreneurs and executives were spending too much time on backend operations.
            </p>
            <p style="color: var(--text-muted); font-size: 1.1rem;">
                Our philosophy centers on practical, effective solutions tailored strictly to your individual needs. When we partner with you, we align deeply with your goals, ensuring that every task handed over translates directly to structural growth and operational clarity.
            </p>
        </div>
        <div class="reveal" style="background: var(--surface-alt); border-left: 6px solid var(--primary); padding: 48px; border-radius: var(--radius-lg); box-shadow: var(--shadow-sm);">
            <div style="font-family: 'Bricolage Grotesque', sans-serif; font-size: 2rem; color: var(--primary); line-height: 1.4; font-weight: 700;">
                "To empower businesses by providing exceptional virtual assistance and consulting services that enhance productivity and operational efficiency."
            </div>
            <p style="color: var(--dark); margin-top: 24px; font-weight: 600; font-family: 'Inter', sans-serif;">&mdash; Our Mission</p>
        </div>
    </div>
</section>

<!-- Mission, Vision, Values -->
<section class="py-section" style="background-color: var(--surface-alt); position: relative;">
    <div class="container">
        <div class="grid-3">
            <div class="reveal" style="background: white; padding: 48px 32px; border-radius: var(--radius-lg); box-shadow: var(--shadow-md); text-align: center; border-top: 4px solid transparent; transition: var(--transition);">
                <div style="width: 64px; height: 64px; background: var(--primary-light); color: var(--primary); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 24px; margin: 0 auto 24px;">
                    <i class="fa-solid fa-bullseye"></i>
                </div>
                <h3 style="color: var(--dark); margin-bottom: 16px;">Our Mission</h3>
                <p style="color: var(--text-muted);">To empower businesses by providing exceptional virtual assistance and consulting services that effortlessly enhance productivity.</p>
                <style>.reveal:hover { border-top-color: var(--primary); transform: translateY(-8px); }</style>
            </div>
            
            <div class="reveal" style="transition-delay: 0.1s; background: white; padding: 48px 32px; border-radius: var(--radius-lg); box-shadow: var(--shadow-md); text-align: center; border-top: 4px solid transparent; transition: var(--transition);">
                <div style="width: 64px; height: 64px; background: var(--primary-light); color: var(--primary); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 24px; margin: 0 auto 24px;">
                    <i class="fa-solid fa-eye"></i>
                </div>
                <h3 style="color: var(--dark); margin-bottom: 16px;">Our Vision</h3>
                <p style="color: var(--text-muted);">To be the leading business consulting and virtual assistant partner of choice for entrepreneurs and organizations across Africa and beyond.</p>
            </div>
            
            <div class="reveal" style="transition-delay: 0.2s; background: white; padding: 48px 32px; border-radius: var(--radius-lg); box-shadow: var(--shadow-md); text-align: center; border-top: 4px solid transparent; transition: var(--transition);">
                <div style="width: 64px; height: 64px; background: var(--primary-light); color: var(--primary); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 24px; margin: 0 auto 24px;">
                    <i class="fa-solid fa-gem"></i>
                </div>
                <h3 style="color: var(--dark); margin-bottom: 16px;">Our Core Values</h3>
                <p style="color: var(--text-muted);">Built on a foundation of Integrity, unwavering Collaboration, and steadfast Professionalism in every interaction.</p>
            </div>
        </div>
    </div>
</section>

<!-- Team Section -->
<section class="py-section" style="background-color: var(--surface);">
    <div class="container text-center reveal">
        <div class="section-label center">Meet Our Team</div>
        <h2 style="color: var(--dark); margin-bottom: 64px;">The Experts Behind the Execution</h2>
        
        <div class="grid-2" style="max-width: 900px; margin: 0 auto;">
            <!-- Member 1 -->
            <div class="reveal" style="background: var(--surface-alt); border-radius: var(--radius-md); padding: 40px; box-shadow: var(--shadow-sm); transition: var(--transition); text-align: center;">
                <div style="width: 120px; height: 120px; border-radius: 50%; overflow: hidden; border: 4px solid white; box-shadow: var(--shadow-sm); margin: 0 auto 24px;">
                    <img src="Ntuuwa Francis.jpg" alt="Ntuuwa Francis" style="width: 100%; height: 100%; object-fit: cover;">
                </div>
                <h3 style="color: var(--dark); margin-bottom: 8px;">Ntuuwa Francis</h3>
                <div style="color: var(--primary); font-weight: 600; font-family: 'Inter', sans-serif; margin-bottom: 16px;">Developer & Systems Admin</div>
                <p style="color: var(--text-muted); margin-bottom: 24px;">Mastering the technical backbone and system infrastructure that powers seamless operational flows for our diverse clientele.</p>
            </div>
            
            <!-- Member 2 -->
            <div class="reveal" style="transition-delay: 0.1s; background: var(--surface-alt); border-radius: var(--radius-md); padding: 40px; box-shadow: var(--shadow-sm); transition: var(--transition); text-align: center;">
                <div style="width: 120px; height: 120px; border-radius: 50%; overflow: hidden; border: 4px solid white; box-shadow: var(--shadow-sm); margin: 0 auto 24px;">
                    <img src="Joannah Mercy Nabirye.jpg" alt="Joannah Mercy Nabirye" style="width: 100%; height: 100%; object-fit: cover;">
                </div>
                <h3 style="color: var(--dark); margin-bottom: 8px;">Joannah Mercy Nabirye</h3>
                <div style="color: var(--primary); font-weight: 600; font-family: 'Inter', sans-serif; margin-bottom: 16px;">HR Specialist (HRMAU)</div>
                <p style="color: var(--text-muted); margin-bottom: 24px;">Leading the human capital operations, ensuring recruitment and onboarding processes are executed with professionalism and integrity.</p>
            </div>
        </div>
    </div>
</section>

<!-- Stats Strip -->
<section class="py-section" style="background: var(--primary); color: white; text-align: center;">
    <div class="container grid-3 reveal">
        <div>
            <div class="display do-count" data-target="100" data-suffix="+" style="font-size: 3.5rem;">0+</div>
            <div class="caption">Projects Completed</div>
        </div>
        <div style="transition-delay: 0.1s;">
            <div class="display do-count" data-target="98" data-suffix="%" style="font-size: 3.5rem;">0%</div>
            <div class="caption">Client Retention rate</div>
        </div>
        <div style="transition-delay: 0.2s;">
            <div class="display do-count" data-target="37" data-suffix="%" style="font-size: 3.5rem;">0%</div>
            <div class="caption">Market Growth Focus</div>
        </div>
    </div>
</section>
`;

let aboutHtml = getHead('About Us', true, 'about');
aboutHtml += aboutBody + getFooter();
fs.writeFileSync('about.html', aboutHtml);

// ============== SERVICES PAGE ==============
const servicesBody = `
<!-- Hero Section -->
<section style="position: relative; height: 50vh; overflow: hidden; background-color: var(--dark); display: flex; align-items: center; justify-content: center; text-align: center;">
    <div style="position: absolute; top: 0; right: 0; width: 60%; height: 100%; background: var(--primary); clip-path: polygon(100% 0, 0% 100%, 100% 100%); opacity: 0.15;"></div>
    
    <div class="container reveal" style="position: relative; z-index: 10;">

        <h1 style="color: white; font-size: 3.5rem; margin-bottom: 16px;">Our Services</h1>
        <p style="color: var(--primary); font-family: 'Inter', sans-serif; font-weight: 500; font-size: 1.2rem; max-width: 700px; margin: 0 auto;">
            Comprehensive Administrative and Technical Virtual Assistant solutions designed to support growing businesses, executives, and entrepreneurs.
        </p>
    </div>
</section>

<!-- Deep Dive Alternatives -->
<section class="py-section" style="background-color: var(--surface-alt);">
    <div class="container">
        
        <!-- Service 01 -->
        <div class="grid-2 reveal" style="align-items: center; margin-bottom: 120px;">
            <div>
                <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800" alt="Administrative Support" style="border-radius: var(--radius-lg); box-shadow: var(--shadow-md);">
            </div>
            <div>
                <div style="font-family: 'Bricolage Grotesque', sans-serif; font-size: 5rem; color: rgba(27,79,216,0.1); font-weight: 800; line-height: 1; margin-bottom: -20px; position:relative; z-index:0;">01</div>
                <div style="position: relative; z-index: 1;">
                    <h2 style="color: var(--dark); margin-bottom: 24px;">Administrative Support</h2>
                    <p style="color: var(--text-muted); font-size: 1.1rem; margin-bottom: 16px;">
                        Optimizing daily workflows through managed email & calendar coordination. We ensure you never miss an important meeting while filtering out the noise.
                    </p>
                    <ul style="list-style: none; padding: 0; color: var(--dark); margin-bottom: 32px;">
                        <li style="margin-bottom: 12px;"><i class="fa-solid fa-check" style="color: var(--primary); margin-right: 12px;"></i> Email & Calendar Management</li>
                        <li style="margin-bottom: 12px;"><i class="fa-solid fa-check" style="color: var(--primary); margin-right: 12px;"></i> Document Preparation (Reports, Proposals)</li>
                        <li style="margin-bottom: 12px;"><i class="fa-solid fa-check" style="color: var(--primary); margin-right: 12px;"></i> Data Entry & Database Maintenance</li>
                        <li style="margin-bottom: 12px;"><i class="fa-solid fa-check" style="color: var(--primary); margin-right: 12px;"></i> Travel & Meeting Coordination</li>
                    </ul>
                    <a href="contact.html" class="btn btn-primary">Request Details &rarr;</a>
                </div>
            </div>
        </div>

        <!-- Service 02 -->
        <div class="grid-2 reveal" style="align-items: center; margin-bottom: 120px;">
            <div style="order: 2;">
                <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800" alt="Customer Support" style="border-radius: var(--radius-lg); box-shadow: var(--shadow-md);">
            </div>
            <div style="order: 1;">
                <div style="font-family: 'Bricolage Grotesque', sans-serif; font-size: 5rem; color: rgba(27,79,216,0.1); font-weight: 800; line-height: 1; margin-bottom: -20px; position:relative; z-index:0;">02</div>
                <div style="position: relative; z-index: 1;">
                    <h2 style="color: var(--dark); margin-bottom: 24px;">Customer & Client Support</h2>
                    <p style="color: var(--text-muted); font-size: 1.1rem; margin-bottom: 16px;">
                        Enhancing client satisfaction by swiftly resolving inquiries. Your customers will experience top-tier white-labeled support reflecting your brand values.
                    </p>
                    <ul style="list-style: none; padding: 0; color: var(--dark); margin-bottom: 32px;">
                        <li style="margin-bottom: 12px;"><i class="fa-solid fa-check" style="color: var(--primary); margin-right: 12px;"></i> Inbound Support (Email/Phone/Chat)</li>
                        <li style="margin-bottom: 12px;"><i class="fa-solid fa-check" style="color: var(--primary); margin-right: 12px;"></i> CRM Management & Updates</li>
                        <li style="margin-bottom: 12px;"><i class="fa-solid fa-check" style="color: var(--primary); margin-right: 12px;"></i> Appointment & Resource Booking</li>
                    </ul>
                    <a href="contact.html" class="btn btn-primary">Request Details &rarr;</a>
                </div>
            </div>
        </div>

        <!-- Service 03 -->
        <div class="grid-2 reveal" style="align-items: center; margin-bottom: 120px;">
            <div>
                <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800" alt="HR Administration" style="border-radius: var(--radius-lg); box-shadow: var(--shadow-md);">
            </div>
            <div>
                <div style="font-family: 'Bricolage Grotesque', sans-serif; font-size: 5rem; color: rgba(27,79,216,0.1); font-weight: 800; line-height: 1; margin-bottom: -20px; position:relative; z-index:0;">03</div>
                <div style="position: relative; z-index: 1;">
                    <h2 style="color: var(--dark); margin-bottom: 24px;">HR & People Management</h2>
                    <p style="color: var(--text-muted); font-size: 1.1rem; margin-bottom: 16px;">
                        Supervised extensively by our HRMAU Certified specialists. Perfect for companies scaling quickly and needing robust organizational compliance.
                    </p>
                    <ul style="list-style: none; padding: 0; color: var(--dark); margin-bottom: 32px;">
                        <li style="margin-bottom: 12px;"><i class="fa-solid fa-check" style="color: var(--primary); margin-right: 12px;"></i> Recruitment & Interview Coordination</li>
                        <li style="margin-bottom: 12px;"><i class="fa-solid fa-check" style="color: var(--primary); margin-right: 12px;"></i> Onboarding Process Administration</li>
                        <li style="margin-bottom: 12px;"><i class="fa-solid fa-check" style="color: var(--primary); margin-right: 12px;"></i> Employee Records Management</li>
                        <li style="margin-bottom: 12px;"><i class="fa-solid fa-check" style="color: var(--primary); margin-right: 12px;"></i> Policies & Best Practices implementation</li>
                    </ul>
                    <a href="contact.html" class="btn btn-primary">Request Details &rarr;</a>
                </div>
            </div>
        </div>

        <!-- Service 04 -->
        <div class="grid-2 reveal" style="align-items: center;">
            <div style="order: 2;">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" alt="Strategic Support" style="border-radius: var(--radius-lg); box-shadow: var(--shadow-md);">
            </div>
            <div style="order: 1;">
                <div style="font-family: 'Bricolage Grotesque', sans-serif; font-size: 5rem; color: rgba(27,79,216,0.1); font-weight: 800; line-height: 1; margin-bottom: -20px; position:relative; z-index:0;">04</div>
                <div style="position: relative; z-index: 1;">
                    <h2 style="color: var(--dark); margin-bottom: 24px;">Strategic & Executive Assistance</h2>
                    <p style="color: var(--text-muted); font-size: 1.1rem; margin-bottom: 16px;">
                        High-level functional support tailored to executives. We synthesize data into actionable metrics and ensure tight organizational ship operations.
                    </p>
                    <ul style="list-style: none; padding: 0; color: var(--dark); margin-bottom: 32px;">
                        <li style="margin-bottom: 12px;"><i class="fa-solid fa-check" style="color: var(--primary); margin-right: 12px;"></i> Comprehensive Reporting & Presentations</li>
                        <li style="margin-bottom: 12px;"><i class="fa-solid fa-check" style="color: var(--primary); margin-right: 12px;"></i> Operations Streamlining & Audits</li>
                        <li style="margin-bottom: 12px;"><i class="fa-solid fa-check" style="color: var(--primary); margin-right: 12px;"></i> Marketing & Social Media Coordination</li>
                    </ul>
                    <a href="contact.html" class="btn btn-primary">Request Details &rarr;</a>
                </div>
            </div>
        </div>
        
    </div>
</section>

<!-- Bottom CTA -->
<section class="py-section" style="background-color: var(--surface); text-align: center;">
    <div class="container reveal">
        <h2 style="font-size: 2.75rem; color: var(--dark); margin-bottom: 24px;">Let's Discuss Your Needs</h2>
        <p style="color: var(--text-muted); font-size: 1.15rem; max-width: 600px; margin: 0 auto 40px;">
            Unsure which package suits your current operational phase? Book a consultation, and we'll analyze your requirements to build a tailored solution.
        </p>
        <a href="contact.html" class="btn btn-primary">Contact Us For A Quote</a>
    </div>
</section>
`;

let servicesHtml = getHead('Services', true, 'services');
servicesHtml += servicesBody + getFooter();
fs.writeFileSync('services.html', servicesHtml);

// ============== RESOURCES PAGE ==============
const resourcesBody = `
<!-- Hero Section -->
<section style="position: relative; height: 50vh; overflow: hidden; background-color: var(--dark); display: flex; align-items: center; justify-content: center; text-align: center;">
    <div style="position: absolute; top: 0; right: 0; width: 60%; height: 100%; background: var(--primary); clip-path: polygon(100% 0, 0% 100%, 100% 100%); opacity: 0.15;"></div>
    
    <div class="container reveal" style="position: relative; z-index: 10;">

        <h1 style="color: white; font-size: 3.5rem; margin-bottom: 16px;">Client Resources</h1>
        <p style="color: var(--primary); font-family: 'Inter', sans-serif; font-weight: 500; font-size: 1.2rem; max-width: 700px; margin: 0 auto;">
            Pricing plans, tailored operations kits, and knowledge access.
        </p>
    </div>
</section>

<section class="py-section" style="background-color: var(--surface-alt);">
    <div class="container grid-2">
        
        <div class="reveal" style="background: white; border-radius: var(--radius-lg); padding: 48px; box-shadow: var(--shadow-sm); text-align: center; border-bottom: 4px solid var(--primary);">
            <div style="background: var(--primary-light); width: 80px; height: 80px; display: flex; align-items: center; justify-content: center; border-radius: 50%; color: var(--primary); font-size: 32px; margin: 0 auto 32px;">
                <i class="fa-solid fa-file-invoice-dollar"></i>
            </div>
            <h3 style="color: var(--dark); margin-bottom: 16px;">Pricing and Plans</h3>
            <p style="color: var(--text-muted); margin-bottom: 32px;">
                We offer tailored services structurally designed to enhance your business efficiency without astronomical overhead fees. View our current dynamic pricing document.
            </p>
            <a href="https://drive.google.com/file/d/1XsbMIh3RcJMK7qcg8nuUnsDG578e11jB/view" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
                View Pricing PDF <i class="fa-solid fa-external-link" style="margin-left: 8px;"></i>
            </a>
        </div>
        
        <div class="reveal" style="transition-delay: 0.15s; background: white; border-radius: var(--radius-lg); padding: 48px; box-shadow: var(--shadow-sm); text-align: center; border-bottom: 4px solid var(--secondary);">
            <div style="background: #FEF3C7; width: 80px; height: 80px; display: flex; align-items: center; justify-content: center; border-radius: 50%; color: var(--secondary); font-size: 32px; margin: 0 auto 32px;">
                <i class="fa-solid fa-layer-group"></i>
            </div>
            <h3 style="color: var(--dark); margin-bottom: 16px;">Onboarding Kit</h3>
            <p style="color: var(--text-muted); margin-bottom: 32px;">
                Take a look at how we seamlessly integrate with your existing workflows. Our onboarding process is engineered strictly to ensure no operational downtime.
            </p>
            <a href="https://www.canva.com/design/DAHCf_OWBpM/ljwjOGr4rDUcvVoGKCv4Nw/view" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="background: var(--secondary);">
                View Onboarding Deck <i class="fa-solid fa-external-link" style="margin-left: 8px;"></i>
            </a>
        </div>

    </div>
</section>
`;
let resourcesHtml = getHead('Resources', true, 'resources');
resourcesHtml += resourcesBody + getFooter();
fs.writeFileSync('resources.html', resourcesHtml);

// ============== CONTACT PAGE ==============
const contactBody = `
<!-- Hero Section -->
<section style="position: relative; height: 50vh; overflow: hidden; background-color: var(--dark); display: flex; align-items: center; justify-content: center; text-align: center;">
    <div style="position: absolute; top: 0; left: 0; width: 60%; height: 100%; background: var(--primary); clip-path: polygon(0 0, 100% 0, 0% 100%); opacity: 0.15;"></div>
    
    <div class="container reveal" style="position: relative; z-index: 10;">

        <h1 style="color: white; font-size: 3.5rem; margin-bottom: 16px;">Get in Touch</h1>
        <p style="color: var(--primary); font-family: 'Inter', sans-serif; font-weight: 500; font-size: 1.2rem; max-width: 700px; margin: 0 auto;">
            Your Gateway to Seamless Business Support
        </p>
    </div>
</section>

<!-- Contact Area -->
<section class="py-section" style="background-color: var(--surface-alt); position: relative;">
    <div class="container grid-2" style="align-items: flex-start;">
        
        <!-- Details Card -->
        <div class="reveal" style="background: white; border-radius: var(--radius-lg); padding: 48px; box-shadow: var(--shadow-lg); border-top: 4px solid var(--primary); position: relative; z-index: 5;">
            <div class="section-label">Get In Touch</div>
            <h2 style="color: var(--dark); margin-bottom: 32px;">We'd Love to Hear From You</h2>
            
            <div style="display: flex; align-items: flex-start; gap: 24px; margin-bottom: 24px;">
                <div style="background: var(--primary-light); width: 48px; height: 48px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: var(--primary); font-size: 20px; flex-shrink: 0;">
                    <i class="fa-solid fa-map-pin"></i>
                </div>
                <div>
                    <h4 style="color: var(--dark); margin-bottom: 4px;">Headquarters</h4>
                    <p style="color: var(--text-muted);">Kamwokya, Kampala<br>Uganda</p>
                </div>
            </div>
            
            <div style="display: flex; align-items: flex-start; gap: 24px; margin-bottom: 24px;">
                <div style="background: var(--primary-light); width: 48px; height: 48px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: var(--primary); font-size: 20px; flex-shrink: 0;">
                    <i class="fa-solid fa-phone"></i>
                </div>
                <div>
                    <h4 style="color: var(--dark); margin-bottom: 4px;">Phone</h4>
                    <p style="color: var(--text-muted);">
                        <a href="tel:+256780545636" style="color: var(--primary); font-weight: 500;">+256 780 545 636</a><br>
                        <a href="tel:+256704188127" style="color: var(--primary); font-weight: 500;">+256 704 188 127</a>
                    </p>
                </div>
            </div>
            
            <div style="display: flex; align-items: flex-start; gap: 24px; margin-bottom: 32px;">
                <div style="background: var(--primary-light); width: 48px; height: 48px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: var(--primary); font-size: 20px; flex-shrink: 0;">
                    <i class="fa-solid fa-envelope"></i>
                </div>
                <div>
                    <h4 style="color: var(--dark); margin-bottom: 4px;">Email</h4>
                    <p style="color: var(--text-muted);">
                        <a href="mailto:hr.business477@gmail.com" style="color: var(--primary); font-weight: 500;">hr.business477@gmail.com</a>
                    </p>
                </div>
            </div>

            <hr style="border: none; border-top: 1px solid var(--border); margin: 32px 0;">
            
            <div style="display: flex; align-items: flex-start; gap: 24px;">
                <div style="background: var(--primary-light); width: 48px; height: 48px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: var(--primary); font-size: 20px; flex-shrink: 0;">
                    <i class="fa-solid fa-clock"></i>
                </div>
                <div>
                    <h4 style="color: var(--dark); margin-bottom: 4px;">Business Hours</h4>
                    <p style="color: var(--text-muted);">
                        Mon - Fri : 10:00 AM - 5:00 PM<br>
                        Sat : 1:00 PM - 5:00 PM
                    </p>
                </div>
            </div>
            
            <div style="margin-top: 40px; display:flex; gap:16px;">
                <a href="#" class="social-icon" aria-label="LinkedIn Profile"><i class="fa-brands fa-linkedin-in"></i></a>
            </div>
        </div>

        <!-- Form Card -->
        <div class="reveal" style="background: white; border-radius: var(--radius-lg); padding: 48px; box-shadow: var(--shadow-lg); transition-delay: 0.2s;">
            <h2 style="color: var(--dark); margin-bottom: 32px;">Send Us a Message</h2>
            
            <form id="contactForm" onsubmit="event.preventDefault(); document.getElementById('toast').style.display='flex'; this.reset();">
                <div class="grid-2" style="gap: 24px; margin-bottom: 24px;">
                    <div>
                        <label style="display:block; margin-bottom: 8px; font-weight: 500; font-family: 'Inter'; color: var(--dark);">First Name</label>
                        <input type="text" required style="width: 100%; padding: 14px 16px; border: 1.5px solid var(--border); border-radius: var(--radius-sm); font-family: 'Inter'; transition:all 0.3s;" onfocus="this.style.borderColor='var(--primary)'" onblur="this.style.borderColor='var(--border)'">
                    </div>
                    <div>
                        <label style="display:block; margin-bottom: 8px; font-weight: 500; font-family: 'Inter'; color: var(--dark);">Last Name</label>
                        <input type="text" required style="width: 100%; padding: 14px 16px; border: 1.5px solid var(--border); border-radius: var(--radius-sm); font-family: 'Inter'; transition:all 0.3s;" onfocus="this.style.borderColor='var(--primary)'" onblur="this.style.borderColor='var(--border)'">
                    </div>
                </div>
                
                <div class="grid-2" style="gap: 24px; margin-bottom: 24px;">
                    <div>
                        <label style="display:block; margin-bottom: 8px; font-weight: 500; font-family: 'Inter'; color: var(--dark);">Email</label>
                        <input type="email" required style="width: 100%; padding: 14px 16px; border: 1.5px solid var(--border); border-radius: var(--radius-sm); font-family: 'Inter'; transition:all 0.3s;" onfocus="this.style.borderColor='var(--primary)'" onblur="this.style.borderColor='var(--border)'">
                    </div>
                    <div>
                        <label style="display:block; margin-bottom: 8px; font-weight: 500; font-family: 'Inter'; color: var(--dark);">Phone</label>
                        <input type="tel" style="width: 100%; padding: 14px 16px; border: 1.5px solid var(--border); border-radius: var(--radius-sm); font-family: 'Inter'; transition:all 0.3s;" onfocus="this.style.borderColor='var(--primary)'" onblur="this.style.borderColor='var(--border)'">
                    </div>
                </div>
                
                <div style="margin-bottom: 24px;">
                    <label style="display:block; margin-bottom: 8px; font-weight: 500; font-family: 'Inter'; color: var(--dark);">Service of Interest</label>
                    <select style="width: 100%; padding: 14px 16px; border: 1.5px solid var(--border); border-radius: var(--radius-sm); font-family: 'Inter'; background: white; transition:all 0.3s;" onfocus="this.style.borderColor='var(--primary)'" onblur="this.style.borderColor='var(--border)'">
                        <option>Core Administrative Support</option>
                        <option>Customer & Client Support</option>
                        <option>HR & People Administration</option>
                        <option>Strategic & Executive Assistance</option>
                        <option>Consulting & Analysis</option>
                    </select>
                </div>

                <div style="margin-bottom: 32px;">
                    <label style="display:block; margin-bottom: 8px; font-weight: 500; font-family: 'Inter'; color: var(--dark);">Your Message</label>
                    <textarea rows="4" required style="width: 100%; padding: 14px 16px; border: 1.5px solid var(--border); border-radius: var(--radius-sm); font-family: 'Inter'; transition:all 0.3s; resize: none;" onfocus="this.style.borderColor='var(--primary)'" onblur="this.style.borderColor='var(--border)'"></textarea>
                </div>
                
                <button type="submit" class="btn btn-primary" style="width:100%; padding: 18px;">Send Message &rarr;</button>
            </form>
            
            <div id="toast" style="display:none; background: var(--success); color: white; padding: 16px 24px; border-radius: var(--radius-sm); margin-top: 24px; align-items: center; gap: 12px; font-weight: 500; animation: fadeIn 0.4s ease;">
                <i class="fa-solid fa-circle-check" style="font-size: 20px;"></i>
                Thank you! We'll be in touch within 24 hours.
            </div>
            
        </div>
    </div>
</section>

<!-- Maps -->
<section style="padding: 0 0 100px; background-color: var(--surface-alt);">
    <div class="container reveal">
        <div style="border-radius: var(--radius-lg); overflow: hidden; box-shadow: var(--shadow-md); border: 1px solid var(--border); height: 450px;">
            <iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?q=Kamwokya,%20Kampala%20Uganda&t=&z=14&ie=UTF8&iwloc=&output=embed" style="filter: grayscale(80%) hue-rotate(180deg) brightness(95%);"></iframe>
        </div>
    </div>
</section>
`;

let contactHtml = getHead('Contact Us', true, 'contact');
contactHtml += contactBody + getFooter();
fs.writeFileSync('contact.html', contactHtml);

// ============== 404 PAGE ==============
const errorBody = `
<section style="height: 100vh; display:flex; align-items:center; justify-content:center; flex-direction:column; background-color: var(--dark); color: white; text-align:center; padding: 40px; position:relative; overflow:hidden;">
    <div style="position: absolute; top: -20%; left: -10%; width: 50vw; height: 50vw; background: var(--primary); border-radius: 50%; opacity: 0.1; filter: blur(100px);"></div>
    <div style="position: absolute; bottom: -20%; right: -10%; width: 50vw; height: 50vw; background: var(--secondary); border-radius: 50%; opacity: 0.1; filter: blur(100px);"></div>
    
    <div style="position:relative; z-index:10; max-width:600px;">
        <img src="https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1000,w_1000,f_auto,q_auto/11105459/781534_911366.png" style="max-height:80px; margin: 0 auto 40px; filter: brightness(0) invert(1);">
        <h1 style="font-size: 8rem; color: var(--primary); line-height:1; margin-bottom: 24px;">404</h1>
        <h2 style="margin-bottom: 16px;">Page Not Found</h2>
        <p style="color: rgba(255,255,255,0.7); font-size: 1.2rem; margin-bottom: 40px;">Looks like you took a wrong turn. The page you are looking for does not exist or has been moved.</p>
        
        <div style="display:flex; justify-content:center; gap: 16px;">
            <a href="index.html" class="btn btn-primary">Go Home</a>
            <a href="contact.html" class="btn btn-outline">Contact Us</a>
        </div>
    </div>
</section>
`;

let errorHtml = getHead('Page Not Found', true, '');
errorHtml += errorBody; 
// Footer is probably omitted on a clean 404 page, but prompt says "Write the full <nav> and <footer> in EVERY file".
// The prompt rules specifically mention 404: "- Full-page branded 404 with logo, [...] Animated CSS illustration". 
// Wait, I will include the footer just to strictly comply with "never skip".
errorHtml += getFooter();
fs.writeFileSync('404.html', errorHtml);

console.log('All auxiliary pages successfully generated.');
