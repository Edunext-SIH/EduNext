import React, { useState } from 'react';
import './Career.css'; // Optional CSS for styling

const CareerRPG = () => {
  // State to keep track of the current scene and user's score
  const [scene, setScene] = useState(0);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  // Array of scenes with storyline, choices, and point values
  const scenes = [
    {
      text: "Congratulations, you’ve just passed the bar exam! What will you do next?",
      options: [
        { text: "Start your own firm", points: 10 },
        { text: "Join a large law firm", points: 5 },
        { text: "Take a break and travel", points: 2 },
      ],
    },
    {
      text: "You’re defending a high-profile case. How do you proceed?",
      options: [
        { text: "Prepare thoroughly and negotiate", points: 10 },
        { text: "Take risks to make headlines", points: 3 },
        { text: "Settle the case early", points: 5 },
      ],
    },
    {
      text: "A rival lawyer, Victoria Blackwood, challenges you in court. What do you do?",
      options: [
        { text: "Challenge her head-on", points: 15 },
        { text: "Avoid conflict", points: -5 },
        { text: "Negotiate a truce", points: 5 },
      ],
    },
    {
      text: "A politician offers you a case involving corruption. Do you take it?",
      options: [
        { text: "Defend the politician", points: 20 },
        { text: "Refuse the case", points: -10 },
        { text: "Expose the politician", points: 15 },
      ],
    },
    {
      text: "You've gained media attention. How will you handle it?",
      options: [
        { text: "Give a careful interview", points: 5 },
        { text: "Reveal confidential details", points: 10 },
        { text: "Decline the interview", points: 3 },
      ],
    },
    {
      text: "You've reached the climactic trial. How do you approach it?",
      options: [
        { text: "Defend the company", points: 30 },
        { text: "Turn against the company", points: 20 },
        { text: "Settle out of court", points: 10 },
      ],
    },
  ];

  // Function to handle the user's choice and progress to the next scene
  const handleChoice = (points) => {
    setScore(score + points);
    if (scene < scenes.length - 1) {
      setScene(scene + 1);
    } else {
      setGameOver(true); // End the game if last scene
    }
  };

  // Grading logic based on the final score
  const getGrade = () => {
    if (score >= 75) {
      return "A - You’ve become a well-respected lawyer!";
    } else if (score >= 50) {
      return "B - You've built a modest career as a lawyer.";
    } else {
      return "C - You struggled to make it in the legal field.";
    }
  };

  return (
    <div className="rpg-game">
      {!gameOver ? (
        <div>
          <p>{scenes[scene].text}</p>
          {scenes[scene].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleChoice(option.points)}
              className="choice-button"
            >
              {option.text}
            </button>
          ))}
        </div>
      ) : (
        <div className="game-over">
          <h2>Game Over</h2>
          <p>Your final score is: {score}</p>
          <p>{getGrade()}</p>
        </div>
      )}
    </div>
  );
};

export default CareerRPG;
