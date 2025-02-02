import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-page">
      <div className="profile">
        <div className="profile-left">
          <img
            src="/other/headshot.png"
            alt="Bethany Kim Headshot"
            className="profile-picture"
          />
        </div>
        <div className="profile-right">
          <h1>I'm Bethany, a student at UCLA.</h1>
          <h3>My passion lies in analyzing data to find creative solutions to complex problems.</h3>
          <p>As a triple-major in Linguistics & Computer Science, Cognitive Science, and Computational & Systems Biology,
             I have been exposed to projects in diverse domains. This breadth of experience allows me to approach problems
             with a unique interdisciplinary perspective, bridging technical expertise with innovative thinking.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;