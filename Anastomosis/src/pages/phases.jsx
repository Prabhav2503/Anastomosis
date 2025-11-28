import React from "react";
import PhaseCard from "../components/phasecard";
import PhaseCardNew from "../components/phasecardnew";

const PhasesPage = ({ images }) => {
  return (
    <div className="w-full h-full p-6 flex flex-col gap-12 items-center bg-gradient-to-br from-[#000046b3] via-[#072D6D] via-73-[#0E5B93] to-[#2F67DA]">
      {/* Phase 1 */}
      <div className="flex flex-col lg:flex-row items-center gap-6 w-full">
        <img
          src={images.phase1}
          alt="Phase 1"
          className="w-50 md:w-64 xl:w-80"
        />
        <PhaseCardNew
          step1="Your journey begins here — register online and open the door to India’s top innovation and medical campuses."
          step2="Fill in your details and get ready to take the aspirational online quiz that will test your curiosity, creativity, and problem-solving skills."
          step3="Stay updated with program insights and tips through the official portal dashboard."
          highlight="This is your first step toward national-level recognition and hands-on exposure."
          
        />
      </div>

      {/* Phase 2 */}
      <div className="flex flex-col lg:flex-row-reverse items-center gap-6 w-full ">
        <img
          src={images.phase2}
          alt="Phase 2"
          className="w-50 md:w-64 xl:w-80"
        />
        <PhaseCardNew
          step1="The quiz challenges your all-round abilities, from logical thinking to innovative problem-solving."
          step2="Top performers will be selected to experience the campus visit and entrepreneurship bootcamp."
          step3="Gain early exposure to concepts in entrepreneurship, innovation, and design thinking while preparing for the next phase."
          
          highlight="Highlight: Showcase your talent and earn a spot among the best young innovators in the country."
        />
      </div>

      {/* Phase 3 */}
      <div className="flex flex-col lg:flex-row items-center gap-6 w-full ">
        <img
          src={images.phase3}
          alt="Phase 3"
          className="w-50 md:w-64 xl:w-80"
        />
        <PhaseCardNew
          step1="Selected students spend Day 1 at IIT Delhi, exploring innovation labs, attending interactive entrepreneurship workshops, and meeting startup founders."
          step2="Day 2 at AIIMS Delhi introduces you to medical innovations, healthcare startups, and med-tech solutions shaping the future."
          step3="Participate in hands-on problem-solving sessions that challenge you to apply what you learn immediately."
          
          highlight="Highlight: Experience real innovation firsthand and get inspired by India’s brightest minds."
        />
      </div>

      {/* Phase 4 */}
      <div className="flex flex-col lg:flex-row-reverse items-center gap-6 w-full">
        <img
          src={images.phase4}
          alt="Phase 4"
          className="w-50 md:w-64 xl:w-80"
        />
        <PhaseCardNew
          step1="Top students receive prizes and mentorship sessions with founders and experts."
          step2="All participants earn prestigious certificates jointly endorsed by IIT Delhi & AIIMS Delhi."
          step3="Get guidance on how to turn your ideas into realworld projects from experienced mentors."
          bg1="bg-[#CADBFF]"
          bg2="bg-[#557FD5]"
          bg3="bg-[#2F67DA]"
          highlight="Highlight: Celebrate your achievement and showcase your talent on a national platform."
        />
      </div>
    </div>
  );
};

export default PhasesPage;
