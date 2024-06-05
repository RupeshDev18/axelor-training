import React from "react";
import profileImg from "./../assets/profile.jpg";
const DATA = [
  {
    alt: "Project1",
    img: profileImg,
    description: "form task",
  },
  {
    alt: "Project2",
    img: profileImg,
    description: "form task",
  },
  {
    alt: "Project3",
    img: profileImg,
    description: "form task",
  },
  {
    alt: "Project4",
    img: profileImg,
    description: "form task",
  },
];
function Work() {
  return (
    <div class="work">
      <h3>my portfolio</h3>
      <div id="work">
        {DATA.map((work) => {
          <div class="card">
            <img src={work.img} alt={work.alt} />
            <p>{work.description}</p>
          </div>;
        })}
      </div>
    </div>
  );
}

export default Work;
