import React, { useEffect, useState, useRef } from 'react';
import './VideoPlayer.sass';

export default function VideoPlayer() {
	const [isPlaying, setIsPlaying] = useState(true);
	const videoRef = useRef<HTMLVideoElement>(null);
	const markerRef = useRef<HTMLDivElement>(null);
	const cursorRef = useRef<HTMLDivElement>(null);
	const overlayRef = useRef<HTMLDivElement>(null);
	const timelineclick = (e) => {
		e.stopPropagation();
		const rect = e.currentTarget.getBoundingClientRect();
		const clickPosition = e.clientX;
		const percentage = clickPosition / rect.width;
		videoRef.current.currentTime = percentage * videoRef.current.duration;
		markerRef.current.style.left = `calc(${percentage * 100}% - 1px)`;
	}
	useEffect(() => {
		if(!videoRef.current || !markerRef.current) {
			return;
		}

		document.addEventListener("mousemove", function(e) {
			// check if area is inside videooverlay section to avoid cursor moving to other exhibits
			if (overlayRef.current.contains(e.target)) {
				cursorRef.current.style.left = `${e.clientX}px`;
				cursorRef.current.style.top = `${e.offsetY}px`;
			}
		})

	    const onTimeUpdate = () => {
	    	const percentage = (videoRef.current.currentTime / videoRef.current.duration) * 100;
	    	markerRef.current.style.left = `calc(${percentage}% - 1px)`;
	    };
		videoRef.current.addEventListener("timeupdate", onTimeUpdate);
	}, [])


	return (
		<div className="video-overlay" ref={overlayRef} onClick={() => {
			if (isPlaying) {
				setIsPlaying(false);
				videoRef.current.pause();
			} else {
				setIsPlaying(true);
				videoRef.current.play();
			}
		}}>
			<div className="video-container">
				<video ref={videoRef} loop id="mainVideo" >
					<source src="https://streamable.com/l/8lxxgf/mp4.mp4" type="video/mp4"/>
				</video>
			</div>
			<div className="cursor" ref={cursorRef}><p>{isPlaying ? 'play' :'pause'}</p></div>
			<div className="video-timeline" onClick={timelineclick}>
				<div className="video-marker" ref={markerRef}>
				</div>
				<div className="video-timestamps">
					<p>00:00</p>
					<p>00:05</p>
					<p>00:10</p>
					<p>00:15</p>
					<p>00:20</p>
					<p>00:25</p>
					<p>00:30</p>
					<p>00:35</p>
					<p>00:40</p>
					<p>00:45</p>
					<p>00:50</p>
					<p>00:55</p>
					<p>01:00</p>
				</div>
				<div className="video-frames">
					<div className="frame">
						<img src="https://i.imgur.com/ZSVKjkE.png" alt="" />
					</div>
					<div className="frame">
						<img src="https://i.imgur.com/WqARVzg.png" alt="" />
					</div>
					<div className="frame">
						<img src="https://i.imgur.com/hM3GPA8.png" alt="" />
					</div>
					<div className="frame">
						<img src="https://i.imgur.com/P0gXJzB.png" alt="" />
					</div>
					<div className="frame">
						<img src="https://i.imgur.com/19UEimQ.png" alt="" />
					</div>
					<div className="frame">
						<img src="https://i.imgur.com/7R8wXwH.png" alt="" />
					</div>
					<div className="frame">
						<img src="https://i.imgur.com/4GkFMAY.png" alt="" />
					</div>
					<div className="frame">
						<img src="https://i.imgur.com/qz1bvQW.png" alt="" />
					</div>
					<div className="frame">
						<img src="https://i.imgur.com/FqiyoKM.png" alt="" />
					</div>
					<div className="frame">
						<img src="https://i.imgur.com/kRRQNb0.png" alt="" />
					</div>
					<div className="frame">
						<img src="https://i.imgur.com/wouPrRv.png" alt="" />
					</div>
					<div className="frame">
						<img src="https://i.imgur.com/Isybuyl.png" alt="" />
					</div>
					<div className="frame">
						<img src="https://i.imgur.com/Y7v1LRX.png" alt="" />
					</div>
				</div>
			</div>
		</div>
	);
}