import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import pdf from "/assets/OmarAbdulrahmanr7.pdf";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import './Resume.sass';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function Reflections() {

  const [scale, setScale] = useState(window.innerWidth  / 1300 + 0.4);
  const updateScale = (windowInnerWidth) => {
		let scaleWindow = (windowInnerWidth / 1300 + 0.4);;
		setScale(scaleWindow);
  }
  useEffect(() => {
    let cb = () => {
    	updateScale(window.innerWidth);
    };
    window.addEventListener('resize', cb);
    return () => {
    	window.removeEventListener('resize', cb);
    }
  }, []);

  return (
  	<div id="resumesection">
      <svg preserveAspectRatio="none" width="100%" height="300px" id="svgwaves" viewBox="0 0 1440 490" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="5%" stopColor="#9900ef"></stop>
            <stop offset="95%" stopColor="#8ED1FC"></stop>
          </linearGradient>
        </defs>
        <path d="M 0,500 L 0,93 C 79.85128205128208,121.32820512820513 159.70256410256417,149.65641025641025 250,139 C 340.29743589743583,128.34358974358975 441.0410256410256,78.70256410256411 515,64 C 588.9589743589744,49.29743589743589 636.1333333333333,69.53333333333333 710,83 C 783.8666666666667,96.46666666666667 884.4256410256412,103.16410256410258 975,93 C 1065.5743589743588,82.83589743589742 1146.1641025641024,55.81025641025641 1222,53 C 1297.8358974358976,50.18974358974359 1368.9179487179488,71.59487179487179 1440,93 L 1440,500 L 0,500 Z" stroke="none" strokeWidth="0" fillOpacity="url(#gradient)" fillOpacity="0.4"></path>
        <defs>
          <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="5%" stopColor="#9900ef"></stop>
            <stop offset="95%" stopColor="#8ED1FC"></stop>
          </linearGradient>
        </defs>
        <path d="M 0,500 L 0,218 C 60.44102564102565,237.48717948717947 120.8820512820513,256.97435897435895 205,249 C 289.1179487179487,241.02564102564105 396.91282051282053,205.58974358974362 481,197 C 565.0871794871795,188.41025641025638 625.4666666666667,206.66666666666666 711,221 C 796.5333333333333,235.33333333333334 907.2205128205128,245.74358974358975 997,233 C 1086.7794871794872,220.25641025641025 1155.6512820512821,184.35897435897436 1226,178 C 1296.3487179487179,171.64102564102564 1368.174358974359,194.82051282051282 1440,218 L 1440,500 L 0,500 Z" stroke="none" strokeWidth="0" fillOpacity="url(#gradient)" fillOpacity="0.53"></path>
        <defs>
          <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="5%" stopColor="#9900ef"></stop>
            <stop offset="95%" stopColor="#8ED1FC"></stop>
          </linearGradient>
        </defs>
        <path d="M 0,500 L 0,343 C 74.91025641025641,357.20000000000005 149.82051282051282,371.40000000000003 243,360 C 336.1794871794872,348.59999999999997 447.6282051282051,311.6 520,305 C 592.3717948717949,298.4 625.6666666666669,322.20000000000005 689,333 C 752.3333333333331,343.79999999999995 845.7051282051282,341.5999999999999 934,335 C 1022.2948717948718,328.4000000000001 1105.5128205128206,317.4 1189,318 C 1272.4871794871794,318.6 1356.2435897435898,330.8 1440,343 L 1440,500 L 0,500 Z" stroke="none" strokeWidth="0" fillOpacity="url(#gradient)" fill="#0d0d0d" fillOpacity="1"></path>
      </svg>
      <div className="resumemain">
	      <div className="downloadresume">
	        <Link
            to={pdf}
            target="_blank"
            download
            className="downloadresumebutton"
          >
	          Download Resume
	        </Link>
	          <Document file={pdf} className="resumepdf">
	            <Page pageNumber={1} scale={scale} />
	          </Document>
	      </div>
      </div>
      <svg preserveAspectRatio="none" width="100%" height="300px" id="svgwavesbottom" viewBox="0 0 1440 490" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="5%" stopColor="#9900ef"></stop>
            <stop offset="95%" stopColor="#8ED1FC"></stop>
          </linearGradient>
        </defs>
        <path d="M 0,500 L 0,93 C 79.85128205128208,121.32820512820513 159.70256410256417,149.65641025641025 250,139 C 340.29743589743583,128.34358974358975 441.0410256410256,78.70256410256411 515,64 C 588.9589743589744,49.29743589743589 636.1333333333333,69.53333333333333 710,83 C 783.8666666666667,96.46666666666667 884.4256410256412,103.16410256410258 975,93 C 1065.5743589743588,82.83589743589742 1146.1641025641024,55.81025641025641 1222,53 C 1297.8358974358976,50.18974358974359 1368.9179487179488,71.59487179487179 1440,93 L 1440,500 L 0,500 Z" stroke="none" strokeWidth="0" fillOpacity="url(#gradient)" fillOpacity="0.4"></path>
        <defs>
          <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="5%" stopColor="#9900ef"></stop>
            <stop offset="95%" stopColor="#8ED1FC"></stop>
          </linearGradient>
        </defs>
        <path d="M 0,500 L 0,218 C 60.44102564102565,237.48717948717947 120.8820512820513,256.97435897435895 205,249 C 289.1179487179487,241.02564102564105 396.91282051282053,205.58974358974362 481,197 C 565.0871794871795,188.41025641025638 625.4666666666667,206.66666666666666 711,221 C 796.5333333333333,235.33333333333334 907.2205128205128,245.74358974358975 997,233 C 1086.7794871794872,220.25641025641025 1155.6512820512821,184.35897435897436 1226,178 C 1296.3487179487179,171.64102564102564 1368.174358974359,194.82051282051282 1440,218 L 1440,500 L 0,500 Z" stroke="none" strokeWidth="0" fillOpacity="url(#gradient)" fillOpacity="0.53"></path>
        <defs>
          <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="5%" stopColor="#9900ef"></stop>
            <stop offset="95%" stopColor="#8ED1FC"></stop>
          </linearGradient>
        </defs>
        <path d="M 0,500 L 0,343 C 74.91025641025641,357.20000000000005 149.82051282051282,371.40000000000003 243,360 C 336.1794871794872,348.59999999999997 447.6282051282051,311.6 520,305 C 592.3717948717949,298.4 625.6666666666669,322.20000000000005 689,333 C 752.3333333333331,343.79999999999995 845.7051282051282,341.5999999999999 934,335 C 1022.2948717948718,328.4000000000001 1105.5128205128206,317.4 1189,318 C 1272.4871794871794,318.6 1356.2435897435898,330.8 1440,343 L 1440,500 L 0,500 Z" stroke="none" strokeWidth="0" fillOpacity="url(#gradient)" fill="#0d0d0d" fillOpacity="1"></path>
      </svg>
  	</div>
  )
}