import React from 'react'

const VideoBG = () => {
    return (
        <div>
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="/video/video-bg.mp4"
                autoPlay
                loop
                muted
            />
            {/* Dark Overlay for better text readability */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/70"></div>
        </div>
    )
}

export default VideoBG