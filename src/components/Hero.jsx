import bg from "../images/bg.jpg";
import cv from "../images/cv.pdf";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <section id="home" className="px-[5%] lg:px-[10%] h-screen flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between gap-[30px] lg:gap-0">
      <div className="w-full lg:w-fit font-bold text-[25px] md:text-[35px] xl:text-[50px]">
        <p className="text-center lg:text-start">Hi, I'm Ahmed Hussein.</p>
        <div className="text-fuchsia-800 flex justify-center lg:justify-start gap-[5px] md:gap-[10px]">
          <span className="text-black">I'm a</span>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Front End Developer.")
                .pauseFor(1500)
                .start();
            }}
            options={{
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <div className="flex justify-center lg:justify-start gap-[20px] text-[35px] lg:text-[45px]">
          <a href="https://LinkedIn.com/in/ahmedhussein22">
            <i className="fa-brands fa-linkedin text-[#0072b1]"></i>
          </a>
          <a href="https://github.com/ahmedhussein74">
            <i className="fa-brands fa-square-github text-[#333]"></i>
          </a>
          <a href="https://www.facebook.com/AhmedHusein22">
            <i className="fa-brands fa-square-facebook text-[#1877F2]"></i>
          </a>
          <a href="https://wa.me/qr/6VYZYWSEUQMEC1">
            <i className="fa-brands fa-square-whatsapp text-[#24b43b]"></i>
          </a>
        </div>
        <a
          href={cv}
          download
          className="w-[175px] py-[5px] mx-auto lg:mx-0 block text-center text-[20px] text-white rounded bg-fuchsia-800"
        >
          Download CV
        </a>
      </div>
      <img
        src={bg}
        style={{
          borderRadius: "50% 50% 45% 55% / 60% 30% 70% 40% ",
        }}
        className="h-[300px] lg:h-[450px] shadow-lg"
      />
    </section>
  );
};

export default Hero;
