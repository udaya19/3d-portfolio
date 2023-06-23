const Intro = () => {
  return (
    <div className="flex p-5 w-[60%]">
      <div className="flex flex-col justify-center items-center">
        <div className="w-5 h-5 rounded-full bg-red-500"></div>
        <div className="w-1 h-48 red-gradient"></div>
      </div>
      <div className="text-white p-8">
        <div>
          <p className="text-5xl font-extrabold">
            Hi, This is{" "}
            <span className="text-red-500 font-extrabold text-5xl">Udaya</span>
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
