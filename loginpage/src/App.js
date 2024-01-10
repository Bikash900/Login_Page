import './App.css'
import Login from './components/Login';
import Register from './components/Register';
import React from 'react';
import { useState } from 'react';



function App() {
  const [page, setPage] = useState('login')
  
  const togglePage = (pageName) =>{
    setPage(pageName);

  }


  return (
    <div className="App">
      {page === 'login' ? ( 
        <Login onFormSwitch ={togglePage} />
        )
        : (
          <Register onFormSwitch ={togglePage} />
        )
      }


    </div>
  );
}

export default App;
