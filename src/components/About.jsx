import about from "../assets/about.jpeg";

const About = () => {
  return (
    <section id="about" className="mb-20 px-4 sm:px-8 lg:px-16 text-center">
      <div className="my-10 md:my-16">
        <h2 className="uppercase text-3xl sm:text-4xl md:text-5xl font-bold text-grey-dark-1">
          about <span className="text-primary-dark-4">us</span>
        </h2>
      </div>

      <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-2 ">
        <div className="flex justify-center">
          <img
            src={about}
            alt="awesome beach"
            className="w-full max-w-md sm:max-w-xl outline-8 outline-offset-4 outline-double outline-primary-dark-4"
          />
        </div>

        <article className="text-left space-y-4 px-0 sm:px-12">
          <h3 className="capitalize text-xl sm:text-2xl lg:text-3xl tracking-wider font-bold text-grey-dark-1">
            explore the difference
          </h3>

          <p className="text-sm sm:text-base text-grey-dark-4 max-w-prose">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>

          <p className="text-sm sm:text-base text-grey-dark-4 max-w-prose">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>

          <div className="pt-4">
            <a
              href="#"
              className="inline-block tracking-[4px] uppercase text-sm font-medium text-white px-5 py-3 bg-primary-dark-4 hover:bg-primary-light-1 hover:text-grey-dark-2 transition"
            >
              read more
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default About;
