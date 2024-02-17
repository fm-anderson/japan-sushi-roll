import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Main from "../components/Main";

function Home() {
  return (
    <div className="flex h-full max-w-md justify-between flex-col">
      <Navbar />

      <Main />

      <Footer />
    </div>
  );
}

export default Home;
