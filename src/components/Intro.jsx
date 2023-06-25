const Intro = () => {
  return (
    <div
      data-aos="fade-up"
      className="flex p-5 lg:w-[60%] md:mt-20 lg:mt-2 lg:ml-1 mt-20 ml-4"
    >
      <div className="flex flex-col justify-center items-center">
        <div className="w-5 h-5 rounded-full bg-red-500"></div>
        <div className="w-1 lg:h-48 h-56 red-gradient"></div>
      </div>
      <div className="text-white p-8">
        <div>
          <p className="text-5xl font-extrabold">
            Hi, This is{" "}
            <span className="text-red-500 font-extrabold text-5xl">
              Udaya Kiran
            </span>
          </p>
        </div>
        <div className="mt-3">
          <p className="font-medium text-lg">
            I am a full stack developer and a blockchain enthusiast
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
