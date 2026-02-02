import React from 'react'

const Letter = ({ isActive, onClose }) => {
    if (!isActive) return null;

    return (
        <div className="modal-active fixed inset-0 flex items-center justify-center z-40 p-5">
            {/* Backdrop */}
            <div className="modal-backdrop fixed inset-0 bg-black/50 bg-opacity-50 backdrop-blur-sm" onClick={onClose}></div>
            
            {/* Modal Content */}
            <div className="modal-content relative z-40 m-auto w-full max-w-2xl">
                {/* Birthday Card */}
                <div className="card-hover w-full max-w-2xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-neutral-100">
                        {/* Card Header with decorative element */}
                        <div className="bg-gradient-to-r from-neutral-50 to-stone-50 p-6 sm:p-8 lg:p-10 border-b border-neutral-100">
                            <div className="flex items-center justify-center mb-4">
                                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-neutral-300"></div>
                                
                                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-neutral-300"></div>
                            </div>
                            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-center text-neutral-800 mb-2">Happy Birthday,<br />Lang Lang!</h2>
                        </div>
                        
                        {/* Card Body */}
                        <div className="p-6 sm:p-8 lg:p-10 space-y-6 max-h-[50vh] overflow-y-auto">
                            <div className="prose prose-neutral max-w-none">
                                <p className="font-sans-custom text-sm sm:text-base text-neutral-600 leading-relaxed">
                                    Dear Lang/Lang-Lang/Clyde/Clyde Vlitz,
                                </p>
                                <p className="font-sans-custom text-sm sm:text-base text-neutral-600 leading-relaxed mt-4">
                                    On this special day, may you be surrounded by love, laughter, and everything that brings you happiness. Here's to another year of wonderful memories, new adventures, and dreams coming true.
                                </p>
                                <p className="font-sans-custom text-sm sm:text-base text-neutral-600 leading-relaxed mt-4">
                                    May your day be filled with moments as beautiful as you are, and may the year ahead bring you endless reasons to smile.
                                </p>
                            </div>

                            
                            {/* Closing */}
                            <div className="space-y-4">
                                <p className="font-serif text-xl sm:text-2xl text-neutral-700 italic">
                                    With warmest wishes,
                                </p>
                                <p className="font-serif text-2xl sm:text-3xl text-neutral-800">
                                    From Toti
                                </p>
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Letter