'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const rooms = [
    {
        id: 1,
        name: 'Standard Room',
        image: '/images/room-standard.png',
        price: 199,
        size: '35 m²',
        guests: 2,
        beds: '1 King Bed',
        description: 'Elegant comfort with modern amenities for a restful stay.',
        features: ['City View', 'Air Conditioning', 'Mini Bar', 'Smart TV'],
    },
    {
        id: 2,
        name: 'Deluxe Room',
        image: '/images/room-deluxe.png',
        price: 299,
        size: '45 m²',
        guests: 3,
        beds: '1 King Bed + Sofa',
        description: 'Spacious luxury with premium furnishings and stunning views.',
        features: ['Panoramic View', 'Lounge Area', 'Premium Minibar', 'Workspace'],
    },
    {
        id: 3,
        name: 'Premium Suite',
        image: '/images/room-suite.png',
        price: 499,
        size: '75 m²',
        guests: 4,
        beds: '2 King Beds',
        description: 'The ultimate indulgence with separate living and dining areas.',
        features: ['Private Balcony', 'Jacuzzi', 'Butler Service', 'Kitchen'],
    },
];

export default function RoomsSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);

    const nextSlide = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentIndex((prev) => (prev + 1) % rooms.length);
        setTimeout(() => setIsAnimating(false), 500);
    };

    const prevSlide = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentIndex((prev) => (prev - 1 + rooms.length) % rooms.length);
        setTimeout(() => setIsAnimating(false), 500);
    };

    const goToSlide = (index: number) => {
        if (isAnimating || index === currentIndex) return;
        setIsAnimating(true);
        setCurrentIndex(index);
        setTimeout(() => setIsAnimating(false), 500);
    };

    // Get slide indices for prev, current, next
    const getPrevIndex = () => (currentIndex - 1 + rooms.length) % rooms.length;
    const getNextIndex = () => (currentIndex + 1) % rooms.length;

    // Auto-advance carousel
    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 6000);
        return () => clearInterval(timer);
    }, [currentIndex]);

    const getSlideStyle = (index: number) => {
        const isActive = index === currentIndex;
        const isPrev = index === getPrevIndex();
        const isNext = index === getNextIndex();

        if (isActive) {
            return {
                transform: 'translateX(0) scale(1)',
                opacity: 1,
                zIndex: 20,
                filter: 'blur(0px)',
            };
        } else if (isPrev) {
            return {
                transform: 'translateX(-85%) scale(0.85)',
                opacity: 0.4,
                zIndex: 10,
                filter: 'blur(3px)',
            };
        } else if (isNext) {
            return {
                transform: 'translateX(85%) scale(0.85)',
                opacity: 0.4,
                zIndex: 10,
                filter: 'blur(3px)',
            };
        } else {
            return {
                transform: 'translateX(0) scale(0.7)',
                opacity: 0,
                zIndex: 0,
                filter: 'blur(5px)',
            };
        }
    };

    // Touch handlers for mobile swipe
    const minSwipeDistance = 50;

    const onTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            nextSlide();
        } else if (isRightSwipe) {
            prevSlide();
        }
    };

    return (
        <section id="rooms" className="section-padding bg-white overflow-hidden">
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="w-12 h-[2px] bg-[var(--color-secondary)]" />
                        <span className="text-[var(--color-secondary)] uppercase tracking-[0.2em] text-sm font-medium">
                            Accommodations
                        </span>
                        <div className="w-12 h-[2px] bg-[var(--color-secondary)]" />
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[var(--color-charcoal)] mb-4">
                        Luxury Rooms & Suites
                    </h2>
                    <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
                        Discover our carefully curated collection of rooms and suites, each designed to provide the ultimate in comfort and style.
                    </p>
                </div>

                {/* 3D Carousel */}
                <div className="relative">
                    {/* Carousel Container */}
                    <div
                        className="relative h-[550px] md:h-[500px] flex items-center justify-center touch-pan-y"
                        onTouchStart={onTouchStart}
                        onTouchMove={onTouchMove}
                        onTouchEnd={onTouchEnd}
                    >
                        {rooms.map((room, index) => (
                            <div
                                key={room.id}
                                className="absolute w-full max-w-4xl transition-all duration-500 ease-out"
                                style={getSlideStyle(index)}
                            >
                                <div className="grid lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-2xl bg-white">
                                    {/* Image */}
                                    <div className="relative aspect-[4/3] lg:aspect-auto lg:h-[500px]">
                                        <Image
                                            src={room.image}
                                            alt={room.name}
                                            fill
                                            className="object-cover"
                                        />
                                        {/* Price Badge */}
                                        <div className="absolute top-6 left-6 bg-[var(--color-primary)] text-white px-4 py-2 rounded">
                                            <span className="text-2xl font-stats">${room.price}</span>
                                            <span className="text-sm opacity-80">/night</span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="bg-[var(--color-cream)] p-8 lg:p-12 flex flex-col justify-center">
                                        <h3 className="text-2xl md:text-3xl font-serif font-bold text-[var(--color-charcoal)] mb-4">
                                            {room.name}
                                        </h3>
                                        <p className="text-[var(--color-text-secondary)] mb-6">
                                            {room.description}
                                        </p>

                                        {/* Room Details */}
                                        <div className="grid grid-cols-3 gap-4 mb-6">
                                            <div className="text-center p-3 bg-white rounded-lg">
                                                <svg className="w-5 h-5 mx-auto mb-1 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                                                </svg>
                                                <span className="text-sm text-[var(--color-charcoal)] font-medium">{room.size}</span>
                                            </div>
                                            <div className="text-center p-3 bg-white rounded-lg">
                                                <svg className="w-5 h-5 mx-auto mb-1 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                                </svg>
                                                <span className="text-sm text-[var(--color-charcoal)] font-medium">{room.guests} Guests</span>
                                            </div>
                                            <div className="text-center p-3 bg-white rounded-lg">
                                                <svg className="w-5 h-5 mx-auto mb-1 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                                </svg>
                                                <span className="text-sm text-[var(--color-charcoal)] font-medium">{room.beds}</span>
                                            </div>
                                        </div>

                                        {/* Features */}
                                        <div className="flex flex-wrap gap-2 mb-8">
                                            {room.features.map((feature, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-3 py-1 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-sm rounded-full"
                                                >
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>

                                        {/* CTA */}
                                        <a
                                            href="#booking"
                                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--color-primary)] text-white font-medium rounded hover:bg-[var(--color-primary-dark)] transition-all duration-300"
                                        >
                                            Book This Room
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={prevSlide}
                        className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 shadow-lg hidden md:flex items-center justify-center text-[var(--color-charcoal)] hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300 z-30"
                        aria-label="Previous room"
                    >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 shadow-lg hidden md:flex items-center justify-center text-[var(--color-charcoal)] hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300 z-30"
                        aria-label="Next room"
                    >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center gap-3 mt-8">
                    {rooms.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                                ? 'bg-[var(--color-primary)] w-8'
                                : 'bg-[var(--color-primary)]/30 hover:bg-[var(--color-primary)]/50'
                                }`}
                            aria-label={`Go to room ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

