import { Instagram, Youtube, Facebook } from "lucide-react";

export default function Footer({ images }) {
  return (
    <footer 
      style={{ 
        background: 'linear-gradient(135deg, #0A1E8C 0%, #050A30 100%)' 
      }} 
      className="flex flex-col items-center text-center px-6 py-12 gap-8 text-white"
    >
      <div className="flex flex-col md:flex-row items-center justify-around w-full gap-12">
        {/* Logo */}
        <img 
          src={images.footerlogo} 
          alt="Footer Logo" 
          className="w-40 md:w-100 lg:w-140 drop-shadow-lg"
        />

        <div className="flex flex-col items-center md:items-start gap-6">
          {/* Social Media Links */}
          <div className="flex flex-row gap-6">
            <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition">
              <Instagram color="white" />
            </a>
            <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition">
              <Youtube color="white" />
            </a>
            <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition">
              <Facebook color="white" />
            </a>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col lg:flex-row justify-center items-center gap-8 mt-6 w-full">
            {/* Contact 1 */}
            <div className="text-center md:text-left w-full md:w-auto">
              <p className="font-semibold text-lg">John Doe</p>
              <p className="text-gray-300 text-sm">Event Coordinator</p>
              <p className="text-gray-400 text-sm">📞 +1 (555) 123-4567</p>
              <p className="text-gray-400 text-sm">✉️ john.doe@email.com</p>
            </div>

            {/* Contact 2 */}
            <div className="text-center md:text-left w-full md:w-auto">
              <p className="font-semibold text-lg">Jane Smith</p>
              <p className="text-gray-300 text-sm">Marketing Head</p>
              <p className="text-gray-400 text-sm">📞 +1 (555) 987-6543</p>
              <p className="text-gray-400 text-sm">✉️ jane.smith@email.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <p className="text-gray-400 text-sm mt-8">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </p>
    </footer>
  );
}
