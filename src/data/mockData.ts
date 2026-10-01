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
    image: '/destin/destination5.jpg',
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
    image: '/packages/pack1.jpg',
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
    image: '/destin/destination3.jpg',
    duration: '10 Días / 9 Noches',
    rating: 4.97,
    features: ['Campamento luxury glamping', 'Vuelo en globo al amanecer', 'Guías naturistas certificados', 'Pensión completa gourmet']
  }
];

export const DESTINATIONS_DATA: DestinationItem[] = [
  {
    id: 'dest-1',
    title: 'Laguna de los Tres',
    subtitle: 'El Chaltén, Patagonia',
    category: 'mountain',
    image: '/destin/destination1.jpg',
    description: 'Una de las caminatas más icónicas del mundo con vistas imponentes al Monte Fitz Roy y sus majestuosos glaciares.',
    location: 'Patagonia, Argentina',
    priceFrom: 850,
    bestSeason: 'Octubre - Abril',
    highlights: ['Trekking al Fitz Roy', 'Navegación glaciar', 'Avistamiento de fauna andina']
  },
  {
    id: 'dest-2',
    title: 'Bariloche & Lagos',
    subtitle: 'Río Negro, Argentina',
    category: 'nature',
    image: '/destin/destination2.jpg',
    description: 'Lagos cristalinos de aguas turquesas, bosques milenarios de arrayanes y la capital nacional del chocolate artesanal.',
    location: 'Río Negro, Argentina',
    priceFrom: 620,
    bestSeason: 'Todo el año',
    highlights: ['Circuito Chico', 'Cerro Catedral', 'Chocolaterías tradicionales', 'Kayak en lago Nahuel Huapi']
  },
  {
    id: 'dest-3',
    title: 'Quebrada de Humahuaca',
    subtitle: 'Jujuy, Argentina',
    category: 'adventure',
    image: '/destin/destination3.jpg',
    description: 'Patrimonio de la Humanidad por la UNESCO. Cerros multicolores, rica cultura ancestral y gastronomía autóctona.',
    location: 'Jujuy, Argentina',
    priceFrom: 490,
    bestSeason: 'Marzo - Noviembre',
    highlights: ['Cerro de los 7 Colores', 'Serranías del Hornocal', 'Salinas Grandes']
  },
  {
    id: 'dest-4',
    title: 'Tren a las Nubes',
    subtitle: 'Salta, Argentina',
    category: 'adventure',
    image: '/destin/destination4.jpg',
    description: 'Un viaje inolvidable por uno de los ferrocarriles más altos del planeta a más de 4.220 metros sobre el nivel del mar.',
    location: 'Salta Capital, Argentina',
    priceFrom: 580,
    bestSeason: 'Abril - Diciembre',
    highlights: ['Viaducto La Polvorilla', 'Degustación de vinos torrontés', 'Arquitectura colonial de Salta']
  },
  {
    id: 'dest-5',
    title: 'Cataratas del Iguazú',
    subtitle: 'Misiones, Argentina',
    category: 'nature',
    image: '/destin/destination5.jpg',
    description: 'Una de las 7 Maravillas Naturales del Mundo. Más de 275 saltos de agua rodeados por la exuberante selva paranaense.',
    location: 'Puerto Iguazú, Argentina',
    priceFrom: 720,
    bestSeason: 'Marzo - Mayo / Sep - Nov',
    highlights: ['Garganta del Diablo', 'Paseo en lancha Gran Aventura', 'Senderismo nocturno con luna llena']
  },
  {
    id: 'dest-6',
    title: 'Glaciar Perito Moreno',
    subtitle: 'Santa Cruz, Argentina',
    category: 'nature',
    image: '/destin/destination6.jpg',
    description: 'Maravíllate con el estruendo de los desprendimientos de hielo de una masa glacial imponente de 30 km de longitud.',
    location: 'El Calafate, Argentina',
    priceFrom: 950,
    bestSeason: 'Noviembre - Marzo',
    highlights: ['Minitrekking sobre el glaciar', 'Pasarelas panorámicas', 'Crucero Safari Náutico']
  }
];

export const FAQ_DATA = [
  { question: '¿Cómo realizo una reserva?', answer: 'Puedes elegir un paquete o destino, hacer clic en "Explorar" o "Reservar Paquete" y completar los datos. Nuestro equipo te contactará de inmediato.' },
  { question: '¿Qué incluyen nuestros paquetes VIP?', answer: 'Todos nuestros paquetes VIP incluyen vuelos/traslados privados, alojamientos 5 estrellas seleccionados, seguro de viaje exclusivo y asistencia 24/7.' },
  { question: '¿Cuál es la política de cancelación?', answer: 'Ofrecemos cancelación gratuita hasta 15 días antes de la fecha de viaje en la mayoría de nuestras reservas.' },
  { question: '¿Atienden consultas presenciales?', answer: '¡Sí! Puedes visitarnos en nuestra casa central en Santiago del Estero 750, Salta Capital, Argentina.' }
];
