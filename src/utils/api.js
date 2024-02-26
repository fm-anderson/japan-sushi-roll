import { delay, getWeekDay, isOpen } from "./helper";

export async function homeLoader() {
  try {
    await delay(2000, 4000);
    const response = await fetch(import.meta.env.VITE_BASE_URL);

    if (!response.ok) {
      console.error("HTTP Error: ", response.status);
      return null;
    }

    const data = await response.json();
    const { featured, hours, items, menus } = data.data;

    const currentDay = getWeekDay();
    const isOpenNow = isOpen(hours, currentDay);

    return {
      featured,
      hours,
      items,
      menus,
      currentDay,
      isOpenNow,
    };
  } catch (err) {
    console.error("Error: ", err);
    return null;
  }
}
