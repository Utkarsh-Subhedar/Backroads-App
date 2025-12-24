import React from "react";
import { FaSquare } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";
import { FaSocks, FaTree } from "react-icons/fa";

const Services = () => {
  return (
    <div className="bg-grey-light-10 h-auto p-[2rem] md:p-[4rem]">
      <section className="" id="services">
        <div className="pb-12 md:pb-16 text-center">
          <h2 className="uppercase text-4xl md:text-5xl font-bold">
            our <span className="text-primary-dark-4">services</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 xl:gap-8">
          <article className="space-y-2">
            <span className="grid grid-cols-1 justify-items-center gap-2 md:gap-3">
              <span className="bg-primary-light-1 p-2">
                <FaWallet className="text-primary-dark-1 size-7 md:size-9 xl:size-10 2xl:size-12" />
              </span>{" "}
              <h4 className="capitalize text-sm xl:text-lg tracking-[4px] font-semibold">
                saving money
              </h4>
            </span>
            <div className="text-center">
              <p className="text-xs md:text-sm xl:text-base 2xl:text-xl text-grey-dark-4 tracking-widest">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, officia.
              </p>
            </div>
          </article>
          <article className="space-y-2">
            <span className="grid grid-cols-1 justify-items-center gap-2 md:gap-3">
              <span className="bg-primary-light-1 p-2">
                <FaTree className="text-primary-dark-1 size-7 md:size-9 xl:size-10 2xl:size-12" />
              </span>{" "}
              <h4 className="capitalize text-sm xl:text-lg tracking-[4px] font-semibold">
                endless hiking
              </h4>
            </span>
            <div className="text-center">
              <p className="text-xs md:text-sm xl:text-base 2xl:text-xl text-grey-dark-4 tracking-widest">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, officia.
              </p>
            </div>
          </article>
          <article className="space-y-2">
            <span className="grid grid-cols-1 justify-items-center gap-2 md:gap-3">
              <span className="bg-primary-light-1 p-2">
                <FaSocks className="text-primary-dark-1 size-7 md:size-9 xl:size-10 2xl:size-12" />
              </span>{" "}
              <h4 className="capitalize text-sm xl:text-lg tracking-[4px] font-semibold">
                amazing comfort
              </h4>
            </span>
            <div className="text-center">
              <p className="text-xs md:text-sm xl:text-base 2xl:text-xl text-grey-dark-4 tracking-widest">
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
