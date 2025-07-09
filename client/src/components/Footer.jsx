import { MdLocationPin } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { SiAboutdotme } from "react-icons/si";

const Footer = () => {
  return (
    <div className="text-gray-500/80 pt-8 px-6 md:px-16 lg:px-24 xl:px-32 bg-no-repeat bg-cover drop-shadow-2xl"
     style={{ backgroundImage: "url('https://t3.ftcdn.net/jpg/06/48/82/52/360_F_648825223_TBcDqLeHKE8uHkhTJq43YFS3opzTF0KJ.jpg') ", boxShadow: "0 -4px 10px -1px rgba(0, 0, 0, 0.1)"}}>
      <div className="flex flex-wrap justify-between gap-12 md:gap-6">
        <div className="max-w-80">
          <h1 className="text-3xl font-semibold text-[#212121]">
            Chanchal Mega Mart
          </h1>
          <p className="text-sm">Serving Hostel & Home, since always.</p>
           <p className="text-sm">estd. 2011 , Now ONLINE ! </p>
          <div className="flex items-center gap-3 mt-4">
            {/* Instagram */}
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zM4.5 7.75A3.25 3.25 0 017.75 4.5h8.5a3.25 3.25 0 013.25 3.25v8.5a3.25 3.25 0 01-3.25 3.25h-8.5a3.25 3.25 0 01-3.25-3.25v-8.5zm9.5 1a4 4 0 11-4 4 4 4 0 014-4zm0 1.5a2.5 2.5 0 102.5 2.5 2.5 2.5 0 00-2.5-2.5zm3.5-.75a.75.75 0 11.75-.75.75.75 0 01-.75.75z" />
            </svg>
            {/* Facebook */}
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13.5 9H15V6.5h-1.5c-1.933 0-3.5 1.567-3.5 3.5v1.5H8v3h2.5V21h3v-7.5H16l.5-3h-3z" />
            </svg>
            {/* Twitter */}
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 5.92a8.2 8.2 0 01-2.36.65A4.1 4.1 0 0021.4 4a8.27 8.27 0 01-2.6 1A4.14 4.14 0 0016 4a4.15 4.15 0 00-4.15 4.15c0 .32.04.64.1.94a11.75 11.75 0 01-8.52-4.32 4.14 4.14 0 001.29 5.54A4.1 4.1 0 013 10v.05a4.15 4.15 0 003.33 4.07 4.12 4.12 0 01-1.87.07 4.16 4.16 0 003.88 2.89A8.33 8.33 0 012 19.56a11.72 11.72 0 006.29 1.84c7.55 0 11.68-6.25 11.68-11.67 0-.18 0-.35-.01-.53A8.18 8.18 0 0022 5.92z" />
            </svg>
            {/* LinkedIn */}
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4.98 3.5C3.88 3.5 3 4.38 3 5.48c0 1.1.88 1.98 1.98 1.98h.02c1.1 0 1.98-.88 1.98-1.98C6.98 4.38 6.1 3.5 4.98 3.5zM3 8.75h3.96V21H3V8.75zm6.25 0h3.8v1.68h.05c.53-.98 1.82-2.02 3.75-2.02 4.01 0 4.75 2.64 4.75 6.07V21H17v-5.63c0-1.34-.03-3.07-1.88-3.07-1.88 0-2.17 1.47-2.17 2.98V21H9.25V8.75z" />
            </svg>
          </div>
        </div>

        <div>
          <p className="text-lg text-gray-800">QUICK LINKS</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Offers & Deals</a>
            </li>
         
          </ul>
        </div>

        <div>
          <p className="text-lg text-gray-800">SUPPORT</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm">
            <li>
              <a href="#">Help Center</a>
            </li>
              <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>

        <div className="max-w-80">
          <p className="text-lg text-gray-800">Reach Us</p>
          <p className="mt-3 text-sm flex flex-row gap-2">
            <MdLocationPin />
            Shop no. 4-7, h.No. D-61, vaishali nagar,
            <br /> Kotra Sultanabad, Bhopal-462003 <br /> Madhya Pradesh
          </p>
          <p className="mt-3 text-sm flex flex-row gap-2">
            <FaPhone />
            +91-99993-72999
          </p>
        </div>
      </div>
      <hr className="border-1 border-gray-400 mt-5" />
      <div className="flex flex-col md:flex-row gap-2 items-center justify-between py-2">
        <p>© {new Date().getFullYear()} CMM. All rights reserved.</p>
        <ul className="flex items-center gap-4">
          <li>
            <a href="#"></a>
          </li>
          <p class="text-center text-xs md:text-sm text-gray-600 flex flex-row gap-1 ">
            Built with ❤️ by a local, for the local —{" "}
            <span class="font-medium text-primary underline">
              Developer: Sneha Yadav{" "}
            </span>
          </p>
<li className="text-pink-400">
            <a
              target="_blank"
              href=" https://snh078.github.io/Portfolio/"
            >
               <SiAboutdotme size={50} />
            </a>
          </li>
        

          <li className="text-blue-700">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/sneha-yadav-sy/"
            >
              <FaLinkedin />
            </a>
          </li>
          
<li className="text-black">
            <a
              target="_blank"
              href=" https://github.com/SNH078"
            >
             <FaGithubSquare />
            </a>
          </li>

         <li>
            <a href="#">
              <FaArrowUp />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Footer;
