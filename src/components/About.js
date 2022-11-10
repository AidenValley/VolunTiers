import React from "react";

const About = () => {
  return (
    <div>
      <h1 class="title">Make a Difference in your Community</h1>
      <div class="row">
        <div class="column">
          <div class="card">
            <h3> VolunGold </h3>
            <span class="fa fa-star checked"></span>
            <p>VolunTiers With 40 Hours or More</p>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <h3> VolunSilver </h3>
            <span class="fa fa-star silver"></span>
            <p>VolunTiers With 30 Hours or More</p>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <h3>VolunBronze</h3>
            <span class="fa fa-star bronze"></span>
            <p>VolunTiers With 20 Hours or More</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
