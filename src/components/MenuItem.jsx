function MenuItem() {
  return (
    <tr>
      <td>
        <label htmlFor="item_modal">
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c"
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
            <div>
              <div className="font-bold">Uramaki</div>
            </div>
          </div>
        </label>
      </td>
      <td></td>
      <th>
        <button className="btn btn-ghost btn-xs">$11.90</button>
      </th>
    </tr>
  );
}

export default MenuItem;
