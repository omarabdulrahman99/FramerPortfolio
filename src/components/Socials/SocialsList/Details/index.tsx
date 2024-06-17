import React from 'react'
import './details.sass';

export default function Details({ data, selectedProject }) {
  const crop = (string, maxLength) => { 
    return string.substring(0, maxLength);
  }
  return (
    <div className="details">
      {
        data.map( (project, i) => {
          const { title, description } = project;
          return (
          <div 
            key={i} 
            className="detail"
            style={{clipPath: selectedProject == i ? "inset(0 0 0)" : "inset(50% 0 50%"}}
          >
            <p>{description}</p>
          </div>
          )
        })
      }
    </div>
  )
};