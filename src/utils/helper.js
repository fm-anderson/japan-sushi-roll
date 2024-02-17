export function isOpen(hours, currentDay) {
  const currentHour = new Date().getHours();
  const currentMinute = new Date().getMinutes();

  const currentDayHours = hours.find((item) => item.day === currentDay);

  if (!currentDayHours || currentDayHours.from.toLowerCase() === "closed") {
    return false;
  }

  const [openHour, openMinute] = currentDayHours.from
    .split(":")
    .map((part) => parseInt(part));
  const [closeHour, closeMinute] = currentDayHours.to
    .split(":")
    .map((part) => parseInt(part));

  const currentTimeInMinutes = currentHour * 60 + currentMinute;
  const openingTimeInMinutes = openHour * 60 + openMinute;
  const closingTimeInMinutes = closeHour * 60 + closeMinute;

  return (
    currentTimeInMinutes >= openingTimeInMinutes &&
    currentTimeInMinutes < closingTimeInMinutes
  );
}

export function getWeekDay() {
  return new Date().toLocaleDateString("en-US", { weekday: "long" });
}
