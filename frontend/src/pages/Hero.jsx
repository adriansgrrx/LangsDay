import React from "react";
import VideoBG from "../components/VideoBG";
import BounceCards from "../components/BounceCards";
import SplitText from "../components/SplitText";
import CountUp from "../components/CountUp";

const Hero = () => {
    const images = [
        "https://picsum.photos/400/400?grayscale",
        "https://picsum.photos/500/500?grayscale",
        "https://picsum.photos/600/600?grayscale",
        "https://picsum.photos/700/700?grayscale",
        "https://picsum.photos/300/300?grayscale",
    ];

    const transformStyles = [
        "rotate(5deg) translate(-150px)",
        "rotate(0deg) translate(-70px)",
        "rotate(-5deg)",
        "rotate(5deg) translate(70px)",
        "rotate(-5deg) translate(150px)",
    ];

    return (
        <div className="min-h-screen overflow-hidden flex items-center justify-center text-center">
            {/* Background */}
            <VideoBG />

            <div className="grid gap-3 text-white z-10 mb-35">
                {/* Main Greeting */}
                <div id="hbd-text">
                    <SplitText
                        text="Happy Birthday, Lang!💛"
                        className="text-2xl md:text-4xl font-display font-semibold py-5"
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
                </div>

                {/* Subheading */}
                <p className="max-w-sm md:max-w-md lg:max-w-lg xl:max-w-lg mx-auto text-sm md:text-base opacity-90">
                    A little corner of the internet made just for you—to celebrate today, remember the past, and keep every birthday close.
                </p>

                {/* Age Counter */}
                <div className="mt-4">
                    <CountUp
                        from={0}
                        to={23} // update yearly
                        separator=","
                        direction="up"
                        duration={1}
                        className="text-5xl md:text-6xl font-bold"
                        startCounting={false}
                    />
                    <p className="mt-2 text-sm opacity-80">
                        Celebrating 23 wonderful years
                    </p>
                </div>

                {/* Foreground Content */}
                <div className="z-10 flex items-center justify-center mt-10">
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
                <p className="max-w-sm md:max-w-md lg:max-w-lg xl:max-w-lg mx-auto mt-8 text-xs md:text-sm opacity-75">
                    This isn’t just for today. This is for every year you deserve to be celebrated.
                </p>
            </div>
        </div>
    );
};

export default Hero;