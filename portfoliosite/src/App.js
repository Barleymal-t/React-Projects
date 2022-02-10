import React from 'react';
import Icon from './Icon';
import Bio from './Bio';
import Links from './Links';
import About from './About';
import Article from './Article';
import Contact from './Contact';
import Project from './Project';

const App = () => {
  return <main id="app">
      <section id="mainapp">
    <Icon/>
    <Bio/>
    <Links/>
    </section>
      <About/>
      <Article/>
      <Contact/>
      <Project/>
  </main>;
};

export default App;
