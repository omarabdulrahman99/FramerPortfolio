import { motion } from "framer-motion";
const { useState, useEffect, useRef } = React;
const { motion, useAnimationControls } = motion;

const App: React.FC = () => {
    const [playing, setPlaying] = useState(false);

    const musicPlayers = useRef(
        typeof Audio === 'undefined'
            ? undefined
            : new Audio('https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/5a/4b/86/5a4b8621-c3bf-5979-3c82-44c6326fb28d/mzaf_7343871431646826917.plus.aac.ep.m4a'),
    );

    const controls = useAnimationControls();
    const rotatedRef = useRef<SVGImageElement>(null);

    useEffect(() => {
        if (musicPlayers.current) {
            musicPlayers.current.loop = true;
            // musicPlayers.current.volume = 0;
        }
    }, []);

    const play = () => {
        musicPlayers.current?.play();
        setPlaying(true);

        const rotation = rotatedRef?.current?.style?.transform
            // Get rotation
            ?.match(/rotate\((.+)\)/)?.[1]
            // Get rotation number
            ?.match(/[\d.]+/)?.[0];

        controls.start({
            rotate: rotation ? parseFloat(rotation) + 360 : 360,
            originX: '50%',
            originY: '50%',
            transition: {
                duration: 10,
                ease: 'linear',
                repeat: Infinity,
            },
        });
    };

    const stop = () => {
        setPlaying(false);
        musicPlayers.current?.pause();

        controls.stop();
    };

    const handleClick = () => {
        if (playing) {
            stop();
        } else {
            play();
        }
    };

    return (
      <div className="holder">
        <button className="listening" type="button" onClick={handleClick}>
            <svg viewBox="0 0 100 100">
                <defs>
                    <path
                        d="M 50 50 m -45 0 a 45 45 0 1 0 90 0"
                        id="currently-spinning"
                    />
                    <path
                        d="M 50 50 m -45 0 a 45 45 0 1 1 90 0"
                        id="listening-to"
                    />

                        <stop
                            stopColor="black"
                            stopOpacity={0.65}
                            offset="0%"
                        />
                        <stop stopColor="black" stopOpacity={0} offset="100%" />
                   

                        <stop stopColor="black" stopOpacity={0} offset="0%" />
                        <stop
                            stopColor="black"
                            stopOpacity={0.65}
                            offset="100%"
                        />

                </defs>
                <mask id="record">
                    <circle cx="50" cy="50" r="50" fill="white" />
                </mask>

                <g mask="url(#record)">]
                    <rect x="0" y="0" width="100px" height="100px" fill="black" />
                    <motion.image
                        href="https://media.pitchfork.com/photos/618abe7ee84dd4adabc70e51/1:1/w_600,c_limit/Nilufer-Yanya-Painless.jpeg"
                        x="0"
                        y="0"
                        width="100px"
                        transformOrigin="50% 50%"
                        animate={controls}
                        ref={rotatedRef}
                    />
                </g>
                {/* Gradients */}
                <text
                    fontSize="5px"
                    dominantBaseline="hanging"
                    textAnchor="middle"
                    fill="white"
                >
                    <textPath
                        href="#listening-to"
                        xlinkHref="#listening-to"
                        startOffset="50%"
                    >
                        Currently spinning
                    </textPath>
                </text>
                <text
                    fontSize="5px"
                    dominantBaseline="middle"
                    textAnchor="middle"
                    fill="white"
                >
                    <textPath
                        href="#currently-spinning"
                        xlinkHref="#currently-spinning"
                        startOffset="50%"
                    >
                        Nilüfer Yanya &middot; PAINLESS
                    </textPath>
                </text>
                <circle cx="50" cy="50" r="15" fill="white" />

                {playing ? (
                    <g>
                        <path
                            d="M48.7789 53.6071C48.7789 54.3764 48.1552 55 47.386 55C46.6168 55 45.9932 54.3764 45.9932 53.6071V46.3929C45.9932 45.6236 46.6168 45 47.386 45C48.1552 45 48.7789 45.6236 48.7789 46.3929V53.6071Z"
                            fill="black"
                        />
                        <path
                            d="M54.0064 53.6071C54.0064 54.3764 53.3828 55 52.6136 55C51.8444 55 51.2207 54.3764 51.2207 53.6071V46.3929C51.2209 45.6236 51.8446 45 52.6136 45C53.3828 45 54.0064 45.6236 54.0064 46.3929V53.6071Z"
                            fill="black"
                        />
                    </g>
                ) : (
                    <path
                        d="M 46.1434 54.943
                        C 46.212 54.9811 46.2879 55 46.3637 55
                        C 46.4475 55 46.5311 54.9769 46.6046 54.9309
                        L 53.8774 50.3855
                        C 54.0103 50.3024 54.091 50.1568 54.091 50
                        C 54.091 49.8433 54.0103 49.6976 53.8774 49.6146
                        L 46.6046 45.0691
                        C 46.4645 44.9815 46.2879 44.9769 46.1434 45.057
                        C 45.9988 45.1371 45.9092 45.2893 45.9092 45.4546
                        V 54.5455
                        C 45.9092 54.7107 45.9988 54.8629 46.1434 54.943 
                        Z"
                        fill="black"
                    />
                )}
            </svg>
        </button>
      </div>
    );
};