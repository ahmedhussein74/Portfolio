import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="h-[70px] flex justify-center items-center gap-[15px] lg:gap-[30px] text-[18px] lg:text-[20px] bg-fuchsia-800">
      <Link
        to="https://LinkedIn.com/in/ahmedhussein22"
        className="w-[35px] lg:w-[45px] h-[35px] lg:h-[45px] hover:bg-white bg-transparent hover:text-fuchsia-800 text-white flex justify-center items-center rounded-full border lg:border-2 border-white duration-500"
      >
        <i className="fa-brands fa-linkedin-in"></i>
      </Link>
      <Link
        to="https://github.com/ahmedhussein74"
        className="w-[35px] lg:w-[45px] h-[35px] lg:h-[45px] hover:bg-white bg-transparent hover:text-fuchsia-800 text-white flex justify-center items-center rounded-full border lg:border-2 border-white duration-500"
      >
        <i className="fa-brands fa-github"></i>
      </Link>
      <Link
        to="https://www.facebook.com/AhmedHusein22"
        className="w-[35px] lg:w-[45px] h-[35px] lg:h-[45px] hover:bg-white bg-transparent hover:text-fuchsia-800 text-white flex justify-center items-center rounded-full border lg:border-2 border-white duration-500"
      >
        <i className="fa-brands fa-facebook-f"></i>
      </Link>
      <Link
        to="https://wa.me/qr/6VYZYWSEUQMEC1"
        className="w-[35px] lg:w-[45px] h-[35px] lg:h-[45px] hover:bg-white bg-transparent hover:text-fuchsia-800 text-white flex justify-center items-center rounded-full border lg:border-2 border-white duration-500"
      >
        <i className="fa-brands fa-whatsapp"></i>
      </Link>
    </footer>
  );
};

export default Footer;
