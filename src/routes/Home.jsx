import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { fetchData } from "../utils/helper";
import Navbar from "../components/Navbar";
import Loading from "../components/Loading";
import Footer from "../components/Footer";

function Home() {
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchData(setLoading, setCartItems);
  }, []);

  return (
    <div className="flex min-h-screen max-w-md justify-between flex-col">
      <Navbar cartItemsCount={cartItems.length} />

      {loading ? (
        <Loading />
      ) : (
        <Outlet
          context={{
            cartItems,
            setCartItems,
          }}
        />
      )}

      <Footer />
    </div>
  );
}

export default Home;
