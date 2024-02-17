import { useLoaderData } from "react-router-dom";

function MenuPicker({ onSelect }) {
  const { menus } = useLoaderData();

  return (
    <div className="mx-4 mt-2 grid grid-cols-4 gap-2">
      {menus.map((menu) => (
        <button key={menu} className="btn" onClick={() => onSelect(menu)}>
          {menu}
        </button>
      ))}
    </div>
  );
}

export default MenuPicker;
