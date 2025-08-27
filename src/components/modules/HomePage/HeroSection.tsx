import Slider from "react-slick";
import { Button } from "@/components/ui/button";
import Image1 from '../../../assets/hero1.jpg';
import Image2 from '../../../assets/hero2.jpg';
import Image3 from '../../../assets/hero3.jpg';

const Hero = () => {
  const slides = [
    {
      title: "Fast & Secure Payments",
      description:
        "Send and receive money instantly with SCASH, your trusted digital wallet.",
      image: Image1,
    },
    {
      title: "Pay Bills Easily",
      description: "Manage all your bills from one app without any hassle.",
      image: Image2,
    },
    {
      title: "Track Transactions",
      description:
        "Stay on top of your finances with real-time transaction tracking.",
      image: Image3,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <section className="relative bg-gray-50">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative h-[80vh] flex items-center justify-center">
            <img
              src={slide.image}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/10" />
            
            <div className="relative z-10 text-center text-white px-4 md:px-10 flex h-full justify-center items-center flex-col">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                {slide.title}
              </h1>
              <p className="text-lg md:text-2xl mb-6 drop-shadow-md">
                {slide.description}
              </p>
              <Button className="bg-white text-black" size="lg">
                Get Started
              </Button>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Hero;
