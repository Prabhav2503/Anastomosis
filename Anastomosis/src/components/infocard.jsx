import React from 'react';

const Infocard = ({ body, bg, text }) => {
  // Remove brackets from bg prop if present
  const backgroundColor = bg.replace(/[\[\]]/g, '');
  
  return (
    <div 
      className=" p-4 rounded-lg shadow-md"
      style={{ 
        backgroundColor: backgroundColor,
        color: text === 'white' ? 'white' : text === 'blue' ? '#1e40af' : text
      }}
    >
      <p className="mt-2 text-xl font-semibold">{body}</p>
    </div>
  );
};

export default Infocard;