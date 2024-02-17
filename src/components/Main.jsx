import { useState } from "react";
import Featured from "./Featured";
import Info from "./Info";
import MenuPicker from "./MenuPicker";
import Menu from "./Menu";
import ModalDetails from "./ModalDetails";
import ModalHours from "./ModalHours";

function Main() {
  const [selectedMenu, setSelectedMenu] = useState("Fresh");
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <main className="flex h-full max-w-md flex-col gap-2">
      <Featured />
      <Info />
      <MenuPicker onSelect={setSelectedMenu} />
      <Menu current={selectedMenu} onSelect={setSelectedItem} />
      <ModalDetails item={selectedItem} />
      <ModalHours />
    </main>
  );
}

export default Main;
