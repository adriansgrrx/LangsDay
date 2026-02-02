import React from 'react';
import { LoaderIcon } from 'lucide-react';
import VideoBG from './VideoBG';

const Loader = () => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center text-white">
            <div>
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    src="https://langdays.z23.web.core.windows.net/assets/video-bg.mp4"
                    autoPlay
                    loop
                    muted
                />
                {/* Dark Overlay for better text readability */}
                <div className="absolute top-0 left-0 w-full h-full backdrop-blur-md bg-black/70"></div>
            </div>
            <span className="loading loading-dots loading-sm"></span>
        </div>
    );
};

export default Loader;