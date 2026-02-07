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
            <div id="hbd-text" className="h-[25vh] flex items-center justify-center mt-10">
                <div className='grid'>
                    <h1 className="text-2xl font-bold text-center">
                        Memories
                    </h1>
                    <h2 className="text-center">
                        Feb. 03, 2025
                    </h2>
                    {/* Subheading */}
                    <div className="grid gap-4 max-w-xs md:max-w-md lg:max-w-xl xl:max-w-xl mx-auto text-xs text-center opacity-90 mt-8">
                        <p>
                            On this day, last year, was your first birthday that we're together. It was getting late, and we went to Antipolo. 
                        </p>
                        <p>
                            We went to church first, then we had ice cream and street foods. Well, I had better plans, but sadly it didn't worked out. 
                        </p>
                        <p>
                            All in all, it was a great celebration. We went to Padi's with overlooking city lights. It was fun. Indeed a core memory.
                        </p>
                    </div>
                </div>
            </div>

            {/* Row 2 — Full-width Gallery */}
            <div className="relative w-screen h-120">
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