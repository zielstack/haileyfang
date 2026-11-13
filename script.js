/**
 * HAILEY FANG — PERSONAL PROFESSIONAL WEBSITE
 * U.S. Regional Director • Operator of NOT JUST A LABEL
 * JavaScript Controller
 */

/* ==========================================================================
   1. MODAL DATA STORES
   ========================================================================== */

// Philosophy Modal Data
const philosophyModalData = {
    eastern: {
        image: 'philosophy-eastern.png',
        title: 'Eastern Aesthetics',
        description: 'Drawing inspiration from traditional Eastern design elements and cultural motifs, the creative direction at NOT JUST A LABEL explores silhouettes and heritage textile craftsmanship that convey timeless balance and understated beauty.',
        features: [
            { title: 'Traditional Silk Techniques', desc: 'Appreciation of artisanal silk textures and refined textile detailing.' },
            { title: 'Balanced Silhouettes', desc: 'Modern interpretations of graceful garment lines and fluid draping.' },
            { title: 'Subtle Pattern Motifs', desc: 'Refined patterns inspired by cultural heritage and harmony.' },
            { title: 'Heritage Color Palettes', desc: 'Carefully chosen shades honoring timeless aesthetics.' }
        ]
    },
    western: {
        image: 'philosophy-western.png',
        title: 'Western Tailoring',
        description: 'Precision pattern-making and clean structural silhouettes define the tailoring standards championed by Hailey Fang, ensuring every garment delivers effortless fit and sophisticated form.',
        features: [
            { title: 'Structured Tailoring', desc: 'Architectural cuts that flatter and provide contemporary poise.' },
            { title: 'Modern Fit', desc: 'Engineered garments crafted for versatility and movement.' },
            { title: 'Quality Fabrics', desc: 'Carefully selected textiles from reputable international mills.' },
            { title: 'Attentive Detailing', desc: 'Disciplined focus on stitching, seam alignment, and finish.' }
        ]
    },
    modern: {
        image: 'philosophy-modern.png',
        title: 'Modern Design',
        description: 'Reinterpreting classic silhouettes through practical, forward-looking contemporary design to suit the multifaceted lifestyle of the modern woman.',
        features: [
            { title: 'Functional Versatility', desc: 'Pieces designed to transition effortlessly across diverse professional and social settings.' },
            { title: 'Thoughtful Sourcing', desc: 'Small-batch production to manage resources conscientiously.' },
            { title: 'Contemporary Lines', desc: 'Minimalist aesthetics combined with elevated detailing.' },
            { title: 'Timeless Quality', desc: 'Enduring wardrobe investments that outlast fleeting trend cycles.' }
        ]
    }
};

// Portfolio Modal Data
const portfolioModalData = {
    item1: {
        image: 'portfolio-item1.png',
        category: 'Evening Collection 2024',
        title: 'Velvet & Satin Gowns',
        description: 'An eveningwear ensemble developed under Hailey Fang’s design direction for NOT JUST A LABEL. The pieces highlight sculpted silhouettes, combining deep velvet textures and lustrous silk satin tailored for galas, formal evenings, and distinguished occasions.',
        materials: 'Fine velvet, silk satin, metallic hardware accents, concealed zipper',
        sizes: 'XS, S, M, L, XL',
        production: 'Small-batch crafted',
        origin: 'NOT JUST A LABEL • Los Angeles, CA'
    },
    item2: {
        image: 'portfolio-item2.png',
        category: 'Signature Series',
        title: 'Red Couture Gown',
        description: 'A signature couture creation celebrating vibrant occasion wear. The tailored silhouette balances cultural symbolism with modern structural elegance, delivering a refined statement piece for special milestones.',
        materials: 'Premium silk satin, bespoke embroidery detailing',
        sizes: 'XS, S, M, L, XL',
        production: 'Specialty edition',
        origin: 'NOT JUST A LABEL • Los Angeles, CA'
    }
};

// Brand Value Modal Data (NOT JUST A LABEL Operations)
const brandValueModalData = {
    craftsmanship: {
        image: 'brand-craftsmanship.png',
        icon: 'fa-medal',
        title: 'Artisan Craftsmanship',
        description: 'NOT JUST A LABEL prioritizes rigorous craftsmanship standards across every collection, working with specialized pattern makers and experienced artisans to ensure lasting garment integrity.',
        details: [
            { icon: 'fa-hand-sparkles', title: 'Meticulous Finishing', desc: 'Hand-finished edge details and durable seam construction' },
            { icon: 'fa-ruler-combined', title: 'Precision Patterning', desc: 'Refined tailoring tailored for contemporary posture and movement' },
            { icon: 'fa-layer-group', title: 'Textile Selection', desc: 'Rigorous vetting of premium silks, wools, and tailored blends' },
            { icon: 'fa-clipboard-check', title: 'Quality Assurance', desc: 'Comprehensive inspection protocol before release' }
        ]
    },
    sustainable: {
        image: 'brand-sustainable.png',
        icon: 'fa-leaf',
        title: 'Sustainable Sourcing',
        description: 'Operating on a disciplined small-batch production model to minimize overstock, conserve resources, and prioritize high-longevity garments over fast fashion cycles.',
        details: [
            { icon: 'fa-boxes-stacked', title: 'Small-Batch Production', desc: 'Carefully measured production runs that prevent excess inventory' },
            { icon: 'fa-handshake-simple', title: 'Ethical Partnerships', desc: 'Trusted, long-standing relationships with verified suppliers' },
            { icon: 'fa-seedling', title: 'Durable Materials', desc: 'Focus on textiles that retain form and beauty season after season' },
            { icon: 'fa-box', title: 'Mindful Packaging', desc: 'Streamlined, protective packaging to reduce waste' }
        ]
    },
    global: {
        image: 'brand-global.png',
        icon: 'fa-globe',
        title: 'Global Reach',
        description: 'Operating from Los Angeles, NOT JUST A LABEL connects with an international clientele through targeted online channels and direct brand marketing initiatives.',
        details: [
            { icon: 'fa-truck-fast', title: 'International Delivery', desc: 'Reliable order fulfillment to clients worldwide' },
            { icon: 'fa-laptop', title: 'Digital E-Commerce', desc: 'Direct online sales platform with transparent product details' },
            { icon: 'fa-comments', title: 'Client Service', desc: 'Direct customer communication and sizing guidance' },
            { icon: 'fa-network-wired', title: 'Cross-Border Supply', desc: 'Coordinated global supply chains connecting Asia and North America' }
        ]
    },
    customer: {
        image: 'brand-customer.png',
        icon: 'fa-heart',
        title: 'Customer First',
        description: 'Dedicated to offering personalized client care, attentive sizing consultations, and responsive customer support to ensure an exceptional brand experience.',
        details: [
            { icon: 'fa-headset', title: 'Responsive Support', desc: 'Timely inquiry handling and post-order follow-through' },
            { icon: 'fa-ruler', title: 'Fit Guidance', desc: 'Detailed garment measurements and personalized sizing advice' },
            { icon: 'fa-arrow-rotate-left', title: 'Smooth Exchanges', desc: 'Straightforward order management and support' },
            { icon: 'fa-star', title: 'Client Relationships', desc: 'Building lasting connections with discerning fashion patrons' }
        ]
    }
};

// Media & Brand Highlights Modal Data
const mediaModalData = {
    awards: {
        image: 'media-awards.png',
        icon: 'fa-compass',
        title: 'Design Direction & Collections',
        description: 'Under Hailey Fang’s creative leadership, NOT JUST A LABEL has developed multiple seasonal collections that embody modern aesthetic sensibility, clean structural lines, and versatile contemporary womenswear.',
        details: [
            { icon: 'fa-layer-group', title: 'Seasonal Archives', desc: 'Multiple collections developed across spring, fall, and evening lines' },
            { icon: 'fa-palette', title: 'Aesthetic Direction', desc: 'Cohesive synthesis of Eastern harmony and Western modern tailoring' },
            { icon: 'fa-check-circle', title: 'Production Oversight', desc: 'Hands-on management from sketch concept to finished sample' },
            { icon: 'fa-award', title: 'Design Integrity', desc: 'Dedication to timeless garments over ephemeral fashion fads' }
        ]
    },
    media: {
        image: 'media-press.png',
        icon: 'fa-bullhorn',
        title: 'Brand Marketing & Channels',
        description: 'Hailey Fang established and manages the online sales channels and digital brand presence of NOT JUST A LABEL, curating marketing initiatives that expand the brand’s global visibility.',
        details: [
            { icon: 'fa-globe', title: 'Online Sales Channels', desc: 'Direct-to-consumer e-commerce expansion and order infrastructure' },
            { icon: 'fa-hashtag', title: 'Brand Marketing', desc: 'Digital marketing initiatives tailored for modern fashion enthusiasts' },
            { icon: 'fa-users', title: 'Audience Engagement', desc: 'Cultivating authentic relationships with global fashion clients' },
            { icon: 'fa-chart-line', title: 'Brand Growth', desc: 'Steady international market development guided from Los Angeles' }
        ]
    },
    charity: {
        image: 'Couture Design Studio Still Life.png',
        icon: 'fa-industry',
        title: 'Full-Chain Operations',
        description: 'Managing the complete operational lifecycle at NOT JUST A LABEL, from raw material sourcing and supplier coordination to small-batch production logistics and international fulfillment.',
        details: [
            { icon: 'fa-handshake', title: 'Supplier Network', desc: 'Long-term partnerships with specialized textile mills and workshops' },
            { icon: 'fa-boxes-packing', title: 'Small-Batch Workflow', desc: 'Disciplined manufacturing schedules ensuring product exclusivity' },
            { icon: 'fa-map-pin', title: 'Los Angeles HQ', desc: 'Centralized U.S. operational hub at 300 S Grand Ave, Los Angeles' },
            { icon: 'fa-shield-halved', title: 'Quality Standards', desc: 'Rigorous inspection across every stage of the apparel pipeline' }
        ]
    }
};

// Collection Modal Data
const collectionModalData = {
    spring: {
        image: 'collection-spring-2024.png',
        title: 'Spring Collection',
        description: 'A light, expressive seasonal lineup exploring soft drape, clean asymmetrical lines, and delicate silk textures suited for modern springtime living.',
        details: 'Key Elements: Fine Silk Cuts, Fluid Silhouettes, Soft Contemporary Palette'
    },
    fall: {
        image: 'collection-fall-2024.png',
        title: 'Fall Collection',
        description: 'Structured eveningwear and tailored layers showcasing rich velvet textures and precise outerwear lines for cool-weather sophistication.',
        details: 'Key Elements: Rich Velvets, Structured Tailoring, Tailored Capes'
    },
    couture: {
        image: 'collection-couture.png',
        title: 'Couture & Occasion',
        description: 'Specialty occasion pieces highlighting hand-finished details, custom beadwork accents, and sculpted silhouettes designed for formal milestones.',
        details: 'Key Elements: Hand-Finished Embellishments, Sculpted Form, Specialty Editions'
    },
    readytowear: {
        image: 'Contemporary Tailoring.png',
        title: 'Ready-to-Wear Line',
        description: 'Versatile contemporary pieces engineered for the dynamic daily lives of modern professional women, transitioning effortlessly from day to evening.',
        details: 'Key Elements: Minimalist Tailoring, Breathable Textiles, Functional Elegance'
    }
};

/* ==========================================================================
   2. MODAL INTERACTION CONTROLLERS
   ========================================================================== */

function openPhilosophyModal(type) {
    const modal = document.getElementById('philosophyModal');
    const data = philosophyModalData[type];
    if (!data) return;

    document.getElementById('philosophyModalImage').src = data.image;
    document.getElementById('philosophyModalTitle').textContent = data.title;
    document.getElementById('philosophyModalDescription').textContent = data.description;

    const featuresContainer = document.getElementById('philosophyModalFeatures');
    featuresContainer.innerHTML = '';
    data.features.forEach(feature => {
        const item = document.createElement('div');
        item.className = 'modal-feature-item';
        item.innerHTML = `<h4>${feature.title}</h4><p>${feature.desc}</p>`;
        featuresContainer.appendChild(item);
    });

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closePhilosophyModal() {
    const modal = document.getElementById('philosophyModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

function openPortfolioModal(item) {
    const modal = document.getElementById('portfolioModal');
    const data = portfolioModalData[item];
    if (!data) return;

    document.getElementById('portfolioModalImage').src = data.image;
    document.getElementById('portfolioModalCategory').textContent = data.category;
    document.getElementById('portfolioModalTitle').textContent = data.title;
    document.getElementById('portfolioModalDescription').textContent = data.description;
    document.getElementById('portfolioModalMaterials').textContent = data.materials;
    document.getElementById('portfolioModalSizes').textContent = data.sizes;
    document.getElementById('portfolioModalProduction').textContent = data.production;
    document.getElementById('portfolioModalOrigin').textContent = data.origin;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closePortfolioModal() {
    const modal = document.getElementById('portfolioModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

function openBrandValueModal(type) {
    const modal = document.getElementById('brandValueModal');
    const data = brandValueModalData[type];
    if (!data) return;

    document.getElementById('brandValueModalImage').src = data.image;
    document.getElementById('brandValueModalIcon').className = `fas ${data.icon}`;
    document.getElementById('brandValueModalTitle').textContent = data.title;
    document.getElementById('brandValueModalDescription').textContent = data.description;

    const detailsContainer = document.getElementById('brandValueModalDetails');
    detailsContainer.innerHTML = '';
    data.details.forEach(detail => {
        const item = document.createElement('div');
        item.className = 'brand-value-modal-detail-item';
        item.innerHTML = `<i class="fas ${detail.icon}"></i><h5>${detail.title}</h5><p>${detail.desc}</p>`;
        detailsContainer.appendChild(item);
    });

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeBrandValueModal() {
    const modal = document.getElementById('brandValueModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

function openMediaModal(type) {
    const modal = document.getElementById('mediaModal');
    const data = mediaModalData[type];
    if (!data) return;

    document.getElementById('mediaModalImage').src = data.image;
    document.getElementById('mediaModalIcon').className = `fas ${data.icon}`;
    document.getElementById('mediaModalTitle').textContent = data.title;
    document.getElementById('mediaModalDescription').textContent = data.description;

    const detailsContainer = document.getElementById('mediaModalDetails');
    detailsContainer.innerHTML = '';
    data.details.forEach(detail => {
        const item = document.createElement('div');
        item.className = 'media-modal-detail-item';
        item.innerHTML = `<i class="fas ${detail.icon}"></i><h5>${detail.title}</h5><p>${detail.desc}</p>`;
        detailsContainer.appendChild(item);
    });

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeMediaModal() {
    const modal = document.getElementById('mediaModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

function openCollectionModal(type) {
    const modal = document.getElementById('collectionModal');
    const data = collectionModalData[type];
    if (!data) return;

    document.getElementById('collectionModalImage').src = data.image;
    document.getElementById('collectionModalTitle').textContent = data.title;
    document.getElementById('collectionModalDescription').textContent = data.description;
    document.getElementById('collectionModalDetails').textContent = data.details;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCollectionModal() {
    const modal = document.getElementById('collectionModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

/* ==========================================================================
   3. EVENT LISTENERS & LIFECYCLE
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    applyImageFallbacks();

    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '') return;
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
            const navLinks = document.querySelector('.nav-links');
            if (window.innerWidth <= 768 && navLinks && navLinks.style.display === 'flex') {
                navLinks.style.display = 'none';
            }
        });
    });

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'all 0.8s ease-out';
        observer.observe(section);
    });

    const mobileBtn = document.querySelector('.mobile-menu-btn');
    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            const navLinks = document.querySelector('.nav-links');
            const isCurrentlyFlex = navLinks.style.display === 'flex';
            navLinks.style.display = isCurrentlyFlex ? 'none' : 'flex';

            if (!isCurrentlyFlex) {
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%';
                navLinks.style.left = '0';
                navLinks.style.right = '0';
                navLinks.style.background = 'white';
                navLinks.style.padding = '2rem';
                navLinks.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
            }
        });
    }

    window.addEventListener('click', (event) => {
        const modals = [
            { el: document.getElementById('philosophyModal'), close: closePhilosophyModal },
            { el: document.getElementById('portfolioModal'), close: closePortfolioModal },
            { el: document.getElementById('brandValueModal'), close: closeBrandValueModal },
            { el: document.getElementById('mediaModal'), close: closeMediaModal },
            { el: document.getElementById('collectionModal'), close: closeCollectionModal }
        ];

        modals.forEach(({ el, close }) => {
            if (el && event.target === el) {
                close();
            }
        });
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closePhilosophyModal();
            closePortfolioModal();
            closeBrandValueModal();
            closeMediaModal();
            closeCollectionModal();
        }
    });
});

/* ==========================================================================
   4. IMAGE FALLBACK SYSTEM
   ========================================================================== */

function applyImageFallbacks() {
    const fallbackSvg = encodeURIComponent(
        `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800">
            <defs>
                <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stop-color="#111"/>
                    <stop offset="1" stop-color="#222"/>
                </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#g)"/>
            <rect x="60" y="60" width="1080" height="680" rx="28" ry="28" fill="none" stroke="#C9A962" stroke-width="6" opacity="0.55"/>
            <text x="50%" y="48%" dominant-baseline="middle" text-anchor="middle" fill="#C9A962" font-family="'Cormorant Garamond', serif" font-size="42" opacity="0.9">Hailey Fang • NOT JUST A LABEL</text>
            <text x="50%" y="56%" dominant-baseline="middle" text-anchor="middle" fill="#FFFFFF" font-family="'Montserrat', sans-serif" font-size="20" opacity="0.55">Image Asset</text>
        </svg>`
    );
    const fallbackUrl = `data:image/svg+xml;charset=utf-8,${fallbackSvg}`;

    document.querySelectorAll('img').forEach((img) => {
        img.addEventListener('error', () => {
            if (img.dataset && img.dataset.fallbackApplied) return;
            if (img.dataset) img.dataset.fallbackApplied = '1';
            img.src = fallbackUrl;
        }, { once: true });
    });
}
