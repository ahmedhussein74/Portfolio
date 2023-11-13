import bg from "../images/bg.jpg";

const About = () => {
  return (
    <section id="about" className="px-[5%] lg:px-[10%] py-[50px]">
      <h1 className="w-[250px] mx-auto text-center font-bold text-[40px] lg:text-[50px] group">
        About me
        <span className="w-[75px] mx-auto block border-b-[4px] border-b-fuchsia-800 group-hover:w-full duration-500"></span>
      </h1>
      <div className="mt-[50px] flex flex-col lg:flex-row justify-between xl:justify-around gap-[20px]">
        <img
          src={bg}
          className="w-fit h-[300px] xl:h-[500px] mx-auto lg:mx-0 shadow-lg border"
        />
        <div className="w-full lg:w-[500px] flex flex-col gap-[20px] lg:gap-[40px] lg:text-[18px]">
          <p>
            My name is Ahmed Hussein, and I am a passionate developer
            specializing in front-end development using React.js and back-end
            development using Node.js. With over 2 years of experience in
            front-end development and 1 year of experience in back-end
            development, I have gained a solid understanding of building robust
            and user-friendly web applications.
          </p>
          <p>
            I am currently pursuing my studies in the Faculty of Computers and
            Artificial Intelligence at Cairo University, where I am continuously
            expanding my knowledge in the field of computer science. My academic
            background has provided me with a strong foundation in programming
            principles and problem-solving skills.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
