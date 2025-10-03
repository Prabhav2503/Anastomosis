import React from "react";
import PhaseCard from "../components/phasecard";

const PhasesPage = ({ images }) => {
  return (
    <div className="w-full min-h-screen p-6 flex flex-col gap-12 items-center bg-gradient-to-tr from-[#082BEF] to-[#051259]">
      {/* Phase 1 */}
      <div className="flex flex-col lg:flex-row items-center gap-6 w-full max-w-6xl">
        <img src={images.phase1} alt="Phase 1" className="w-32 md:w-48 xl:w-64" />
        <PhaseCard
          step1="Your journey begins here — register online and open the door to India’s top innovation and medical campuses."
          step2="Fill in your details and get ready to take the aspirational online quiz that will test your curiosity, creativity, and problem-solving skills."
          step3="Stay updated with program insights and tips through the official portal dashboard."
          highlight="This is your first step toward national-level recognition and hands-on exposure."
          bg1="bg-[#CADBFF]"
          bg2="bg-[#557FD5]"
          bg3="bg-[#2F67DA]"
        />
      </div>

      {/* Phase 2 */}
      <div className="flex flex-col lg:flex-row-reverse items-center gap-6 w-full max-w-6xl">
        <img src={images.phase2} alt="Phase 2" className="w-32 md:w-48 xl:w-64" />
        <PhaseCard
          step1="Dive deeper into the program with hands-on workshops and interactive sessions."
          step2="Collaborate with peers and mentors to solve real-world challenges."
          step3="Showcase your skills and ideas in front of experts."
          bg1="bg-[#CADBFF]"
          bg2="bg-[#557FD5]"
          bg3="bg-[#2F67DA]"
          highlight="This is where your ideas come to life!"
        />
      </div>

      {/* Phase 3 */}
      <div className="flex flex-col lg:flex-row items-center gap-6 w-full max-w-6xl">
        <img src={images.phase3} alt="Phase 3" className="w-32 md:w-48 xl:w-64" />
        <PhaseCard
          step1="Participate in advanced-level challenges and gain deeper insights."
          step2="Learn from industry leaders and innovators."
          step3="Get exclusive access to labs and resources."
          bg1="bg-[#CADBFF]"
          bg2="bg-[#557FD5]"
          bg3="bg-[#2F67DA]"
          highlight="This phase is all about pushing boundaries."
        />
      </div>

      {/* Phase 4 */}
      <div className="flex flex-col lg:flex-row-reverse items-center gap-6 w-full max-w-6xl">
        <img src={images.phase4} alt="Phase 4" className="w-32 md:w-48 xl:w-64" />
        <PhaseCard
          step1="Celebrate your journey with a grand finale event."
          step2="Receive prestigious certificates and awards."
          step3="Join the alumni network and stay connected with the community."
          bg1="bg-[#CADBFF]"
          bg2="bg-[#557FD5]"
          bg3="bg-[#2F67DA]"
          highlight="This is your moment to shine!"
        />
      </div>
    </div>
  );
};

export default PhasesPage;
