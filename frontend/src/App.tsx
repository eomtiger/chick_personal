import React from 'react';
import Video from './webRTC/Video';
import HomePage from './components/pages/HomePage/index';
import ExampleFaceTracking from './mindAR/examples/FaceTracking';

function App() {
  return (
    <div className="App">
      {/* <Video /> */}
      <div className="container">
        <h1>Hello Mind AR J/TS!</h1>
        <ExampleFaceTracking />
      </div>
      {/* <HomePage /> */}
    </div>
  );
}

export default App;
