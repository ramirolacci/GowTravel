import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Packages } from './components/Packages';
import { Destinations } from './components/Destinations';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { DestinationModal } from './components/DestinationModal';
import { ToastContainer } from './components/ToastContainer';
import { PackageItem, DestinationItem, ToastMessage } from './types';
import { PACKAGES_DATA } from './data/mockData';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedPackage, setSelectedPackage] = useState<PackageItem | null>(null);
  const [selectedDestination, setSelectedDestination] = useState<DestinationItem | null>(null);
  const [searchFilter, setSearchFilter] = useState<string>('');
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToast = (type: 'success' | 'info' | 'error', title: string, message: string) => {
    const id = Date.now().toString();
    const newToast: ToastMessage = { id, type, title, message };
    setToasts((prev) => [...prev, newToast]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4500);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Scroll Spy Effect
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'packages', 'destinations', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleHeroSearch = (term: string) => {
    setSearchFilter(term);
    handleNavigate('destinations');
    if (term) {
      addToast('info', 'Filtro Aplicado', `Buscando destinos que coincidan con "${term}"`);
    }
  };

  const handleConfirmBooking = (bookingDetails: any) => {
    addToast(
      'success',
      '¡Reserva Confirmada!',
      `Gracias ${bookingDetails.customerName}, tu paquete "${bookingDetails.packageName}" ha sido reservado para ${bookingDetails.travelers} viajeros.`
    );
  };

  const handleNewsletterSubscribe = (email: string) => {
    addToast(
      'success',
      '¡Suscripción Exitosa!',
      `Te has suscrito correctamente con ${email}. Recibirás nuestras novedades en breve.`
    );
  };

  const handleContactSubmit = (data: any) => {
    addToast(
      'success',
      '¡Mensaje Recibido!',
      `Gracias ${data.fullName}. Un asesor de GowTravel te responderá pronto.`
    );
  };

  return (
    <div className="app-container">
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenQuickBook={() => setSelectedPackage(PACKAGES_DATA[0])}
      />

      <main>
        <Hero
          onSearch={handleHeroSearch}
          onExploreClick={() => handleNavigate('packages')}
        />

        <Packages
          onSelectPackage={(pkg) => setSelectedPackage(pkg)}
        />

        <Destinations
          onSelectDestination={(dest) => setSelectedDestination(dest)}
          searchFilter={searchFilter}
        />

        <Contact
          onSubmitContact={handleContactSubmit}
        />
      </main>

      <Footer
        onSubscribeNewsletter={handleNewsletterSubscribe}
      />

      {/* Booking Dialog Modal */}
      <BookingModal
        packageItem={selectedPackage}
        onClose={() => setSelectedPackage(null)}
        onConfirmBooking={handleConfirmBooking}
      />

      {/* Destination Detail Modal */}
      <DestinationModal
        destination={selectedDestination}
        onClose={() => setSelectedDestination(null)}
        onBookNow={(dest) => {
          setSelectedDestination(null);
          // Map destination to package booking
          setSelectedPackage({
            id: `pack-${dest.id}`,
            title: `Experiencia ${dest.title}`,
            category: 'luxury',
            description: dest.description,
            price: dest.priceFrom,
            icon: 'fa-mountain',
            image: dest.image,
            duration: '5 Días / 4 Noches',
            rating: 4.9,
            features: dest.highlights
          });
        }}
      />

      {/* Toast Notifications */}
      <ToastContainer
        toasts={toasts}
        onDismiss={removeToast}
      />
    </div>
  );
};

export default App;
