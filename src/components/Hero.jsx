const Hero = () => {
  return (
    <section className=" bg-img1  py-[250px] px-[165px] ">
      <div className="flex justify-between items-center w-[1110px]">
        <h1 className=" text-[100px] leading-[100%]  w-[550px]  livvic-bold">
          Find the best <span className=" text-[#f67e7e]">talent</span>
        </h1>
        <div className=" w-[445px] relative">
          <span className="w-12 h-1 absolute -top-10 left-0  bg-[#79c8c7]"></span>
          <p className="text-lg ">
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
