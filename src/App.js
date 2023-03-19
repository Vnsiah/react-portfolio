import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavTabs from './components/NavTabs';
import Home from './components/pages/Home';
import Skills from './components/pages/Skills';
// import Header from './components/pages/Header';
import Contact from './components/pages/Contact';
import Footer from './components/pages/Footer';
import Project from './components/pages/Project';

function App() {
  return (
    <Router>
     
        <NavTabs />
        <div className="pageContainer">
        {/* Wrap Route elements in a Routes component */}
        <Routes basemname= "react-portfolio">
          {/* Define routes using the Route component to render different page components at different paths */}
          {/* Define a default route that will render the Home component */}
          <Route path="/react-portfolio" element={<Home />} />
          <Route path="/react-portfolio/Skills" element={<Skills />} />
          {/* <Route path="/react-portfolio/header" element={<Header />} /> */}
          <Route path="/react-portfolio/project" element={<Project />} />
          {/* Define a route that will have descendant routes */}
          <Route path="/react-portfolio/contact/*" element={<Contact />} />
        </Routes>
      </div>
      <Footer></Footer>
    </Router>
  );
}

export default App;

