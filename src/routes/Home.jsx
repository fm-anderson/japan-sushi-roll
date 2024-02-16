import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Overview from "../components/Overview";
import Featured from "../components/Featured";
import Menu from "../components/Menu";

export async function homeLoader() {
  // this async function will run before the route loads.
  // https://reactrouter.com/en/main/route/loader

  // the returned value can be accessed with useLoaderData hook
  // https://reactrouter.com/en/main/hooks/use-loader-data

  console.log("homeLoader");
  return null;
}

function Home() {
  return (
    <div className="flex h-full max-w-md flex-col gap-2">
      <Navbar />

      <main className="flex h-full max-w-md flex-col gap-2">
        <Overview />
        <Featured />
        <Menu />
      </main>

      <Footer />
    </div>
  );
}

export default Home;
