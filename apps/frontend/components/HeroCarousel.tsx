import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const HeroCarousel = () => {
  return (
    <div className="w-full">
      <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        interval={5000}
        className="h-96"
      >
        <div>
          <img src="/images/slide1.jpg" alt="Slide 1" className="object-cover w-full h-full" />
        </div>
        <div>
          <img src="/images/slide2.jpg" alt="Slide 2" className="object-cover w-full h-full" />
        </div>
        <div>
          <img src="/images/slide3.jpg" alt="Slide 3" className="object-cover w-full h-full" />
        </div>
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
