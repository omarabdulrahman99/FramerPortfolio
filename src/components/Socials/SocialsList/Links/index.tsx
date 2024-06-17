import React, { useRef } from 'react'
import './Links.sass';
import { useScroll, motion, useTransform, useMotionTemplate } from 'framer-motion';

export default function Links({ data, setSelectedProject }) {
  return (
    <div className="links">
      {
        data.map( (project, i) => {
            return <Link key={i} data={{...project, i}} setSelectedProject={setSelectedProject}/>
        })
      }
    </div>
  )
};

function Link({ data, setSelectedProject }) {
  const { title, speed, i } = data;
  const linkscontainerref = useRef(null);
  const { scrollYProgress } = useScroll({
      target: linkscontainerref,
      offset: ['start end', `${25 / speed}vh end`]
  })
  const clipProgress = useTransform(scrollYProgress, [0,1], [100, 0]);
  const clip = useMotionTemplate`inset(0 ${clipProgress}% 0 0)`;
  return (
    <div ref={linkscontainerref} className="link">
        <div 
          className="linktextwrapper"
          onMouseOver={() => {setSelectedProject(i)}}
          onMouseLeave={() => {setSelectedProject(null)}}
        >
          <motion.p style={{ clipPath: clip }}>
            {title}
          </motion.p>
          <p>
            {title}
          </p>
        </div>
      </div>
    )
}