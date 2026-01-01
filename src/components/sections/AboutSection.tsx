'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const stats = [
    { value: 25, suffix: '+', label: 'Years Experience' },
    { value: 150, suffix: '+', label: 'Luxury Rooms' },
    { value: 50, suffix: 'K+', label: 'Happy Guests' },
    { value: 4.9, suffix: '', label: 'Rating Score', isDecimal: true },
];

// Custom hook for counter animation
function useCounterAnimation(end: number, duration: number = 2000, isDecimal: boolean = false) {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated) {
                        setHasAnimated(true);
                        const startTime = performance.now();

                        const animate = (currentTime: number) => {
                            const elapsed = currentTime - startTime;
                            const progress = Math.min(elapsed / duration, 1);

                            // Easing function for smooth animation
                            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                            const currentCount = easeOutQuart * end;

                            setCount(isDecimal ? parseFloat(currentCount.toFixed(1)) : Math.floor(currentCount));

                            if (progress < 1) {
                                requestAnimationFrame(animate);
                            } else {
                                setCount(end);
                            }
                        };

                        requestAnimationFrame(animate);
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [end, duration, hasAnimated, isDecimal]);

    return { count, ref };
}

// Counter component
function AnimatedCounter({ value, suffix, isDecimal = false }: { value: number; suffix: string; isDecimal?: boolean }) {
    const { count, ref } = useCounterAnimation(value, 2000, isDecimal);

    return (
        <span ref={ref} className="block text-4xl md:text-5xl font-stats text-[var(--color-primary)] mb-2">
            {isDecimal ? count.toFixed(1) : count}{suffix}
        </span>
    );
}

export default function AboutSection() {
    return (
        <section id="about" className="section-padding bg-[var(--color-cream)]">
            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Image Side */}
                    <div className="relative">
                        {/* Main Image */}
                        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/images/sample-2.jpg"
                                alt="Prince Rest Luxury Hotel Interior"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Floating Card */}
                        <div className="absolute -bottom-6 -right-6 md:bottom-10 md:-right-10 bg-white rounded-xl p-6 shadow-xl max-w-[200px]">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-12 h-12 rounded-full bg-[var(--color-secondary)]/20 flex items-center justify-center">
                                    <svg className="w-6 h-6 text-[var(--color-secondary)]" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <span className="block text-2xl font-stats text-[var(--color-primary)]">4.9</span>
                                    <span className="text-xs text-gray-500">Guest Rating</span>
                                </div>
                            </div>
                            <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-4 h-4 text-[var(--color-secondary)]" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                ))}
                            </div>
                        </div>

                        {/* Decorative Element */}
                        <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-[var(--color-secondary)] rounded-2xl -z-10" />
                    </div>

                    {/* Content Side */}
                    <div>
                        {/* Section Label */}
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-[2px] bg-[var(--color-secondary)]" />
                            <span className="text-[var(--color-secondary)] uppercase tracking-[0.2em] text-sm font-medium">
                                About Us
                            </span>
                        </div>

                        {/* Title */}
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[var(--color-charcoal)] mb-6">
                            A Legacy of Luxury & Hospitality
                        </h2>

                        {/* Description */}
                        <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
                            For over two decades, Prince Rest has been the epitome of luxury hospitality. Nestled in the heart of the city, our hotel offers an unparalleled experience that combines timeless elegance with modern comfort.
                        </p>
                        <p className="text-[var(--color-text-secondary)] mb-8 leading-relaxed">
                            Every corner of our establishment speaks of meticulous attention to detail, from our thoughtfully designed rooms to our world-class amenities. We believe in creating moments that transform into cherished memories.
                        </p>

                        {/* Features List */}
                        <div className="grid sm:grid-cols-2 gap-4 mb-10">
                            {[
                                'Award-winning hospitality',
                                'Prime city location',
                                'World-class amenities',
                                'Personalized service',
                                'Exquisite dining options',
                                'Sustainable practices',
                            ].map((feature, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <div className="w-5 h-5 rounded-full bg-[var(--color-primary)] flex items-center justify-center flex-shrink-0">
                                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-[var(--color-charcoal)] text-sm">{feature}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <a
                            href="#rooms"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-primary)] text-white font-medium rounded hover:bg-[var(--color-primary-dark)] transition-all duration-300 group"
                        >
                            Explore Our Rooms
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-16 border-t border-[var(--color-primary)]/10">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <AnimatedCounter value={stat.value} suffix={stat.suffix} isDecimal={stat.isDecimal} />
                            <span className="text-[var(--color-text-secondary)] text-sm uppercase tracking-wider">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

