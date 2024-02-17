export async function homeLoader() {
  try {
    const response = await fetch(import.meta.env.VITE_BASE_URL);

    if (!response.ok) {
      console.error("HTTP Error: ", response.status);
      return null;
    }

    const data = await response.json();
    const { featured, hours, items, menus } = data.data;

    return {
      featured,
      hours,
      items,
      menus,
    };
  } catch (err) {
    console.error("Error: ", err);
    return null;
  }
}
