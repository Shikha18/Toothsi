import React from 'react';
import Navbar from './Component/Navbar/navbar';
import style from './App.module.scss';


function App() {

  return (
    <div className={style.app}>
         <Navbar />
    </div>
  );
}

export default App;
