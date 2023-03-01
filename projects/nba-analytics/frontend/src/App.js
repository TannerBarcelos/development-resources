// CSS Imports
import './App.css';

// Page & Component Imports
import Home from './pages/Home.js';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTeams } from './redux/features/teamSlice';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTeams());
  }, [dispatch]);
  return (
    <>
      <Home />
    </>
  );
};

export default App;
