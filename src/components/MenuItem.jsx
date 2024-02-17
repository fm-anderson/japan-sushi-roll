function MenuItem({ item }) {
  return (
    <tr>
      <td>
        <label htmlFor="item_modal">
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img src={item.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{item.name}</div>
            </div>
          </div>
        </label>
      </td>
      <td></td>
      <th>
        <button className="btn btn-ghost btn-xs">{item.price}</button>
      </th>
    </tr>
  );
}

export default MenuItem;
