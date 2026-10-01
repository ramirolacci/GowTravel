import { PackageItem, DestinationItem } from '../types';

export const PACKAGES_DATA: PackageItem[] = [
  {
    id: 'pack-1',
    title: 'Nieve Infinita - Tour Package 1',
    category: 'snow',
    description: 'Disfruta de las mejores pistas de nieve con hospedaje resort de primera clase, pases VIP y equipo completo incluido.',
    price: 1699.99,
    icon: 'fa-snowflake',
    image: '/packages/pack1.jpg',
    duration: '7 Días / 6 Noches',
    rating: 4.9,
    features: ['Vuelos directos incluidos', 'Hotel 5★ frente a las pistas', 'Pases VIP de esquí', 'Guía de montaña experimentado']
  },
  {
    id: 'pack-2',
    title: 'Esquí Alpino - Tour Package 2',
    category: 'ski',
    description: 'Vive la aventura alpina definitiva con lecciones de esquí personalizadas, spas termales y traslados privados.',
    price: 2499.99,
    icon: 'fa-person-skiing',
    image: '/packages/pack2.jpg',
    duration: '10 Días / 9 Noches',
    rating: 4.95,
    features: ['Acceso a spas termales', 'Clases privadas de esquí/snowboard', 'Pensión completa en resort', 'Seguro de montaña premium']
  },
  {
    id: 'pack-3',
    title: 'Cumbre Extrema - Tour Package 3',
    category: 'mountain',
    description: 'Travesía épica de alta montaña con expediciones guiadas, campamento de lujo y paisajes glaciares inigualables.',
    price: 3499.99,
    icon: 'fa-mountain',
    image: '/packages/pack3.jpg',
    duration: '14 Días / 13 Noches',
    rating: 5.0,
    features: ['Expedición en helicóptero', 'Cena gourmet en altura', 'Equipamiento profesional', 'Cámara fotográfica 4K de alquiler']
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
  { question: '¿Cómo realizo una reserva?', answer: 'Puedes elegir un paquete o destino, hacer clic en "Explorar" o "Comprar Paquete" y completar los datos. Nuestro equipo te contactará de inmediato.' },
  { question: '¿Qué incluyen nuestros paquetes?', answer: 'Todos nuestros paquetes incluyen traslados, alojamiento en hoteles seleccionados, seguro de viaje y asistencia 24/7 en destino.' },
  { question: '¿Cuál es la política de cancelación?', answer: 'Ofrecemos cancelación gratuita hasta 15 días antes de la fecha de viaje en la mayoría de nuestras reservas.' },
  { question: '¿Atienden consultas en Salta Capital?', answer: '¡Sí! Puedes visitarnos en nuestra casa central en Santiago del Estero 750, Salta Capital, Argentina.' }
];
