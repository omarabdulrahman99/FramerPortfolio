import React, { useEffect } from 'react';
import MusicDisplay from '../components/MusicDisplay';
import Intro from '../components/Intro';
import Socials from '../components/Socials/Socials';
import Reflections from '../components/Reflections/Reflections';
import Resume from '../components/Resume/Resume';
import Aboutme from '../components/Aboutme/Aboutme'
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import './Home.sass';
import './home.css';

const HomePage: React.FC = () => {
  return (
    <div className="home-container">
      <Intro />
      <Aboutme />
      <Socials />
      <Reflections />
      <Resume />
      <MusicDisplay />
    </div>
  )
}

export default HomePage