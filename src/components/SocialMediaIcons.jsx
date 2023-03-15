import EmailSVG from "../assets/emailSVG";
import GitHubSVG from "../assets/GitHubSVG";
import LinkedinSVG from "../assets/linkedinSVG";

const SocialMediaIcons = ({href}) => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">

      {/* <div className="hover:opacity-50 transition duration-500">
        <EmailSVG />
      </div> */}
      <div className="hover:opacity-50 transition duration-500">
        <LinkedinSVG />
      </div>
      <div className="hover:opacity-50 transition duration-500">
        <GitHubSVG href={href}/>
      </div>
     
    </div>
  );
};

export default SocialMediaIcons;
