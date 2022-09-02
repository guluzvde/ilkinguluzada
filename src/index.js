import React from 'react';
import ReactDOM from 'react-dom/client';
import AnaSehife from './Components/AnaSehife/AnaSehife';
import GorduyumIshler from './Components/GorduyumIshler';
import Haqqimda from './Components/Haqqimda/Haqqimda';
import Example from './Components/Nav';
import Navbar from './Components/Navbar/Navbar';
import Bacariqlarim from './Components/Resume/Bacariqlarim';
import './css/Fonts.scss'
import "./css/Global.scss"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Example/> */}
    <Navbar />
    <AnaSehife/>
    <Haqqimda/>
    <Bacariqlarim/>
    <GorduyumIshler/>
  </React.StrictMode>
);

