// Enhanced siriusly Digital - Interactive Landing Page with Fixed Modal System
document.addEventListener('DOMContentLoaded', function() {
    
    // Modal data from application_data_json
    const modalData = {
        services: {
            website: {
                title: "Pembuatan Website Profesional",
                subtitle: "Wujudkan Kehadiran Digital yang Mengesankan",
                description: "Kami menciptakan website yang tidak hanya menarik secara visual, tetapi juga powerful dalam performa dan fungsionalitas. Setiap website yang kami buat dirancang khusus untuk meningkatkan kredibilitas bisnis Anda dan mengkonversi pengunjung menjadi pelanggan.",
                benefits: [
                    "Desain responsif yang sempurna di semua perangkat",
                    "Optimasi SEO untuk ranking Google yang lebih baik",
                    "Loading speed optimal untuk user experience terbaik",
                    "Sistem keamanan berlapis untuk perlindungan data",
                    "Content Management System yang mudah digunakan",
                    "Integrasi social media dan tools marketing"
                ],
                websiteTypes: [
                    {
                        type: "Corporate Website",
                        description: "Website perusahaan yang meningkatkan kredibilitas dan trust pelanggan",
                        features: ["Company Profile Lengkap", "Team & Leadership", "Service Portfolio", "Client Testimonials"]
                    },
                    {
                        type: "E-commerce Platform", 
                        description: "Toko online yang mengkonversi pengunjung menjadi pembeli",
                        features: ["Product Catalog", "Payment Gateway", "Inventory Management", "Customer Support"]
                    },
                    {
                        type: "Educational Portal",
                        description: "Platform pembelajaran yang engaging dan efektif",
                        features: ["Course Management", "Student Portal", "Progress Tracking", "Communication Tools"]
                    }
                ],
                pricing: {
                    basic: "Mulai dari Rp 2.500.000",
                    premium: "Rp 5.000.000 - 15.000.000",
                    enterprise: "Custom pricing sesuai kebutuhan"
                },
                guarantee: "Garansi 1 tahun penuh dan revisi unlimited hingga Anda puas"
            },
            education: {
                title: "Media Pembelajaran Interaktif",
                subtitle: "Revolusi Cara Belajar dengan Teknologi Terdepan",
                description: "Kami menciptakan media pembelajaran yang mengubah cara siswa belajar dan guru mengajar. Dengan teknologi interaktif terdepan, materi pembelajaran menjadi lebih engaging, mudah dipahami, dan berkesan untuk jangka panjang.",
                benefits: [
                    "Peningkatan engagement siswa hingga 85%",
                    "Retensi materi pembelajaran naik 3x lipat",
                    "Pembelajaran jadi lebih visual dan mudah dipahami",
                    "Dapat diakses kapan saja dan dimana saja",
                    "Progress tracking untuk monitoring kemajuan",
                    "Sesuai kurikulum nasional dan internasional"
                ],
                mediaTypes: [
                    {
                        type: "Video Pembelajaran Interaktif",
                        description: "Video berkualitas HD dengan elemen interaktif yang meningkatkan partisipasi",
                        features: ["Animasi 3D", "Quiz Terintegrasi", "Subtitle Multi-bahasa", "Playback Speed Control"]
                    },
                    {
                        type: "Simulasi Virtual Lab",
                        description: "Laboratorium virtual untuk eksperimen aman dan dapat diulang",
                        features: ["Physics Simulation", "Chemistry Lab", "Biology Specimens", "Real-time Results"]
                    }
                ],
                effectiveness: "Rata-rata peningkatan nilai siswa 40% setelah menggunakan media pembelajaran kami"
            },
            writing: {
                title: "Jasa Penulisan Karya Ilmiah",
                subtitle: "Partner Terpercaya untuk Kesuksesan Akademik Anda",
                description: "Tim penulis akademik profesional kami membantu mahasiswa, dosen, dan peneliti menghasilkan karya ilmiah berkualitas tinggi. Dengan pengalaman mendalam di berbagai bidang ilmu, kami memastikan setiap tulisan memenuhi standar akademik tertinggi.",
                benefits: [
                    "Tulisan original 100% bebas plagiarisme",
                    "Sesuai format dan kaidah penulisan akademik",
                    "Research mendalam dengan sumber terpercaya",
                    "Revisi unlimited hingga Anda puas",
                    "Timeline yang fleksibel dan tepat waktu",
                    "Konsultasi intensif dengan supervisor berpengalaman"
                ],
                writingTypes: [
                    {
                        type: "Skripsi (S1)",
                        description: "Tugas akhir sarjana dengan research methodology yang solid",
                        features: ["Literature Review Komprehensif", "Metodologi Penelitian", "Analisis Data", "Kesimpulan & Saran"]
                    },
                    {
                        type: "Tesis (S2)",
                        description: "Karya ilmiah master dengan kontribusi pengetahuan baru",
                        features: ["Novelty Research", "Advanced Analysis", "Publication Ready", "Defense Preparation"]
                    }
                ],
                successRate: "98% mahasiswa lulus dengan nilai A setelah menggunakan jasa kami"
            },
            "3d": {
                title: "3D Design & Robotika Engineering",
                subtitle: "Inovasi Teknologi untuk Masa Depan",
                description: "Kami menghadirkan solusi 3D design dan robotika terdepan untuk berbagai kebutuhan industri dan pendidikan. Dari konsep desain hingga prototype siap produksi, tim engineer berpengalaman kami memastikan setiap project memenuhi standar engineering tertinggi.",
                benefits: [
                    "Desain presisi dengan toleransi minimal",
                    "Kompatibilitas dengan berbagai manufacturing process",
                    "Optimasi design untuk cost-effectiveness",
                    "Prototype testing dan iterasi design",
                    "Documentation lengkap untuk production",
                    "Support teknis hingga mass production"
                ],
                services: [
                    {
                        type: "3D Modeling & CAD Design",
                        description: "Desain 3D profesional untuk berbagai keperluan engineering",
                        features: ["Parametric Modeling", "Assembly Design", "Technical Drawing", "Render Fotorealistik"]
                    },
                    {
                        type: "PCB Design & Layout",
                        description: "Rangkaian elektronik custom dengan performa optimal",
                        features: ["Schematic Design", "Multi-layer PCB", "Signal Integrity", "EMC Compliance"]
                    }
                ]
            },
            iot: {
                title: "IoT & Robotika Solutions",
                subtitle: "Automasi Cerdas untuk Era Digital",
                description: "Transformasi digital melalui Internet of Things dan robotika automation. Kami menciptakan sistem cerdas yang meningkatkan efisiensi, mengurangi cost operasional, dan mempersiapkan bisnis Anda untuk masa depan Industry 4.0.",
                benefits: [
                    "Otomatisasi process yang menghemat waktu 70%",
                    "Monitoring real-time dari mana saja",
                    "Predictive maintenance untuk mencegah downtime",
                    "Data analytics untuk decision making yang better",
                    "Scalable system yang dapat berkembang",
                    "ROI positif dalam 6-12 bulan"
                ],
                solutions: [
                    {
                        type: "Smart Building Automation",
                        description: "Sistem otomasi gedung untuk efisiensi energi dan kenyamanan",
                        features: ["HVAC Control", "Lighting Automation", "Security Integration", "Energy Monitoring"]
                    },
                    {
                        type: "Industrial IoT",
                        description: "Solusi IoT untuk monitoring dan optimasi proses industri",
                        features: ["Machine Monitoring", "Quality Control", "Supply Chain Tracking", "Predictive Analytics"]
                    }
                ]
            }
        },
        products: {
            "website-business": {
                title: "Website Bisnis Premium",
                price: "Rp 2.000.000",
                description: "Template website bisnis profesional yang dirancang khusus untuk meningkatkan kredibilitas dan konversi pelanggan. Dilengkapi dengan fitur-fitur modern yang essential untuk bisnis digital.",
                features: [
                    "Responsive design yang perfect di semua device",
                    "SEO optimization built-in untuk ranking Google",
                    "Admin panel yang user-friendly",
                    "Contact form dengan spam protection",
                    "Social media integration",
                    "Google Analytics integration",
                    "SSL certificate included",
                    "1 tahun hosting dan domain gratis"
                ],
                specifications: {
                    pages: "10+ halaman siap pakai",
                    loading_speed: "< 3 detik load time",
                    browser_support: "Chrome, Firefox, Safari, Edge",
                    cms: "WordPress dengan custom theme",
                    customization: "Unlimited color & layout changes"
                },
                support: "1 tahun support penuh dan training penggunaan",
                industries: ["Konsultan", "Layanan Profesional", "Retail", "F&B", "Healthcare"]
            },
            "website-school": {
                title: "Website Sekolah/Kampus",
                price: "Rp 1.500.000",
                description: "Portal akademik lengkap yang memfasilitasi komunikasi antara sekolah, siswa, dan orang tua. Sistem informasi terintegrasi untuk manajemen akademik modern.",
                features: [
                    "Portal siswa dengan login system",
                    "Sistem informasi akademik",
                    "Galeri foto dan video kegiatan",
                    "Berita dan pengumuman otomatis",
                    "Calendar akademik interaktif",
                    "Teacher dan staff directory",
                    "Online admission system",
                    "Parent communication portal"
                ],
                specifications: {
                    user_roles: "Admin, Teacher, Student, Parent",
                    database: "MySQL dengan backup otomatis",
                    security: "Multi-level authentication",
                    capacity: "Unlimited users",
                    mobile_app: "PWA ready untuk mobile experience"
                }
            },
            "elearning-math": {
                title: "Modul E-Learning Matematika",
                price: "Rp 300.000",
                description: "Paket pembelajaran matematika interaktif yang membuat konsep-konsep sulit menjadi mudah dipahami. Dirancang dengan pendekatan visual dan gamifikasi untuk meningkatkan engagement siswa.",
                content: [
                    "50+ video pembelajaran dengan animasi 3D",
                    "500+ soal latihan dengan pembahasan detail",
                    "Quiz interaktif dengan instant feedback",
                    "Game matematika untuk reinforcement",
                    "Progress tracking untuk monitoring kemajuan",
                    "Certificate otomatis setelah completion"
                ],
                topics: ["Aljabar", "Geometri", "Trigonometri", "Kalkulus Dasar", "Statistik", "Peluang"],
                target_audience: "SMP & SMA kelas 7-12"
            },
            "robotics-beginner": {
                title: "Beginner Robotics Kit",
                price: "Rp 450.000",
                description: "Kit robotika ideal untuk pemula yang ingin memulai journey di dunia STEM dan robotika. Dilengkapi dengan komponen berkualitas tinggi dan panduan pembelajaran yang komprehensif.",
                components: [
                    "Arduino Uno R3 board original",
                    "Breadboard dan jumper wires",
                    "Servo motors dan DC motors",
                    "Ultrasonic sensor untuk obstacle detection",
                    "LED lights dan resistors",
                    "Chassis robot dan wheels",
                    "Battery pack dan power adapter",
                    "Toolkit lengkap untuk assembly"
                ],
                projects: [
                    "Line Following Robot",
                    "Obstacle Avoiding Robot", 
                    "Remote Control Car",
                    "Light Following Robot",
                    "Sound Activated Robot",
                    "Temperature Monitoring System"
                ],
                age_range: "10-16 tahun (dengan guidance)",
                programming: "Arduino IDE dengan Scratch for Arduino option"
            },
            "admin-attendance": {
                title: "Sistem Absensi Digital",
                price: "Rp 300.000",
                description: "Solusi absensi modern menggunakan QR code yang menggantikan sistem manual. Memberikan akurasi tinggi, real-time monitoring, dan reporting otomatis untuk manajemen kehadiran yang efisien.",
                features: [
                    "QR code scanner untuk check-in/out cepat",
                    "Real-time attendance monitoring",
                    "Automatic notification ke orang tua",
                    "Monthly attendance reports",
                    "GPS location tracking",
                    "Photo verification system",
                    "Multi-device synchronization",
                    "Offline mode capability"
                ],
                benefits: [
                    "Menghemat waktu absensi 80%",
                    "Eliminasi human error dalam pencatatan",
                    "Transparansi kehadiran untuk semua pihak",
                    "Reduced administrative workload",
                    "Improved student accountability",
                    "Better parent engagement"
                ]
            }
        },
        portfolio: {
            elektromart: {
                title: "E-commerce Platform ElektroMart",
                client: "ElektroMart Indonesia",
                category: "E-commerce",
                description: "Pengembangan platform e-commerce komprehensif untuk retailer elektronik terbesar di Indonesia dengan jutaan produk dan ribuan merchant.",
                challenge: "Client membutuhkan platform yang dapat handle high traffic, kompleks inventory management, dan multiple payment gateways dengan user experience yang seamless.",
                solution: [
                    "Architecture microservices untuk scalability",
                    "Advanced inventory management dengan real-time sync",
                    "Multiple payment gateway integration",
                    "AI-powered recommendation engine",
                    "Advanced search dengan filters",
                    "Seller dashboard dengan analytics"
                ],
                technologies: ["React", "Node.js", "MongoDB", "Redis", "AWS", "Elasticsearch"],
                timeline: "6 bulan development dengan 2 bulan testing",
                results: [
                    "300% increase dalam online sales",
                    "50% reduction dalam cart abandonment",
                    "99.9% uptime achievement",
                    "1000+ concurrent users support",
                    "Mobile conversion rate naik 200%"
                ],
                testimonial: "Platform yang dibuat Siriusly Digital telah mentransformasi bisnis kami secara digital. ROI yang kami dapatkan melebihi ekspektasi!",
                impact: "Membantu client menjadi market leader di kategori elektronik online"
            }
        }
    };
    
    // Initialize all features
    initializeNavigation();
    initializeScrollAnimations();
    initializeParticles();
    initializeTypingAnimation();
    initializeFloatingElements();
    initializeFormHandling();
    initializeServiceCards();
    initializeProductFiltering();
    initializePortfolioFiltering();
    initializeStatCounters();
    initializeParallax();
    initializeModalSystem();
    
    // Modal System - Fixed Version
    function initializeModalSystem() {
        const modal = document.getElementById('detailModal');
        const modalOverlay = modal.querySelector('.modal-overlay');
        const modalClose = modal.querySelector('.modal-close');
        const modalTitle = modal.querySelector('.modal-title');
        const modalBody = modal.querySelector('.modal-body');
        
        // Service card clicks - Fixed to work with both card and CTA button
        document.querySelectorAll('.service-card').forEach(card => {
            // Handle clicks on the card itself
            card.addEventListener('click', (e) => {
                // Don't trigger if clicking on the CTA button specifically
                if (e.target.classList.contains('service-cta')) {
                    return;
                }
                e.preventDefault();
                const serviceType = card.dataset.service;
                if (modalData.services[serviceType]) {
                    openServiceModal(modalData.services[serviceType]);
                }
            });
            
            // Handle clicks on the CTA button
            const ctaButton = card.querySelector('.service-cta');
            if (ctaButton) {
                ctaButton.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    const serviceType = card.dataset.service;
                    if (modalData.services[serviceType]) {
                        openServiceModal(modalData.services[serviceType]);
                    }
                });
            }
        });
        
        // Product card clicks - Fixed
        document.querySelectorAll('.product-card').forEach(card => {
            // Handle clicks on the card itself
            card.addEventListener('click', (e) => {
                // Don't trigger if clicking on the CTA button specifically
                if (e.target.classList.contains('product-cta')) {
                    return;
                }
                e.preventDefault();
                const productType = card.dataset.product;
                if (modalData.products[productType]) {
                    openProductModal(modalData.products[productType]);
                }
            });
            
            // Handle clicks on the CTA button
            const ctaButton = card.querySelector('.product-cta');
            if (ctaButton) {
                ctaButton.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    const productType = card.dataset.product;
                    if (modalData.products[productType]) {
                        openProductModal(modalData.products[productType]);
                    }
                });
            }
        });
        
        // Portfolio item clicks - Fixed
        document.querySelectorAll('.portfolio-item').forEach(item => {
            // Handle clicks on the item itself
            item.addEventListener('click', (e) => {
                // Don't trigger if clicking on the button specifically
                if (e.target.classList.contains('portfolio-btn')) {
                    return;
                }
                e.preventDefault();
                const portfolioType = item.dataset.portfolio;
                if (modalData.portfolio[portfolioType]) {
                    openPortfolioModal(modalData.portfolio[portfolioType]);
                }
            });
            
            // Handle clicks on the portfolio button
            const portfolioButton = item.querySelector('.portfolio-btn');
            if (portfolioButton) {
                portfolioButton.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    const portfolioType = item.dataset.portfolio;
                    if (modalData.portfolio[portfolioType]) {
                        openPortfolioModal(modalData.portfolio[portfolioType]);
                    }
                });
            }
        });
        
        // Close modal events - Fixed
        modalClose.addEventListener('click', closeModal);
        modalOverlay.addEventListener('click', closeModal); // This should now work
        
        // ESC key to close modal
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
                closeModal();
            }
        });
        
        function openServiceModal(serviceData) {
            modalTitle.textContent = serviceData.title;
            modalBody.innerHTML = createServiceModalContent(serviceData);
            initializeModalTabs();
            showModal();
        }
        
        function openProductModal(productData) {
            modalTitle.textContent = productData.title;
            modalBody.innerHTML = createProductModalContent(productData);
            initializeModalTabs();
            showModal();
        }
        
        function openPortfolioModal(portfolioData) {
            modalTitle.textContent = portfolioData.title;
            modalBody.innerHTML = createPortfolioModalContent(portfolioData);
            initializeModalTabs();
            showModal();
        }
        
        function showModal() {
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
            
            // Add animation delay for better UX
            setTimeout(() => {
                modal.style.opacity = '1';
            }, 10);
        }
        
        function closeModal() {
            modal.style.opacity = '0';
            setTimeout(() => {
                modal.classList.add('hidden');
                document.body.style.overflow = '';
            }, 200);
        }
        
        // Make closeModal available globally
        window.closeModal = closeModal;
    }
    
    function createServiceModalContent(data) {
        return `
            <div class="modal-tabs">
                <button class="modal-tab active" data-tab="overview">Overview</button>
                <button class="modal-tab" data-tab="benefits">Keunggulan</button>
                <button class="modal-tab" data-tab="types">Jenis Layanan</button>
                <button class="modal-tab" data-tab="pricing">Harga</button>
            </div>
            
            <div class="modal-tab-content active" data-content="overview">
                <div class="modal-section">
                    <h3>${data.subtitle}</h3>
                    <p>${data.description}</p>
                    ${data.guarantee ? `<div class="pricing-info">
                        <h4>💯 Jaminan Kualitas</h4>
                        <p>${data.guarantee}</p>
                    </div>` : ''}
                </div>
            </div>
            
            <div class="modal-tab-content" data-content="benefits">
                <div class="modal-section">
                    <h3>🎯 Keunggulan Layanan</h3>
                    <ul class="feature-list">
                        ${data.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
                    </ul>
                    ${data.effectiveness ? `<div class="benefit-item">
                        <h4>📊 Efektivitas Terbukti</h4>
                        <p>${data.effectiveness}</p>
                    </div>` : ''}
                    ${data.successRate ? `<div class="benefit-item">
                        <h4>🏆 Tingkat Keberhasilan</h4>
                        <p>${data.successRate}</p>
                    </div>` : ''}
                </div>
            </div>
            
            <div class="modal-tab-content" data-content="types">
                <div class="modal-section">
                    <h3>🛠️ Jenis Layanan</h3>
                    <div class="benefit-grid">
                        ${(data.websiteTypes || data.mediaTypes || data.writingTypes || data.services || data.solutions || []).map(type => `
                            <div class="benefit-item">
                                <h4>${type.type}</h4>
                                <p>${type.description}</p>
                                <ul class="feature-list">
                                    ${type.features.map(feature => `<li>${feature}</li>`).join('')}
                                </ul>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
            
            <div class="modal-tab-content" data-content="pricing">
                <div class="modal-section">
                    <h3>💰 Informasi Harga</h3>
                    ${data.pricing ? `
                        <div class="pricing-tiers">
                            <div class="pricing-tier">
                                <div class="tier-name">Basic</div>
                                <div class="tier-price">${data.pricing.basic}</div>
                            </div>
                            <div class="pricing-tier">
                                <div class="tier-name">Premium</div>
                                <div class="tier-price">${data.pricing.premium}</div>
                            </div>
                            <div class="pricing-tier">
                                <div class="tier-name">Enterprise</div>
                                <div class="tier-price">${data.pricing.enterprise}</div>
                            </div>
                        </div>
                    ` : `
                        <p>Harga disesuaikan dengan kompleksitas dan kebutuhan proyek. Hubungi kami untuk konsultasi gratis dan penawaran khusus.</p>
                    `}
                    <div class="pricing-info">
                        <h4>📞 Konsultasi Gratis</h4> 
                        <p>Dapatkan konsultasi gratis untuk menentukan solusi terbaik sesuai kebutuhan Anda.</p>
                    </div>
                </div>
            </div>
            
            <div class="modal-cta">
                <button class="btn btn-primary" onclick="scrollToContact()">Konsultasi Sekarang</button>
                <button class="btn btn-outline" onclick="closeModal()">Kembali</button>
            </div>
        `;
    }
    
    function createProductModalContent(data) {
        return `
            <div class="modal-tabs">
                <button class="modal-tab active" data-tab="overview">Overview</button>
                <button class="modal-tab" data-tab="features">Fitur</button>
                <button class="modal-tab" data-tab="specs">Spesifikasi</button>
                <button class="modal-tab" data-tab="support">Support</button>
            </div>
            
            <div class="modal-tab-content active" data-content="overview">
                <div class="modal-section">
                    <div class="pricing-info">
                        <h4>💸 Harga: ${data.price}</h4>
                    </div>
                    <p>${data.description}</p>
                    ${data.target_audience ? `<p><strong>🎯 Target:</strong> ${data.target_audience}</p>` : ''}
                    ${data.age_range ? `<p><strong>👶 Usia:</strong> ${data.age_range}</p>` : ''}
                </div>
            </div>
            
            <div class="modal-tab-content" data-content="features">
                <div class="modal-section">
                    <h3>✨ Fitur Utama</h3>
                    <ul class="feature-list">
                        ${(data.features || data.content || data.components || []).map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                    ${data.projects ? `
                        <h3>🚀 Proyek yang Bisa Dibuat</h3>
                        <ul class="feature-list">
                            ${data.projects.map(project => `<li>${project}</li>`).join('')}
                        </ul>
                    ` : ''}
                    ${data.topics ? `
                        <h3>📚 Topik Pembelajaran</h3>
                        <div class="benefit-grid">
                            ${data.topics.map(topic => `<div class="benefit-item"><h4>${topic}</h4></div>`).join('')}
                        </div>
                    ` : ''}
                    ${data.benefits ? `
                        <h3>🎯 Manfaat</h3>
                        <ul class="feature-list">
                            ${data.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
                        </ul>
                    ` : ''}
                </div>
            </div>
            
            <div class="modal-tab-content" data-content="specs">
                <div class="modal-section">
                    <h3>⚙️ Spesifikasi Teknis</h3>
                    ${data.specifications ? `
                        <div class="benefit-grid">
                            ${Object.entries(data.specifications).map(([key, value]) => `
                                <div class="benefit-item">
                                    <h4>${key.replace(/_/g, ' ').toUpperCase()}</h4>
                                    <p>${value}</p>
                                </div>
                            `).join('')}
                        </div>
                    ` : ''}
                    ${data.programming ? `<p><strong>💻 Programming:</strong> ${data.programming}</p>` : ''}
                    ${data.industries ? `
                        <h3>🏢 Cocok untuk Industri</h3>
                        <div class="benefit-grid">
                            ${data.industries.map(industry => `<div class="benefit-item"><h4>${industry}</h4></div>`).join('')}
                        </div>
                    ` : ''}
                </div>
            </div>
            
            <div class="modal-tab-content" data-content="support">
                <div class="modal-section">
                    <h3>🛠️ Support & Layanan</h3>
                    ${data.support ? `<p>${data.support}</p>` : ''}
                    <div class="benefit-grid">
                        <div class="benefit-item">
                            <h4>📞 Technical Support</h4>
                            <p>Support teknis untuk instalasi dan penggunaan produk</p>
                        </div>
                        <div class="benefit-item">
                            <h4>📖 Dokumentasi</h4>
                            <p>Panduan lengkap dan video tutorial</p>
                        </div>
                        <div class="benefit-item">
                            <h4>🔄 Update</h4>
                            <p>Update berkala dan fitur baru</p>
                        </div>
                        <div class="benefit-item">
                            <h4>💬 Community</h4>
                            <p>Akses ke komunitas pengguna untuk sharing</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="modal-cta">
                <button class="btn btn-primary" onclick="scrollToContact()">Beli Sekarang</button>
                <button class="btn btn-outline" onclick="closeModal()">Kembali</button>
            </div>
        `;
    }
    
    function createPortfolioModalContent(data) {
        return `
            <div class="modal-tabs">
                <button class="modal-tab active" data-tab="overview">Overview</button>
                <button class="modal-tab" data-tab="challenge">Tantangan</button>
                <button class="modal-tab" data-tab="solution">Solusi</button>
                <button class="modal-tab" data-tab="results">Hasil</button>
            </div>
            
            <div class="modal-tab-content active" data-content="overview">
                <div class="modal-section">
                    <h3>🏢 ${data.client}</h3>
                    <p><strong>Kategori:</strong> ${data.category}</p>
                    <p><strong>Timeline:</strong> ${data.timeline}</p>
                    <p>${data.description}</p>
                    <div class="benefit-grid">
                        <div class="benefit-item">
                            <h4>🛠️ Teknologi</h4>
                            <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-top: 8px;">
                                ${data.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="modal-tab-content" data-content="challenge">
                <div class="modal-section">
                    <h3>🎯 Tantangan Proyek</h3>
                    <p>${data.challenge}</p>
                    <div class="pricing-info">
                        <h4>🔍 Analisis Kebutuhan</h4>
                        <p>Tim kami melakukan analisis mendalam untuk memahami requirement dan constraint yang ada, sehingga dapat merancang solusi yang tepat sasaran.</p>
                    </div>
                </div>
            </div>
            
            <div class="modal-tab-content" data-content="solution">
                <div class="modal-section">
                    <h3>💡 Solusi yang Diterapkan</h3>
                    <ul class="feature-list">
                        ${data.solution.map(sol => `<li>${sol}</li>`).join('')}
                    </ul>
                    <div class="benefit-item">
                        <h4>⚡ Pendekatan Inovatif</h4>
                        <p>Menggunakan pendekatan terdepan dan best practices industry untuk menghasilkan solusi yang scalable dan maintainable.</p>
                    </div>
                </div>
            </div>
            
            <div class="modal-tab-content" data-content="results">
                <div class="modal-section">
                    <h3>📈 Hasil & Impact</h3>
                    <ul class="feature-list">
                        ${data.results.map(result => `<li>${result}</li>`).join('')}
                    </ul>
                    <div class="pricing-info">
                        <h4>💬 Testimoni Client</h4>
                        <p><em>"${data.testimonial}"</em></p>
                    </div>
                    <div class="benefit-item">
                        <h4>🚀 Impact Jangka Panjang</h4>
                        <p>${data.impact}</p>
                    </div>
                </div>
            </div>
            
            <div class="modal-cta">
                <button class="btn btn-primary" onclick="scrollToContact()">Diskusi Proyek Serupa</button>
                <button class="btn btn-outline" onclick="closeModal()">Kembali</button>
            </div>
        `;
    }
    
    // Fixed modal tabs functionality
    function initializeModalTabs() {
        // Use setTimeout to ensure DOM is updated
        setTimeout(() => {
            const tabs = document.querySelectorAll('.modal-tab');
            const contents = document.querySelectorAll('.modal-tab-content');
            
            tabs.forEach(tab => {
                tab.addEventListener('click', (e) => {
                    e.preventDefault();
                    const targetTab = tab.dataset.tab;
                    
                    // Remove active class from all tabs and contents
                    tabs.forEach(t => t.classList.remove('active'));
                    contents.forEach(c => c.classList.remove('active'));
                    
                    // Add active class to clicked tab and corresponding content
                    tab.classList.add('active');
                    const targetContent = document.querySelector(`[data-content="${targetTab}"]`);
                    if (targetContent) {
                        targetContent.classList.add('active');
                    }
                });
            });
        }, 100);
    }
    
    // Navigation functionality
    function initializeNavigation() {
        const navToggle = document.getElementById('navToggle');
        const navMenu = document.querySelector('.nav-menu');
        const navLinks = document.querySelectorAll('.nav-link');
        
        // Toggle mobile menu
        if (navToggle) {
            navToggle.addEventListener('click', () => {
                navMenu.classList.toggle('active');
                navToggle.classList.toggle('active');
            });
        }
        
        // Smooth scroll for navigation links
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                if (href.startsWith('#')) {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                    // Close mobile menu if open
                    navMenu.classList.remove('active');
                    navToggle.classList.remove('active');
                }
            });
        });
        
        // Add active class based on scroll position
        window.addEventListener('scroll', () => {
            let current = '';
            const sections = document.querySelectorAll('section');
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (window.pageYOffset >= sectionTop - 200) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });
    }
    
    // Enhanced scroll-triggered animations
    function initializeScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    
                    // Trigger stat counters when they become visible
                    if (entry.target.classList.contains('stat-number')) {
                        animateCounter(entry.target);
                    }
                }
            });
        }, observerOptions);
        
        // Add fade-in class to elements
        const animateElements = document.querySelectorAll('.service-card, .product-category, .portfolio-item, .stat-card');
        animateElements.forEach((el, index) => {
            el.classList.add('fade-in');
            el.style.transitionDelay = `${index * 0.1}s`;
            observer.observe(el);
        });
        
        // Section headers animation
        const sectionHeaders = document.querySelectorAll('.section-header');
        sectionHeaders.forEach(header => {
            header.classList.add('fade-in');
            observer.observe(header);
        });
        
        // Observe stat numbers for counter animation
        const statNumbers = document.querySelectorAll('.stat-number');
        statNumbers.forEach(stat => {
            observer.observe(stat);
        });
    }
    
    // Fixed product filtering functionality
    function initializeProductFiltering() {
        const filterBtns = document.querySelectorAll('.products .filter-btn');
        const productCategories = document.querySelectorAll('.product-category');
        
        // Ensure all categories are visible initially
        productCategories.forEach(category => {
            category.style.display = 'block';
            category.classList.remove('hidden');
        });
        
        filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Update active button
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                const filter = btn.getAttribute('data-filter');
                
                // Show/hide categories with animation
                productCategories.forEach(category => {
                    const categoryType = category.getAttribute('data-category');
                    
                    if (filter === 'all' || filter === categoryType) {
                        category.style.display = 'block';
                        category.classList.remove('hidden');
                        category.style.opacity = '0';
                        category.style.transform = 'translateY(20px)';
                        
                        // Animate in
                        setTimeout(() => {
                            category.style.transition = 'all 0.5s ease';
                            category.style.opacity = '1';
                            category.style.transform = 'translateY(0)';
                        }, 100);
                    } else {
                        category.style.transition = 'all 0.3s ease';
                        category.style.opacity = '0';
                        category.style.transform = 'translateY(-20px)';
                        
                        setTimeout(() => {
                            category.style.display = 'none';
                            category.classList.add('hidden');
                        }, 300);
                    }
                });
                
                // Add ripple effect
                createRippleEffect(btn);
            });
        });
    }
    
    // Fixed portfolio filtering functionality
    function initializePortfolioFiltering() {
        const filterBtns = document.querySelectorAll('.portfolio .filter-btn');
        const portfolioItems = document.querySelectorAll('.portfolio-item');
        
        // Ensure all portfolio items are visible initially
        portfolioItems.forEach(item => {
            item.style.display = 'block';
            item.classList.remove('hidden');
        });
        
        filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Update active button
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                const filter = btn.getAttribute('data-filter');
                
                // Show/hide items with stagger animation
                portfolioItems.forEach((item, index) => {
                    const itemCategory = item.getAttribute('data-category');
                    
                    if (filter === 'all' || filter === itemCategory) {
                        item.style.display = 'block';
                        item.classList.remove('hidden');
                        item.style.opacity = '0';
                        item.style.transform = 'scale(0.8) translateY(20px)';
                        
                        // Staggered animation
                        setTimeout(() => {
                            item.style.transition = 'all 0.5s ease';
                            item.style.opacity = '1';
                            item.style.transform = 'scale(1) translateY(0)';
                        }, index * 100);
                    } else {
                        item.style.transition = 'all 0.3s ease';
                        item.style.opacity = '0';
                        item.style.transform = 'scale(0.8) translateY(-20px)';
                        
                        setTimeout(() => {
                            item.style.display = 'none';
                            item.classList.add('hidden');
                        }, 300);
                    }
                });
                
                createRippleEffect(btn);
            });
        });
    }
    
    // Fixed animated statistics counters with correct values
    function initializeStatCounters() {
        const statNumbers = document.querySelectorAll('.stat-number');
        
        statNumbers.forEach(stat => {
            stat.style.opacity = '0';
        });
    }
    
    function animateCounter(element) {
        const target = parseInt(element.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        let current = 0;
        
        element.style.opacity = '1';
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            
            // Format number (add + for large numbers, % for percentages)
            let displayValue = Math.floor(current);
            const label = element.parentElement.querySelector('.stat-label').textContent;
            
            if (label.includes('Kepuasan') || label.includes('%')) {
                displayValue += '%';
            } else if (displayValue >= 50) {
                displayValue += '+';
            }
            
            element.textContent = displayValue;
            
            // Add pulse effect when reaching target
            if (current >= target) {
                element.style.animation = 'pulse 0.5s ease-in-out';
                setTimeout(() => {
                    element.style.animation = '';
                }, 500);
            }
        }, 16);
    }
    
    // Enhanced particle system
    function initializeParticles() {
        const particlesContainer = document.querySelector('.particles');
        if (!particlesContainer) return;
        
        // Create animated particles
        for (let i = 0; i < 75; i++) {
            createParticle(particlesContainer);
        }
        
        function createParticle(container) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.cssText = `
                position: absolute;
                width: ${Math.random() * 4 + 1}px;
                height: ${Math.random() * 4 + 1}px;
                background: ${getRandomParticleColor()};
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                opacity: ${Math.random() * 0.8 + 0.2};
                animation: particleFloat ${Math.random() * 8 + 12}s linear infinite;
                animation-delay: ${Math.random() * 5}s;
                box-shadow: 0 0 6px currentColor;
                pointer-events: none;
            `;
            
            container.appendChild(particle);
            
            // Remove and recreate particle after animation
            setTimeout(() => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                    createParticle(container);
                }
            }, (Math.random() * 8 + 12) * 1000);
        }
        
        function getRandomParticleColor() {
            const colors = ['#00d4ff', '#64ffda', '#00ff88', '#4fc3f7', '#32b8cd'];
            return colors[Math.floor(Math.random() * colors.length)];
        }
        
        // Add particle float animation to CSS dynamically
        if (!document.getElementById('particle-styles')) {
            const style = document.createElement('style');
            style.id = 'particle-styles';
            style.textContent = `
                @keyframes particleFloat {
                    0% {
                        transform: translateY(100vh) rotate(0deg);
                        opacity: 0;
                    }
                    10% {
                        opacity: 1;
                    }
                    90% {
                        opacity: 1;
                    }
                    100% {
                        transform: translateY(-100px) rotate(360deg);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }
    }
    
    // Enhanced typing animation
    function initializeTypingAnimation() {
        const typewriter1 = document.querySelector('.typewriter');
        const typewriter2 = document.querySelector('.typewriter-line2');
        
        if (typewriter1 && typewriter2) {
            // Reset and start animation on scroll to hero
            const heroObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        startTypingAnimation();
                    }
                });
            }, { threshold: 0.5 });
            
            heroObserver.observe(document.querySelector('.hero'));
        }
        
        function startTypingAnimation() {
            const text1 = "Solusi Digital Terpercaya";
            const text2 = "untuk Masa Depan";
            
            // Reset
            typewriter1.textContent = '';
            typewriter2.textContent = '';
            typewriter1.style.width = '0';
            typewriter2.style.width = '0';
            
            typeText(typewriter1, text1, 0, () => {
                setTimeout(() => {
                    typeText(typewriter2, text2, 0);
                }, 1000);
            });
        }
        
        function typeText(element, text, index, callback) {
            if (index < text.length) {
                element.textContent = text.substring(0, index + 1);
                setTimeout(() => typeText(element, text, index + 1, callback), 80);
            } else if (callback) {
                callback();
            }
        }
    }
    
    // Enhanced floating elements
    function initializeFloatingElements() {
        const floatingIcons = document.querySelectorAll('.floating-icon');
        
        floatingIcons.forEach((icon, index) => {
            // Add mousemove parallax effect
            icon.addEventListener('mouseenter', () => {
                icon.style.transform = 'scale(1.3) rotate(15deg)';
                icon.style.filter = 'drop-shadow(0 0 25px rgba(0, 212, 255, 1))';
                icon.style.zIndex = '10';
            });
            
            icon.addEventListener('mouseleave', () => {
                icon.style.transform = 'scale(1) rotate(0deg)';
                icon.style.filter = 'drop-shadow(0 0 10px rgba(0, 212, 255, 0.5))';
                icon.style.zIndex = '';
            });
            
            // Add click interaction
            icon.addEventListener('click', () => {
                icon.style.animation = 'none';
                icon.style.transform = 'scale(1.5) rotate(360deg)';
                
                setTimeout(() => {
                    icon.style.transform = 'scale(1) rotate(0deg)';
                    icon.style.animation = 'float-bounce 6s ease-in-out infinite';
                }, 600);
            });
        });
    }
    
    // Fixed form handling with proper feedback
    function initializeFormHandling() {
        const form = document.querySelector('.form');
        const inputs = document.querySelectorAll('.form-control');
        
        if (form) {
            form.addEventListener('submit', handleFormSubmit);
        }
        
        // Add focus effects to form inputs
        inputs.forEach(input => {
            input.addEventListener('focus', () => {
                input.parentElement.classList.add('focused');
                addGlowEffect(input);
            });
            
            input.addEventListener('blur', () => {
                input.parentElement.classList.remove('focused');
                removeGlowEffect(input);
            });
            
            input.addEventListener('input', validateInput);
        });
        
        function handleFormSubmit(e) {
            e.preventDefault();
            
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            
            // Show loading state
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Mengirim...';
            submitBtn.disabled = true;
            submitBtn.style.opacity = '0.7';
            
            // Validate form
            if (validateForm(data)) {
                // Simulate form submission
                setTimeout(() => {
                    showSuccessMessage();
                    form.reset();
                    
                    // Reset validation classes
                    inputs.forEach(input => {
                        input.classList.remove('valid', 'invalid');
                    });
                    
                    // Reset button
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    submitBtn.style.opacity = '1';
                }, 2000);
            } else {
                showErrorMessage();
                
                // Reset button immediately for error case
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    submitBtn.style.opacity = '1';
                }, 500);
            }
        }
        
        function validateForm(data) {
            const required = ['name', 'email', 'message'];
            let isValid = true;
            
            required.forEach(field => {
                const input = form.querySelector(`[name="${field}"]`);
                if (!data[field] || data[field].trim() === '') {
                    input.classList.add('invalid');
                    input.classList.remove('valid');
                    isValid = false;
                } else {
                    input.classList.add('valid');
                    input.classList.remove('invalid');
                }
            });
            
            // Additional email validation
            const emailInput = form.querySelector('[name="email"]');
            if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
                emailInput.classList.add('invalid');
                emailInput.classList.remove('valid');
                isValid = false;
            }
            
            return isValid;
        }
        
        function validateInput(e) {
            const input = e.target;
            const value = input.value.trim();
            
            // Remove existing validation classes
            input.classList.remove('valid', 'invalid');
            
            if (value === '') return;
            
            switch (input.type) {
                case 'email':
                    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
                    input.classList.add(emailValid ? 'valid' : 'invalid');
                    break;
                default:
                    input.classList.add(value.length > 0 ? 'valid' : 'invalid');
            }
        }
        
        function addGlowEffect(input) {
            input.style.boxShadow = '0 0 15px rgba(0, 212, 255, 0.4)';
            input.style.borderColor = '#00d4ff';
        }
        
        function removeGlowEffect(input) {
            input.style.boxShadow = '';
            input.style.borderColor = '';
        }
        
        function showSuccessMessage() {
            showMessage('✅ Pesan berhasil dikirim! Kami akan menghubungi Anda segera.', 'success');
        }
        
        function showErrorMessage() {
            showMessage('❌ Mohon lengkapi semua field yang diperlukan dengan benar.', 'error');
        }
    }
    
    // Service cards interactions
    function initializeServiceCards() {
        const serviceCards = document.querySelectorAll('.service-card');
        
        serviceCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                // Add tilt effect
                card.style.transform = 'translateY(-10px) perspective(1000px) rotateX(5deg)';
                
                // Animate service features
                const features = card.querySelectorAll('.service-features li');
                features.forEach((feature, index) => {
                    setTimeout(() => {
                        feature.style.transform = 'translateX(10px)';
                        feature.style.color = '#00d4ff';
                    }, index * 100);
                });
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = '';
                
                // Reset features
                const features = card.querySelectorAll('.service-features li');
                features.forEach(feature => {
                    feature.style.transform = '';
                    feature.style.color = '';
                });
            });
        });
    }
    
    // Parallax scrolling effects
    function initializeParallax() {
        const parallaxElements = document.querySelectorAll('.floating-elements, .orbit-container');
        
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.3;
            
            parallaxElements.forEach(element => {
                element.style.transform = `translateY(${rate * 0.2}px)`;
            });
            
            // Add parallax to particles
            const particles = document.querySelector('.particles');
            if (particles) {
                particles.style.transform = `translateY(${rate * 0.1}px)`;
            }
        });
    }
    
    // Utility Functions
    function createRippleEffect(element) {
        const ripple = document.createElement('span');
        ripple.className = 'ripple-effect';
        const rect = element.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: 50%;
            top: 50%;
            background: radial-gradient(circle, rgba(0, 212, 255, 0.6) 0%, transparent 70%);
            border-radius: 50%;
            transform: translate(-50%, -50%) scale(0);
            animation: ripple-expand 0.6s ease-out forwards;
            pointer-events: none;
            z-index: 1;
        `;
        
        element.style.position = 'relative';
        element.style.overflow = 'hidden';
        element.appendChild(ripple);
        
        setTimeout(() => {
            if (ripple.parentNode) {
                element.removeChild(ripple);
            }
        }, 600);
    }
    
    // Global helper functions
    window.scrollToContact = function() {
        document.querySelector('#contact').scrollIntoView({
            behavior: 'smooth'
        });
    };
    
    // Add CTA button interactions
    document.querySelectorAll('.cta-primary, .cta-secondary, .edura-cta').forEach(btn => {
        btn.addEventListener('click', function(e) {
            if (!this.getAttribute('href') || this.getAttribute('href') === '#') {
                e.preventDefault();
                
                // Scroll to contact section for primary CTAs
                if (this.classList.contains('cta-primary')) {
                    document.querySelector('#contact').scrollIntoView({
                        behavior: 'smooth'
                    });
                } else if (this.classList.contains('cta-secondary')) {
                    document.querySelector('#products').scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
            
            createRippleEffect(this);
        });
        
        // Add pulse effect on hover
        btn.addEventListener('mouseenter', function() {
            this.style.animation = 'pulse 0.6s ease-in-out';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.animation = '';
        });
    });
    
    // Add loading animation
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
        
        // Trigger hero animations after load
        setTimeout(() => {
            const heroContent = document.querySelector('.hero-content');
            if (heroContent) {
                heroContent.style.opacity = '1';
                heroContent.style.transform = 'translateY(0)';
            }
        }, 500);
        
        // Initialize stat counters when page loads
        setTimeout(() => {
            document.querySelectorAll('.stat-number').forEach(stat => {
                if (isElementInViewport(stat)) {
                    animateCounter(stat);
                }
            });
        }, 1000);
    });
    
    // Add scroll progress indicator
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #00d4ff, #64ffda);
        z-index: 10000;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
    
    // Helper function to check if element is in viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    // Initial setup
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.cssText = `
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.8s ease-out;
        `;
    }
    
    // Add necessary animations to CSS
    if (!document.getElementById('dynamic-animations')) {
        const style = document.createElement('style');
        style.id = 'dynamic-animations';
        style.textContent = `
            @keyframes ripple-expand {
                to {
                    transform: translate(-50%, -50%) scale(2);
                    opacity: 0;
                }
            }
            @keyframes slideInRight {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            @keyframes slideOutRight {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(100%);
                    opacity: 0;
                }
            }
            .form-control.valid {
                border-color: #00ff88 !important;
                box-shadow: 0 0 0 3px rgba(0, 255, 136, 0.2) !important;
            }
            .form-control.invalid {
                border-color: #ff5459 !important;
                box-shadow: 0 0 0 3px rgba(255, 84, 89, 0.2) !important;
            }
        `;
        document.head.appendChild(style);
    }
});

// Enhanced global message function
function showMessage(text, type = 'info') {
    const message = document.createElement('div');
    message.className = `message message-${type}`;
    message.textContent = text;
    
    const colors = {
        success: { bg: 'rgba(0, 255, 136, 0.2)', border: '#00ff88', text: '#00ff88' },
        error: { bg: 'rgba(255, 84, 89, 0.2)', border: '#ff5459', text: '#ff5459' },
        info: { bg: 'rgba(0, 212, 255, 0.2)', border: '#00d4ff', text: '#00d4ff' }
    };
    
    const color = colors[type] || colors.info;
    
    message.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 15px 20px;
        background: ${color.bg};
        border: 1px solid ${color.border};
        border-radius: 8px;
        color: ${color.text};
        z-index: 10001;
        animation: slideInRight 0.3s ease-out;
        max-width: 350px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        backdrop-filter: blur(10px);
        font-size: 14px;
        line-height: 1.4;
        font-weight: 500;
        border-left: 4px solid ${color.border};
    `;
    
    document.body.appendChild(message);
    
    setTimeout(() => {
        message.style.animation = 'slideOutRight 0.3s ease-out forwards';
        setTimeout(() => {
            if (message.parentNode) {
                document.body.removeChild(message);
            }
        }, 300);
    }, 4000);
}