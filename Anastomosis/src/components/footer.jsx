import {Instagram , Youtube , Facebook } from "lucide-react"

export default function Footer({images}) {
    return (
      <footer style={{background: 'linear-gradient(to bottom, #082BEF 0%, #051259 100%)'}} className="flex flex-col md:flex-row items-center justify-around px-10 py-5">
        <img src={images.footerlogo} alt="Footer Logo" className="w-128" />
        <div className="border-t-4 border-l-0 md:border-l-4 md:border-t-0 border-solid border-white flex flex-row md:flex-col items-center justify-center p-6 gap-5 ">
            <Instagram color="white"/>
            <Youtube color="white" />
            <Facebook color="white" />
        </div>
      </footer>
    );
  }