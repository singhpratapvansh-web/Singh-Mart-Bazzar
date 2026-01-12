
export interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: number;
  metaTitle: string;
  metaDescription: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface MarketingContent {
  emailSubject: string;
  emailBody: string;
  smsMessage: string;
  whatsappMessage: string;
  appNotification: string;
  adCaption: string;
  adCopy: string;
  article: string;
  socialMediaDescription: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
