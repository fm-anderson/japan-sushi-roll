import fallbackImage from "../assets/images/image-placeholder-menu.png";

function MenuItem({ item, onSelect }) {
  return (
    <tr onClick={() => onSelect(item)}>
      <td>
        <label htmlFor="item_modal">
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={item.image ? item.image : fallbackImage}
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
            <div>
              <p className="font-bold text-lg">{item.name}</p>
              <p className="opacity-60">{item.pieces} Pieces</p>
            </div>
          </div>
        </label>
      </td>
      <td></td>
      <th>
        <button>{item.price}</button>
      </th>
    </tr>
  );
}

export default MenuItem;
