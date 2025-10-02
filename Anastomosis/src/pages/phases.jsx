import React from "react";
import PhaseCard from "../components/phasecard";

const PhasesPage = ({ images }) => {
  return (
    <div className="w-full h-full p-6 flex flex-wrap gap-6 flex-col items-center bg-gradient-to-tr from-[#082BEF] to-[#051259]">
      <div className="flex items-center gap-6">
        <img src={images.phase1} alt="Phase 1" className="hidden md:flex" />
        <PhaseCard
          steps={[
            "Your journey begins here — register online and open the door to India’s top innovation and medical campuses.",
            "Fill in your details and get ready to take the aspirational online quiz that will test your curiosity, creativity, and problem-solving skills.",
            "Stay updated with program insights and tips through the official portal dashboard.",
          ]}
          highlight="This is your first step toward national-level recognition and hands-on exposure."
        />
      </div>
      <div className="flex items-center gap-6">
        
        <PhaseCard
          steps={[
            "Your journey begins here — register online and open the door to India’s top innovation and medical campuses.",
            "Fill in your details and get ready to take the aspirational online quiz that will test your curiosity, creativity, and problem-solving skills.",
            "Stay updated with program insights and tips through the official portal dashboard.",
          ]}
          highlight="This is your first step toward national-level recognition and hands-on exposure."
        />
        <img src={images.phase2} alt="Phase 2" className="hidden md:flex" />
      </div>
      <div className="flex items-center gap-6">
        <img src={images.phase3} alt="Phase 3" className="" />
        <PhaseCard
          steps={[
            "Your journey begins here — register online and open the door to India’s top innovation and medical campuses.",
            "Fill in your details and get ready to take the aspirational online quiz that will test your curiosity, creativity, and problem-solving skills.",
            "Stay updated with program insights and tips through the official portal dashboard.",
          ]}
          highlight="This is your first step toward national-level recognition and hands-on exposure."
        />
      </div>
      <div className="flex items-center gap-6">
        
        <PhaseCard
          steps={[
            "Your journey begins here — register online and open the door to India’s top innovation and medical campuses.",
            "Fill in your details and get ready to take the aspirational online quiz that will test your curiosity, creativity, and problem-solving skills.",
            "Stay updated with program insights and tips through the official portal dashboard.",
          ]}
          highlight="This is your first step toward national-level recognition and hands-on exposure."
        />
        <img src={images.phase4} alt="Phase 4" className="" />
      </div>
    </div>
  );
};

export default PhasesPage;
