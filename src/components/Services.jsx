const Services = () => {
  return (
    <section
      id="services"
      className="px-[5%] lg:px-[10%] py-[30px] bg-stone-50"
    >
      <h1 className="w-[250px] mx-auto text-center font-bold text-[35px] lg:text-[50px] group">
        Services
        <span className="w-[75px] mx-auto block border-b-[4px] border-b-fuchsia-800 group-hover:w-full duration-500"></span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] xl:gap-[50px] mt-[30px]">
        <div className="bg-white rounded-lg shadow py-[25px] px-[10px] text-center">
          <i className="fa-solid fa-laptop text-[30px] text-fuchsia-800"></i>
          <h2 className="font-bold text-[20px] my-[15px]">
            Responsive Website
          </h2>
          <p className="">
            I specialize in creating responsive websites that adapt seamlessly
            to different screen sizes and devices. By employing cutting-edge
            front-end development techniques, I ensure that your website looks
            and functions flawlessly across desktops, tablets, and mobile
            devices.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow py-[25px] px-[10px] text-center">
          <i className="fa-solid fa-code text-[30px] text-fuchsia-800"></i>
          <h2 className="font-bold text-[20px] my-[15px]">Custom Website</h2>
          <p className="">
            I believe that a visually appealing website is essential for
            captivating and retaining visitors. As a front-end developer, I have
            a keen eye for design and can craft custom website layouts tailored
            to your brand and target audience.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow py-[25px] px-[10px] text-center">
          <i className="fa-solid fa-diagram-project text-[30px] text-fuchsia-800"></i>
          <h2 className="font-bold text-[20px] my-[15px]">
            Performance Optimization
          </h2>
          <p className="">
            In today's fast-paced digital landscape, website speed and
            performance are crucial for user satisfaction and search engine
            rankings. I specialize in optimizing front-end code to enhance
            website performance, reduce loading times, and improve overall
            responsiveness.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
