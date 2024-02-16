import Overview from "./Overview";
import Featured from "./Featured";
import Menu from "./Menu";
import ItemModal from "./ItemModal";

function Main() {
  return (
    <main className="flex h-full max-w-md flex-col gap-2">
      <Overview />
      <Featured />
      <Menu />
      <ItemModal />
    </main>
  );
}

export default Main;
