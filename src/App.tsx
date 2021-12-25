import React, { FC } from 'react';
import { Counter } from './features/counter/Counter';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  Main  from './components/Main';
import  Bookmarks  from './components/Bookmarks';
import Navbar from './components/Navbar';

const App: FC = ()=> {
  return (
    <div className="App h-100 bg-light">
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={ <Main />}> 
          </Route>
          <Route path="/bookmarks" element={ <Bookmarks />}>
          </Route>
        </Routes>
      </Router>
 
    </div>
  );
}

export default App;
