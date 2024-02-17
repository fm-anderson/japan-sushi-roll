import MenuPicker from "./MenuPicker";
import Featured from "./Featured";
import Menu from "./Menu";
import ModalDetails from "./ModalDetails";
import ModalHours from "./ModalHours";
import Info from "./Info";

function Main() {
  return (
    <main className="flex h-full max-w-md flex-col gap-2">
      <Featured />
      <Info />
      <MenuPicker />
      <Menu />
      <ModalDetails />
      <ModalHours />
    </main>
  );
}

export default Main;
