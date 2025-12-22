import React from "react";
import { FaSquare } from "react-icons/fa";

const Services = () => {
  return (
    <div className="bg-grey-light-10 h-auto p-[4rem]">
      <section className="" id="services">
        <div className="pb-12 md:pb-16 text-center">
          <h2 className="uppercase text-4xl md:text-5xl font-bold">
            our <span className="text-primary-dark-4">services</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3">
          <article className="space-y-1">
            <span className="flex items-center gap-1">
              <FaSquare className="text-primary-light-1" />
              <h4 className="uppercase text-sm tracking-widest font-semibold">
                saving money
              </h4>
            </span>
            <div className="max-w-[300px]">
              <p className="ml-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, officia.
              </p>
            </div>
          </article>

          <article className="space-y-1">
            <span className="flex items-center gap-1">
              <FaSquare className="text-primary-light-1" />
              <h4 className="uppercase text-sm tracking-widest font-semibold">
                endless hiking
              </h4>
            </span>
            <div className="service-info max-w-[300px]">
              <p className="ml-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, officia.
              </p>
            </div>
          </article>

          <article className="space-y-1">
            <span className="service-icon flex items-center gap-1">
              <FaSquare className="text-primary-light-1" />
              <h4 className="uppercase text-sm tracking-widest font-semibold">
                amazing comfort
              </h4>
            </span>
            <div className="max-w-[300px]">
              <p className="ml-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, officia.
              </p>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Services;
