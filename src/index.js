import React from 'react';
import ReactDOM from 'react-dom/client';
import AnaSehife from './Components/AnaSehife/AnaSehife';
import Elaqe from './Components/Elaqe/Elaqe';
import GorduyumIshler from './Components/GorduyumIshler';
import Haqqimda from './Components/Haqqimda/Haqqimda';

import Navbar from './Components/Navbar/Navbar';

import Bacariqlarim from './Components/Resume/Bacariqlarim';
import Social from './Components/Social/Social';
import './css/Fonts.scss'
import "./css/Global.scss"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Navbar/>

    <AnaSehife/>
    <Haqqimda/>
    <Bacariqlarim/>
    <GorduyumIshler/>
    <Elaqe/>
    <Social/>
  </React.StrictMode>
);

