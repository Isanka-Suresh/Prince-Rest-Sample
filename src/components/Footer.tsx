'use client';

import Image from 'next/image';
import Link from 'next/link';

const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Rooms', href: '#rooms' },
];

const experienceLinks = [
    { name: 'Fine Dining', href: '#dining' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Guest Reviews', href: '#reviews' },
    { name: 'Book Now', href: '#booking' },
];

const contactInfo = {
    address: '123 Luxury Avenue, Paradise City, PC 12345',
    phone: '+1 (555) 123-4567',
    email: 'reservations@princerest.com',
};

const socialLinks = [
    { name: 'Facebook', icon: 'facebook' },
    { name: 'Instagram', icon: 'instagram' },
    { name: 'Twitter', icon: 'twitter' },
    { name: 'LinkedIn', icon: 'linkedin' },
];

export default function Footer() {
    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative py-10 bg-[var(--color-charcoal)] text-white overflow-hidden">
            {/* Main Footer Content */}
            <div className="relative z-10">
                {/* Top Section - CTA Banner */}
                {/* <div className="border-b border-white/10">
                    <div className="container-custom py-32 lg:py-20">
                        <div className="flex flex-col mb-12 lg:flex-row items-center justify-between gap-8">
                            <div className="text-center lg:text-left max-w-2xl">
                                <h3 className="text-3xl lg:text-4xl font-serif font-bold mb-4">
                                    Experience Unforgettable
                                    <span className="text-[var(--color-secondary)]"> Luxury</span>
                                </h3>
                                <p className="text-white/70 text-lg">
                                    Begin your journey to relaxation and elegance. Reserve your stay today and discover the art of hospitality.
                                </p>
                            </div>
                            <button
                                onClick={() => scrollToSection('#booking')}
                                className="group flex items-center gap-3 px-8 py-4 bg-[var(--color-secondary)] text-[var(--color-charcoal)] rounded font-semibold text-lg transition-all duration-300 hover:bg-[var(--color-secondary-light)] hover:shadow-lg hover:shadow-[var(--color-secondary)]/30 hover:transform hover:scale-105"
                            >
                                Book Your Stay
                                <svg
                                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div> */}

                {/* Middle Section - Main Content */}
                <div className="container-custom py-16 lg:py-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 ">

                        {/* Brand Column */}
                        <div className="lg:col-span-1 my-12"> 
                            <Link href="/" className="inline-flex items-center gap-3 mb-6">
                                <div className="text-[var(--color-secondary)]">
                                    <svg width="48" height="48" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2" />
                                        <path d="M12 28V14L20 10L28 14V28L20 24L12 28Z" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="1.5" />
                                        <circle cx="20" cy="17" r="3" fill="currentColor" />
                                    </svg>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-2xl font-serif font-bold text-white">
                                        Prince Rest
                                    </span>
                                    <span className="text-xs tracking-[0.2em] uppercase text-[var(--color-secondary)]">
                                        Luxury Hotel
                                    </span>
                                </div>
                            </Link>
                            <p className="text-white/60 leading-relaxed mb-8 max-w-xs">
                                Where elegance meets comfort. Experience world-class hospitality in the heart of paradise, crafted for the discerning traveler.
                            </p>

                            {/* Social Links */}
                            <div className="flex gap-4">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.name}
                                        href="#"
                                        className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white/60 transition-all duration-300 hover:bg-[var(--color-secondary)] hover:border-[var(--color-secondary)] hover:text-[var(--color-charcoal)]"
                                        aria-label={social.name}
                                    >
                                        {social.icon === 'facebook' && (
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                            </svg>
                                        )}
                                        {social.icon === 'instagram' && (
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                            </svg>
                                        )}
                                        {social.icon === 'twitter' && (
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                            </svg>
                                        )}
                                        {social.icon === 'linkedin' && (
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                            </svg>
                                        )}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className='my-12'>
                            <h4 className="text-lg font-serif font-semibold mb-6 relative inline-block">
                                Quick Links
                                <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-[var(--color-secondary)]"></span>
                            </h4>
                            <ul className="space-y-4">
                                {quickLinks.map((link) => (
                                    <li key={link.name}>
                                        <button
                                            onClick={() => scrollToSection(link.href)}
                                            className="text-white/60 hover:text-[var(--color-secondary)] transition-all duration-300 hover:pl-2 flex items-center gap-2 group"
                                        >
                                            <span className="w-0 group-hover:w-2 h-px bg-[var(--color-secondary)] transition-all duration-300"></span>
                                            {link.name}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Experience Links */}
                        <div className='my-12'>
                            <h4 className="text-lg font-serif font-semibold mb-6 relative inline-block">
                                Experience
                                <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-[var(--color-secondary)]"></span>
                            </h4>
                            <ul className="space-y-4">
                                {experienceLinks.map((link) => (
                                    <li key={link.name}>
                                        <button
                                            onClick={() => scrollToSection(link.href)}
                                            className="text-white/60 hover:text-[var(--color-secondary)] transition-all duration-300 hover:pl-2 flex items-center gap-2 group"
                                        >
                                            <span className="w-0 group-hover:w-2 h-px bg-[var(--color-secondary)] transition-all duration-300"></span>
                                            {link.name}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div className='my-12'>
                            <h4 className="text-lg font-serif font-semibold mb-6 relative inline-block">
                                Get in Touch
                                <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-[var(--color-secondary)]"></span>
                            </h4>
                            <ul className="space-y-5">
                                <li className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <svg className="w-5 h-5 text-[var(--color-secondary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <span className="text-white/60 leading-relaxed">{contactInfo.address}</span>
                                </li>
                                <li className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                                        <svg className="w-5 h-5 text-[var(--color-secondary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <a href={`tel:${contactInfo.phone}`} className="text-white/60 hover:text-[var(--color-secondary)] transition-colors duration-300">
                                        {contactInfo.phone}
                                    </a>
                                </li>
                                <li className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                                        <svg className="w-5 h-5 text-[var(--color-secondary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <a href={`mailto:${contactInfo.email}`} className="text-white/60 hover:text-[var(--color-secondary)] transition-colors duration-300">
                                        {contactInfo.email}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Section - Copyright */}
                <div className="border-t border-white/10">
                    <div className="container-custom py-8">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-4">
                            <p className="text-white/40 text-sm text-center md:text-left">
                                © {currentYear} Prince Rest Luxury Hotel. All rights reserved.
                            </p>
                            <div className="flex items-center gap-8">
                                <a href="#" className="text-white/40 text-sm hover:text-[var(--color-secondary)] transition-colors duration-300">
                                    Privacy Policy
                                </a>
                                <a href="#" className="text-white/40 text-sm hover:text-[var(--color-secondary)] transition-colors duration-300">
                                    Terms of Service
                                </a>
                                <a href="#" className="text-white/40 text-sm hover:text-[var(--color-secondary)] transition-colors duration-300">
                                    Cookie Policy
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Decorative Gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-secondary)]/50 to-transparent"></div>
        </footer>
    );
}
