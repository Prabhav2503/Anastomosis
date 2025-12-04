
import Footer from "../components/footer.jsx";
import {useNavigate} from "react-router-dom"

const FlipCard = ({ icon, title, backText1, backText2, backText3 }) => {
  
  return (
    <div className="w-full h-60 [perspective:1000px] cursor-pointer">
      <div className="relative w-full h-full transition-transform duration-1500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
        {/* FRONT */}
        <div
          className="absolute w-full h-full bg-gradient-to-b from-[#0A3BE5] to-[#012975] 
                        rounded-3xl text-white flex flex-col items-center justify-center gap-4 p-4 
                        [backface-visibility:hidden]"
        >
          <img src={icon} alt={title} className="size-48" />
          <h2
            className="text-xl md:text-2xl font-bold text-center"
            style={{ fontFamily: "Poppins" }}
          >
            {title}
          </h2>
        </div>

        {/* BACK */}
        <div
          className="absolute w-full h-full bg-gradient-to-b from-[#0A3BE5] to-[#012975]
                        rounded-3xl text-white  flex flex-col p-6 items-start justify-center gap-5
                        text-lg font-medium [transform:rotateY(180deg)] [backface-visibility:hidden]"
        >
          <p>{backText1}</p>
          <p>{backText2}</p>
          <p>{backText3}</p>
        </div>
      </div>
    </div>
  );
};

const Extra = ({ images }) => {
  const navigate = useNavigate();
  return (
    <div className="mt-30">
      <h2 className="text-[#061C93] font-bold text-5xl lg:text-7xl w-full text-center py-10 " style={{fontFamily:"Poppins"}}>THE FOUR SPIRITS OF ANASTOMOSIS</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center justify-center px-10">
        <div className="flex flex-col items-center justify-center gap-5">
          <FlipCard
            icon={images.Alchemist}
            title="ALCHEMIST SPIRIT"
            backText1="Visionary Spirit"
            backText2="(Focus: Future, Strategy, Innovation)"
            backText3="The Visionaries start with “Why”. They are the dreamers who look at the horizon before the ground. Driven by intuition and foresight, they want to completely reinvent whatever is broken."
          />
          <FlipCard
            icon={images.Builder}
            title="BUILDER SPIRIT"
            backText1="Builder Spirit"
            backText2="(Focus: Engineering, Technology, Systems)"
            backText3="The true engineer and the architect of reality, they believe that a great idea is nothing without great execution. Driven by logic and precision, they code the software, design the hardware, and ensure the foundation never cracks."
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-5">
          <FlipCard
            icon={images.Catalyst}
            title="CATALYST SPIRIT"
            backText1="Catalyst Spirit"
            backText2="(Focus: Speed, Execution, Growth)"
            backText3="Fail fast, rise fast. High-energy operators driven by action and opportunity, they are the natural leaders and marketers who can sell a dream to anyone. They are the spark that starts the fire."
          />
          <FlipCard
            icon={images.Visionary}
            title="VISIONARY SPIRIT"
            backText1="Alchemist Spirit"
            backText2="(Focus: Social Impact, Altruism, Society)"
            backText3="Impact over profit, people over valuation. They represent the social entrepreneur. Driven by empathy and ethics, they believe that technology must serve humanity, not replace it."
          />
        </div>
      </div>
      <div className=" mt-10 bg-black w-full flex h-40 md:h-60 xl:h-80 flex-col items-center justify-evenly text-white text-base sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
        <h2>Take a quick Personality Test and <strong>Find Your Spirit</strong></h2>
        <button onClick={() => (navigate("/start-test"))} className="bg-white rounded-2xl p-3 md:p-5 text-black font-bold cursor-pointer">START TEST</button>
      </div>
      <div className="w-full">
        <Footer images={images} />
      </div>
    </div>
  );
};

export default Extra;
