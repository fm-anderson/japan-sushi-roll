import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Loading from "../components/Loading";
import Footer from "../components/Footer";
import { homeLoader } from "../utils/api";

function Home() {
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await homeLoader();
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data: ", error);
        setLoading(false);
      }
    };

    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }

    fetchData();
  }, []);

  const handleAddToCart = (newItem) => {
    const index = cartItems.findIndex((item) => item.id === newItem.id);

    if (index !== -1) {
      const updatedCartItems = cartItems.map((item, i) =>
        i === index ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCartItems);
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    } else {
      const updatedCartItems = [...cartItems, { ...newItem, quantity: 1 }];
      setCartItems(updatedCartItems);
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    }
  };

  const removeFromCart = (id) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  return (
    <div className="flex min-h-screen max-w-md justify-between flex-col">
      <Navbar cartItemsCount={cartItems.length} />
      {loading ? (
        <Loading />
      ) : (
        <Main
          cartItems={cartItems}
          setCartItems={setCartItems}
          handleAddToCart={handleAddToCart}
          removeFromCart={removeFromCart}
        />
      )}
      <Footer />
    </div>
  );
}

export default Home;
