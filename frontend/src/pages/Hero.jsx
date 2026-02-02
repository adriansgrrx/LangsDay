import React from "react";
import VideoBG from "../components/VideoBG";
import BounceCards from "../components/BounceCards";
import SplitText from "../components/SplitText";
import CountUp from "../components/CountUp";
import { Gift, Mail } from "lucide-react";

const Hero = () => {
    const images = [
        "assets/hero/picture-1.jpg",
        "assets/hero/picture-2.jpg",
        "assets/hero/picture-3.jpg",
        "assets/hero/picture-4.jpg",
        "assets/hero/picture-5.jpg",
    ];
    
    const transformStyles = [
        "rotate(5deg) translate(-150px)",
        "rotate(0deg) translate(-70px)",
        "rotate(-5deg)",
        "rotate(5deg) translate(70px)",
        "rotate(-5deg) translate(150px)",
    ];
    
    return (
        <div className="min-h-screen flex items-center justify-center text-center">
            {/* Background */}
            <VideoBG />
            
            {/* Dark gradient at top */}
            {/* <div className="absolute top-0 left-0 right-0 h-32 md:h-40 bg-gradient-to-b from-black via-black/50 to-transparent z-[5] pointer-events-none" /> */}
            
            {/* White gradient at bottom */}
            {/* <div className="absolute bottom-0 left-0 right-0 h-20 md:h-30 bg-circular-to-t from-white via-white/60 to-transparent z-5 pointer-events-none" /> */}
            
            <div className="grid gap-3 text-white z-10 px-4">
                {/* Main Greeting */}
                <SplitText
                    text="Happy Birthday, Lang!💛"
                    className="text-3xl font-serif"
                    delay={50}
                    duration={2}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="center"
                    showCallback
                />
                
                {/* Subheading */}
                <p id="hbd-text" className="max-w-sm md:max-w-md lg:max-w-lg xl:max-w-lg mx-auto text-xs opacity-90">
                    Today, on your special day, I want to be the first one to greet you happy happy birthday! Happy birthday to my supportive girlfriend, my best friend, and my ally!
                </p>
                
                {/* Age Counter */}
                <div id="hbd-text" className="mt-4">
                    <p className="text-xs opacity-80 mb-2">
                        you are now
                    </p>
                    <CountUp
                        from={0}
                        to={23} // update yearly
                        separator=","
                        direction="up"
                        duration={1}
                        className="text-5xl font-bold"
                        startCounting={false}
                    />
                    <p className="text-xs opacity-80">
                        years old
                    </p>
                </div>

                <div className="flex justify-center items-center gap-3 mt-5">
                    <a href="#memories" className="tooltip tooltip-bottom" data-tip="Memories">
                        <button className="btn btn-sm btn-circle btn-outline">
                            <Gift className="size-4"/>
                        </button>
                    </a>
                    <a href="#letters" className="tooltip tooltip-bottom" data-tip="My Message">
                        <button className="btn btn-sm btn-circle btn-outline">
                            <Mail className="size-4"/>
                        </button>
                    </a>
                </div>
                
                {/* Foreground Content */}
                <div className="z-10 flex items-center justify-center mt-8">
                    <BounceCards
                        className="custom-bounceCards"
                        images={images}
                        containerWidth={500}
                        containerHeight={250}
                        animationDelay={1}
                        animationStagger={0.08}
                        easeType="elastic.out(1, 0.5)"
                        transformStyles={transformStyles}
                        enableHover={true}
                    />
                </div>
                
                {/* Closing Line */}
                <p className="max-w-sm md:max-w-md lg:max-w-lg xl:max-w-lg mx-auto mt-8 text-xs opacity-75">
                    I am dedicating this website to be your official and personal birthday time capsule, starting this year. I hope you will like it!
                </p>
            </div>
        </div>
    );
};

export default Hero;