const Hero = () => {
  return (
    <section className=" bg-img1 hero-section ">
      <div className="content">
        <h1 className=" responsive-h1 livvic-bold">
          Find the best <span className=" text-[#f67e7e]">talent</span>
        </h1>
        <div className=" p-content relative">
          <span className="w-12 h-1 span absolute -top-10 left-0  bg-[#79c8c7]"></span>
          <p className="p">
            Finding the right people and building high performing teams can be
            hard. Most companies aren’t tapping into the abundance of global
            talent. We’re about to change that.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
