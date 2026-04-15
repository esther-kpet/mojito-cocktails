import React from 'react';
import gsap from 'gsap';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

import { ScrollTrigger, SplitText} from 'gsap/all';
import Cocktails from './components/Cocktails';
import About from './components/About';
import Art from './components/Art';


gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <>
      <Navbar />
      <Hero />
      {/* <div className='h-dvh bg-black' /> */}
      <Cocktails />
      <About />
      <Art />
      </>
    </main>
  )
}

export default App;
