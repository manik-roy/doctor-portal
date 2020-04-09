import React from 'react';
import './App.css';
import Routes from './components/Routes';
import { UserProvider } from './components/useAuth';
import { toast } from 'react-toastify';

toast.configure({
  autoClose: 3000,
  draggable: false,
  //etc you get the idea
});

function App() {
  return (
    <UserProvider>
      <Routes/>
    </UserProvider>
  );
}

export default App;
