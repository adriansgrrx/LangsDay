import React, { useState, useEffect } from 'react'
import Letter from '../components/Letter';

const Letters = () => {
    const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
    const [isModalActive, setIsModalActive] = useState(false);

    const openCard = () => {
        setIsEnvelopeOpen(true);
        setTimeout(() => {
            setIsModalActive(true);
            document.body.style.overflow = 'hidden';
        }, 300);
    };

    const closeCard = () => {
        setIsModalActive(false);
        document.body.style.overflow = '';
        setTimeout(() => {
            setIsEnvelopeOpen(false);
        }, 300);
    };

    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                closeCard();
            }
        };
        document.addEventListener('keydown', handleEscape);
        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = '';
        };
    }, []);

    return (
        <div className='min-h-screen justify-center items-center'>
            <div className="max-w-6xl mx-auto">
                <div id="hbd-text" className="text-center">
                    <h1 className="text-2xl font-bold text-center">
                        Message
                    </h1>
                    <h2 className="text-center">
                        From Toti
                    </h2>
                </div>

                <div className="flex justify-center items-center min-h-[60vh]">
                    {/* Envelope (Clickable) */}
                    <div className="envelope-clickable w-full max-w-md mx-auto animate-fadeIn" style={{animationDelay: '0.2s'}} onClick={openCard}>
                        <div className={`relative envelope ${isEnvelopeOpen ? 'envelope-open' : ''}`}>
                            {/* Envelope body */}
                            <div className="bg-neutral-100 rounded-lg shadow-xl p-8 sm:p-10 lg:p-12 border border-neutral-200">
                                <div className="aspect-[4/3] bg-white rounded  items-center justify-center">
                                    
                                </div>
                                
                                
                            </div>
                            
                            {/* Envelope flap */}
                            <div className="envelope-flap absolute top-0 left-0 right-0 h-24 sm:h-28 bg-neutral-200 rounded-t-lg shadow-md border border-neutral-300" style={{clipPath: 'polygon(0 0, 100% 0, 50% 100%)'}}>
                                {/* <div className="absolute top-3 left-1/2 transform -translate-x-1/2">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-amber-50 rounded-full border-2 border-amber-200 flex items-center justify-center">
                                        <span className="text-amber-600 text-xs sm:text-sm font-serif">★</span>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                        
                        <p className="font-sans-custom text-xs text-center text-neutral-400 mt-4 tracking-wide">Click to open envelope</p>
                    </div>
                </div>
            </div>

            {/* Modal for Birthday Card */}
            <Letter isActive={isModalActive} onClose={closeCard}/>
        </div>
    )
}

export default Letters