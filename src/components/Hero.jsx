const Hero = () => {
  return (
    <section className="flex  ml-16 items-center mb-30 justify-between p-20 ">
      <div className="w-[635px]">
        <h1 className="font-bold inline text-7xl ">
          Find the best <span className=" text-[#f67e7e]">talent</span>
        </h1>
      </div>
      <div className="w-[445px]  relative  ">
        <span className="w-12 h-1 absolute -top-10 left-0  bg-[#79c8c7]"></span>
        <p className="text-lg font-semibold">
          Finding the right people and building high performing teams can be
          hard. Most companies aren’t tapping into the abundance of global
          talent. We’re about to change that.
        </p>
      </div>
    </section>
  );
};

export default Hero;
