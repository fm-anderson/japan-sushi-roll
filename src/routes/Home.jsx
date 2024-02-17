import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Footer from "../components/Footer";

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
