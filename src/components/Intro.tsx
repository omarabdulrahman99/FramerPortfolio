import React, { useEffect, useState } from 'react';
import { motion, Reorder, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faScrewdriverWrench, faUser, faGlobe } from '@fortawesome/free-solid-svg-icons';
import './Intro.sass';


const itemsinit = [
  (<div>waluigi</div>),
  (<div>waluigi222</div>),
  (<div>luigi345435</div>)
];

const Intro: React.FC = () => {

	const [activeIcon, setActiveIcon] = useState(null);
	const [items, setItems] = useState(itemsinit);

	const nameTitle = () => {
		const words = 'Omar Abdulrahman Front End Developer'.split(" ");
		const letters = words.map((w, i) =>
			<div key={w} className={i === 2 ? "artcont word": "word"}>
				{i === 2 ? <><img src="https://pics.clipartpng.com/midle/Pink_Rose_PNG_Clip_Art_Image-1649.png" className="img-back" /><div>{w}</div><img src="https://pics.clipartpng.com/midle/Pink_Rose_PNG_Clip_Art_Image-1649.png" className="img-front" /></>: w}
			</div>)
	  return letters;
	}
	const displayContent = () => {
		let content = '';
		switch(activeIcon) {
		case 'resume':
			content = 'resume';
			break;
		case 'skills':
			content = 'skills';
			break;
		case 'socials':
			content = 'socials';
			break;
		case 'aboutme':
			content = 'aboutme';
			break;
		default: '';
		}
		return content;
	}
	const onClickIcon = (e) => {
		setActiveIcon(activeIcon === e.target.id ? null : e.target.id);
		console.log(e.currentTarget.id);
		const element = document.getElementById(`${e.currentTarget.id}section`);
		element.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
	}

  return (
		<div className="container">
		  <div className="wordiconcontainer">
		  	<div className="word-container">{nameTitle()}</div>
        <div className="griddouble">
          <div id="resume" className="topleft" onClick={onClickIcon}>
          	<div className="icon">Resume <FontAwesomeIcon icon={faFile} /></div>
          </div>
          <div id="skills" onClick={onClickIcon} className="topright">
          	<div className="icon"><FontAwesomeIcon icon={faScrewdriverWrench} />Skills</div>
          </div>
          <div id="socials" className="bottomleft" onClick={onClickIcon}>
          	<div className="icon">Socials <FontAwesomeIcon icon={faGlobe} /></div>
          </div>
          <div id="aboutme" className="bottomright"onClick={onClickIcon} >
          	<div className="icon" ><FontAwesomeIcon icon={faUser} />About Me</div>
          </div>
        </div>
		  </div>
	    <div className="wave"></div>
	    <div className="wave"></div>
	    <div className="wave"></div>
		</div>
  )
}

export default Intro;

/*
Motion usage:
When a motion component is first created, 
it'll automatically animate to the values in animate if they're different from those defined in style or initial
all motion stuff

<motion.div
  animate={{ x: 100 }}
  transition={{ ease: "easeOut", duration: 2 }}
/>
<motion.div animate={{ x: 100 }} initial={false} />

// animate presence component for exit animation. prevents react from instantly removing element when isVisible changes
<AnimatePresence>
  {isVisible && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    />
  )}
 </AnimatePresence>

// swipe example
 https://codesandbox.io/p/sandbox/framer-motion-image-gallery-forked-54v4nm?file=%2Fsrc%2FExample.tsx%3A7%2C19

//can be string or number
 const x = useMotionValue(0)
 // this doesnt trigger rerender
 x.set(100)
 x.get() // 100
 x.getVelocity() // only return X number types
 // jump abrutly ends previous velocity and animation., no continuity.
 x.jump vs x.set
 x.isanimating
 x.stop
events:
change
animationStart
animationCancel
animationComplete

	// 'onchange or on should be in useffect. it also returns a cleanup function'
	const x = useMotionValue(0)
  const y = useMotionValue(0)
  const opacity = useMotionValue(1)
  useEffect(() => {
    function updateOpacity() {
      const maxXY = Math.max(x.get(), y.get())
      const newOpacity = transform(maxXY, [0, 100], [1, 0])
      opacity.set(newOpacity)
    }

    const unsubscribeX = x.on("change", updateOpacity)
    const unsubscribeY = y.on("change", updateOpacity)

    return () => {
      unsubscribeX()
      unsubscribeY()
    }
  }, [])


	Instead of referring back to x value in updateOpacity to .get() latest x value to use.
	to get latest, you can use useMotionValueEvent(x, "change", latest => console.log(latest))
	useMotionValueEvent is more for listening to changes. useTransform is to directly update x value. both have access to latest.
	useMotionValue and useTransform automatically handle cleanup, don't need to call the the returned unsubscribe above.


 usage:
  <motion.div style={{ x }} />
  <motion.circle cx={cx} />
  // can get latest value and trnsform it.
  useTransform(x, latest => latest * 2)

*/


/*		  	<AnimatePresence>
		  		{activeIcon &&
				    <motion.div className="content"      
	            initial={{ opacity: 0 }}
	            animate={{ opacity: 1 }}
	            exit={{ opacity: 0 }}
	            transition={{ duration: 0.5 }}
			      >
			        {itemsinit.map((m, i) => (
			        	<AnimatePresence key={Math.random() + i}>
				      		<motion.div
				      				key={Math.random() + i}
		                  initial={{ scale: 0, opacity: 0, y: 0 }}
		                  animate={{ scale: 1, opacity: 1, y: i * 50 }}
		                  exit={{ opacity: 0, y: 0 }}
		                  whileHover={{ scale: 1.3 }}
      								whileTap={{ scale: 0.95 }}
		                  transition={{
		                    type: "tween",
		                    damping: 20,
		                    delay: 0.1 +  i / 10,
		                  }}>
				      			{m}
				      		</motion.div>
				      	</AnimatePresence>
			    		))}
				    	{displayContent()}
				    </motion.div>
				  }
			  </AnimatePresence> 

				if you need a template string to combine multiple motion values, or just simply, a 
				motionvalue with other srings, you must use useMotionTemplate: 
					useMotionTemplate`drop-shadow(${shadowX}px ${shadowY}px 20px rgba(0,0,0,0.3))`

			  */