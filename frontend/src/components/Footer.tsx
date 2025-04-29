import { Link } from "wouter";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-blue-100">
      <div className="max-w-7xl mx-auto py-10 px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-gray-700 text-sm">
        {/* Section 1: Logo and Contact */}
        <div className="flex flex-col space-y-4">
          <Link href="/">
            <div className="text-2xl font-bold cursor-pointer">
              <span className="text-black">Co</span>
              <span className="text-blue-700">Connect</span>
            </div>
          </Link>
          <div>
            <p className="font-semibold mb-1">Contact us</p>
            <p>sweetdeli@gmail.com</p>
            <p>+1-2345-6789</p>
            <p>123 Ave, New York, USA</p>
          </div>
          <div className="flex space-x-4 mt-2 text-gray-600">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>

        {/* Section 2: Products */}
        <div className="flex flex-col space-y-2">
          <p className="font-semibold mb-1">Products</p>
          <a href="#">Auctor volutpat.</a>
          <a href="#">Fermentum turpis.</a>
          <a href="#">Mi consequat.</a>
          <a href="#">Amet venenatis.</a>
          <a href="#">Convallis porttitor.</a>
        </div>

        {/* Section 3: About */}
        <div className="flex flex-col space-y-2">
          <p className="font-semibold mb-1">About</p>
          <a href="#">Egestas vitae.</a>
          <a href="#">Viverra lorem ac.</a>
          <a href="#">Eget ac tellus.</a>
          <a href="#">Erat nulla.</a>
          <a href="#">Vulputate proin.</a>
        </div>

        {/* Section 4: Get the App */}
        <div className="flex flex-col space-y-4">
          <p className="font-semibold mb-1">Get the app</p>
          <a href="#">
            <img src="/appstore-badge.png" alt="Download on the App Store" className="w-32" />
          </a>
          <a href="#">
            <img src="/googleplay-badge.png" alt="Get it on Google Play" className="w-32" />
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-bluetext-gray-300 text-xs py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="text-lg">🌐</span>
            <span>English</span>
            <span>▼</span>
          </div>
          <p className="mt-2 md:mt-0">&copy; {new Date().getFullYear()} CoConnect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
