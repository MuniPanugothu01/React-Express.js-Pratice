// import { useRef } from "react";

// function FocusInput() {
//   const inputRef = useRef(null);

//   const handleClick = () => {
//     inputRef.current.focus();
//   };

//   return (
//     <div>
//       <input ref={inputRef} type="text" placeholder="Click button to focus" />
//       <button onClick={handleClick}>Focus Input</button>
//     </div>
//   );
// }

// export default FocusInput;
import React, { useState } from "react";

const App = () => {
  const [circles, setCircles] = useState([]);
  const [background, setBackground] = useState("white");

  // Function to calculate distance between two circles
  const areCirclesIntersecting = (circle1, circle2) => {
    if (!circle1 || !circle2) return false;
    const dx = circle1.x - circle2.x;
    const dy = circle1.y - circle2.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    return distance < circle1.radius + circle2.radius; // Checking if they overlap
  };

  // Handle click to create a circle
  const handleClick = (e) => {
    const radius = Math.floor(Math.random() * (200 - 20 + 1)) + 20; // Random radius [20, 200]
    const newCircle = { x: e.clientX, y: e.clientY, radius };

    let newCircles = [...circles, newCircle];

    if (newCircles.length > 2) {
      newCircles = []; // Reset when more than 2 circles exist
      setBackground("white");
    } else if (
      newCircles.length === 2 &&
      areCirclesIntersecting(newCircles[0], newCircles[1])
    ) {
      setBackground("red"); // Change background if they intersect
    } else {
      setBackground("white"); // Default background
    }

    setCircles(newCircles);
  };

  return (
    <div
      onClick={handleClick}
      style={{
        width: "100vw",
        height: "100vh",
        position: "relative",
        backgroundColor: background,
        overflow: "hidden",
      }}
    >
      {circles.map((circle, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            width: `${circle.radius * 2}px`,
            height: `${circle.radius * 2}px`,
            borderRadius: "50%",
            backgroundColor: "blue",
            left: `${circle.x - circle.radius}px`,
            top: `${circle.y - circle.radius}px`,
            pointerEvents: "none",
          }}
        />
      ))}
    </div>
  );
};

export default App;
