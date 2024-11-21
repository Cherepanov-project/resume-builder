import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const SocialNetworksComponent = () => {
  return (
    <div className="flex items-center gap-4">
      <a href="" className="flex justify-center items-center w-5 h-5">
        <FaFacebook className="w-5 h-5 text-blue-600" title="Facebook" />
      </a>
      <a href="" className="flex justify-center items-center w-5 h-5">
        <FaTwitter className="w-5 h-5 text-blue-500" title="Twitter" />
      </a>
      <a href="" className="flex justify-center items-center w-5 h-5">
        <FaInstagram className="w-5 h-5 text-pink-500" title="Instagram" />
      </a>
      <a href="" className="flex justify-center items-center w-5 h-5">
        <FaLinkedin className="w-5 h-5 text-blue-700" title="LinkedIn" />
      </a>
    </div>
  );
};

export default SocialNetworksComponent;
