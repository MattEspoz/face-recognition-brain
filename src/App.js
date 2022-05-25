import React, {Component} from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImagesLinkedForm from './components/ImagesLinkedForm/ImagesLinkedForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Logo />
      <ImagesLinkedForm />
      {/* <FaceRecognition />
      } */}
    </div> 
  );
}

export default App;
