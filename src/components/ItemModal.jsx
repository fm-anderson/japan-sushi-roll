function ItemModal() {
  return (
    <>
      <input type="checkbox" id="item_modal" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="card modal-box card-compact bg-base-100 p-0 shadow-xl">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c"
              alt="Sushi"
            />
          </figure>
          <div className="card-body">
            <span className="flex justify-between">
              <h2 className="card-title">Uramaki</h2>
              <h6 className="card-title">$11.99</h6>
            </span>
            <p>Salmon, Rice, Cream Cheese, and Green Onion</p>
            <div className="card-actions mt-6 justify-end">
              <label className="btn btn-sm" htmlFor="item_modal">
                close
              </label>
              <button className="btn btn-neutral btn-sm">Add to cart</button>
            </div>
          </div>
        </div>
        <label className="modal-backdrop" htmlFor="item_modal">
          Close
        </label>
      </div>
    </>
  );
}

export default ItemModal;
