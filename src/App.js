import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavTabs from './components/NavTabs';
import Home from './components/pages/Home';
import ProjectGallery from './components/pages/ProjectGallery';
import Header from './components/pages/Header';
import Contact from './components/pages/Contact';


function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        {/* Wrap Route elements in a Routes component */}
        <Routes basemname= "react-portfolio">
          {/* Define routes using the Route component to render different page components at different paths */}
          {/* Define a default route that will render the Home component */}
          <Route path="/react-portfolio" element={<Home />} />
          <Route path="/react-portfolio/about" element={<ProjectGallery />} />
          <Route path="/react-portfolio/blog" element={<Header />} />
          {/* Define a route that will have descendant routes */}
          <Route path="/react-portfolio/contact/*" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

