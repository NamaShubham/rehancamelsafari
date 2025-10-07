import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ImageSlider from './components/ImageSlider';
import Features from './components/Features';
import Packages from './components/Packages';
import Experiences from './components/Experiences';
import PackageDetail from './components/PackageDetail';
import ArabianNightDetail from './components/ArabianNightDetail';
import DinnerDunesDetail from './components/DinnerDunesDetail';
import HalfDayTourDetail from './components/HalfDayTourDetail';
import AboutUs from './components/AboutUs';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [selectedPackage, setSelectedPackage] = useState(null);

  const showPackageDetail = (packageId) => {
    setSelectedPackage(packageId);
    setCurrentView('package-detail');
  };

  const showHome = () => {
    setCurrentView('home');
    setSelectedPackage(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const showAbout = () => {
    setCurrentView('about');
    setSelectedPackage(null);
  };

  const showGallery = () => {
    setCurrentView('gallery');
    setSelectedPackage(null);
  };

  const showContact = () => {
    setCurrentView('contact');
    setSelectedPackage(null);
  };

  if (currentView === 'about') {
    return (
      <div className="App">
        <Header onAboutClick={showAbout} onHomeClick={showHome} onGalleryClick={showGallery} onContactClick={showContact} />
        <AboutUs onBack={showHome} />
        <Footer onAboutClick={showAbout} onHomeClick={showHome} onGalleryClick={showGallery} onContactClick={showContact} />
      </div>
    );
  }

  if (currentView === 'gallery') {
    return (
      <div className="App">
        <Header onAboutClick={showAbout} onHomeClick={showHome} onGalleryClick={showGallery} onContactClick={showContact} />
        <Gallery onBack={showHome} />
        <Footer onAboutClick={showAbout} onHomeClick={showHome} onGalleryClick={showGallery} onContactClick={showContact} />
      </div>
    );
  }

  if (currentView === 'contact') {
    return (
      <div className="App">
        <Header onAboutClick={showAbout} onHomeClick={showHome} onGalleryClick={showGallery} onContactClick={showContact} />
        <Contact onBack={showHome} />
        <Footer onAboutClick={showAbout} onHomeClick={showHome} onGalleryClick={showGallery} onContactClick={showContact} />
      </div>
    );
  }

  if (currentView === 'package-detail') {
    if (selectedPackage === 'luxury-getaway') {
      return (
        <div className="App">
          <Header onAboutClick={showAbout} onHomeClick={showHome} onGalleryClick={showGallery} onContactClick={showContact} />
          <PackageDetail onBack={showHome} />
          <Footer onAboutClick={showAbout} onHomeClick={showHome} onGalleryClick={showGallery} onContactClick={showContact} />
        </div>
      );
    } else if (selectedPackage === 'arabian-night') {
      return (
        <div className="App">
          <Header onAboutClick={showAbout} onHomeClick={showHome} onGalleryClick={showGallery} onContactClick={showContact} />
          <ArabianNightDetail onBack={showHome} />
          <Footer onAboutClick={showAbout} onHomeClick={showHome} onGalleryClick={showGallery} onContactClick={showContact} />
        </div>
      );
    } else if (selectedPackage === 'dinner-dunes') {
      return (
        <div className="App">
          <Header onAboutClick={showAbout} onHomeClick={showHome} onGalleryClick={showGallery} onContactClick={showContact} />
          <DinnerDunesDetail onBack={showHome} />
          <Footer onAboutClick={showAbout} onHomeClick={showHome} onGalleryClick={showGallery} onContactClick={showContact} />
        </div>
      );
    } else if (selectedPackage === 'half-day') {
      return (
        <div className="App">
          <Header onAboutClick={showAbout} onHomeClick={showHome} onGalleryClick={showGallery} onContactClick={showContact} />
          <HalfDayTourDetail onBack={showHome} />
          <Footer onAboutClick={showAbout} onHomeClick={showHome} onGalleryClick={showGallery} onContactClick={showContact} />
        </div>
      );
    }
  }

  return (
    <div className="App">
      <Header onAboutClick={showAbout} onHomeClick={showHome} onGalleryClick={showGallery} onContactClick={showContact} />
      <ImageSlider />
      {/* <Features /> */}
      <Packages onPackageClick={showPackageDetail} />
      <Experiences />
      <Footer onAboutClick={showAbout} onHomeClick={showHome} onGalleryClick={showGallery} onContactClick={showContact} />
    </div>
  );
}

export default App;