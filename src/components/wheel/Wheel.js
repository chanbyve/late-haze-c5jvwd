import React, { useState } from "react";
import "./Wheel.css"; // Ensure you have CSS for styling

const Wheel = ({ items }) => {
  const [rotation, setRotation] = useState(0);
  const [spinning, setSpinning] = useState(false);

  const segmentAngle = 360 / items.length; // Each segment covers this angle

  const spinWheel = () => {
    if (spinning) return; // Prevent re-clicking while spinning
    setSpinning(true);

    // Select a random name
    const selectedIndex = Math.floor(Math.random() * items.length);
    const targetAngle = 360 - selectedIndex * segmentAngle;

    // Ensure multiple full spins before stopping
    const fullSpins = 3 * 360; // 3 full spins
    const finalRotation = fullSpins + targetAngle;

    setRotation(finalRotation);

    // Stop spinning after animation completes
    setTimeout(() => {
      setSpinning(false);
      alert(`Winner: ${items[selectedIndex]}`);
    }, 3000); // Match transition time
  };

  return (
    <div className="wheel-container">
      <div
        className="wheel"
        style={{
          transform: `rotate(${rotation}deg)`,
          transition: spinning ? "transform 3s ease-out" : "none",
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="segment"
            style={{ transform: `rotate(${index * segmentAngle}deg)` }}
          >
            {item}
          </div>
        ))}
      </div>
      <button onClick={spinWheel} disabled={spinning}>
        Spin
      </button>
    </div>
  );
};

export default Wheel;
