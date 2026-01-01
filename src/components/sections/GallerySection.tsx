'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const galleryImages = [
    { src: '/images/sample-1.jpg', alt: 'Hotel Exterior', category: 'Hotel' },
    { src: '/images/sample-2.jpg', alt: 'Lobby', category: 'Interior' },
    { src: '/images/sample-3.jpg', alt: 'Lounge Area', category: 'Interior' },
    { src: '/images/room-standard.png', alt: 'Standard Room', category: 'Rooms' },
    { src: '/images/room-deluxe.png', alt: 'Deluxe Room', category: 'Rooms' },
    { src: '/images/room-suite.png', alt: 'Premium Suite', category: 'Rooms' },
    { src: '/images/food-1.jpg', alt: 'Breakfast', category: 'Dining' },
    { src: '/images/food-2.jpg', alt: 'Gourmet Cuisine', category: 'Dining' },
    { src: '/images/food-3.jpg', alt: 'Fine Dining', category: 'Dining' },
    { src: '/images/sample-09.jpg', alt: 'Rooftop Terrace', category: 'Hotel' },
    { src: '/images/sample-10.jpg', alt: 'Grand Lobby', category: 'Interior' },
    { src: '/images/sample-11.jpg', alt: 'Luxury Bathroom', category: 'Rooms' },
];

// Split images into two rows
const row1Images = galleryImages.slice(0, 6);
const row2Images = galleryImages.slice(6, 12);

export default function GallerySection() {
    const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null);
    const [isPaused, setIsPaused] = useState(false);

    const openLightbox = (src: string, alt: string) => {
        setLightboxImage({ src, alt });
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setLightboxImage(null);
        document.body.style.overflow = 'auto';
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && lightboxImage) {
                closeLightbox();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [lightboxImage]);

    const ImageCard = ({ image }: { image: { src: string; alt: string; category: string } }) => (
        <div
            className="w-80 h-56 flex-shrink-0 relative overflow-hidden rounded-xl cursor-pointer group"
            onClick={() => openLightbox(image.src, image.alt)}
        >
            <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4">
                    <span className="inline-block px-3 py-1 bg-[var(--color-secondary)] text-[var(--color-charcoal)] text-xs font-medium rounded-full mb-2">
                        {image.category}
                    </span>
                    <h4 className="text-white font-serif font-semibold">{image.alt}</h4>
                </div>
            </div>
            <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <svg className="w-5 h-5 text-[var(--color-charcoal)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
            </div>
        </div>
    );

    return (
        <section id="gallery" className="py-12 bg-[var(--color-cream)] overflow-hidden">
            {/* Section Header */}
            <div className="container-custom">
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="w-12 h-[2px] bg-[var(--color-secondary)]" />
                        <span className="text-[var(--color-secondary)] uppercase tracking-[0.2em] text-sm font-medium">
                            Gallery
                        </span>
                        <div className="w-12 h-[2px] bg-[var(--color-secondary)]" />
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[var(--color-charcoal)] mb-4">
                        Explore Our Hotel
                    </h2>
                    <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
                        Take a visual tour of our exquisite facilities, elegant rooms, and world-class amenities.
                    </p>
                </div>
            </div>

            {/* Full-Width Two-Row Slider */}
            <div
                className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                {/* Row 1 */}
                <div className={`flex gap-4 mb-4 ${isPaused ? 'animate-pause' : 'animate-scroll'}`}>
                    {row1Images.map((image, index) => (
                        <ImageCard key={`r1-s1-${index}`} image={image} />
                    ))}
                    {row1Images.map((image, index) => (
                        <ImageCard key={`r1-s2-${index}`} image={image} />
                    ))}
                    {row1Images.map((image, index) => (
                        <ImageCard key={`r1-s3-${index}`} image={image} />
                    ))}
                </div>

                {/* Row 2 - Scrolls opposite direction */}
                <div className={`flex gap-4 ${isPaused ? 'animate-pause-reverse' : 'animate-scroll-reverse'}`}>
                    {row2Images.map((image, index) => (
                        <ImageCard key={`r2-s1-${index}`} image={image} />
                    ))}
                    {row2Images.map((image, index) => (
                        <ImageCard key={`r2-s2-${index}`} image={image} />
                    ))}
                    {row2Images.map((image, index) => (
                        <ImageCard key={`r2-s3-${index}`} image={image} />
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            {lightboxImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    onClick={closeLightbox}
                >
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

                    <button
                        className="absolute top-4 right-4 z-10 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                        onClick={closeLightbox}
                        aria-label="Close lightbox"
                    >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <div
                        className="relative max-w-5xl max-h-[85vh] w-full h-full animate-lightbox-in"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={lightboxImage.src}
                            alt={lightboxImage.alt}
                            fill
                            className="object-contain"
                        />
                    </div>

                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center z-10">
                        <p className="text-white/90 text-lg font-serif font-medium px-6 py-3 bg-black/30 backdrop-blur-sm rounded-full">
                            {lightboxImage.alt}
                        </p>
                    </div>
                </div>
            )}

            <style jsx>{`
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-33.333%); }
                }
                @keyframes scroll-reverse {
                    0% { transform: translateX(-33.333%); }
                    100% { transform: translateX(0); }
                }
                .animate-scroll {
                    animation: scroll 45s linear infinite;
                }
                .animate-scroll-reverse {
                    animation: scroll-reverse 45s linear infinite;
                }
                .animate-pause {
                    animation: scroll 45s linear infinite;
                    animation-play-state: paused;
                }
                .animate-pause-reverse {
                    animation: scroll-reverse 45s linear infinite;
                    animation-play-state: paused;
                }
                @keyframes lightbox-in {
                    0% { opacity: 0; transform: scale(0.9); }
                    100% { opacity: 1; transform: scale(1); }
                }
                .animate-lightbox-in {
                    animation: lightbox-in 0.3s ease-out forwards;
                }
            `}</style>
        </section>
    );
}
