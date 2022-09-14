import React from 'react';
import History from './components/History'
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Selects from './components/Selects';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <History />
      <Search />
      <Selects />
      <Footer />
    </div>
  );
}

export default App;
