import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.scss';
import Navmenu from './components/Navmenu';
import Home from './pages/Home';
import LogitapExpress from './pages/LogitapExpress';
import BloomvilleConsultancy from './pages/BloomvilleConsultancy';
import BloomvilleMedia from './pages/BloomvilleMedia';
import LogitapFreight from './pages/LogitapFreight';
import MayvilleBrands from './pages/MayvilleBrands';
import About from './pages/About';
import Contact from './pages/Contact';
import Infomercials from './pages/Infomercials';
import PageNotFound from './pages/PageNotFound';
import ContactForm from './components/ContactForm';
import Events from './pages/Events';

function App() {
  return (
    <Router>
      <div className="App">
        <Navmenu />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            path="/subsidiaries/logitap-express"
            element={<LogitapExpress />}
          />
          <Route
            path="/subsidiaries/bloomville-consultancy"
            element={<BloomvilleConsultancy />}
          />
          <Route
            path="/subsidiaries/bloomville-media"
            element={<BloomvilleMedia />}
          />
          <Route
            path="/subsidiaries/logitap-freight"
            element={<LogitapFreight />}
          />
          <Route
            path="/subsidiaries/mayville-brands"
            element={<MayvilleBrands />}
          />
          <Route exact path="/events" element={<Events />} />
          <Route exact path="/about" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/infomercials" element={<Infomercials />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <ContactForm />
      </div>
    </Router>
  );
}

export default App;
