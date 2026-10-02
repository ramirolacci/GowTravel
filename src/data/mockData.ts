import { PackageItem, DestinationItem } from '../types';

export const PACKAGES_DATA: PackageItem[] = [
  {
    id: 'pack-vip-1',
    title: 'Villa Sobre el Agua & Caribe VIP',
    category: 'beach',
    description: 'Bungalow privado de lujo flotante con piscina infinity, traslado en hidroavión y mayordomo personal 24/7 en las Maldivas.',
    price: 4899.99,
    icon: 'fa-snowflake',
    image: '/packages/pack_vip1.jpg',
    duration: '7 Días / 6 Noches',
    rating: 5.0,
    features: ['Hidroavión privado incluido', 'Bungalow 5★ sobre el océano', 'Mayordomo personal 24/7', 'Cena romántica en la playa']
  },
  {
    id: 'pack-vip-2',
    title: 'Riviera Europea & Yate de Lujo',
    category: 'luxury',
    description: 'Experiencia exclusiva por la Costa Azul e Italia. Alojamiento en hoteles boutique frente al mar y día de navegación en súperyate.',
    price: 5499.99,
    icon: 'fa-mountain',
    image: '/packages/pack_vip2.jpg',
    duration: '9 Días / 8 Noches',
    rating: 4.98,
    features: ['Jornada en súperyate privado', 'Hoteles 5★ en la Riviera', 'Degustación Michelin 3 Estrellas', 'Traslados en chofer privado']
  },
  {
    id: 'pack-vip-3',
    title: 'Chalet Alpino & Spa Platinum',
    category: 'snow',
    description: 'Chalet exclusivo en los Alpes Suizos con spa termal privado al aire libre, pases VIP Heliski y gastronomía alpina gourmet.',
    price: 3999.99,
    icon: 'fa-person-skiing',
    image: '/packages/pack_vip3.jpg',
    duration: '8 Días / 7 Noches',
    rating: 4.95,
    features: ['Experiencia Heliski en helicóptero', 'Chalet de madera con spa privado', 'Pases VIP preferenciales', 'Chef privado en el chalet']
  },
  {
    id: 'pack-beach-2',
    title: 'Cancún & Holbox Luxury Escape',
    category: 'beach',
    description: 'Resort de playa todo incluido en Riviera Maya con recorrido privado en catamarán y acceso VIP a cenotes sagrados.',
    price: 2899.99,
    icon: 'fa-snowflake',
    image: '/destin/destination1.jpg',
    duration: '6 Días / 5 Noches',
    rating: 4.88,
    features: ['Suite frente al mar', 'Tours privados en catamarán', 'Servicio All-Inclusive Premium', 'Spa maya tradicional']
  },
  {
    id: 'pack-snow-2',
    title: 'Nieve Infinita Bariloche & El Chaltén',
    category: 'snow',
    description: 'Disfruta de las mejores pistas de nieve en Cerro Catedral con hospedaje resort de primera clase y trekking en glaciares.',
    price: 2199.99,
    icon: 'fa-snowflake',
    image: '/destin/destination6.jpg',
    duration: '7 Días / 6 Noches',
    rating: 4.9,
    features: ['Vuelos directos incluidos', 'Hotel 5★ frente a las pistas', 'Pases VIP de esquí', 'Guía de montaña experimentado']
  },
  {
    id: 'pack-adventure-1',
    title: 'Safari Africano & Vuelo en Globo',
    category: 'adventure',
    description: 'Avistamiento de los Big Five en Serengeti con campamento glamping de ultra lujo y sobrevuelo al amanecer en globo aerostático.',
    price: 4299.99,
    icon: 'fa-mountain',
    image: '/destin/destination5.jpg',
    duration: '10 Días / 9 Noches',
    rating: 4.97,
    features: ['Campamento luxury glamping', 'Vuelo en globo al amanecer', 'Guías naturistas certificados', 'Pensión completa gourmet']
  }
];

export const DESTINATIONS_DATA: DestinationItem[] = [
  {
    id: 'dest-1',
    title: 'Atolón Baa & Maldivas',
    subtitle: 'Maldivas VIP',
    category: 'beach',
    image: '/destin/destination1.jpg',
    description: 'Resort 5 estrellas en villa flotante sobre aguas turquesas cristalinas con piscina infinity privada y arrecifes de coral.',
    location: 'Atolón Baa, Maldivas',
    priceFrom: 1850,
    bestSeason: 'Noviembre - Abril',
    highlights: ['Villa privada sobre el océano', 'Navegación en catamarán', 'Buceo en arrecifes VIP']
  },
  {
    id: 'dest-2',
    title: 'Santorini & Oia Cliffside',
    subtitle: 'Islas Griegas',
    category: 'luxury',
    image: '/destin/destination2.jpg',
    description: 'Icónicas villas blancas sobre acantilados volcánicos con vista panorámica al mar Egeo, catamarán privado y atardeceres de ensueño.',
    location: 'Santorini, Grecia',
    priceFrom: 1450,
    bestSeason: 'Mayo - Octubre',
    highlights: ['Suite con jacuzzi al acantilado', 'Paseo en yate por el volcán', 'Cata de vinos en viñedos autóctonos']
  },
  {
    id: 'dest-3',
    title: 'Zermatt & Matterhorn VIP',
    subtitle: 'Alpes Suizos',
    category: 'mountain',
    image: '/destin/destination3.jpg',
    description: 'Exclusivo chalet alpino frente a la emblemática montaña Matterhorn con spa de aguas termales al aire libre y esquí de alta gama.',
    location: 'Zermatt, Suiza',
    priceFrom: 1650,
    bestSeason: 'Diciembre - Abril',
    highlights: ['Heliskiing sobre picos alpinos', 'Chalet de madera con spa termal', 'Tren panorámico Glacier Express']
  },
  {
    id: 'dest-4',
    title: 'Positano & Costa Amalfi',
    subtitle: 'Riviera Italiana',
    category: 'luxury',
    image: '/destin/destination4.jpg',
    description: 'Encantadoras villas multicolores esculpidas en el acantilado sobre el mar Tirreno, paseos en barco por Capri y gastronomía Michelin.',
    location: 'Amalfi, Italia',
    priceFrom: 1380,
    bestSeason: 'Mayo - Septiembre',
    highlights: ['Recorrido privado por la costa amalfitana', 'Paseo exclusivo en lancha a Capri', 'Experiencia gastronómica costera']
  },
  {
    id: 'dest-5',
    title: 'Serengeti Luxury Lodge',
    subtitle: 'Safari & Naturaleza',
    category: 'nature',
    image: '/destin/destination5.jpg',
    description: 'Alojamiento de ultra lujo en campamento glamping rodeado de vida salvaje con vuelos en globo aerostático al amanecer.',
    location: 'Serengeti, Tanzania',
    priceFrom: 1920,
    bestSeason: 'Junio - Octubre',
    highlights: ['Vuelo en globo al amanecer', 'Safari nocturno guiado', 'Experiencia cultural Masai']
  },
  {
    id: 'dest-6',
    title: 'El Chaltén & Fitz Roy Lodge',
    subtitle: 'Patagonia VIP',
    category: 'mountain',
    image: '/destin/destination6.jpg',
    description: 'Resort eco-lodge de madera a orillas de una laguna glaciar turquesa con trekking guiado al imponente Fitz Roy y servicio boutique.',
    location: 'Patagonia, Argentina',
    priceFrom: 1150,
    bestSeason: 'Octubre - Abril',
    highlights: ['Trekking exclusivo al Fitz Roy', 'Navegación por glaciares', 'Hospedaje eco-lodge 5 estrellas']
  }
];

export const FAQ_DATA = [
  { question: '¿Cómo realizo una reserva?', answer: 'Puedes elegir un paquete o destino, hacer clic en "Explorar" o "Reservar Paquete" y completar los datos. Nuestro equipo te contactará de inmediato.' },
  { question: '¿Qué incluyen nuestros paquetes VIP?', answer: 'Todos nuestros paquetes VIP incluyen vuelos/traslados privados, alojamientos 5 estrellas seleccionados, seguro de viaje exclusivo y asistencia 24/7.' },
  { question: '¿Cuál es la política de cancelación?', answer: 'Ofrecemos cancelación gratuita hasta 15 días antes de la fecha de viaje en la mayoría de nuestras reservas.' },
  { question: '¿Atienden consultas presenciales?', answer: '¡Sí! Puedes visitarnos en nuestra casa central en Av. del Libertador 4980, Buenos Aires, Argentina.' }
];
