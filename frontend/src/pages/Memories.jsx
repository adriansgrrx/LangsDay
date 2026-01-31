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
        <div className="w-screen h-screen relative">
            <div className="col text-black">
                
                <div style={{ height: '600px', position: 'relative' }}>
                    <CircularGallery bend={3} textColor="#000000" borderRadius={0.05} scrollEase={0.02}
                    bend={1}
                    borderRadius={0.05}
                    scrollSpeed={2}
                    scrollEase={0.05}
                    />
                </div>
            </div>
        </div>
    );
};

export default Memories;
