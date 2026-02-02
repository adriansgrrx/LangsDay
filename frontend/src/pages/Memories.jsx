import React, { useEffect, useState } from 'react'
import VideoBG from '../components/VideoBG'
import DomeGallery from '../components/DomeGallery'
import CircularGallery from '../components/CircularGallery';
import CountUp from '../components/CountUp';

const Memories = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mq = window.matchMedia("(max-width: 768px)");
        const update = () => setIsMobile(mq.matches);
        update();
        mq.addEventListener("change", update);
        return () => mq.removeEventListener("change", update);
    }, []);
    return (
        <div className="min-h-screen bg-amber-50 overflow-x-hidden">
            {/* Row 1 — Text */}
            <div id="hbd-text" className="h-[25vh] flex items-center justify-center mt-5">
                <div className='grid'>
                    <h1 className="text-2xl font-bold text-center">
                        Our Memories
                    </h1>
                    <h2 className="text-center">
                        Feb. 03, 2025
                    </h2>
                    {/* Subheading */}
                    <p className="max-w-sm md:max-w-md lg:max-w-xl xl:max-w-lg mx-auto text-xs text-center opacity-90 mt-5">
                        On this day, last year, was your first birthday that we're together. It was getting late, and we went to Antipolo. 
                    </p>

                    <p className="max-w-sm md:max-w-md lg:max-w-xl xl:max-w-lg mx-auto text-xs text-center opacity-90 mt-3">
                        We went to church first, then we had ice cream and street foods. Well, I had better plans, but sadly it didn't worked out. 
                    </p>

                    <p className="max-w-sm md:max-w-md lg:max-w-xl xl:max-w-lg mx-auto text-xs text-center opacity-90 mt-3">
                        We went to church first, then we had ice cream and street foods. Well, I had better plans, but sadly it didn't worked out. 
                    </p>
                </div>
            </div>

            {/* Row 2 — Full-width Gallery */}
            <div className="relative w-screen h-150">
                <CircularGallery
                textColor="#000000"
                bend={1}
                borderRadius={0.05}
                scrollSpeed={2}
                scrollEase={0.05}
                />
            </div>
        </div>
    );
};

export default Memories;
