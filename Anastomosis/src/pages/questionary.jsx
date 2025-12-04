import React, { useState } from "react";
import Footer from "../components/footer.jsx";

const OptionList = ({ options = [], onSelect }) => {
  const [selected, setSelected] = useState(null);

  const handleClick = (index) => {
    setSelected(index);
    onSelect && onSelect(options[index]);
  };

  return (
    <div className="space-y-2">
      {options.map((opt, index) => (
        <div
          key={index}
          onClick={() => handleClick(index)}
          className={`flex items-start gap-3 p-3 sm:p-4 rounded-xl cursor-pointer transition border 
            ${
              selected === index
                ? "border-blue-600 bg-blue-50"
                : "border-gray-200"
            }
          `}
        >
          {/* FIXED RADIO CIRCLE */}
          <div
            className={`w-6 h-6 sm:w-5 sm:h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0
              ${selected === index ? "border-blue-600" : "border-black"}
            `}
          >
            {selected === index && (
              <div className="w-3 h-3 sm:w-2.5 sm:h-2.5 bg-blue-600 rounded-full" />
            )}
          </div>

          {/* Text */}
          <div className="text-sm sm:text-base">
            <span className="font-semibold">{opt.label}</span>{" "}
            <span className="text-gray-800">{opt.description}</span>
          </div>
        </div>
      ))}
    </div>
  );
};


const QuestionCard = ({ questionnumber, question, options, onSelect }) => {
  return (
    <div
      className="flex flex-col gap-4 mb-10 sm:gap-5"
      style={{ fontFamily: "Poppins" }}
    >
      <div className="flex flex-col gap-1 sm:gap-2">
        <p className="text-[#696F79] text-sm sm:text-base">{`Question ${questionnumber}/7`}</p>
        <p className="text-black text-base sm:text-lg md:text-xl">{question}</p>
      </div>

      <div className="flex flex-col gap-2 w-full">
        <p className="text-blue-600 font-semibold text-sm sm:text-base">
          Choose answer
        </p>

        <OptionList options={options} onSelect={onSelect} />
      </div>
    </div>
  );
};

const questions = [
  {
    questionnumber: 1,
    question:
      "You launch a new app, and a week later, a massive tech giant releases a free feature that does exactly what your app does. What is your immediate reaction?",
    options: [
      {
        label: "Pivot.",
        description:
          "We can’t beat them at this game, so we change our strategy to something they can't predict.",
      },
      {
        label: "Quality.",
        description:
          "Their version is generic. We double down on engineering to make our product technically superior.",
      },
      {
        label: "Speed.",
        description:
          "We launch a massive marketing blitz tonight. We just have to be louder and faster than them.",
      },
      {
        label: "Loyalty.",
        description:
          "We focus on our current users. We offer better human support than a big corporation ever could.",
      },
    ],
  },
  {
    questionnumber: 2,
    question:
      "An investor hands you a blank check to solve one bottleneck in your startup. Where does the money go?",
    options: [
      {
        label: "R&D.",
        description:
          "I invest in a secret “Moonshot” project that will revolutionize the industry in 10 years.",
      },
      {
        label: "Infrastructure.",
        description:
          "I buy the best equipment and servers to ensure our operations run with 0% error.",
      },
      {
        label: "Expansion.",
        description:
          "I open offices in 5 new cities. We need to capture the market before anyone else does.",
      },
      {
        label: "Culture.",
        description:
          "I increase salaries and benefits to ensure the team is healthy, happy, and motivated.",
      },
    ],
  },
  {
    questionnumber: 3,
    question:
      "Think about the proudest moment of your school life so far. Why was it special?",
    options: [
      {
        label: " ",
        description:
          "Because I came up with an original idea that no one else had thought of.",
      },
      {
        label: " ",
        description:
          "Because I executed the project perfectly and everything worked exactly as planned.",
      },
      {
        label: " ",
        description:
          "Because I won. I beat the competition and got the recognition I deserved.",
      },
      {
        label: " ",
        description:
          "Because I helped someone who was struggling, and I saw the impact I had on them.",
      },
    ],
  },
  {
    questionnumber: 4,
    question:
      "You find a vial of an unknown chemical in a forgotten lab. The label is faded. What do you do?",
    options: [
      {
        label: "Analyze it.",
        description:
          "I study the molecular structure to see if we can synthesize more of it.",
      },
      {
        label: "Contain it.",
        description:
          "I build a secure storage unit. Whatever it is, it needs to be stored systematically so no one gets hurt.",
      },
      {
        label: "Auction it.",
        description:
          "This is one of a kind. The value is highest right now before we know what it is.",
      },
      {
        label: "Test it.",
        description:
          "If this is a cure for a disease, we need to know immediately.",
      },
    ],
  },
  {
    questionnumber: 5,
    question:
      "In past (school) projects, which is the closest to feedback you usually get from your teammates?",
    options: [
      {
        label: " ",
        description: "“You have crazy ideas, but sometimes you lose focus.”",
      },
      {
        label: " ",
        description:
          "“You did all the hard work, but you were too controlling about the details.”",
      },
      {
        label: " ",
        description:
          "“You didn’t do much of the grunt work, but you did a great job presenting it.”",
      },
      {
        label: " ",
        description: "“You were the glue that kept everyone from fighting.”",
      },
    ],
  },
  {
    questionnumber: 6,
    question:
      "It’s 3:00 AM before a deadline. The team is exhausted. What are you doing?",
    options: [
      {
        label: " ",
        description: "Re-writing. The intro speech isn’t inspiring enough yet.",
      },
      {
        label: " ",
        description:
          "Debugging. The code has to work perfectly; I’m not sleeping until it does.",
      },
      {
        label: " ",
        description:
          "Hyping. Ordering pizza and Red Bull. Keeping the energy up.",
      },
      {
        label: " ",
        description:
          "Caring. Checking on everyone. Telling people to go sleep if they look sick.",
      },
    ],
  },
  {
    questionnumber: 7,
    question: "Which famous company philosophy resonates with you the most?",
    options: [
      { label: " ", description: "“Think Different.” (Apple)" },
      { label: " ", description: "“The Best or Nothing.” (Mercedes-Benz)" },
      { label: " ", description: "“Just Do It.” (Nike)" },
      { label: " ", description: "“Don’t Be Evil.” (Google)" },
    ],
  },
];

const Test = ({ images }) => {
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));

  const handleSelect = (questionIndex, option) => {
    const updated = [...answers];
    updated[questionIndex] = {
      question: questions[questionIndex].questionnumber,
      answer: option,
    };
    setAnswers(updated);
  };

  const handleFinish = () => {
    console.log("All Selected Answers With Question Numbers:", answers);
  };

  return (
    <div className="mt-30 " style={{ fontFamily: "Poppins" }}>
      <div className="px-4 sm:px-8 md:px-16 lg:px-20">
        <h2 className="text-[#061D99] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
          Questionnaire
        </h2>
        <p className="text-[#8E8E8E] text-base sm:text-lg md:text-xl mt-2">
          Just be yourself and answer as honestly as possible.
        </p>

        <div className="mt-8 sm:mt-10 shadow-xl rounded-xl p-5 sm:p-8 md:p-10">
          {questions.map((q, index) => (
            <QuestionCard
              key={index}
              questionnumber={q.questionnumber}
              question={q.question}
              options={q.options}
              onSelect={(opt) => handleSelect(index, opt)}
            />
          ))}

          <div className="flex items-center justify-center w-full mt-4 sm:mt-6">
            <button
              className="bg-blue-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 text-lg sm:text-xl cursor-pointer rounded-3xl w-full sm:w-auto"
              onClick={handleFinish}
            >
              Finish
            </button>
          </div>
        </div>
      </div>

      <div className="mt-10 w-full">
        <Footer images={images} />
      </div>
    </div>
  );
};

export default Test;
