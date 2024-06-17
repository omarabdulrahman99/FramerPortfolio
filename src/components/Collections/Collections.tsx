import React, { useEffect } from 'react';
import Videoplayer from './VideoPlayer/VideoPlayer';
import './Collections.sass';

export default function Collections() {
  // import all colleciton components here then export this one
  return (
    <div className="collections">
      <div className="collection-headings-cont">
        <h1 className="collection-headings">Exhibit Video player</h1>
        <span>Mouse tracking to use for video timeline.</span>
      </div>
      <Videoplayer />
      <div className="collection-headings-cont">
        <h1 className="collection-headings">Exhibit Video player</h1>
      </div>
    </div>
  )
};