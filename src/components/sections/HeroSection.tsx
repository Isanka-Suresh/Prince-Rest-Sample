'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const heroSlides = [
    {
        image: '/images/sample-1.jpg',
        subtitle: 'Welcome to Prince Rest',
        title: 'Experience Luxury Like Never Before',
        description: 'Discover the perfect blend of comfort and elegance in the heart of the city.',
    },
    {
        image: '/images/sample-2.jpg',
        subtitle: 'Unwind & Relax',
        title: 'Your Perfect Getaway Awaits',
        description: 'Escape the ordinary and indulge in extraordinary experiences.',
    },
    {
        image: '/images/sample-3.jpg',
        subtitle: 'Premium Hospitality',
        title: 'Where Dreams Meet Reality',
        description: 'Every moment crafted to create lasting memories.',
    },
];

export default function HeroSection() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
                setIsAnimating(false);
            }, 500);
        }, 6000);

        return () => clearInterval(timer);
    }, []);

    const scrollToBooking = () => {
        const element = document.querySelector('#booking');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToAbout = () => {
        const element = document.querySelector('#about');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="hero" className="relative h-screen min-h-[700px] overflow-hidden">
            {/* Background Images */}
            {heroSlides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        className="object-cover"
                        priority={index === 0}
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
                </div>
            ))}

            {/* Content */}
            <div className="relative z-10 h-full flex items-center">
                <div className="container-custom w-full">
                    <div className="max-w-3xl">
                        {/* Subtitle */}
                        <div
                            className={`flex items-center gap-3 mb-4 transition-all duration-500 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
                                }`}
                        >
                            <div className="w-12 h-[2px] bg-[var(--color-secondary)]" />
                            <span className="text-[var(--color-secondary)] uppercase tracking-[0.2em] text-sm font-medium">
                                {heroSlides[currentSlide].subtitle}
                            </span>
                        </div>

                        {/* Title */}
                        <h1
                            className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-white leading-tight mb-6 transition-all duration-500 delay-100 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
                                }`}
                        >
                            {heroSlides[currentSlide].title}
                        </h1>

                        {/* Description */}
                        <p
                            className={`text-lg md:text-xl text-white/80 mb-8 max-w-xl transition-all duration-500 delay-200 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
                                }`}
                        >
                            {heroSlides[currentSlide].description}
                        </p>

                        {/* CTA Buttons */}
                        <div
                            className={`flex flex-wrap gap-4 transition-all duration-500 delay-300 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
                                }`}
                        >
                            <button
                                onClick={scrollToBooking}
                                className="px-8 py-4 bg-[var(--color-primary)] text-white font-medium rounded hover:bg-[var(--color-primary-dark)] transition-all duration-300 hover:shadow-lg hover:shadow-[var(--color-primary)]/30"
                            >
                                Book Your Stay
                            </button>
                            <button
                                onClick={scrollToAbout}
                                className="px-8 py-4 bg-transparent text-white font-medium rounded border-2 border-white/30 hover:bg-white hover:text-[var(--color-charcoal)] transition-all duration-300"
                            >
                                Discover More
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex gap-3">
                {heroSlides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setIsAnimating(true);
                            setTimeout(() => {
                                setCurrentSlide(index);
                                setIsAnimating(false);
                            }, 500);
                        }}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                                ? 'bg-[var(--color-secondary)] w-8'
                                : 'bg-white/50 hover:bg-white/80'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 right-10 z-10 hidden md:flex flex-col items-center gap-2">
                <span className="text-white/60 text-xs uppercase tracking-widest rotate-90 origin-center translate-y-8">
                    Scroll
                </span>
                <div className="w-[1px] h-16 bg-white/30 relative overflow-hidden mt-8">
                    <div className="absolute top-0 left-0 w-full h-1/2 bg-[var(--color-secondary)] animate-bounce" />
                </div>
            </div>

            {/* Quick Booking Form */}
            <div className="absolute bottom-0 left-0 right-0 z-10 hidden lg:block mb-10">
                <div className="container-custom">
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mx-auto max-w-4xl border border-white/20">
                        <div className="grid grid-cols-4 gap-4">
                            <div className="space-y-2">
                                <label className="text-white/70 text-sm">Check In</label>
                                <input
                                    type="date"
                                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-secondary)] transition-colors"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-white/70 text-sm">Check Out</label>
                                <input
                                    type="date"
                                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-secondary)] transition-colors"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-white/70 text-sm">Guests</label>
                                <select className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-secondary)] transition-colors appearance-none">
                                    <option value="1" className="text-black">1 Guest</option>
                                    <option value="2" className="text-black">2 Guests</option>
                                    <option value="3" className="text-black">3 Guests</option>
                                    <option value="4" className="text-black">4 Guests</option>
                                </select>
                            </div>
                            <div className="flex items-end">
                                <button
                                    onClick={scrollToBooking}
                                    className="w-full py-3 bg-[var(--color-secondary)] text-[var(--color-charcoal)] font-semibold rounded-lg hover:bg-[var(--color-secondary-light)] transition-colors duration-300"
                                >
                                    Check Availability
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
