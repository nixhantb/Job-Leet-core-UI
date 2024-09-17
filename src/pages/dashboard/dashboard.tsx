// src/components/dashboard/dashboard.tsx

import React from 'react';
import NavBar from '../../components/navbar/NavBar';
import Divider from '@mui/material/Divider';
import HeroContentSection from '../../components/body/HeroContentSection';
import Footer from '../../components/footer/footer';
import CalendarHelper from '../../components/calendar/CalendarHelper';
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
