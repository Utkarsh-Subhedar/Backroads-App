import React from "react";
import hero from "../assets/main.jpeg";
const Hero = () => {
  return (
    <div
      className="bg-cover bg-center w-full h-150 *:text-white "
      style={{ backgroundImage: `url(${hero})` }}
    >
      <section className="bg-linear-to-b from-primary-dark-3/70 via-primary-dark-3/60 to-black/60 h-full flex items-center justify-center">
        <div class="text-center space-y-1 md:space-y-5">
          <h1 className="text-5xl/tight md:text-6xl tracking-[0.2rem] md:tracking-[.30rem] uppercase font-sans font-bold">
            continue exploring
          </h1>
          <p className="max-w-184 px-8 md:px-8 tracking-[0.1rem] md:tracking-[.25rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            explicabo debitis est autem dicta.
          </p>
          <div className="mt-8">
            <a
              href="#tours"
              class="uppercase bg-white text-primary-light-1 text-xl px-8 py-4 hover:bg-transparent border-2 border-transparent hover:border-white hover:text-white tracking-widest duration-500"
            >
              explore tours
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
