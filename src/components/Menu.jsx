import MenuItem from "./MenuItem";

function Menu() {
  return (
    <div className="mx-4 flex flex-col gap-2">
      <div className="h-96 overflow-x-auto">
        <div className="divider">
          <span className="text-center text-lg font-semibold uppercase">
            Menu Fresh
          </span>
        </div>
        <table className="table table-pin-rows">
          <tbody>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
              <MenuItem key={item} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Menu;
