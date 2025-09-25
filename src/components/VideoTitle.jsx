import React from 'react'
import { Play, Info } from 'lucide-react'

const VideoTitle = ({ title, overview }) => {
    return (
        <div className='absolute top-0 left-0 w-full h-full flex items-center z-20'>
            <div className='pt-[20%] px-6 lg:px-12 w-full max-w-4xl'>
                <h1 className='text-white text-4xl lg:text-6xl font-bold mb-4 leading-tight'>
                    {title}
                </h1>
                <p className='text-white text-lg lg:text-xl w-full lg:w-3/4 mb-8 leading-relaxed opacity-90 line-clamp-3'>
                    {overview}
                </p>
                <div className='flex gap-4'>
                    <button className='bg-white text-black px-8 py-3 rounded-md font-semibold text-lg hover:bg-opacity-80 transition-all duration-200 flex items-center gap-2'>
                        <Play className="w-6 h-6" fill="currentColor" />
                        Play
                    </button>
                    <button className='bg-gray-600 bg-opacity-70 text-white px-8 py-3 rounded-md font-semibold text-lg hover:bg-opacity-90 transition-all duration-200 flex items-center gap-2'>
                        <Info className="w-6 h-6" />
                        More Info
                    </button>
                </div>
            </div>
        </div>
    )
}

export default VideoTitle