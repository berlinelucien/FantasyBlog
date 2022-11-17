import React from "react";
import MainHero from "../components/MainHero";
import FeaturedPost from "../components/FeaturedPost";

const Home = () => {
  return (
    <div>
      {/** Main Hero */}
      <MainHero
        title="Fantasy of Color"
        description="This blog is a collection of art, photos and stories of people of color in fantasy, urban fantasy, and steampunk settings. We're also working to build up a list of book and comic recommendations, as well as links to resources for our followers, whether or not you are an artist or writer."
        linktext=""
      />

      {/** Feautred Post */}
      <div class="column">
        <FeaturedPost
          title="Who were the African people living in Medieval and Tudor England?"
          date="By Dr Onyeka Nubia, University of Nottingham, and Edgehill, a historian of British history"
          description="
            The medieval English writer Richard Devizes describes London as being populated by ‘Garamantes’ (Moorish Africans), and ‘men from all nations’ that ‘fill all the houses.’ These Africans were described by various terms such as: ‘Black’, ‘Ethiopian’ (a word used at the time to describe all Africans), ‘Moor,’ and ‘Blackamoore.’ Other terms such as ‘Saracen’ were also used to refer to Africans, as well as people from elsewhere, such as Western Asia. Some of these terms are now considered derogatory."
          linktext="https://www.bbc.co.uk/bitesize/articles/z8gpm39"
          imageUrl={
            "https://64.media.tumblr.com/efba79cab4455525153f7ffb0c3f6766/tumblr_ogqunyv0zK1v0l7ifo1_500.jpg"
          }
        />
      </div>

      {/** Feautred Post */}
      <div class="column">
        <FeaturedPost
          title="The Adoration of the Magi ca. 1520"
          date="Artist: Gerard David Netherlandish"
          description="
          First established in Bruges, Gerard David also joined the painter’s guild in Antwerp in 1515, where his compositions and motifs soon began to circulate. This excellently preserved panel is strongly indebted to David’s work. The extravagantly dressed onlookers, however, are a pure invention of Antwerp art, as is the landscape view with travelers carrying goods for trade. "
          linktext="https://www.metmuseum.org/art/collection/search/436104"
          imageUrl="https://collectionapi.metmuseum.org/api/collection/v1/iiif/436104/2012331/main-image"
        />
      </div>
    </div>
  );
};

export default Home;
