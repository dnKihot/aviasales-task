import React from "react";

const Ticket = ({ price, carrier, segments }) => {
  return (
    <article className="bg-white shadow-md rounded-lg p-6 mb-6 w-full">
      <div className="flex justify-between items-center mb-4">
        <span className="text-2xl font-bold text-blue-600">{price}</span>
        <img src={carrier} alt="Авиакомпания" className="h-6 object-contain" />
      </div>

      <div className="space-y-4">
        {segments.map((segment, index) => (
          <div
            key={index}
            className="grid grid-cols-3 gap-4 text-sm sm:text-base"
          >
            <div>
              <p className="font-semibold text-gray-500 uppercase">
                {segment.route}
              </p>
              <p className="text-gray-900">{segment.time}</p>
            </div>
            <div>
              <p className="font-semibold text-gray-500 uppercase">В пути</p>
              <p className="text-gray-900">{segment.duration}</p>
            </div>
            <div>
              <p className="font-semibold text-gray-500 uppercase">
                {segment.stops.length} {getStopsText(segment.stops.length)}
              </p>
              <p className="text-gray-900">{segment.stops.join(", ")}</p>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
};

const getStopsText = (count) =>
  count === 0 ? "пересадок" : count === 1 ? "пересадка" : "пересадки";

export default Ticket;
