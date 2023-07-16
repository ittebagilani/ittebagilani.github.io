import React from 'react';
import { Routes, Route } from 'react-router-dom';



import { About, Contact, Hero, Navbar, StarsCanvas, Works } from '../components';
import TrafficSign from './TrafficSign'
import GoogleMini from './GoogleMini';
import SentenceParser from './SentenceParser';
import NimAI from './NimAI';
import BeyondEarth from './BeyondEarth';
import JumpnHunt from './JumpnHunt';
import Video from '../components/Video';
import CanonLens from './CanonLens';
import ParadiseChamber from './ParadiseChamber';
import BeyondVideo from '../components/BeyondVideo';

const Main = () => {
  return (
    <Routes>
      <Route exact path='/' element={[<Navbar />, <StarsCanvas />, <Hero />, <About />, <Works />, <Contact/>]}></Route>
      <Route exact path='/traffic' element={[<Navbar />, <StarsCanvas />, <TrafficSign />]}></Route>
      <Route exact path='/googlemini' element={[<Navbar />, <StarsCanvas />, <GoogleMini />]}></Route>
      <Route exact path='/sentenceparser' element={[<Navbar />, <StarsCanvas />, <SentenceParser />]}></Route>
      <Route exact path='/nimai' element={[<Navbar />, <StarsCanvas />, <NimAI />]}></Route>
      <Route exact path='/beyondearth' element={[<Navbar />, <StarsCanvas />, <BeyondEarth />, <BeyondVideo />]}></Route>
      <Route exact path='/jumpnhunt' element={[<Navbar />, <StarsCanvas />, <JumpnHunt />]}></Route>
      <Route exact path='/canonlens' element={[<Navbar />, <StarsCanvas />, <CanonLens />]}></Route>
      <Route exact path='/paradisechamber' element={[<Navbar />, <StarsCanvas />, <ParadiseChamber />]}></Route>
    </Routes>
  );
}

export default Main;