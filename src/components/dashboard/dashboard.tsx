// src/components/dashboard/dashboard.tsx

import React from 'react';
import NavBar from '../navbar/NavBar';
import Divider from '@mui/material/Divider';
import HeroContentSection from '../body/HeroContentSection';
import Footer from '../footer/footer';
const Dashboard: React.FC = () => {

  return (
    <>
    <NavBar/>
    <Divider orientation="horizontal" flexItem />
    <HeroContentSection/>
    <Footer/>
    </>
  );
};

export default Dashboard;
