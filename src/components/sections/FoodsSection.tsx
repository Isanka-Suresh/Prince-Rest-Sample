'use client';

import Image from 'next/image';

const foodItems = [
    {
        image: '/images/food-1.jpg',
        name: 'Continental Breakfast',
        category: 'Breakfast',
        price: '$25',
    },
    {
        image: '/images/food-2.jpg',
        name: 'Chef\'s Special',
        category: 'Main Course',
        price: '$45',
    },
    {
        image: '/images/food-3.jpg',
        name: 'Gourmet Platter',
        category: 'Dinner',
        price: '$55',
    },
];

const menuHighlights = [
    { name: 'Farm-to-Table Cuisine', icon: '🥗' },
    { name: 'International Wine Selection', icon: '🍷' },
    { name: 'Private Dining Available', icon: '🍽️' },
    { name: 'Dietary Accommodations', icon: '🌿' },
];

export default function FoodsSection() {
    return (
        <section id="dining" className="section-padding bg-[var(--color-cream)]">
            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Content Side */}
                    <div>
                        {/* Section Label */}
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-[2px] bg-[var(--color-secondary)]" />
                            <span className="text-[var(--color-secondary)] uppercase tracking-[0.2em] text-sm font-medium">
                                Fine Dining
                            </span>
                        </div>

                        {/* Title */}
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[var(--color-charcoal)] mb-6">
                            The Royal Restaurant
                        </h2>

                        {/* Description */}
                        <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
                            Embark on a culinary journey at The Royal Restaurant, where our world-class chefs craft exquisite dishes using the finest locally-sourced ingredients. From intimate dinners to grand celebrations, every meal is an experience to remember.
                        </p>

                        {/* Menu Highlights */}
                        <div className="grid sm:grid-cols-2 gap-4 mb-8">
                            {menuHighlights.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm"
                                >
                                    <span className="text-2xl">{item.icon}</span>
                                    <span className="text-[var(--color-charcoal)] font-medium text-sm">
                                        {item.name}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Operating Hours */}
                        <div className="bg-white rounded-lg p-6 shadow-sm mb-8">
                            <h4 className="text-lg font-serif font-semibold text-[var(--color-charcoal)] mb-4">
                                Operating Hours
                            </h4>
                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-[var(--color-text-secondary)]">Breakfast</span>
                                    <span className="text-[var(--color-charcoal)] font-medium">7:00 AM - 10:30 AM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-[var(--color-text-secondary)]">Lunch</span>
                                    <span className="text-[var(--color-charcoal)] font-medium">12:00 PM - 3:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-[var(--color-text-secondary)]">Dinner</span>
                                    <span className="text-[var(--color-charcoal)] font-medium">6:00 PM - 11:00 PM</span>
                                </div>
                            </div>
                        </div>

                        {/* CTA */}
                        <a
                            href="#booking"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-primary)] text-white font-medium rounded hover:bg-[var(--color-primary-dark)] transition-all duration-300 group"
                        >
                            Reserve a Table
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>

                    {/* Images Side */}
                    <div className="relative">
                        {/* Image Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {/* Large Image */}
                            <div className="col-span-2 relative aspect-[16/9] rounded-2xl overflow-hidden shadow-lg group">
                                <Image
                                    src={foodItems[0].image}
                                    alt={foodItems[0].name}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <div className="absolute bottom-4 left-4 right-4">
                                    <span className="inline-block px-3 py-1 bg-[var(--color-secondary)] text-[var(--color-charcoal)] text-xs font-medium rounded-full mb-2">
                                        {foodItems[0].category}
                                    </span>
                                    <h4 className="text-white font-serif font-semibold text-lg">
                                        {foodItems[0].name}
                                    </h4>
                                </div>
                            </div>

                            {/* Smaller Images */}
                            {foodItems.slice(1).map((item, index) => (
                                <div
                                    key={index}
                                    className="relative aspect-square rounded-xl overflow-hidden shadow-lg group"
                                >
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                    <div className="absolute bottom-3 left-3 right-3">
                                        <span className="inline-block px-2 py-0.5 bg-[var(--color-secondary)] text-[var(--color-charcoal)] text-xs font-medium rounded-full mb-1">
                                            {item.category}
                                        </span>
                                        <h4 className="text-white font-serif font-semibold text-sm">
                                            {item.name}
                                        </h4>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Decorative Element */}
                        <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-[var(--color-secondary)] rounded-2xl -z-10" />
                    </div>
                </div>
            </div>
        </section>
    );
}
