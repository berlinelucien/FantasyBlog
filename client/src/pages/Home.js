import React from "react";
import MainHero from "../components/MainHero";
import FeaturedPost from "../components/FeaturedPost";

const Home = () => {
  return (
    <div>
      <MainHero />

      <div class="columns">
        <div class="column">
          <FeaturedPost />
        </div>
        <div class="column">
          <FeaturedPost />
        </div>
      </div>
    </div>
  );
};

export default Home;
