export async function homeLoader() {
  try {
    const response = await fetch(import.meta.env.VITE_BASE_URL);

    if (!response.ok) {
      console.error("HTTP Error: ", response.status);
      return null;
    }

    const data = await response.json();
    return data.data;
  } catch (err) {
    console.error("Error: ", err);
    return null;
  }
}
