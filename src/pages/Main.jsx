import React from 'react';
import { Routes, Route } from 'react-router-dom';



import { About, Contact, Hero, Navbar, StarsCanvas, Works } from '../components';
import TrafficSign from './TrafficSign'
import GoogleMini from './GoogleMini';
import SentenceParser from './SentenceParser';
import NimAI from './NimAI';
import BeyondEarth from './BeyondEarth';
import JumpnHunt from './JumpnHunt';
import CanonLens from './CanonLens';
import ParadiseChamber from './ParadiseChamber';
import ScrollToTop from '../components/ScrollToTop';
import GameDev from '../components/GameDev';
import DataScience from '../components/DataScience';
import Photography from '../components/Photography';
import Design from '../components/Design';
import Sidebar from '../components/Sidebar';
import LLM from './LLM';
import Experience from '../components/Experience';
import Extras from '../components/Extras';
import Ecocar from './Ecocar';
import CodingClub from './CodingClub';

const Main = () => {
  return (
    <>
    
      <ScrollToTop />
      <Routes>
        <Route exact path='/' element={[ <Hero />, <About />, <Experience />, <Works />, <DataScience />, <GameDev />, <Design />, <Extras />, <Photography />, <Contact/>]}></Route>
        <Route exact path='/traffic' element={[<TrafficSign />]}></Route>
        <Route exact path='/llm' element={[<LLM />]}></Route>
        <Route exact path='/googlemini' element={[<GoogleMini />]}></Route>
        <Route exact path='/sentenceparser' element={[<SentenceParser />]}></Route>
        <Route exact path='/nimai' element={[<NimAI />]}></Route>
        <Route exact path='/beyondearth' element={[<BeyondEarth />]}></Route>
        <Route exact path='/jumpnhunt' element={[<JumpnHunt />]}></Route>
        <Route exact path='/canonlens' element={[<CanonLens />]}></Route>
        <Route exact path='/paradisechamber' element={[<ParadiseChamber />]}></Route>
        <Route exact path='/gamedev' element={[<GameDev />]}></Route>
        <Route exact path='/ecocar' element={[<Ecocar />]}></Route>
        <Route exact path='/codingclub' element={[<CodingClub />]}></Route>
      </Routes>
    
    </>
  );
}

export default Main;