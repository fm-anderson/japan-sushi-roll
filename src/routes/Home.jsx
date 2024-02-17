import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Loading from "../components/Loading";
import Footer from "../components/Footer";
import { homeLoader } from "../utils/api";

function Home() {
  const [loading, setLoading] = useState(true);

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

    fetchData();
  }, []);

  return (
    <div className="flex h-full max-w-md justify-between flex-col">
      <Navbar />

      {loading ? <Loading /> : <Main />}

      <Footer />
    </div>
  );
}

export default Home;
