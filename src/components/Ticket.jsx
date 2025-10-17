import React from "react";
import {
  formatDuration,
  formatPrice,
  formatRoute,
  formatStopsLabel,
  formatTimeRange,
} from "../features/tickets/formatters";

const Ticket = ({ price, carrier, segments }) => {
  const carrierLogo = `https://pics.avs.io/99/36/${carrier}.png`;

  return (
    <article className="bg-white shadow-md rounded-lg p-6 w-full">
      <div className="flex justify-between items-center mb-4">
        <span className="text-2xl font-bold text-blue-600">
          {formatPrice(price)}
        </span>
        <img
          src={carrierLogo}
          alt={`Авиакомпания ${carrier}`}
          className="h-6 object-contain"
        />
      </div>

      <div className="space-y-4">
        {segments?.map((segment, index) => (
          <div
            key={`${segment.origin}-${segment.destination}-${index}`}
            className="grid grid-cols-3 gap-4 text-sm sm:text-base"
          >
            <div>
              <p className="font-semibold text-gray-500 uppercase">
                {formatRoute(segment)}
              </p>
              <p className="text-gray-900">{formatTimeRange(segment)}</p>
            </div>
            <div>
              <p className="font-semibold text-gray-500 uppercase">В пути</p>
              <p className="text-gray-900">
                {formatDuration(segment.duration)}
              </p>
            </div>
            <div>
              <p className="font-semibold text-gray-500 uppercase">
                {formatStopsLabel(segment.stops?.length ?? 0)}
              </p>
              <p className="text-gray-900">
                {segment.stops?.length ? segment.stops.join(", ") : "—"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
};

export default Ticket;
