import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "../components/ui/magicButton";
import Img from "next/image";
const Footer = () => {
  return (
    <section id="contact">
    <footer className="relative w-full pt-24 pb-12 bg-gradient-to-b from-[#0f0f1a] to-[#06060d] text-white overflow-hidden">
      {/* Background Grid */}
      <div className="absolute left-0 -bottom-40 w-full opacity-30 pointer-events-none">
        <Img src="/footer-grid.svg" alt="Grid" className="w-full h-full" />
      </div>

      {/* Content Section */}
      <div className="relative flex flex-col items-center text-center px-6">
        <h1 className="heading lg:max-w-[45vw] text-3xl md:text-4xl font-bold">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-6 mt-4 text-lg">
          Reach out to me today and let&apos;s discuss how I can help you achieve
          your goals.
        </p>

        {/* Contact Button */}
        <a href="mailto:mohamedhalemm40@gmail.com" className="mt-8">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
          />
        </a>
      </div>

      {/* Bottom Section */}
      <div className="relative flex mt-16 md:flex-row flex-col justify-between items-center px-8 border-t border-gray-700 pt-6">
        <p className="text-sm md:text-base opacity-75">
          Copyright © 2025 Mohammed Abd ELHalim
        </p>

        {/* Social Media Icons */}
        <div className="flex items-center gap-4 mt-6 md:mt-0">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex justify-center items-center bg-white/10 rounded-xl border border-white/20 transition-all duration-300 hover:bg-purple-600 hover:scale-110 shadow-md"
            >
              <Img src={info.img} alt={info.name} width={24} height={24} />
            </a>
          ))}
        </div>
      </div>
    </footer>
    </section>
  );
};

export default Footer;
