import React from "react";
import MainHero from "../components/MainHero";
import FeaturedPost from "../components/FeaturedPost";

const Home = () => {
  return (
    <div>
      {/** Main Feautred Post */}
      <MainHero />
       {/** Column start here */}
      <div class="columns">
         {/** Feautred Post */}
        <div class="column">
          <FeaturedPost />
        </div>
         {/** Feautred Post */}
        <div class="column">
          <FeaturedPost />
        </div>
      </div>
    </div>
  );
};

export default Home;
