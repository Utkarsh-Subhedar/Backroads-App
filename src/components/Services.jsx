import React from "react";

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
          <article className="service">
            <span className="service-icon">
              <i className="fas fa-wallet fa-fw"></i>
            </span>
            <div className="service-info">
              <h4 className="service-title">saving money</h4>
              <p className="service-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, officia.
              </p>
            </div>
          </article>

          <article className="service">
            <span className="service-icon">
              <i className="fas fa-tree fa-fw"></i>
            </span>
            <div className="service-info">
              <h4 className="service-title">endless hiking</h4>
              <p className="service-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, officia.
              </p>
            </div>
          </article>

          <article className="service">
            <span className="service-icon">
              <i className="fas fa-socks fa-fw"></i>
            </span>
            <div className="service-info">
              <h4 className="service-title">amazing comfort</h4>
              <p className="service-text">
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
