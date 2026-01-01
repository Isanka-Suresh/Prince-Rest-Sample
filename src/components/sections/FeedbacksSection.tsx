'use client';

import { useState, useEffect } from 'react';

const testimonials = [
    {
        id: 1,
        name: 'Sarah Johnson',
        role: 'Business Traveler',
        rating: 5,
        text: 'Absolutely exceptional! The attention to detail at Prince Rest is unmatched. From the moment I arrived, I felt like royalty. The staff anticipated my every need, and the room was immaculate. Will definitely return!',
        avatar: 'SJ',
    },
    {
        id: 2,
        name: 'Michael Chen',
        role: 'Honeymoon Guest',
        rating: 5,
        text: 'We chose Prince Rest for our honeymoon and it exceeded all expectations. The romantic ambiance, breathtaking views, and world-class dining made our special occasion truly unforgettable. Highly recommend the Premium Suite!',
        avatar: 'MC',
    },
    {
        id: 3,
        name: 'Emma Williams',
        role: 'Family Vacation',
        rating: 5,
        text: 'Traveling with kids can be challenging, but Prince Rest made it a breeze. The family-friendly amenities, kids&apos; activities, and spacious rooms were perfect. The staff even surprised us with a special welcome for our children!',
        avatar: 'EW',
    },
    {
        id: 4,
        name: 'David Martinez',
        role: 'Corporate Event',
        rating: 5,
        text: 'Hosted our annual company retreat here and the experience was flawless. The conference facilities are state-of-the-art, and the team went above and beyond to accommodate our needs. Professional excellence!',
        avatar: 'DM',
    },
    {
        id: 5,
        name: 'Lisa Anderson',
        role: 'Solo Traveler',
        rating: 5,
        text: 'As a solo traveler, safety and comfort are my priorities. Prince Rest delivered on both fronts magnificently. The spa treatments were divine, and the restaurant cuisine was a gastronomic delight. Pure bliss!',
        avatar: 'LA',
    },
];

export default function FeedbacksSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {
        if (!isAutoPlaying) return;

        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(timer);
    }, [isAutoPlaying]);

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    return (
        <section id="reviews" className="section-padding bg-white">
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="w-12 h-[2px] bg-[var(--color-secondary)]" />
                        <span className="text-[var(--color-secondary)] uppercase tracking-[0.2em] text-sm font-medium">
                            Testimonials
                        </span>
                        <div className="w-12 h-[2px] bg-[var(--color-secondary)]" />
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[var(--color-charcoal)] mb-4">
                        What Our Guests Say
                    </h2>
                    <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
                        Hear from our valued guests about their unforgettable experiences at Prince Rest.
                    </p>
                </div>

                {/* Testimonials Carousel */}
                <div className="relative max-w-4xl mx-auto">
                    {/* Quote Icon */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-16 bg-[var(--color-primary)] rounded-full flex items-center justify-center z-10">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                    </div>

                    {/* Testimonial Card */}
                    <div className="bg-[var(--color-cream)] rounded-2xl pt-12 pb-8 px-8 md:px-16">
                        <div className="overflow-hidden">
                            <div
                                className="flex transition-transform duration-500 ease-out"
                                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                            >
                                {testimonials.map((testimonial) => (
                                    <div
                                        key={testimonial.id}
                                        className="w-full flex-shrink-0 text-center"
                                    >
                                        {/* Rating */}
                                        <div className="flex justify-center gap-1 mb-6">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <svg
                                                    key={i}
                                                    className="w-6 h-6 text-[var(--color-secondary)]"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                                </svg>
                                            ))}
                                        </div>

                                        {/* Text */}
                                        <p className="text-lg md:text-xl text-[var(--color-charcoal)] leading-relaxed mb-8 italic">
                                            &ldquo;{testimonial.text}&rdquo;
                                        </p>

                                        {/* Author */}
                                        <div className="flex items-center justify-center gap-4">
                                            <div className="w-14 h-14 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-white font-semibold text-lg">
                                                {testimonial.avatar}
                                            </div>
                                            <div className="text-left">
                                                <h4 className="font-serif font-semibold text-[var(--color-charcoal)]">
                                                    {testimonial.name}
                                                </h4>
                                                <span className="text-sm text-[var(--color-text-secondary)]">
                                                    {testimonial.role}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="flex items-center justify-center gap-4 mt-8">
                        <button
                            onClick={prevSlide}
                            className="w-12 h-12 rounded-full border-2 border-[var(--color-primary)] flex items-center justify-center text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300"
                            aria-label="Previous testimonial"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        {/* Dots */}
                        <div className="flex gap-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                                            ? 'bg-[var(--color-primary)] w-8'
                                            : 'bg-[var(--color-primary)]/30 hover:bg-[var(--color-primary)]/50'
                                        }`}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={nextSlide}
                            className="w-12 h-12 rounded-full border-2 border-[var(--color-primary)] flex items-center justify-center text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300"
                            aria-label="Next testimonial"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Trust Badges */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-gray-200">
                    <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-[var(--color-cream)] flex items-center justify-center">
                            <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h4 className="font-semibold text-[var(--color-charcoal)]">Verified Reviews</h4>
                        <p className="text-sm text-[var(--color-text-secondary)]">All reviews are authentic</p>
                    </div>
                    <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-[var(--color-cream)] flex items-center justify-center">
                            <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h4 className="font-semibold text-[var(--color-charcoal)]">Best Price</h4>
                        <p className="text-sm text-[var(--color-text-secondary)]">Price match guarantee</p>
                    </div>
                    <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-[var(--color-cream)] flex items-center justify-center">
                            <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                            </svg>
                        </div>
                        <h4 className="font-semibold text-[var(--color-charcoal)]">Award Winning</h4>
                        <p className="text-sm text-[var(--color-text-secondary)]">5-star rated hotel</p>
                    </div>
                    <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-[var(--color-cream)] flex items-center justify-center">
                            <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                        <h4 className="font-semibold text-[var(--color-charcoal)]">50K+ Guests</h4>
                        <p className="text-sm text-[var(--color-text-secondary)]">Trusted by many</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
