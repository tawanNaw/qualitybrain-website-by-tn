import React from 'react';
import NavBar from './components/NavBar';
import NodeNetwork from './components/NodeNetwork';
import Footer from './components/Footer';
import FirstImpact from './components/FirstImpact';
import './App.css'; // นำเข้าไฟล์ CSS

const App = () => {
  return (
    <div className="app-container">
      <div className="navbar">
        <NavBar />
      </div>
      <div className="first-impact">
        <FirstImpact />
      </div>
      <div className="node-network">
        <NodeNetwork />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default App;
