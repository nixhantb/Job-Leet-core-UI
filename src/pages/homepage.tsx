import { FC } from "react";
import NavBar from "../components/navbar/NavBar";
import HeroContentSection from "../components/body/HeroContentSection";
import Footer from "../components/footer/footer";
import Divider from '@mui/material/Divider';
const Homepage: FC = () => {
  return (
    <>
      <NavBar />
      <Divider orientation="horizontal" flexItem />
      <HeroContentSection />
      <Footer />
    </>
  );
};
export default Homepage;