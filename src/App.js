import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import BusinessServices from './pages/BusinessServices';
import GeneralServices from './pages/GeneralServices';
import Merchandising from './pages/Merchandising';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import ImplementationSystems from './pages/ImplementationSystems';
import SafetySupervision from './pages/SafetySupervision';
import ViolencePrevention from './pages/ViolencePrevention';
import BlueCertificate from './pages/BlueCertificate';
import TrainingAwareness from './pages/TrainingAwareness';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages/about" element={<About />} />
        <Route path="/pages/business-services" element={<BusinessServices />} />
        <Route path="/pages/general-services" element={<GeneralServices />} />
        <Route path="/pages/merchandising" element={<Merchandising />} />
        <Route path="/pages/projects" element={<Projects />} />
        <Route path="/pages/contact" element={<Contact />} />
        <Route path="/service-detail/1" element={<ImplementationSystems />} />
        <Route path="/service-detail/2" element={<SafetySupervision />} />
        <Route path="/service-detail/3" element={<ViolencePrevention />} />
        <Route path="/service-detail/4" element={<BlueCertificate />} />
        <Route path="/service-detail/5" element={<TrainingAwareness />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
