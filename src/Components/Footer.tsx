import Logo from "../assets/logo-text.png";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t mt-10">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Brand block */}
        <div className="md:col-span-1">
          <img src={Logo} alt="DevStack" className="h-8" />
          <p className="text-sm text-gray-500 mt-4 leading-relaxed">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>
          <div className="flex gap-5 mt-5 text-gray-500 text-lg">
            <a href="#" className="hover:text-gray-900">
              <FaGithub />
            </a>
            <a href="#" className="hover:text-gray-900">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-gray-900">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Product */}
        <div>
          <h4 className="text-sm font-semibold text-gray-800">PRODUCT</h4>
          <ul className="mt-4 space-y-2 text-sm text-gray-500">
            <li className="hover:text-gray-900 cursor-pointer">Home</li>
            <li className="hover:text-gray-900 cursor-pointer">Technologies</li>
            <li className="hover:text-gray-900 cursor-pointer">Projects</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-sm font-semibold text-gray-800">COMPANY</h4>
          <ul className="mt-4 space-y-2 text-sm text-gray-500">
            <li className="hover:text-gray-900 cursor-pointer">About</li>
            <li className="hover:text-gray-900 cursor-pointer">Contact</li>
            <li className="hover:text-gray-900 cursor-pointer">Careers</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-sm font-semibold text-gray-800">LEGAL</h4>
          <ul className="mt-4 space-y-2 text-sm text-gray-500">
            <li className="hover:text-gray-900 cursor-pointer">Privacy Policy</li>
            <li className="hover:text-gray-900 cursor-pointer">Terms of Service</li>
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-gray-400">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-700">Privacy</a>
            <a href="#" className="hover:text-gray-700">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;