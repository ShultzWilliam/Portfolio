import { useEffect, useState } from 'react';
import { IoArrowDownCircleOutline } from "react-icons/io5";
import './Hero.css'; // Import the CSS file for styling

function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollDown = () => {
    const nextSection = document.getElementById('aboutme-container');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <section
        id="hero-container"
        className="bg-gray-900 h-screen flex flex-col justify-center items-center"
      >
        <div className={`flex flex-col justify-center items-center ${isVisible ? 'fade-in' : 'fade-out'}`}>
        <article className="font-vidaloka p-4 -mt-10 header-text flex flex-col text-slate-50">
          <p className="text-7xl lg:text-8xl text-center"><span>I'm Wil Shultz</span></p>
          <p className="text-3xl mt-3 text-center">Full Stack Web Developer</p>
        </article>
        <article>
          <p className="p-4 text-center font-roboto font-300 text-2xl lg:text-2xl text-gray-500 mt-3 sm:mt-10 ">specializing in crafting websites people actually want to use</p>
        </article>
        <button className="mt-5 sm:mt-20 cursor-pointer" onClick={scrollDown}>
          <IoArrowDownCircleOutline className="animate-bounce h-10 transition-all duration-300 text-orange-500 hover:text-blue-500 w-auto" />
        </button>
        </div>
      </section>
    </>
  );
}

export default Hero;
