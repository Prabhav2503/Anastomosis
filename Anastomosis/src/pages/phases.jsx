import React from "react";
import PhaseCardNew from "../components/phasecardnew";

const Phase = ({image, step1, step2, step3, highlight}) => {
  return( 
<div className="bg-transparent flex flex-col items-center justify-center px-2 lg:px-0 mb-10">
        <img src={image} alt="" className="w-48 md:w-64 lg:w-128 h-auto" />
      <PhaseCardNew
        step1={step1}
        step2={step2}
        step3={step3}
      />
      {/* Highlight Box */}
      <div className="bg-[#0723C4] rounded-xl p-10 w-[80%]">
        <p className="text-white w-full text-center text-base lg:text-lg">
          <strong>Highlight: </strong>{highlight}
        </p>
      </div>
    </div>
  )
}
const PhasesPage = ({ images }) => {
  return (
    <div className="bg-white flex flex-col items-center justify-center">
      <Phase 
          image={images.phase1}
          step1="Your journey begins here — register online and open the door to India’s top innovation and medical campuses."
          step2="Fill in your details and get ready to take the aspirational online quiz that will test your curiosity, creativity, and problem-solving skills."
          step3="Stay updated with program insights and tips through the official portal dashboard."
          highlight="This is your first step toward national-level recognition and hands-on exposure."/>
      <Phase
          image={images.phase2}
          step1="The quiz challenges your all-round abilities, from logical thinking to innovative problem-solving."
          step2="Top performers will be selected to experience the campus visit and entrepreneurship bootcamp."
          step3="Gain early exposure to concepts in entrepreneurship, innovation, and design thinking while preparing for the next phase."
          
          highlight="Showcase your talent and earn a spot among the best young innovators in the country."
        />
       <Phase
          image={images.phase3}
          step1="Selected students spend Day 1 at IIT Delhi, exploring innovation labs, attending interactive entrepreneurship workshops, and meeting startup founders."
          step2="Day 2 at AIIMS Delhi introduces you to medical innovations, healthcare startups, and med-tech solutions shaping the future."
          step3="Participate in hands-on problem-solving sessions that challenge you to apply what you learn immediately."
          
          highlight="Experience real innovation firsthand and get inspired by India’s brightest minds."
        />
        <Phase
          image={images.phase4}
          step1="Top students receive prizes and mentorship sessions with founders and experts."
          step2="All participants earn prestigious certificates jointly endorsed by IIT Delhi & AIIMS Delhi."
          step3="Get guidance on how to turn your ideas into realworld projects from experienced mentors."
          
          highlight="Celebrate your achievement and showcase your talent on a national platform."
        />
    </div>
  );
};

export default PhasesPage;
