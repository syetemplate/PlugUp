'use client';

import React from 'react';
import clsx from 'clsx';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import faqBgImage from '@/assets/bg/faq.jpg';
import content from '@/content';

const FaqImage = dynamic(() => import(`@/assets/media/${content.faq.imageName}`).then(module => {
    const Component = ({ fill, ...props }) => (
        <Image
            {...props}
            src={module.default}
            alt="faq"
            width={880}
            height={700}
            sizes="(min-width: 960px) 50vw, 90vw"
            className="w-[620px] object-contain p-8"
        />
    );
    Component.displayName = `Image-${content.hero.imageName}`;
    return Component;
}), {
    loading: () => <div className="w-[620px] object-contain p1 bg-gray-200 animate-pulse" />,
});

const Faq = ({ className }) => {
    const [activeIndex, setActiveIndex] = React.useState();

    const handleAccordionClick = index => {
        setActiveIndex(activeIndex === index ? -1 : index);
    };

    return (
        <section
            id="faq"
            className={clsx('flex flex-col items-center min-w-full px-4 sm:px-8 lg:px-28 py-28 pb-[344px] lg:pb-[190px]', [className])}
            style={{
                backgroundImage: `url(${faqBgImage.src})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
            }}
        >
            <div className="container mx-auto">
                <div className="flex justify-center">
                    <div className="w-full md:w-4/5 lg:w-7/12">
                        <div className="section-title text-center mb-55">
                            <h2>{content.faq.title}</h2>
                            <div className="bar"/>
                            <p>{content.faq.description}</p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 rtl:grid-flow-col-reverse">
                    <div className="faq-img">
                        <FaqImage />
                    </div>
                    <div className="faq-wrapper-padding">
                        <div className="faq-wrapper">
                            <div className="space-y-4">
                                {content.faq.list.map((faq, index) => (
                                    <div
                                        key={index}
                                        className="border border-gray-300 rounded-lg p-6 cursor-pointer bg-white"
                                        onClick={() => handleAccordionClick(index)}
                                    >
                                        <div className="flex justify-between items-center">
                                            <h3 className={`text-base font-semibold transition-colors duration-500 ${activeIndex === index ? 'text-primary' : ''}`}>{faq.question}</h3>
                                            <span className={`text-xl flex items-center transition-colors duration-500 ${activeIndex === index ? 'text-primary' : ''}`}>
                                                <span className={clsx('w-6 h-6 rounded-full border-2 border-current flex items-center justify-center mr-2', {
                                                    'pb-1': (activeIndex === index),
                                                    'pb-[2px]': (activeIndex !== index),
                                                })}>
                                                    {activeIndex === index ? '-' : '+'}
                                                </span>
                                            </span>
                                        </div>
                                        <div
                                            className={`overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === index ? 'max-h-40' : 'max-h-0'
                                                }`}
                                        >
                                            <div className="mt-4 text-gray-600">
                                                <div className="border-b border-gray-300 my-4"></div>
                                                <p>{faq.answer}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;