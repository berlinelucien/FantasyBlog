import React from "react";
import MainHero from "../components/MainHero";
import FeaturedPost from "../components/FeaturedPost";

const Home = () => {
  return (
    <div>
      {/** Main Feautred Post */}
      <MainHero
      title="TITLE"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
      enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
      reprehenderit in voluptate velit esse cillum dolore eu fugiat
      nulla pariatur. Excepteur sint occaecat cupidatat non proident,
      sunt in culpa qui officia deserunt mollit anim id est laborum."/>
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
