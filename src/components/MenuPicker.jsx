import { useLoaderData } from "react-router-dom";

function MenuPicker({ onSelect }) {
  const { menus } = useLoaderData();

  return (
    <div className="mx-4 my-2 overflow-x-scroll custom-scrollbar">
      <div className="grid grid-flow-col gap-2">
        {menus.map((menu) => (
          <button
            key={menu}
            className="btn w-20"
            onClick={() => onSelect(menu)}
          >
            {menu}
          </button>
        ))}
      </div>
    </div>
  );
}

export default MenuPicker;
