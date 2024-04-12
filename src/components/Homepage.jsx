import React, { useState, useEffect } from 'react';
import image1 from '../images/HomeCarousel/image1.jpg';
import image2 from '../images/HomeCarousel/image2.jpg';
import image3 from '../images/HomeCarousel/image3.jpg';
import image4 from '../images/HomeCarousel/image4.jpg';
import { GoDot } from "react-icons/go";


const Homepage = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const carouselImages = [
        { id: 1, link: image1, text: 'AUTHENTIC INDIAN RESTAURANT & BAR' },
        { id: 2, link: image2, text: 'スパイスたっぷりの本格インドカレー' },
        { id: 3, link: image3, text: 'URBAN TADKA' },
        { id: 4, link: image4, text: '' },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
        }, 6000);

        return () => clearInterval(interval);
    }, [carouselImages.length]);

    const handleDotClick = (index) => {
        setCurrentImageIndex(index);
    };

    return (
        <div className='relative'>
            <div className='h-[50vh] sm:h-[65vh] w-full relative overflow-hidden'>
                {carouselImages.map((image, index) => (
                    <div className='flex justify-center items-center'>
                        <img
                            key={image.id}
                            src={image.link}
                            alt={`Slide ${index + 1}`}
                            className={`object-cover sm:object-cover absolute top-0 left-0 h-full w-full transition-opacity  ${index === currentImageIndex ? 'opacity-100 transition-transform duration-[6500ms] ease-linear scale-110' : 'opacity-0'
                                }`}
                        />
                        <h2 className={`${index === currentImageIndex ? 'absolute bottom-40 left-30 p-4 text-white flex justify-center items-center text-2xl sm:text-4xl sm:bottom-56' : 'hidden'} `}
                            key={image.id}
                        >
                            {image.text}
                        </h2>
                    </div>

                ))}
                <div className='absolute top-0 left-0 flex justify-center items-center w-full h-[26cm] z-10'>
                    {[...Array(carouselImages.length)].map((_, index) => (
                        <GoDot key={index} className={`h-10 text-white text-3xl mx-1 ${index === currentImageIndex ? 'opacity-100' : 'opacity-50'}`}
                            onClick={() => handleDotClick(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Homepage;