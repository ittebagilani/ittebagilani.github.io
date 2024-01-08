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
import RecentProjects from '../components/RecentProjects';
import LLM from './LLM';

const Main = () => {
  return (
    <>
    
      <ScrollToTop />
      <Routes>
        <Route exact path='/' element={[<Sidebar />, <Hero />, <About />, <Works />, <DataScience />, <GameDev />, <Design />, <Photography />, <Contact/>]}></Route>
        <Route exact path='/traffic' element={[<Sidebar />, <TrafficSign />]}></Route>
        <Route exact path='/llm' element={[<Sidebar />, <LLM />]}></Route>
        <Route exact path='/googlemini' element={[<Sidebar />, <GoogleMini />]}></Route>
        <Route exact path='/sentenceparser' element={[<Sidebar />, <SentenceParser />]}></Route>
        <Route exact path='/nimai' element={[<Sidebar />, <NimAI />]}></Route>
        <Route exact path='/beyondearth' element={[<Sidebar />, <BeyondEarth />]}></Route>
        <Route exact path='/jumpnhunt' element={[<Sidebar />, <JumpnHunt />]}></Route>
        <Route exact path='/canonlens' element={[<Sidebar />, <CanonLens />]}></Route>
        <Route exact path='/paradisechamber' element={[<Sidebar />, <ParadiseChamber />]}></Route>
        <Route exact path='/gamedev' element={[<Sidebar />, <GameDev />]}></Route>
      </Routes>
    
    </>
  );
}

export default Main;