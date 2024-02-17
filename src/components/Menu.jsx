import { useLoaderData } from "react-router-dom";
import MenuItem from "./MenuItem";

function Menu({ current, onSelect }) {
  const { items } = useLoaderData();
  const currentMenu = items.filter((item) => item.menu === current);

  return (
    <div className="mx-4 flex flex-col gap-2">
      <div className="h-96 overflow-x-auto">
        <div className="divider">
          <span className="text-center text-lg font-semibold uppercase">
            {`MENU ${current.toUpperCase()}`}
          </span>
        </div>
        <table className="table table-pin-rows">
          <tbody>
            {currentMenu.length > 0 ? (
              currentMenu.map((item) => (
                <MenuItem key={item.name} item={item} onSelect={onSelect} />
              ))
            ) : (
              <tr>
                <td className="text-center py-4" colSpan="4">
                  No items available for this menu.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Menu;
