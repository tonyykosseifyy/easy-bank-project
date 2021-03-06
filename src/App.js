import React, { useState } from 'react' ;
import "./App.css";
import Header from "./Components/Header";
import Body from './Components/Body' ;

export default function App() {
  const [ open , setOpen ] = useState(false) ;
  window.addEventListener('resize' , () => {
    if (window.innerWidth > 800 ) {
      setOpen(false)
    }})
  return (
    <div className="app">
      <Header updateOpen={setOpen} />
      <Body open={open} />
    </div>
  );
}
