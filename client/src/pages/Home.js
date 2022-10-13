import React from "react";
import MainHero from "../components/MainHero";
import FeaturedPost from "../components/FeaturedPost";

const Home = () => {
  return (
    <div>
      {/** Main Feautred Post */}
      <MainHero
        title="Fantasy of Color"
        description="A collection of art, photos and stories of people of color in fantasy, urban fantasy, and steampunk settings. Also included are a list of books from black authors. 
        
        pretium vulputate sapien nec sagittis aliquam. Mauris a diam maecenas sed enim ut sem viverra."
        linktext="" />
       {/** Column start here */}
      <div class="columns">
         {/** Feautred Post */}
        <div class="column">
          <FeaturedPost
            title="Featured Article"
            description="
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas sed sed risus pretium quam. Arcu dictum varius duis at consectetur lorem. Donec pretium vulputate sapien nec sagittis aliquam. Mauris a diam maecenas sed enim ut sem viverra."
            linktext="https://fantasyofcolor.tumblr.com/page/2"
            imageUrl={"https://64.media.tumblr.com/efba79cab4455525153f7ffb0c3f6766/tumblr_ogqunyv0zK1v0l7ifo1_500.jpg"}
          />
        </div>
         {/** Feautred Post */}
        <div class="column">
          <FeaturedPost
            title="Featured Cosplay"
            description="Credit: Starfire cosplay by Cutiepiesensei 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel orci porta non pulvinar neque laoreet suspendisse interdum. labore et dolore magna aliqua. Vel orci porta non pulvinar neque laoree."
            linktext="https://www.pinterest.com/pin/189432728070210906/"
            imageUrl="https://i.pinimg.com/564x/85/01/10/850110f1231ee2edc0790507acab172b.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
