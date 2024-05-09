import { FC } from "react";
import NavBar from "../components/navbar/NavBar";
import HeroContentSection from "../components/body/HeroContentSection";
import Footer from "../components/footer/footer";

const Homepage: FC = () => {
  return (
    <>
      <NavBar />
      <HeroContentSection />
      <Footer />
    </>
  );
};
export default Homepage;