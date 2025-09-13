/* ==========================================================================
   EDURA ACADEMY - JAVASCRIPT FUNCTIONALITY WITH COMPREHENSIVE BUG FIXES
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    /* ==========================================================================
       GLOBAL VARIABLES
       ========================================================================== */
    const loadingScreen = document.getElementById('loading-screen');
    const header = document.getElementById('header');
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');
    const navLinks = document.querySelectorAll('.nav__link');
    const scrollTopBtn = document.getElementById('scroll-top');
    const testimonySlider = document.getElementById('testimony-slider');
    const testimonyDots = document.querySelectorAll('.testimony__dot');
    const statNumbers = document.querySelectorAll('.stat__number');
    const serviceCards = document.querySelectorAll('.service__card');
    const serviceModal = document.getElementById('service-modal');
    const modalClose = document.getElementById('modal-close');
    const modalOverlay = serviceModal?.querySelector('.modal__overlay');
    const levelButtons = document.querySelectorAll('.level__btn');
    const priceAmounts = document.querySelectorAll('.price__amount');
    
    let currentTestimonySlide = 0;
    let testimonyInterval;
    let countersAnimated = false;
    let currentLevel = 'SD';
    let currentService = null;

    /* ==========================================================================
       SERVICE DATA FOR MODALS
       ========================================================================== */
    const serviceData = {
        mathematics: {
            name: 'Matematika',
            icon: 'fas fa-calculator',
            levels: {
                SD: {
                    curriculum: ['Operasi Hitung Dasar', 'Pecahan dan Desimal', 'Geometri Sederhana', 'Pengukuran', 'Statistika Dasar'],
                    methods: ['Visual Learning', 'Manipulatif Konkret', 'Games Matematika', 'Problem Solving Bertahap'],
                    tools: ['Counting Blocks', 'Geometric Shapes', 'Math Games', 'Interactive Worksheets'],
                    duration: '1.5-2 jam per sesi',
                    target: 'Membangun fondasi matematika yang kuat dan menyenangkan'
                },
                SMP: {
                    curriculum: ['Aljabar Linear', 'Fungsi dan Grafik', 'Geometri dan Trigonometri', 'Statistika', 'Peluang'],
                    methods: ['Conceptual Understanding', 'Problem-Based Learning', 'Technology Integration', 'Peer Learning'],
                    tools: ['GeoGebra', 'Graphing Calculator', 'Interactive Simulations', 'Online Practice'],
                    duration: '2-2.5 jam per sesi',
                    target: 'Menguasai konsep matematika untuk persiapan SMA'
                },
                SMA: {
                    curriculum: ['Kalkulus Diferensial', 'Integral', 'Matriks', 'Barisan dan Deret', 'Trigonometri Lanjut', 'Statistika Inferensial'],
                    methods: ['Analytical Thinking', 'Real-world Applications', 'Technology-Enhanced Learning', 'Exam Preparation'],
                    tools: ['Desmos', 'Mathematical Software', 'Scientific Calculator', 'Practice Tests'],
                    duration: '2.5-3 jam per sesi',
                    target: 'Persiapan UTBK, Olimpiade, dan kuliah'
                }
            }
        },
        programming: {
            name: 'Programming',
            icon: 'fas fa-code',
            levels: {
                SD: {
                    curriculum: ['Scratch Programming', 'Basic Logic', 'Algoritma Sederhana', 'Game Development', 'Creative Coding'],
                    methods: ['Visual Programming', 'Project-Based Learning', 'Storytelling', 'Creative Expression'],
                    tools: ['Scratch', 'Code.org', 'Tynker', 'Simple Games'],
                    duration: '1.5-2 jam per sesi',
                    target: 'Membangun logical thinking dan creativity'
                },
                SMP: {
                    curriculum: ['Python Fundamentals', 'Web Development (HTML/CSS)', 'JavaScript Basics', 'Database Basics', 'Mobile App Intro'],
                    methods: ['Hands-on Coding', 'Project Portfolio', 'Team Collaboration', 'Problem Solving'],
                    tools: ['VS Code', 'Python IDLE', 'Browser Dev Tools', 'GitHub', 'MIT App Inventor'],
                    duration: '2-2.5 jam per sesi',
                    target: 'Membuat website dan aplikasi sederhana'
                },
                SMA: {
                    curriculum: ['Advanced Python', 'Full-Stack Web Dev', 'Mobile App Development', 'Data Science', 'AI/ML Basics', 'Cybersecurity'],
                    methods: ['Professional Development', 'Industry Standards', 'Portfolio Building', 'Internship Prep'],
                    tools: ['Professional IDEs', 'Cloud Platforms', 'Version Control', 'Testing Frameworks'],
                    duration: '2.5-3 jam per sesi',
                    target: 'Siap kerja di industri teknologi'
                }
            }
        },
        robotics: {
            name: 'Robotik',
            icon: 'fas fa-robot',
            levels: {
                SD: {
                    curriculum: ['Lego Mindstorms', 'Basic Electronics', 'Simple Sensors', 'Motor Control', 'Programming Blocks'],
                    methods: ['Learning by Building', 'Hands-on Assembly', 'Trial and Error', 'Team Projects'],
                    tools: ['Lego EV3', 'Simple Sensors', 'Block Programming', 'Building Instructions'],
                    duration: '2-2.5 jam per sesi',
                    target: 'Memahami dasar robotika dan engineering'
                },
                SMP: {
                    curriculum: ['Arduino Programming', 'Sensor Integration', 'Actuator Control', 'IoT Basics', 'Robot Assembly'],
                    methods: ['Project-Based Learning', 'Prototyping', 'Problem-Solving', 'Engineering Design'],
                    tools: ['Arduino Uno', 'Various Sensors', 'Motors and Servos', 'Breadboards', 'Arduino IDE'],
                    duration: '2.5-3 jam per sesi',
                    target: 'Membuat robot fungsional dengan berbagai sensor'
                },
                SMA: {
                    curriculum: ['Advanced Robotics', 'AI Integration', 'Computer Vision', 'Autonomous Systems', 'Competition Robotics'],
                    methods: ['Research-Based Learning', 'Industry Standards', 'Competition Training', 'Innovation Projects'],
                    tools: ['Raspberry Pi', 'Advanced Sensors', 'Machine Learning', 'ROS', 'Professional Tools'],
                    duration: '3-4 jam per sesi',
                    target: 'Kompetisi robotik tingkat nasional/internasional'
                }
            }
        },
        science: {
            name: 'IPA',
            icon: 'fas fa-flask',
            levels: {
                SD: {
                    curriculum: ['Sains Dasar', 'Observation Skills', 'Simple Experiments', 'Nature Study', 'Scientific Method'],
                    methods: ['Inquiry-Based Learning', 'Hands-on Experiments', 'Nature Exploration', 'Simple Lab Work'],
                    tools: ['Basic Lab Equipment', 'Magnifying Glass', 'Simple Microscope', 'Measurement Tools'],
                    duration: '1.5-2 jam per sesi',
                    target: 'Membangun curiosity dan observation skills'
                },
                SMP: {
                    curriculum: ['Fisika Dasar', 'Kimia Dasar', 'Biologi', 'Lab Practicum', 'Scientific Research'],
                    methods: ['Laboratory Practice', 'Experimental Design', 'Data Analysis', 'Scientific Writing'],
                    tools: ['Lab Equipment', 'Microscopes', 'Chemical Sets', 'Measurement Instruments'],
                    duration: '2-2.5 jam per sesi',
                    target: 'Menguasai konsep IPA dan metode ilmiah'
                },
                SMA: {
                    curriculum: ['Fisika Lanjut', 'Kimia Organik', 'Biologi Molekuler', 'Research Methods', 'Scientific Publication'],
                    methods: ['Advanced Laboratory', 'Research Projects', 'Scientific Method', 'University Preparation'],
                    tools: ['Advanced Equipment', 'Simulation Software', 'Research Databases', 'Lab Instruments'],
                    duration: '2.5-3 jam per sesi',
                    target: 'Persiapan kuliah sains dan riset'
                }
            }
        }
    };

    /* ==========================================================================
       LOADING SCREEN
       ========================================================================== */
    function hideLoadingScreen() {
        setTimeout(() => {
            loadingScreen.classList.add('hide');
            setTimeout(() => {
                initScrollAnimations();
                startTypingAnimation();
            }, 500);
        }, 1500);
    }

    /* ==========================================================================
       NAVIGATION FUNCTIONALITY
       ========================================================================== */
    
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu');
        });
    }

    if (navClose) {
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-menu');
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('show-menu');
        });
    });

    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
            navMenu.classList.remove('show-menu');
        }
    });

    /* ==========================================================================
       SMOOTH SCROLLING & ACTIVE NAVIGATION
       ========================================================================== */
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const targetId = this.getAttribute('href');
            if (!targetId || targetId === '#') return;
            
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = header.offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight - 20;
                
                navMenu.classList.remove('show-menu');
                
                if ('scrollBehavior' in document.documentElement.style) {
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                } else {
                    smoothScrollTo(targetPosition, 1000);
                }
                
                updateActiveNavLink(targetId);
            }
        });
    });

    function smoothScrollTo(targetPosition, duration = 1000) {
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        let startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        function easeInOutQuad(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(animation);
    }

    function updateActiveNavLink(activeId = null) {
        if (activeId) {
            navLinks.forEach(link => link.classList.remove('active'));
            const activeLink = document.querySelector(`.nav__link[href="${activeId}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
            return;
        }

        const sections = document.querySelectorAll('.section');
        const scrollPos = window.scrollY + header.offsetHeight + 100;

        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                currentSection = sectionId;
            }
        });

        if (currentSection) {
            navLinks.forEach(link => link.classList.remove('active'));
            const correspondingNavLink = document.querySelector(`.nav__link[href="#${currentSection}"]`);
            if (correspondingNavLink) {
                correspondingNavLink.classList.add('active');
            }
        }
    }

    /* ==========================================================================
       SERVICE MODAL FUNCTIONALITY - COMPREHENSIVE FIX
       ========================================================================== */
    
    function initServiceModals() {
        console.log('Initializing service modals...');
        
        // Service card click handlers
        serviceCards.forEach(card => {
            // Remove any existing event listeners by cloning
            const newCard = card.cloneNode(true);
            card.parentNode.replaceChild(newCard, card);
            
            // Add click handler to the entire card
            newCard.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                const serviceType = this.getAttribute('data-service');
                console.log(`Service card clicked: ${serviceType}`);
                
                if (serviceType && serviceData[serviceType]) {
                    openServiceModal(serviceType);
                }
            });

            // Add hover effects
            newCard.addEventListener('mouseenter', function() {
                this.style.cursor = 'pointer';
                this.style.transform = 'translateY(-10px) scale(1.02)';
            });

            newCard.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });

        // Modal close events
        if (modalClose) {
            modalClose.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                closeServiceModal();
            });
        }

        if (modalOverlay) {
            modalOverlay.addEventListener('click', function(e) {
                if (e.target === modalOverlay) {
                    closeServiceModal();
                }
            });
        }

        // ESC key handler
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && serviceModal && serviceModal.classList.contains('show')) {
                closeServiceModal();
            }
        });

        console.log('Service modals initialized');
    }

    function openServiceModal(serviceType) {
        const service = serviceData[serviceType];
        if (!service || !serviceModal) {
            console.error('Service data not found or modal not available');
            return;
        }

        currentService = service;
        console.log(`Opening modal for ${service.name}`);

        // Update modal title
        const modalTitle = document.getElementById('modal-title');
        if (modalTitle) {
            modalTitle.innerHTML = `<i class="${service.icon}"></i> ${service.name}`;
        }

        // Initialize tabs
        initModalTabs(service);

        // Show modal with animation
        serviceModal.classList.remove('hidden');
        setTimeout(() => {
            serviceModal.classList.add('show');
        }, 10);

        // Prevent body scroll
        document.body.style.overflow = 'hidden';

        console.log(`Modal opened for ${service.name}`);
    }

    function closeServiceModal() {
        if (!serviceModal) return;

        console.log('Closing service modal');
        serviceModal.classList.remove('show');
        
        setTimeout(() => {
            serviceModal.classList.add('hidden');
            document.body.style.overflow = '';
            currentService = null;
        }, 300);
    }

    function initModalTabs(service) {
        if (!serviceModal || !service) return;

        console.log(`Initializing tabs for ${service.name}`);

        // Get fresh tab buttons from the DOM
        const tabButtons = serviceModal.querySelectorAll('.tab__button');
        const tabContent = document.getElementById('modal-tab-content');

        if (!tabContent) {
            console.error('Modal tab content container not found');
            return;
        }

        // Clear existing event listeners by replacing elements
        tabButtons.forEach((button, index) => {
            const newButton = button.cloneNode(true);
            button.parentNode.replaceChild(newButton, button);
            
            newButton.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                const level = this.getAttribute('data-level');
                console.log(`Tab clicked: ${level}`);
                
                // Switch content
                switchModalTab(level, service);
                
                // Update active tab appearance
                serviceModal.querySelectorAll('.tab__button').forEach(btn => {
                    btn.classList.remove('active');
                });
                this.classList.add('active');
                
                console.log(`Switched to ${level} tab for ${service.name}`);
            });
        });

        // Initialize with SD tab
        switchModalTab('SD', service);
        
        // Set first tab as active
        const firstTab = serviceModal.querySelector('.tab__button[data-level="SD"]');
        if (firstTab) {
            serviceModal.querySelectorAll('.tab__button').forEach(btn => btn.classList.remove('active'));
            firstTab.classList.add('active');
        }

        console.log('Modal tabs initialized');
    }

    function switchModalTab(level, service) {
        const tabContent = document.getElementById('modal-tab-content');
        if (!tabContent || !service || !service.levels[level]) {
            console.error('Cannot switch tab - missing data or element');
            return;
        }

        const levelData = service.levels[level];
        console.log(`Switching to ${level} content`);

        tabContent.innerHTML = `
            <div class="tab-content active">
                <div class="modal__section">
                    <h4><i class="fas fa-book"></i> Kurikulum ${level}</h4>
                    <ul class="modal__list">
                        ${levelData.curriculum.map(item => `<li><i class="fas fa-check-circle"></i> ${item}</li>`).join('')}
                    </ul>
                </div>

                <div class="modal__section">
                    <h4><i class="fas fa-lightbulb"></i> Metode Pembelajaran</h4>
                    <ul class="modal__list">
                        ${levelData.methods.map(item => `<li><i class="fas fa-star"></i> ${item}</li>`).join('')}
                    </ul>
                </div>

                <div class="modal__section">
                    <h4><i class="fas fa-tools"></i> Tools & Software</h4>
                    <ul class="modal__list">
                        ${levelData.tools.map(item => `<li><i class="fas fa-cog"></i> ${item}</li>`).join('')}
                    </ul>
                </div>

                <div class="modal__section">
                    <h4><i class="fas fa-clock"></i> Durasi Pembelajaran</h4>
                    <div class="modal__highlight">
                        <i class="fas fa-hourglass-half"></i> ${levelData.duration}
                    </div>
                </div>

                <div class="modal__section">
                    <h4><i class="fas fa-target"></i> Target Pencapaian</h4>
                    <div class="modal__highlight">
                        <i class="fas fa-bullseye"></i> ${levelData.target}
                    </div>
                </div>
            </div>
        `;

        console.log(`Content switched to ${level} for ${service.name}`);
    }

    /* ==========================================================================
       PRICING LEVEL SELECTOR - COMPREHENSIVE FIX
       ========================================================================== */
    
    function initPricingLevelSelector() {
        console.log('Initializing pricing level selector...');
        
        // Get fresh level buttons to avoid conflicts
        const freshLevelButtons = document.querySelectorAll('.pricing__level-selector .level__btn');
        
        freshLevelButtons.forEach(button => {
            // Clone to remove existing listeners
            const newButton = button.cloneNode(true);
            button.parentNode.replaceChild(newButton, button);
            
            newButton.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                const level = this.getAttribute('data-level');
                console.log(`Level button clicked: ${level}`);
                
                // Update active button
                freshLevelButtons.forEach(btn => {
                    const actualBtn = document.querySelector(`.pricing__level-selector .level__btn[data-level="${btn.getAttribute('data-level')}"]`);
                    if (actualBtn) actualBtn.classList.remove('active');
                });
                this.classList.add('active');
                
                // Update prices
                updatePrices(level);
                currentLevel = level;

                console.log(`Switched to ${level} pricing`);
            });
        });

        // Initialize with SD prices
        updatePrices('SD');
        console.log('Pricing level selector initialized');
    }

    function updatePrices(level) {
        console.log(`Updating prices for level: ${level}`);
        
        const freshPriceAmounts = document.querySelectorAll('.price__amount');
        
        freshPriceAmounts.forEach(priceElement => {
            const price = priceElement.getAttribute(`data-${level.toLowerCase()}`);
            if (price) {
                const formattedPrice = formatPrice(parseInt(price));
                priceElement.textContent = formattedPrice;
                
                // Add animation
                priceElement.style.transform = 'scale(1.1)';
                priceElement.style.color = '#f59e0b';
                
                setTimeout(() => {
                    priceElement.style.transform = 'scale(1)';
                    priceElement.style.color = '';
                }, 300);
                
                console.log(`Price updated: ${formattedPrice}`);
            }
        });
    }

    function formatPrice(price) {
        return 'Rp ' + price.toLocaleString('id-ID');
    }

    /* ==========================================================================
       PRICING BUTTONS - COMPREHENSIVE FIX
       ========================================================================== */
    
    function initPricingButtons() {
        console.log('Initializing pricing buttons...');
        
        // Fix all pricing package buttons
        const pricingButtons = document.querySelectorAll('.pricing__card .btn');
        
        pricingButtons.forEach(button => {
            const card = button.closest('.pricing__card');
            const packageType = card ? card.getAttribute('data-package') : 'standard';
            
            const packageNames = {
                'basic': 'Basic',
                'standard': 'Standard',
                'premium': 'Premium',
                'vip': 'VIP'
            };
            
            const packageName = packageNames[packageType] || 'Standard';
            const whatsappMessage = `Halo, saya tertarik dengan paket ${packageName} di Edura Academy untuk jenjang ${currentLevel}. Mohon informasi lebih lanjut mengenai pendaftaran dan jadwal pembelajaran.`;
            const whatsappUrl = `https://wa.me/081313772566?text=${encodeURIComponent(whatsappMessage)}`;
            
            // Update button attributes
            button.setAttribute('href', whatsappUrl);
            button.setAttribute('target', '_blank');
            button.setAttribute('rel', 'noopener');
            
            console.log(`Updated ${packageName} package button`);
        });

        // Fix consultation button
        const consultationButton = document.querySelector('.consultation__card .btn');
        if (consultationButton) {
            const consultMessage = 'Halo, saya ingin konsultasi untuk menentukan paket yang sesuai dengan kebutuhan dan kemampuan anak saya di Edura Academy. Mohon bantuan rekomendasinya.';
            const consultUrl = `https://wa.me/081313772566?text=${encodeURIComponent(consultMessage)}`;
            
            consultationButton.setAttribute('href', consultUrl);
            consultationButton.setAttribute('target', '_blank');
            consultationButton.setAttribute('rel', 'noopener');
            
            console.log('Updated consultation button');
        }

        console.log('Pricing buttons initialized');
    }

    /* ==========================================================================
       STICKY HEADER
       ========================================================================== */
    function handleStickyHeader() {
        if (window.scrollY > 100) {
            header.classList.add('scroll-down');
        } else {
            header.classList.remove('scroll-down');
        }
    }

    /* ==========================================================================
       SCROLL TO TOP BUTTON
       ========================================================================== */
    function handleScrollTopButton() {
        if (window.scrollY > 500) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    }

    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    /* ==========================================================================
       ANIMATED COUNTERS
       ========================================================================== */
    function animateCounters() {
        if (countersAnimated) return;

        statNumbers.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            const duration = 2000;
            let current = 0;
            const increment = target / (duration / 16);

            const updateCounter = () => {
                if (current < target) {
                    current += increment;
                    counter.textContent = Math.floor(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }
            };

            updateCounter();
        });

        countersAnimated = true;
    }

    function checkCountersInView() {
        const heroStats = document.querySelector('.hero__stats');
        if (heroStats && isElementInViewportWithOffset(heroStats, 200)) {
            animateCounters();
        }
    }

    /* ==========================================================================
       SCROLL ANIMATIONS
       ========================================================================== */
    function initScrollAnimations() {
        const animatedElements = document.querySelectorAll('.service__card, .pricing__card, .feature__item, .contact__item');
        
        animatedElements.forEach((element, index) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(50px)';
            element.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
            element.style.transitionDelay = `${index * 0.1}s`;
        });
    }

    function handleScrollAnimations() {
        const animatedElements = document.querySelectorAll('.service__card, .pricing__card, .feature__item, .contact__item');
        
        animatedElements.forEach(element => {
            if (isElementInViewportWithOffset(element, 100)) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }

    function isElementInViewportWithOffset(el, offset = 100) {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        return (
            rect.top <= windowHeight - offset &&
            rect.bottom >= offset
        );
    }

    /* ==========================================================================
       TESTIMONIAL SLIDER
       ========================================================================== */
    function initTestimonialSlider() {
        const slides = document.querySelectorAll('.testimony__slide');
        
        if (slides.length === 0) return;

        console.log(`Initializing testimonial slider with ${slides.length} slides`);

        function showSlide(index) {
            slides.forEach(slide => slide.classList.remove('active'));
            testimonyDots.forEach(dot => dot.classList.remove('active'));

            if (slides[index]) {
                slides[index].classList.add('active');
            }
            if (testimonyDots[index]) {
                testimonyDots[index].classList.add('active');
            }
        }

        function nextSlide() {
            currentTestimonySlide = (currentTestimonySlide + 1) % slides.length;
            showSlide(currentTestimonySlide);
        }

        function startAutoSlide() {
            stopAutoSlide();
            testimonyInterval = setInterval(() => {
                nextSlide();
            }, 5000);
        }

        function stopAutoSlide() {
            if (testimonyInterval) {
                clearInterval(testimonyInterval);
                testimonyInterval = null;
            }
        }

        // Dot navigation
        testimonyDots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentTestimonySlide = index;
                showSlide(currentTestimonySlide);
                stopAutoSlide();
                setTimeout(startAutoSlide, 3000);
            });
        });

        // Pause auto-advance on hover
        if (testimonySlider) {
            testimonySlider.addEventListener('mouseenter', stopAutoSlide);
            testimonySlider.addEventListener('mouseleave', startAutoSlide);
        }

        // Touch/swipe support for mobile
        let touchStartX = 0;
        let touchEndX = 0;

        if (testimonySlider) {
            testimonySlider.addEventListener('touchstart', e => {
                touchStartX = e.changedTouches[0].screenX;
            });

            testimonySlider.addEventListener('touchend', e => {
                touchEndX = e.changedTouches[0].screenX;
                handleSwipe();
            });
        }

        function handleSwipe() {
            const swipeThreshold = 50;
            const diff = touchStartX - touchEndX;

            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    nextSlide();
                } else {
                    currentTestimonySlide = (currentTestimonySlide - 1 + slides.length) % slides.length;
                    showSlide(currentTestimonySlide);
                }
                stopAutoSlide();
                setTimeout(startAutoSlide, 3000);
            }
        }

        // Initialize
        showSlide(0);
        setTimeout(startAutoSlide, 3000);
    }

    /* ==========================================================================
       TYPING ANIMATION
       ========================================================================== */
    function startTypingAnimation() {
        const typingElement = document.querySelector('.typing-text');
        if (!typingElement) return;

        const text = typingElement.textContent;
        typingElement.textContent = '';
        typingElement.style.borderRight = '3px solid #f59e0b';
        
        let index = 0;
        
        function typeCharacter() {
            if (index < text.length) {
                typingElement.textContent += text.charAt(index);
                index++;
                setTimeout(typeCharacter, 80);
            } else {
                setTimeout(() => {
                    typingElement.style.animation = 'blink 1s infinite';
                }, 500);
            }
        }

        setTimeout(typeCharacter, 1000);
    }

    /* ==========================================================================
       BUTTON HOVER EFFECTS
       ========================================================================== */
    function initButtonEffects() {
        const buttons = document.querySelectorAll('.btn');
        
        buttons.forEach(button => {
            button.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-2px)';
            });
            
            button.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });

            button.addEventListener('click', function(e) {
                const ripple = document.createElement('span');
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.cssText = `
                    position: absolute;
                    width: ${size}px;
                    height: ${size}px;
                    left: ${x}px;
                    top: ${y}px;
                    background: rgba(255, 255, 255, 0.3);
                    border-radius: 50%;
                    transform: scale(0);
                    animation: ripple 0.6s ease-out;
                    pointer-events: none;
                `;
                
                this.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });

        if (!document.querySelector('#ripple-style')) {
            const style = document.createElement('style');
            style.id = 'ripple-style';
            style.textContent = `
                @keyframes ripple {
                    to {
                        transform: scale(4);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }
    }

    /* ==========================================================================
       PARALLAX EFFECT FOR HERO SECTION
       ========================================================================== */
    function initParallaxEffect() {
        const heroBackground = document.querySelector('.hero__bg');
        
        if (heroBackground) {
            window.addEventListener('scroll', () => {
                const scrolled = window.pageYOffset;
                const rate = scrolled * -0.3;
                heroBackground.style.transform = `translateY(${rate}px)`;
            });
        }
    }

    /* ==========================================================================
       FORM ENHANCEMENTS
       ========================================================================== */
    function initFormEnhancements() {
        const ctaButtons = document.querySelectorAll('a[href*="wa.me"]');
        
        ctaButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                const originalText = this.innerHTML;
                this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Menghubungkan...';
                this.style.pointerEvents = 'none';
                this.style.opacity = '0.8';
                
                setTimeout(() => {
                    this.innerHTML = originalText;
                    this.style.pointerEvents = 'auto';
                    this.style.opacity = '1';
                }, 2000);
            });
        });
    }

    /* ==========================================================================
       ACCESSIBILITY IMPROVEMENTS
       ========================================================================== */
    function initAccessibility() {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                navMenu.classList.remove('show-menu');
                if (serviceModal && serviceModal.classList.contains('show')) {
                    closeServiceModal();
                }
            }
            
            // Arrow keys for testimonial navigation
            if (e.key === 'ArrowLeft') {
                const currentDot = document.querySelector('.testimony__dot.active');
                if (currentDot && document.activeElement === currentDot) {
                    e.preventDefault();
                    const prevIndex = Math.max(0, currentTestimonySlide - 1);
                    testimonyDots[prevIndex].click();
                    testimonyDots[prevIndex].focus();
                }
            }
            
            if (e.key === 'ArrowRight') {
                const currentDot = document.querySelector('.testimony__dot.active');
                if (currentDot && document.activeElement === currentDot) {
                    e.preventDefault();
                    const nextIndex = Math.min(testimonyDots.length - 1, currentTestimonySlide + 1);
                    testimonyDots[nextIndex].click();
                    testimonyDots[nextIndex].focus();
                }
            }
        });

        const focusableElements = document.querySelectorAll('a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])');
        
        focusableElements.forEach(element => {
            element.addEventListener('focus', function() {
                this.style.outline = '2px solid #f59e0b';
                this.style.outlineOffset = '2px';
            });
            
            element.addEventListener('blur', function() {
                this.style.outline = '';
                this.style.outlineOffset = '';
            });
        });
    }

    /* ==========================================================================
       OPTIMIZED SCROLL EVENT LISTENER
       ========================================================================== */
    let scrollTimeout;
    function optimizedScrollHandler() {
        if (scrollTimeout) {
            cancelAnimationFrame(scrollTimeout);
        }
        
        scrollTimeout = requestAnimationFrame(() => {
            handleStickyHeader();
            handleScrollTopButton();
            updateActiveNavLink();
            handleScrollAnimations();
            checkCountersInView();
        });
    }

    window.addEventListener('scroll', optimizedScrollHandler);

    /* ==========================================================================
       RESIZE EVENT LISTENER
       ========================================================================== */
    window.addEventListener('resize', () => {
        navMenu.classList.remove('show-menu');
    });

    /* ==========================================================================
       INITIALIZATION - COMPREHENSIVE
       ========================================================================== */
    function init() {
        console.log('🎓 Edura Academy - Comprehensive Interactive Landing Page Initialized');
        
        // Initialize all functionality in order
        hideLoadingScreen();
        
        // Wait for DOM to be fully ready before initializing interactive elements
        setTimeout(() => {
            initServiceModals();
            initPricingLevelSelector();
            initPricingButtons();
            initTestimonialSlider();
            initButtonEffects();
            initParallaxEffect();
            initFormEnhancements();
            initAccessibility();
            
            // Trigger initial checks
            handleStickyHeader();
            handleScrollTopButton();
            updateActiveNavLink();
            handleScrollAnimations();
            
            console.log('✅ All interactive features initialized with comprehensive bug fixes');
        }, 100);
    }

    // Start everything
    init();

    /* ==========================================================================
       DEVELOPMENT HELPERS
       ========================================================================== */
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        console.log('🛠️ Development mode detected');
        
        window.eduraDebug = {
            testServiceModal: () => {
                console.log('Testing service modal...');
                openServiceModal('mathematics');
                setTimeout(() => {
                    const smpTab = document.querySelector('.tab__button[data-level="SMP"]');
                    if (smpTab) {
                        console.log('Clicking SMP tab...');
                        smpTab.click();
                    }
                }, 1000);
            },
            testPricingLevel: () => {
                console.log('Testing pricing level selector...');
                const smpBtn = document.querySelector('.pricing__level-selector .level__btn[data-level="SMP"]');
                if (smpBtn) {
                    console.log('Clicking SMP pricing button...');
                    smpBtn.click();
                }
            },
            testPricingButton: () => {
                console.log('Testing pricing button...');
                const basicBtn = document.querySelector('.pricing__card[data-package="basic"] .btn');
                if (basicBtn) {
                    console.log('Basic button href:', basicBtn.getAttribute('href'));
                    console.log('Should open WhatsApp...');
                }
            }
        };
        
        console.log('🎮 Debug tools available in window.eduraDebug');
        console.log('Test commands:');
        console.log('- eduraDebug.testServiceModal()');
        console.log('- eduraDebug.testPricingLevel()');
        console.log('- eduraDebug.testPricingButton()');
    }
});

/* ==========================================================================
   GLOBAL ERROR HANDLING
   ========================================================================== */
window.addEventListener('error', (e) => {
    console.error('❌ JavaScript Error:', e.error);
    
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        loadingScreen.style.display = 'none';
    }
});

/* ==========================================================================
   PAGE VISIBILITY API FOR PERFORMANCE
   ========================================================================== */
if ('visibilityState' in document) {
    document.addEventListener('visibilitychange', function() {
        if (document.visibilityState === 'hidden') {
            console.log('Page hidden - optimizing performance');
        } else if (document.visibilityState === 'visible') {
            console.log('Page visible - resuming full functionality');
        }
    });
}