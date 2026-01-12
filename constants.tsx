
import React from 'react';
import { Product, FAQItem, MarketingContent } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    title: 'Heritage Silk Saree',
    price: 129.99,
    description: 'A hand-woven masterpiece reflecting centuries of craftsmanship. Made from pure mulberry silk with intricate gold zari work.',
    category: 'Traditional Wear',
    image: 'https://images.unsplash.com/photo-1610030469915-9a88edc1c201?auto=format&fit=crop&q=80&w=800',
    rating: 4.8,
    metaTitle: 'Premium Heritage Silk Saree | Singh Mart Bazaar',
    metaDescription: 'Shop authentic hand-woven silk sarees at Singh Mart Bazaar. Pure silk, traditional designs, and exquisite zari work.'
  },
  {
    id: '2',
    title: 'Modern Cotton Kurta',
    price: 45.00,
    description: 'Breathable, lightweight cotton kurta perfect for daily wear. Combines traditional silhouettes with contemporary minimalist designs.',
    category: 'Men\'s Fashion',
    image: 'https://images.unsplash.com/photo-1597983073493-88cd35cf93b0?auto=format&fit=crop&q=80&w=800',
    rating: 4.5,
    metaTitle: 'Contemporary Men\'s Cotton Kurta | Singh Mart Bazaar',
    metaDescription: 'Buy stylish and comfortable cotton kurtas for men. Perfect for any occasion. Available in multiple colors.'
  },
  {
    id: '3',
    title: 'Artisan Copper Spice Box',
    price: 35.50,
    description: 'Handcrafted copper Masala Daan. Keeps your spices fresh and adds a touch of traditional luxury to your kitchen.',
    category: 'Home & Kitchen',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=800',
    rating: 4.9,
    metaTitle: 'Handcrafted Copper Spice Box - Masala Daan | Singh Mart Bazaar',
    metaDescription: 'Organize your kitchen with our artisanal copper spice box. Durable, antibacterial, and beautifully designed.'
  },
  {
    id: '4',
    title: 'Pure Kashmiri Pashmina Shawl',
    price: 210.00,
    description: 'Authentic 100% Pashmina wool sourced from the Himalayas. Extremely soft, warm, and elegant.',
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&q=80&w=800',
    rating: 5.0,
    metaTitle: 'Authentic Kashmiri Pashmina Shawl | Luxury Collection',
    metaDescription: 'Discover the warmth of genuine Pashmina. Hand-spun and woven by experts in Kashmir.'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "What is Singh Mart Bazaar's return policy?",
    answer: "We offer a 30-day no-questions-asked return policy for all unused items in their original packaging."
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes, we ship to over 50 countries worldwide. Shipping costs and delivery times vary by location."
  },
  {
    question: "Are your products authentically sourced?",
    answer: "Absolutely. We work directly with artisans and verified suppliers to ensure every product meets our heritage quality standards."
  }
];

export const MARKETING: MarketingContent = {
  emailSubject: "✨ Exclusive Access: The Heritage Collection is Here!",
  emailBody: "Dear Valued Customer,\n\nWe are thrilled to unveil our latest Heritage Collection at Singh Mart Bazaar. From hand-woven silks to artisanal home decor, experience the finest craftsmanship.\n\nEnjoy 15% off your first order with code: TRADITION15.\n\nWarm regards,\nThe Singh Mart Team",
  smsMessage: "Singh Mart Bazaar: New arrivals! Get 15% off today. Shop now: bit.ly/singh-mart-sale",
  whatsappMessage: "Hello! 👋 Check out our latest collection at Singh Mart Bazaar. We've just added new artisanal products you'll love. Click here to see: [Link]",
  appNotification: "New Collection Alert! 🛍️ The Heritage Series is now live. Tap to explore.",
  adCaption: "Where Tradition Meets Tomorrow. 🌟",
  adCopy: "Tired of mass-produced goods? Discover Singh Mart Bazaar—the ultimate destination for authentic, high-quality artisanal products. Shop our curated collections today and bring home a piece of heritage.",
  article: "The Renaissance of Artisanal Craftsmanship: In a world of fast fashion, Singh Mart Bazaar is leading the charge back to quality and soul. We explore how traditional weaving and metalworking are making a comeback in modern homes...",
  socialMediaDescription: "Singh Mart Bazaar: Your curated marketplace for authentic heritage goods. Quality guaranteed. Traditions preserved. ❤️ #SinghMart #ArtisanalLiving #Heritage"
};

export const PAGE_META = {
  home: {
    title: "Singh Mart Bazaar | Premium Traditional & Modern Goods",
    description: "Welcome to Singh Mart Bazaar. Discover a curated selection of traditional wear, artisanal home decor, and modern essentials crafted with love."
  },
  about: {
    title: "Our Story | Singh Mart Bazaar Heritage",
    description: "Learn about Singh Mart Bazaar's journey from a small local initiative to a global hub for authentic artisanal products."
  }
};
