import React from 'react';
import { Routes, Route } from 'react-router-dom';



import { About, Contact, Hero, Navbar, StarsCanvas, Works } from '../components';
import TrafficSign from './TrafficSign'
import GoogleMini from './GoogleMini';
import SentenceParser from './SentenceParser';
import NimAI from './NimAI';
import BeyondEarth from './BeyondEarth';
import JumpnHunt from './JumpnHunt';
// import Video from '../components/Video';
import CanonLens from './CanonLens';
import ParadiseChamber from './ParadiseChamber';
// import BeyondVideo from '../components/BeyondVideo';
import ScrollToTop from '../components/ScrollToTop';
import GameDev from '../components/GameDev';
import DataScience from '../components/DataScience';
import Photography from '../components/Photography';
import Design from '../components/Design';
import Sidebar from '../components/Sidebar';

const Main = () => {
  return (
    <>
    
      <ScrollToTop />
      <Routes>
        {/* <Route exact path='/' element={[<Navbar />, <StarsCanvas />, <Hero />, <About />, <Works />, <GameDev />, <DataScience />, <Design />, <Photography />, <Contact/>]}></Route> */}
        <Route exact path='/' element={[<Sidebar />, <Hero />, <About />, <Works />, <GameDev />, <DataScience />, <Design />, <Photography />, <Contact/>]}></Route>
        <Route exact path='/traffic' element={[<Navbar />, <StarsCanvas />, <TrafficSign />]}></Route>
        <Route exact path='/googlemini' element={[<Navbar />, <StarsCanvas />, <GoogleMini />]}></Route>
        <Route exact path='/sentenceparser' element={[<Navbar />, <StarsCanvas />, <SentenceParser />]}></Route>
        <Route exact path='/nimai' element={[<Navbar />, <StarsCanvas />, <NimAI />]}></Route>
        <Route exact path='/beyondearth' element={[<Navbar />, <StarsCanvas />, <BeyondEarth />]}></Route>
        <Route exact path='/jumpnhunt' element={[<Navbar />, <StarsCanvas />, <JumpnHunt />]}></Route>
        <Route exact path='/canonlens' element={[<Navbar />, <StarsCanvas />, <CanonLens />]}></Route>
        <Route exact path='/paradisechamber' element={[<Navbar />, <StarsCanvas />, <ParadiseChamber />]}></Route>
        <Route exact path='/gamedev' element={[<Navbar />, <StarsCanvas />, <GameDev />]}></Route>
      </Routes>
    
    </>
  );
}

export default Main;