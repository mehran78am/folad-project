// import { useState } from "react";
// import Angel from "../assets/img/Angel-300x225.webp";
// import Beam from "../assets/img/Beam-300x200.webp";
// import ColdRolled from "../assets/img/Cold-Rolled-300x169.webp";
// import HotRolled from "../assets/img/Hot-Rolled-300x200.webp";
// const images = [Angel, Beam, ColdRolled, HotRolled];

// const Test = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex(
//       (prevIndex) => (prevIndex - 1 + images.length) % images.length
//     );
//   };

//   return (
//     <div className="relative w-full overflow-hidden mt-10">
//       <div
//         className="flex transition-transform duration-500"
//         style={{ transform: `translateX(-${currentIndex * 250}px)` }}
//       >
//         {images.map((image, index) => (
//           <img
//             key={index}
//             src={image}
//             alt={`Slide ${index}`}
//             className="w-250 h-auto"
//           />
//         ))}
//       </div>
//       <button
//         onClick={prevSlide}
//         className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
//       >
//         Prev
//       </button>
//       <button
//         onClick={nextSlide}
//         className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
//       >
//         Next
//       </button>
//     </div>
//   );
// };

// export default Test;

// src/Slider.tsx
import React, { useEffect, useState } from "react";

const items = [1, 2, 3, 4, 5];

const Slider: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prevIndex) => (prevIndex + 1) % (items.length - 1));
    }, 5000); // تغییر هر 3 ثانیه

    return () => clearInterval(interval); // پاک کردن interval هنگامUnmount
  }, []);

  return (
    <div className="flex space-x-4">
      {items.slice(startIndex, startIndex + 2).map((item) => (
        <div
          key={item}
          className="w-32 h-32 bg-blue-500 flex items-center justify-center text-white rounded-lg"
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default Slider;
