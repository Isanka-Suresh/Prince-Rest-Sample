'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function BookingSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        checkIn: '',
        checkOut: '',
        roomType: 'standard',
        guests: '2',
        specialRequests: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000));

        setIsSubmitting(false);
        setIsSubmitted(true);

        // Reset after showing success message
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({
                name: '',
                email: '',
                phone: '',
                checkIn: '',
                checkOut: '',
                roomType: 'standard',
                guests: '2',
                specialRequests: '',
            });
        }, 3000);
    };

    return (
        <section id="booking" className="relative py-24">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/sample-1.jpg"
                    alt="Booking Background"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-[var(--color-charcoal)]/90" />
            </div>

            <div className="container-custom relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Content */}
                    <div>
                        {/* Section Label */}
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-[2px] bg-[var(--color-secondary)]" />
                            <span className="text-[var(--color-secondary)] uppercase tracking-[0.2em] text-sm font-medium">
                                Reservation
                            </span>
                        </div>

                        {/* Title */}
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
                            Book Your Perfect Stay
                        </h2>

                        {/* Description */}
                        <p className="text-white/70 mb-8 leading-relaxed">
                            Ready to experience luxury? Fill out the form to reserve your room at Prince Rest. Our team will confirm your booking within 24 hours.
                        </p>

                        {/* Features */}
                        <div className="space-y-4 mb-8">
                            {[
                                { icon: '✓', text: 'Best Rate Guarantee - Book directly for the best prices' },
                                { icon: '✓', text: 'Free Cancellation - Cancel up to 24 hours before check-in' },
                                { icon: '✓', text: 'Instant Confirmation - Receive booking details immediately' },
                                { icon: '✓', text: 'Exclusive Perks - Complimentary breakfast & late checkout' },
                            ].map((feature, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <span className="w-6 h-6 rounded-full bg-[var(--color-secondary)] flex items-center justify-center text-[var(--color-charcoal)] font-bold text-sm flex-shrink-0">
                                        {feature.icon}
                                    </span>
                                    <span className="text-white/80 text-sm">{feature.text}</span>
                                </div>
                            ))}
                        </div>

                        {/* Contact Info */}
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                            <h4 className="text-white font-serif font-semibold mb-4">Need Help?</h4>
                            <div className="space-y-3">
                                <a href="tel:+94452222123" className="flex items-center gap-3 text-white/80 hover:text-[var(--color-secondary)] transition-colors">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <span>+94 (45) 222 2123</span>
                                </a>
                                <a href="mailto:reservations@princerest.lk" className="flex items-center gap-3 text-white/80 hover:text-[var(--color-secondary)] transition-colors">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <span>reservations@princerest.lk</span>
                                </a>
                            </div>
                        </div>

                        {/* Location Map */}
                        <div className="mt-6">
                            <h4 className="text-white font-serif font-semibold mb-4 flex items-center gap-2">
                                <svg className="w-5 h-5 text-[var(--color-secondary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                Our Location
                            </h4>
                            <div className="rounded-xl overflow-hidden border-2 border-white/10">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63371.80385593052!2d80.3445!3d6.6828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3bf9a4e7d3c7f%3A0x4e7d3c7f9a4e7d3c!2sRatnapura%2C%20Sri%20Lanka!5e0!3m2!1sen!2slk!4v1703696400000!5m2!1sen!2slk"
                                    width="100%"
                                    height="200"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Prince Rest Location - Rathnapura, Sri Lanka"
                                    className="grayscale hover:grayscale-0 transition-all duration-500"
                                />
                            </div>
                            <p className="text-white/60 text-sm mt-3">
                                📍 Rathnapura, Sabaragamuwa Province, Sri Lanka
                            </p>
                        </div>
                    </div>

                    {/* Right - Form */}
                    <div className="bg-white rounded-2xl p-11 shadow-2xl">
                        {isSubmitted ? (
                            <div className="text-center py-12">
                                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                                    <svg className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-serif font-bold text-[var(--color-charcoal)] mb-2">
                                    Booking Received!
                                </h3>
                                <p className="text-[var(--color-text-secondary)]">
                                    We'll confirm your reservation shortly.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <h3 className="text-xl font-serif font-bold text-[var(--color-charcoal)] mb-2">
                                    Make a Reservation
                                </h3>

                                {/* Name & Email */}
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-[var(--color-charcoal)] mb-2">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-[var(--color-charcoal)] mb-2">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                {/* Phone */}
                                <div>
                                    <label className="block text-sm font-medium text-[var(--color-charcoal)] mb-2">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all"
                                        placeholder="+1 (555) 000-0000"
                                    />
                                </div>

                                {/* Check In & Check Out */}
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-[var(--color-charcoal)] mb-2">
                                            Check In
                                        </label>
                                        <input
                                            type="date"
                                            name="checkIn"
                                            value={formData.checkIn}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-[var(--color-charcoal)] mb-2">
                                            Check Out
                                        </label>
                                        <input
                                            type="date"
                                            name="checkOut"
                                            value={formData.checkOut}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all"
                                        />
                                    </div>
                                </div>

                                {/* Room Type & Guests */}
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-[var(--color-charcoal)] mb-2">
                                            Room Type
                                        </label>
                                        <select
                                            name="roomType"
                                            value={formData.roomType}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all appearance-none bg-white"
                                        >
                                            <option value="standard">Standard Room - $199/night</option>
                                            <option value="deluxe">Deluxe Room - $299/night</option>
                                            <option value="suite">Premium Suite - $499/night</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-[var(--color-charcoal)] mb-2">
                                            Guests
                                        </label>
                                        <select
                                            name="guests"
                                            value={formData.guests}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all appearance-none bg-white"
                                        >
                                            <option value="1">1 Guest</option>
                                            <option value="2">2 Guests</option>
                                            <option value="3">3 Guests</option>
                                            <option value="4">4 Guests</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Special Requests */}
                                <div>
                                    <label className="block text-sm font-medium text-[var(--color-charcoal)] mb-2">
                                        Special Requests (Optional)
                                    </label>
                                    <textarea
                                        name="specialRequests"
                                        value={formData.specialRequests}
                                        onChange={handleChange}
                                        rows={3}
                                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all resize-none"
                                        placeholder="Any special requirements..."
                                    />
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-4 bg-[var(--color-primary)] text-white font-semibold rounded-lg hover:bg-[var(--color-primary-dark)] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                            </svg>
                                            Processing...
                                        </>
                                    ) : (
                                        'Complete Reservation'
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
