import React from 'react'
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import SocialLinks from './components/SocialLinks';
import Notice from './components/Notice'
import Location from './components/Location'

function App() {
  return (
    <div>
      <Navbar />
      <Homepage />
      <SocialLinks />
      <Notice />
      <Location />
    </div>
  );
}

export default App;
