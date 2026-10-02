export interface PackageItem {
  id: string;
  title: string;
  category: 'snow' | 'ski' | 'mountain' | 'luxury' | 'beach' | 'adventure' | 'vip';
  description: string;
  price: number;
  icon: string;
  image: string;
  duration: string;
  rating: number;
  features: string[];
}

export interface DestinationItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'nature' | 'adventure' | 'beach' | 'mountain' | 'city' | 'luxury';
  image: string;
  description: string;
  location: string;
  priceFrom: number;
  bestSeason: string;
  highlights: string[];
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  message: string;
  packageInterest?: string;
}

export interface ToastMessage {
  id: string;
  type: 'success' | 'info' | 'warning' | 'error';
  title: string;
  message: string;
}
