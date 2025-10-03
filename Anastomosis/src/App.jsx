import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landingpage';
import Homepage from './pages/Homepage.jsx';
import Navbar from './components/navbar';
import Infopage from './pages/Infopage.jsx';
import Whypage from "./pages/whypage.jsx";
import Glimpse from "./pages/glimpse.jsx"
import RegistrationPage from './pages/registeration.jsx';
import Phases from "./pages/phases.jsx";
import Footer from "./components/footer.jsx"
import {Day1Page,Day2Page} from "./components/days.jsx"

import bgvideo from './assets/bgvideo.mp4';

import {images, galleryImages} from "./utility/images"

const HomePage = () => {
  return (
    <div>
      {/* <div style={{background: 'linear-gradient(to bottom, #082BEF 0%, #051259 100%)'}} > */}
      <LandingPage images={images} videoSrc={bgvideo}/>
      <Homepage images={images} />
      <Infopage images={images} />
      <Whypage images={images} />
      <Phases images={images} />
      <Day1Page images={images} />
      <Day2Page images={images} />
      <Glimpse galleryImages={galleryImages} images={images} />
      <Footer images={images} />
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Navbar images={images}  />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegistrationPage images={images} />} />
      </Routes>
    </Router>
  );
}
