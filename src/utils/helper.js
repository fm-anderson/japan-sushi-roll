import { homeLoader } from "./api";

export function closeModal(modal) {
  const modalCheckbox = document.getElementById(modal);
  if (modalCheckbox) {
    modalCheckbox.checked = false;
  }
}

export function AddToCart(cartItems, setCartItems, newItem) {
  let updatedCartItems = cartItems;
  const index = cartItems.findIndex((item) => item.id === newItem.id);

  if (index !== -1) {
    updatedCartItems = cartItems.map((item, i) =>
      i === index ? { ...item, quantity: item.quantity + 1 } : item
    );
  } else {
    updatedCartItems = [...cartItems, { ...newItem, quantity: 1 }];
  }

  setCartItems(updatedCartItems);
  localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
}

export function sumTotal(cartItems) {
  let total = 0;
  cartItems.forEach((item) => {
    const numericPrice = parseFloat(item.price.replace(/\$/g, ""));
    total += numericPrice;
  });
  return total;
}

export function removeFromCart(cartItems, setCartItems, id) {
  const updatedCartItems = cartItems.filter((item) => item.id !== id);
  setCartItems(updatedCartItems);
  localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
}

export function getWeekDay() {
  return new Date().toLocaleDateString("en-US", { weekday: "long" });
}

export function isOpen(hours, currentDay) {
  const currentHour = new Date().getHours();
  const currentMinute = new Date().getMinutes();
  const currentDayHours = hours.find((item) => item.day === currentDay);

  if (!currentDayHours || currentDayHours.from.toLowerCase() === "closed") {
    return false;
  }

  // Convert time to 24-hour format
  const [openHour, openMinute] = currentDayHours.from
    .split(":")
    .map((part) => parseInt(part));
  const [closeHour, closeMinute] = currentDayHours.to
    .split(":")
    .map((part) => parseInt(part));

  // Adjust opening and closing time for PM hours
  const adjustedOpenHour = currentDayHours.from.toLowerCase().includes("pm")
    ? openHour + 12
    : openHour;
  const adjustedCloseHour = currentDayHours.to.toLowerCase().includes("pm")
    ? closeHour + 12
    : closeHour;

  const currentTimeInMinutes = currentHour * 60 + currentMinute;
  const openingTimeInMinutes = adjustedOpenHour * 60 + openMinute;
  const closingTimeInMinutes = adjustedCloseHour * 60 + closeMinute;

  return (
    currentTimeInMinutes >= openingTimeInMinutes &&
    currentTimeInMinutes < closingTimeInMinutes
  );
}

export async function fetchData(setLoading, setCartItems) {
  try {
    await homeLoader();
    setLoading(false);

    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  } catch (error) {
    console.error("Error fetching data: ", error);
    setLoading(false);
  }
}

export function delay(min, max) {
  const randomDelay = Math.floor(Math.random() * (max - min + 1)) + min;
  return new Promise((resolve) => setTimeout(resolve, randomDelay));
}
