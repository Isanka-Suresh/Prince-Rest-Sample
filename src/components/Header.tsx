'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Rooms', href: '#rooms' },
  { name: 'Dining', href: '#dining' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Reviews', href: '#reviews' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className={`transition-colors duration-300 ${isScrolled ? 'text-[var(--color-primary)]' : 'text-white'}`}>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 28V14L20 10L28 14V28L20 24L12 28Z" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="1.5"/>
                <circle cx="20" cy="17" r="3" fill="currentColor"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className={`text-xl font-serif font-bold transition-colors duration-300 ${isScrolled ? 'text-[var(--color-primary)]' : 'text-white'}`}>
                Prince Rest
              </span>
              <span className={`text-xs tracking-widest uppercase transition-colors duration-300 ${isScrolled ? 'text-[var(--color-text-secondary)]' : 'text-white/80'}`}>
                Luxury Hotel
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={`text-sm font-medium transition-colors duration-300 hover:text-[var(--color-secondary)] ${
                  isScrolled ? 'text-[var(--color-charcoal)]' : 'text-white'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Book Now Button */}
          <div className="hidden lg:block">
            <button
              onClick={() => scrollToSection('#booking')}
              className={`px-6 py-2.5 rounded font-medium text-sm transition-all duration-300 ${
                isScrolled
                  ? 'bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)]'
                  : 'bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white hover:text-[var(--color-primary)]'
              }`}
            >
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 transition-colors duration-300 ${isScrolled ? 'text-[var(--color-charcoal)]' : 'text-white'}`}
            aria-label="Toggle menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {isMobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-96 pt-4' : 'max-h-0'
          }`}
        >
          <div className={`rounded-lg p-4 ${isScrolled ? 'bg-gray-50' : 'bg-white/10 backdrop-blur-md'}`}>
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={`block w-full text-left py-3 px-4 rounded transition-colors duration-200 ${
                  isScrolled
                    ? 'text-[var(--color-charcoal)] hover:bg-gray-100'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('#booking')}
              className="w-full mt-3 py-3 px-4 bg-[var(--color-primary)] text-white rounded font-medium hover:bg-[var(--color-primary-dark)] transition-colors duration-200"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
