import React from "react";
import profileImg from "./../assets/profile.jpg";
function Home() {
  return (
    <div className="main">
      <main className="content">
        <div className="profile">
          <img src={profileImg} alt="profile" height="250px" width="250px" />
        </div>
        <strong>Hi, I am Rupesh!</strong>
        <p>
          Hello! I'm a Computer Science senior who loves diving into the world
          of coding. I did an internship in Node.js, where I worked on real
          projects and learned a lot about backend development. After that, I
          became a trainer, sharing what I know with others.
        </p>
        <p>
          Now, I'm exploring the frontend magic in a React internship. I enjoy
          understanding how software comes to life and am excited about taking
          on new challenges. Creating cool and useful things with code is what I
          love doing!
        </p>
      </main>
    </div>
  );
}

export default Home;
