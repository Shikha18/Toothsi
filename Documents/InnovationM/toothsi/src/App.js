import React, {useState} from 'react';
import Routes from './Router/Router';
import './App.css';
import Navbar from './Components/Navbar/navbar';

function App() {
  const [filters, setFilters] = useState([]);
  console.log('filters', filters);
  return (
    <div style={{backgroundColor: '#F8F8F8'}}>
      <Navbar filters={filters} setFilters={setFilters}/>
      <Routes filters={filters} />
    </div>
  );
}

export default App;
