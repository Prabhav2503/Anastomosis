import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import LandingPage from './pages/landingpage';
import Homepage from './pages/Homepage.jsx';
import Navbar from './components/navbar';
import Infopage from './pages/Infopage.jsx';
import Whypage from "./pages/whypage.jsx";
import Glimpse from "./pages/glimpse.jsx"
import RegistrationPage from './pages/registeration-new.jsx';
import Dashboard from './pages/Dashboard.jsx';
import CompleteRegistration from './pages/CompleteRegistration.jsx';
import Phases from "./pages/phases.jsx";
import Footer from "./components/footer.jsx"
import {Day1Page,Day2Page} from "./components/days.jsx"

import bgvideo from './assets/bgvideo.mp4';

import {images, galleryImages} from "./utility/images"

const HomePage = () => {
  return (
    <div>
      <LandingPage images={images} videoSrc={bgvideo} />
        <Homepage images={images} />
      <div id="about">
        <Infopage images={images} />
      </div>
      <div id="speaker">
        <Whypage images={images} />
      </div>
      <Phases images={images} />
     <div id="agenda">
      <Day1Page images={images} />
      <Day2Page images={images} />
      </div>
      <Glimpse galleryImages={galleryImages} images={images} />
      <Footer images={images} />
    </div>
  );
};

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar images={images}  />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegistrationPage images={images} />} />
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <Dashboard images={images} />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/complete-registration" 
            element={
              <ProtectedRoute>
                <CompleteRegistration images={images} />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
