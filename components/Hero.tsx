const Hero = () => {
  return (
    <div className="hero flex justify-between items-center mt-[155px]">
      <div className="flex flex-col">
        <span className="font-semibold text-lg">
          Join our premier monthly meetup for startup founders and tech
          visionaries
        </span>
        <h1 className="text-[--primary800] font-bold text-5xl">
          Connect, Collaborate, Innovate!
        </h1>
        <p className="my-10 text-[24px]">
          Every last Friday of the month, we bring together the brightest minds
          in our local tech ecosystem. Whether you're a seasoned entrepreneur or
          just starting your journey, Founder's Friday is your launchpad for new
          ideas, valuable connections, and game-changing opportunities.
        </p>
      </div>
      <div className="flex flex-col"></div>
    </div>
  );
};

export default Hero;
