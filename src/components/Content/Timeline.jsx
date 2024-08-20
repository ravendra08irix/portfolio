import React from 'react';

const Timeline = () => {
  const timelineData = [
    { year: '2020', work: 'Started learning React' },
    { year: '2021', work: 'Built first portfolio website' },
    { year: '2022', work: 'Worked on several React projects' },
    { year: '2023', work: 'Advanced to full-stack development' },
  ];

  // Inline styles for keyframes and animation
  const keyframes = `
    @keyframes fadeInUp {
      0% {
        opacity: 0;
        transform: translateY(20px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `;

  // Add keyframes to the document head
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = keyframes;
  document.head.appendChild(styleSheet);

  const containerStyle = {
    margin: '40px auto',
    maxWidth: '800px',
    padding: '0 20px'
  };

  const timelineStyle = {
    display: 'block',
    position: 'relative',
    borderLeft: '3px solid #007bff',
    paddingLeft: '20px'
  };

  const timelineItemStyle = {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    padding: '20px 0', // Added padding for better spacing
    opacity: 0, // Start as invisible
    animation: 'fadeInUp 0.5s forwards',
    marginBottom: '20px' // Added margin between items
  };

  const timelineDotStyle = {
    position: 'absolute',
    left: '-15px', // Adjusted for better alignment
    width: '25px', // Increased size for visibility
    height: '25px', // Increased size for visibility
    backgroundColor: '#007bff',
    borderRadius: '50%',
    border: '4px solid white', // Thicker border for better contrast
    top: '50%',
    transform: 'translateY(-50%)',
    boxShadow: '0 0 0 5px rgba(0, 123, 255, 0.3)' // Increased shadow for prominence
  };

  const timelineYearStyle = {
    fontSize: '1.4em', // Increased font size
    fontWeight: 'bold',
    color: '#007bff',
    marginBottom: '10px' // Added margin for spacing
  };

  const timelineContentStyle = {
    padding: '15px 25px', // Added padding for text inside box
    backgroundColor: '#f8f9fa',
    borderRadius: '5px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' // Enhanced shadow for better separation
  };

  return (
    <div className="timeline-container" style={containerStyle}>
      <h2 className="text-center mb-4">My Journey</h2>
      <div style={timelineStyle}>
        {timelineData.map((item, index) => (
          <div
            key={index}
            style={{
              ...timelineItemStyle,
              animationDelay: `${index * 0.2}s` // Stagger animation
            }}
          >
            <div style={timelineDotStyle}></div>
            <div style={timelineContentStyle}>
              <h4 style={timelineYearStyle}>{item.year}</h4>
              <p>{item.work}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
