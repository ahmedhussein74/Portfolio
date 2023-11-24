import react from "../images/react.png";
import tailwind from "../images/tailwind.png";
import interno from "../images/interno.png";
import travel from "../images/travel.png";
import largerthan from "../images/largerthan.png";
import finsweet from "../images/finsweet.png";
import skillBridge from "../images/SkillBridge.png";
import qr from "../images/QR-Code.png";
import istaix from "../images/istaix.png";
import country from "../images/country.png";
import greenMarket from "../images/greenMarket.png";
import { Link } from "react-router-dom";

const Projects = () => {
  const projects = [
    {
      img: interno,
      name: "interno",
      url: "https://interno-bice.vercel.app/",
      code: "https://github.com/ahmedhussein74/Interno",
    },
    {
      img: travel,
      name: "travel",
      url: "https://travel-orcin-five.vercel.app/",
      code: "https://github.com/ahmedhussein74/Travel",
    },
    {
      img: largerthan,
      name: "largerthan",
      url: "https://largerthan.vercel.app/",
      code: "https://github.com/ahmedhussein74/Largerthan",
    },
    {
      img: finsweet,
      name: "finsweet",
      url: "https://finsweet-umber.vercel.app/",
      code: "https://github.com/ahmedhussein74/Finsweet",
    },
    {
      img: skillBridge,
      name: "skill bridge",
      url: "https://skill-bridge-pi.vercel.app/",
      code: "https://github.com/ahmedhussein74/Skill-Bridge",
    },
    {
      img: qr,
      name: "qr code",
      url: "https://qr-code-seven-woad.vercel.app/",
      code: "https://github.com/ahmedhussein74/QR_Code",
    },
    {
      img: istaix,
      name: "istaix",
      url: "https://construction-flame.vercel.app/",
      code: "https://github.com/ahmedhussein74/Construction",
    },
    {
      img: country,
      name: "countries",
      url: "https://countries-eight-azure.vercel.app/",
      code: "https://github.com/ahmedhussein74/Countries",
    },
    {
      img: greenMarket,
      name: "green market",
      url: "https://green-market-six.vercel.app/",
      code: "https://github.com/ahmedhussein74/GreenMarket",
    },
  ];
  return (
    <section id="projects" className="px-[5%] lg:px-[10%] py-[30px]">
      <h1 className="w-[250px] mx-auto text-center font-bold text-[35px] lg:text-[50px] group">
        Projects
        <span className="w-[75px] mx-auto block border-b-[4px] border-b-fuchsia-800 group-hover:w-full duration-500"></span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] xl:gap-[50px] mt-[30px]">
        {projects.map((e, index) => (
          <div
            key={index}
            className="shadow border rounded-[15px] p-[10px] lg:p-[20px] duration-500 hover:translate-x-[-10px] hover:translate-y-[-10px]"
          >
            <img src={e.img} className="w-full border rounded-[10px]" />
            <h2 className="font-bold text-[20px] my-[10px] capitalize">
              {e.name}
            </h2>
            <div className="flex justify-between items-center">
              <p className="flex items-center gap-[10px]">
                <img src={react} className="w-[30px] h-[30px]" />
                <img src={tailwind} className="w-[35px] h-[20px]" />
              </p>
              <p className="flex gap-[10px] text-[20px]">
                <Link
                  to={e.url}
                  className=" w-[40px] h-[40px] flex justify-center items-center rounded-full hover:bg-fuchsia-800 hover:text-white duration-500"
                >
                  <i className="fa-solid fa-eye"></i>
                </Link>
                <Link
                  to={e.code}
                  className=" w-[40px] h-[40px] flex justify-center items-center rounded-full hover:bg-fuchsia-800 hover:text-white duration-500"
                >
                  <i className="fa-solid fa-code"></i>
                </Link>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
