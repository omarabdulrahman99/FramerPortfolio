import { useState } from 'react';
import Links from './Links';
import Details from './Details';

const data = [
  {
      title: "Linkedin",
      description: "https://www.linkedin.com/in/omarnabdulrahman99/",
      speed: 0.5
  },
  {
      title: "Github",
      description: "https://github.com/omarabdulrahman99",
      speed: 0.5
  },
  {
      title: "Email",
      description: "omarabdulrahman41@gmail.com",
      speed: 0.8
  },
  {
      title: "NFL",
      description: "Explored the Future of Fantasy Football while being in a country where football means a total different sport.",
      speed: 0.8
  }
]

export default function SocialsList() {
  const [selectedProject, setSelectedProject] = useState(null)
  return (
    <div style={{ position: 'absolute', zIndex: '1', width: '100%' }}>
      <Links data={data} setSelectedProject={setSelectedProject}/>
      <Details data={data} selectedProject={selectedProject}/>
    </div>
  )
}