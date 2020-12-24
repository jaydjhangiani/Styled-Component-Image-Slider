import React,{useState} from 'react'
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import GlobalSyle from './globalStyles';
import {SliderData} from './data/SliderData';
import DropDown from './components/DropDown';

function App() {

  const [isOpen,setIsOpen] = useState(false);

  const toggle = () => {
      setIsOpen(!isOpen)
  }

  return (
    <>
      <GlobalSyle />
      <Navbar toggle={toggle}/>
      <DropDown isOpen = {isOpen} toggle={toggle}/>
      <Hero slides={SliderData}/>
    </>
  );
}

export default App;
