import React from 'react';
import logo from './logo.svg';
import './App.css';
import Showcase from './components/showcase/showcase';
import About from './components/showcase/about/About';
import ContactForm from './components/showcase/contactForm/ContactForm';
import CoffeeType from './components/showcase/coffeeType/CoffeeType';
import Experience from './components/showcase/experience/Experience';
import CoffeeMenu from './components/showcase/coffeeMenu/CoffeeMenu';
import Events from './components/showcase/events/Events';
import Team from './components/showcase/team/Team';
import Footer from './components/showcase/Footer/Footer';



function App() {
  return (
    <div className="App">
      <Showcase />
      <About />
      <ContactForm />
      <CoffeeType />
      <Experience />
      <CoffeeMenu />
      <Events />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
