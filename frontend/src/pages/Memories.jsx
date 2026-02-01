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
        <div className="min-h-screen bg-amber-100 overflow-x-hidden">
            {/* Row 1 — Text */}
            <div id="hbd-text" className="h-[25vh] flex items-center justify-center">
                <div className='grid'>
                    <h1 className="text-2xl font-bold text-center">
                        Our Memories
                    </h1>
                    <h2 className="text-center">
                        Feb. 03, 2025
                    </h2>
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
