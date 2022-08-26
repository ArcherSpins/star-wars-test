import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from '../../pages/Main';
import { DetailsPage } from '../../pages/Details';
import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/character/:id" element={<DetailsPage />}/>
      </Routes>
    </div>
  );
}

export default App;
