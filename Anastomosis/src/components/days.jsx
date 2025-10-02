const Card = ({ number, title, description, bg, text }) => {
  return (
    <div className={`relative p-6 ${bg} ${text} rounded-lg shadow-md text-center w-80`}>
      {/* Number bubble */}
      <div className="absolute -top-3 -left-3 flex items-center justify-center w-8 h-8 font-bold bg-white rounded-full text-black shadow">
        {number}
      </div>
      <h4 className="text-3xl font-bold mb-2">{title}</h4>
      <p className=" text-xl">{description}</p>
    </div>
  );
};

export const Day1Page = ({ images }) => {
  const activities = [
    {
      number: "1",
      title: "Tech Lab Adventures:",
      description: "Explore robotics, AI, and sustainable tech projects.",
    },
    {
      number: "2",
      title: "Startup Stories:",
      description:
        "Hear from founders on how they turned ideas into real businesses.",
    },
    {
      number: "3",
      title: "Build & Create:",
      description:
        "Practice design thinking, prototyping, and problem-solving.",
    },
    {
      number: "4",
      title: "Team Brainstorm:",
      description: "Collaborate with peers on mini innovation projects.",
    },
  ];

  return (
    <div
      className="w-full h-full p-6 bg-cover bg-center"
      style={{ backgroundImage: `url(${images.day1bg})` }}
    >
      {/* Header */}
      <header className="flex items-center justify-center p-6 gap-4 text-white mb-5">
          <img
            src={images.building}
            alt="IIT Delhi Building"
            className="w-12 h-12 object-contain"
          />
          <h1 className="text-3xl text-blue-600 font-bold">Day 1: IIT Delhi Engineering & Entrepreneurship</h1>
      </header>

      {/* Activities Grid */}
      <div className="flex flex-wrap gap-10 justify-items-center px-6">
        {activities.map((activity) => (
          <Card
            key={activity.number}
            number={activity.number}
            title={activity.title}
            description={activity.description}
            bg="bg-blue-600"
            text = "text-white"
          />
        ))}
      </div>
    </div>
  );
};

export const Day2Page = ({ images }) => {
  const activities = [
    {
      number: "1",
      title: "Bio Lab Breakthroughs:",
      description: "Explore medical devices, diagnostics, and life-science  innovations.nd sustainable tech projects.",
    },
    {
      number: "2",
      title: "Med-Tech Startup Insights:",
      description:
        "Learn how medical entrepreneurs solve real-world  healthcare challenges.",
    },
    {
      number: "3",
      title: "Hands-On Med Experiments:",
      description:
        "Try simulations and prototype experiments in healthcare  tech. ",
    },
    {
      number: "4",
      title: "Meet the Med Innovators:",
      description: "Hear inspiring journeys of founders and researchers shaping medicine ",
    },
  ];

  return (
    <div
      className="w-full h-full p-6 bg-cover bg-center"
      style={{ backgroundImage: `url(${images.day2bg})` }}
    >
      {/* Header */}
      <header className="flex items-center justify-center p-6 gap-4 text-white mb-5">
          <h1 className="text-3xl text-white font-bold">Day 2: AIIMS Delhi Medical Innovation & Startups</h1>
      </header>

      {/* Activities Grid */}
      <div className="flex flex-wrap gap-10 justify-items-center px-6">
        {activities.map((activity) => (
          <Card
            key={activity.number}
            number={activity.number}
            title={activity.title}
            description={activity.description}
            bg = "bg-white"
            text = "text-[#0647CA]"
          />
        ))}
      </div>
    </div>
  );
};


