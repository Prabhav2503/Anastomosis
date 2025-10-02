import LandingPage from './pages/landingpage';
import Homepage from './pages/Homepage.jsx';
import Navbar from './components/navbar';
import Infopage from './pages/Infopage.jsx';
import Whypage from "./pages/whypage.jsx";
import AgendaPage from "./pages/agenda.jsx"
import Glimpse from "./pages/glimpse.jsx"

import {images} from "./utility/images"

export default function App() {
  return (
    <div>
      <div style={{background: 'linear-gradient(to bottom, #082BEF 0%, #051259 100%)'}}>
      <Navbar images={images} />
      <LandingPage images={images} />
    </div>
    <Homepage images={images} />
    <Infopage images={images} />
    <Whypage images={images} />
    <AgendaPage images={images} />
    <Glimpse images={images} />
    </div>
    
  );
}
