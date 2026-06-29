import HomeHeroSection from "./homeherosection/HomeHeroSection";
import HomeFeaturedGames from "./homefeaturedgames/HomeFeaturedGames";
import HomeFeaturedConsoles from "./homefeaturedconsoles/HomeFeaturedConsoles";
import HomeGamingAccessories from "./homegamingaccessories/HomeGamingAccessories";
import HomeGamingNews from "./homegamingnews/HomeGamingNews";
import HomeGTAVISection from "./homeGTAVIsection/HomeGTAVISection";
import HomeLatestReleases from "./homelatestreleases/HomeLatestReleases";
import HomeWeeklyDeals from "./homeweeklydeals/HomeWeeklyDeals";

const HomePage = () => {
  return (
    <>
      <HomeHeroSection />
      <HomeFeaturedGames />
      <HomeFeaturedConsoles />
      <HomeGamingAccessories />
      <HomeGamingNews />
      <HomeGTAVISection />
      <HomeLatestReleases />
      <HomeWeeklyDeals />
    </>
  );
};

export default HomePage;
