import React from 'react';
import './App.css';
import LogoImg from "./image2/imageInSrc.jpg"
import myVideo from "./videos/video.mp4"
function App() {
  return (
    <div className="App">
      <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
        <h1 className="title red">Arabian horses - The majestic breed</h1>
        <br />
        <img src={LogoImg} alt='imageInSrc' />
        <br />
        <img src="/image1/imageInPublic.jpg" alt="imageInPublic" />
      </div>
      <video width={320} height={400} controls>
        <source src={myVideo} type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
