import AnimationWrapper from "../../Components/animationwrapper/AnimationWrapper";
import AboutHeroSection from "../aboutuspage/aboutherosection/AboutHeroSection";
import AboutGameVault from "./aboutgamevault/AboutGameVault";
import OurMission from "./ourmission/OurMission";

// const AboutUsPage = () => {
//   return (
//     <main className="overflow-x-hidden">
//       <AnimationWrapper animationType="fadeUp" delay={0}>
//         <AboutHeroSection />
//       </AnimationWrapper>
//       <AnimationWrapper animationType="fadeUp" delay={0.1}>
//         <AboutGameVault />
//       </AnimationWrapper>
//       <AnimationWrapper animationType="fadeUp" delay={0.2}>
//         <OurMission />
//       </AnimationWrapper>
//     </main>
//   );
// };

const AboutUsPage = () => {
  return (
    <main className="overflow-x-hidden">
      <AboutHeroSection />
      <AboutGameVault />
      <OurMission />
    </main>
  );
};

 

export default AboutUsPage;