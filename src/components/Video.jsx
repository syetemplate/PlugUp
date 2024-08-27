'use client';

import React from 'react';
import clsx from 'clsx';
import videoBgImage from '@/assets/bg/video.jpg';
import content from '@/content';

const Video = ({ className }) => {
    const [isVideoOpen, setVideoOpen] = React.useState(false);

    const handleVideoClick = () => {
        setVideoOpen(true);
    };

    const handleCloseVideo = () => {
        setVideoOpen(false);
    };

    return (
        <section
            id="video"
            className={clsx('px-4 sm:px-8 lg:px-28 py-32 bg-cover bg-center video-bg', [className])}
            style={{ backgroundImage: `url(${videoBgImage.src})` }}
        >
            <div className="sm:w-10/12 lg:w-7/12">
                <div className="flex flex-col items-center justify-center">
                    <div className="relative mb-12">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="absolute top-[50%] left-[50%] w-[8rem] h-[8rem] bg-white opacity-20 rounded-full animated2 hoop infinite duration-4000"></div>
                        </div>
                        <button
                            onClick={handleVideoClick}
                            className="relative z-10 flex items-center justify-center text-white text-xl w-24 h-24 rounded-full bg-primary"
                        >
                            <i className="fas fa-play"></i>
                        </button>
                    </div>
                    <div className="text-center">
                        <h2 className="text-4xl font-bold text-white">{content.video.title}</h2>
                        <p className="text-sm font-medium text-gray-300 leading-6 mt-6 mb-8">{content.video.description}</p>
                        <a href={content.video.cta.href}>
                            <button className="hover:bg-transparent">{content.video.cta.text}</button>
                        </a>
                    </div>
                </div>
            </div>
            {isVideoOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 px-4">
                    <div className="relative w-full h-4/6 max-w-4xl">
                        <button onClick={handleCloseVideo} className="absolute p-4 -top-[52px] -right-[16px] bg-transparent hover:bg-transparent border-transparent text-white text-2xl flex items-center justify-center animated2 fadeIn">
                            <i className="fas fa-times"></i>
                        </button>
                        <iframe
                            className="w-full h-full"
                            src={`https://www.youtube.com/embed/${content.video.youtubeVideoId}?autoplay=1`}
                            allowFullScreen
                            title={content.meta.title}
                        />
                    </div>
                </div>
            )}
        </section>
    );
};

export default Video;
