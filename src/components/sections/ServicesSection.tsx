'use client';

import Image from 'next/image';

const services = [
    {
        title: 'Free WiFi',
        description: 'High-speed, reliable Wi‑Fi available in every room, lobby, and public area, ensuring seamless connectivity for work, streaming, and staying in touch.',
        flowerImage: '/images/flower-01.png',
        rotation: '45deg',
        position: 'bottom-0 right-0',
    },
    {
        title: 'Swimming Pool',
        description: 'Luxurious indoor and outdoor pools equipped with precise temperature control, perfect for a refreshing dip or a leisurely swim at any time of day.',
        flowerImage: '/images/flower-02.png',
        rotation: '0deg',
        position: 'top-0 right-0',
    },
    {
        title: 'Spa & Wellness',
        description: 'A full‑service spa offering rejuvenating massages, body treatments, and curated wellness programs designed to relax and revitalize body and mind.',
        flowerImage: '/images/flower-03.png',
        rotation: '-45deg',
        position: 'bottom-0 right-0',
    },
    {
        title: 'Restaurant',
        description: 'Elegant fine‑dining restaurant serving a curated selection of international cuisines, crafted by award‑winning chefs using fresh, locally‑sourced ingredients.',
        flowerImage: '/images/flower-04.png',
        rotation: '0deg',
        position: 'top-0 right-0',
    },
    {
        title: 'Parking',
        description: 'Complimentary valet parking service that greets you upon arrival, handling your vehicle with care and ensuring hassle‑free access throughout your stay.',
        flowerImage: '/images/flower-05.png',
        rotation: '-60deg',
        position: 'bottom-0 right-0',
    },
    {
        title: 'Reception',
        description: '24/7 front‑desk and concierge team ready to assist with reservations, local recommendations, and any special requests to make your stay unforgettable.',
        flowerImage: '/images/flower-07.png',
        rotation: '45deg',
        position: 'top-0 right-0',
    },
];

export default function ServicesSection() {
    return (
        <section id="services" className="relative py-24 overflow-hidden">
            {/* Background Image with Blur */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/sample-3.jpg"
                    alt="Background"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-[var(--color-charcoal)]/50 backdrop-blur-sm" />
            </div>

            <div className="container-custom relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="w-12 h-[2px] bg-[var(--color-secondary)]" />
                        <span className="text-[var(--color-secondary)] uppercase tracking-[0.2em] text-sm font-medium">
                            Our Services
                        </span>
                        <div className="w-12 h-[2px] bg-[var(--color-secondary)]" />
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-4">
                        Premium Hotel Facilities
                    </h2>
                    <p className="text-white/70 max-w-2xl mx-auto">
                        Experience world-class amenities designed to make your stay unforgettable. Every service is crafted with attention to detail and your comfort in mind.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group relative bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden min-h-[200px]"
                        >
                            {/* Card Content */}
                            <div className="relative z-10">
                                {/* Title */}
                                <h3 className="text-2xl font-serif font-bold text-[var(--color-white)] mt-2 mb-4">
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className="text-[var(--color-white)]/60 text-sm leading-relaxed">
                                    {service.description}
                                </p>
                            </div>

                            {/* Flower Decoration - Background */}
                            <div
                                className={`absolute ${service.position} w-64 h-64 opacity-30 group-hover:opacity-50 group-hover:scale-110 transition-all duration-500 -z-0`}
                                style={{ transform: `rotate(${service.rotation})` }}
                            >
                                <Image
                                    src={service.flowerImage}
                                    alt=""
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-12">
                    <a
                        href="#booking"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-secondary)] text-[var(--color-charcoal)] font-semibold rounded hover:bg-[var(--color-secondary-light)] transition-all duration-300"
                    >
                        View All Services
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}

