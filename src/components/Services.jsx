const Services = () => {
  const services = [
    {
      icon: "fa-solid fa-laptop",
      title: "Responsive Website",
      description:
        "Ensure seamless user experience across various devices by employing responsive web design techniques. Develop layouts that adapt to different screen sizes and resolutions, providing an optimal viewing experience for users on desktops, tablets, and smartphones.",
    },
    {
      icon: "fa-solid fa-code",
      title: "UI Development",
      description:
        "Craft visually appealing and intuitive user interfaces that enhance user interactions. Utilize HTML, CSS, and JavaScript to create aesthetically pleasing designs with a focus on user-friendly navigation and engaging visual elements.",
    },
    {
      icon: "fa-solid fa-shield",
      title: "Cross-Browser Compatibility",
      description:
        "Guarantee a consistent user experience by addressing cross-browser compatibility challenges. Test and optimize websites to ensure functionality and performance across popular web browsers, allowing users to access your site seamlessly, regardless of their preferred browser.",
    },
    {
      icon: "fa-brands fa-react",
      title: "Framework Integration",
      description:
        "Leverage powerful front-end frameworks such as React, Angular, or Vue.js to streamline the development process and enhance the functionality of web applications. Utilize these frameworks to build scalable and modular components, optimizing both performance and code maintainability.",
    },
    {
      icon: "fa-solid fa-sitemap",
      title: "Web Accessibility (WCAG)",
      description:
        "Prioritize inclusivity by implementing Web Content Accessibility Guidelines (WCAG) standards. Develop websites that are accessible to users with disabilities, ensuring that everyone can navigate and interact with your content easily. This involves incorporating features like screen reader compatibility and keyboard navigation.",
    },
    {
      icon: "fa-solid fa-gears",
      title: "Performance Optimization",
      description:
        "Enhance website speed and efficiency through performance optimization techniques. Employ best practices in code splitting, image optimization, and lazy loading to reduce page load times. Improve the overall user experience by delivering fast and responsive web applications.",
    },
  ];
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
        {services.map((e, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow py-[25px] px-[10px] text-center duration-500 hover:translate-x-[-10px] hover:translate-y-[-10px]"
          >
            <i className={`${e.icon} text-[35px] text-fuchsia-800`}></i>
            <h2 className="font-bold text-[20px] my-[15px]">{e.title}</h2>
            <p className="italic text-gray-500 text-sm">{e.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
