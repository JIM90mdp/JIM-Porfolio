import SocialMediaIcons from "../components/SocialMediaIcons";
import useMediaQuery from "../hooks/useMediaQuery";
import LineGradient from "../components/LineGradient";

const Footer = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  return isDesktop ? (
    <footer className="relative bg-opaque-black top-[30px]">
      <LineGradient width="w-[100%]" className="" />
      <div className=" flex justify-evenly items-center">
      <div className=" text-2xl flex flex-row">
       <p> JUAN IGNACIO </p> <p className=" text-2xl pl-1 text-green3">MASCARENHAS</p>
      </div>
        <SocialMediaIcons />
        <p className="text-md">
          ©2022 MASCARENHAS. All Rights Reserved.
        </p>
      </div>
    </footer>
  ) : (
    <footer className="relative bg-opaque-black pt-5 pb-5 top-[15px] w-[105%] p-5">
    <div className=" flex flex-col justify-center items-center">
      <div className=" text-2xl flex flex-row justify-evenly">
       <p> JUAN IGNACIO </p> <p className=" text-2xl pl-1 text-green3">MASCARENHAS</p>
      </div>
      <SocialMediaIcons />
      <p className="text-md">
        ©2022 MASCARENHAS. All Rights Reserved.
      </p>
    </div>
  </footer>
  )
};

export default Footer;
