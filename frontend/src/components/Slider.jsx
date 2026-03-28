import { useState, useEffect } from "react";

const slides = [
  "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a",
  "https://images.unsplash.com/photo-1606813907291-d86efa9b94db",
  "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da"
];

function Slider() {

  const [current, setCurrent] = useState(0);
  // const  [add , setAdd] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[420px] overflow-hidden">

      <img
        src={slides[current]}
        className="w-full h-full object-cover transition duration-700"
      />

      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">

        <div className="text-center text-white">

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Discover Latest Products
          </h1>

          <p className="text-lg mb-6">
            Shop the newest trends today
          </p>

          <button className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition">
            Shop Now
          </button>

        </div>

      </div>

      {/* <h1>{add}</h1>
      <button></button> */}

    </div>
  );
}

export default Slider;