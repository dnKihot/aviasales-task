const priceFormatter = new Intl.NumberFormat("ru-RU");

const timeFormatter = new Intl.DateTimeFormat("ru-RU", {
  hour: "2-digit",
  minute: "2-digit",
});

export const formatPrice = (price) => `${priceFormatter.format(price)} ₽`;

export const formatDuration = (minutes) => {
  if (!Number.isFinite(minutes)) {
    return "—";
  }

  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  const hoursPart = hours > 0 ? `${hours}ч` : "";
  const minutesPart = remainingMinutes > 0 ? `${remainingMinutes}м` : "";

  return `${hoursPart} ${minutesPart}`.trim() || "0м";
};

export const formatStopsLabel = (count) => {
  if (count === 0) return "Без пересадок";
  if (count === 1) return "1 пересадка";
  const suffix = count >= 5 ? "пересадок" : "пересадки";
  return `${count} ${suffix}`;
};

export const formatRoute = (segment) =>
  `${segment.origin} – ${segment.destination}`;

export const formatTimeRange = (segment) => {
  const departure = new Date(segment.date);
  const arrival = new Date(departure.getTime() + segment.duration * 60 * 1000);

  return `${timeFormatter.format(departure)} – ${timeFormatter.format(arrival)}`;
};
