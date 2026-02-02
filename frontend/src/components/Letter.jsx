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
                            <h2 className="font-serif text-3xl lg:text-4xl text-center text-neutral-800 mb-2">Happy Birthday,<br />Lang Lang!</h2>
                        </div>
                        
                        {/* Card Body */}
                        <div className="p-6 sm:p-8 lg:p-10 space-y-6 max-h-[50vh] overflow-y-auto">
                            <div id="hbd-text" className="prose prose-neutral max-w-none">
                                <p className="text-sm text-neutral-600 leading-relaxed">
                                    Dear Lang/Lang-Lang/Clyde/Clyde Vlitz,
                                </p>
                                <p className="text-sm text-neutral-600 leading-relaxed mt-4">
                                    Here's to another year of wonderful memories, breakthroughs, and dreams coming true. On this special day, what I only want is for you to enjoy, cherish,. 
                                </p>
                                <p className="text-sm text-neutral-600 leading-relaxed mt-4">
                                    May your day be filled with moments as beautiful as you are, and may the year ahead bring you endless reasons to smile.
                                </p>
                            </div>

                            
                            {/* Closing */}
                            <div id="hbd-text" className='text-end mt-10'>
                                <p className="text-md text-neutral-700 italic">
                                    With warmest wishes,
                                </p>
                                <p className="text-xl text-neutral-700 italic">
                                    Toti/Adrian
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