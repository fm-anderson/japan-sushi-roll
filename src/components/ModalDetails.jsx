function ModalDetails({ item }) {
  if (!item) {
    return null;
  }

  return (
    <>
      <input type="checkbox" id="item_modal" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="card modal-box card-compact bg-base-100 p-0 shadow-xl">
          <figure>
            <img src={item.image} alt="Sushi" />
          </figure>
          <div className="card-body">
            <span className="flex justify-between">
              <h2 className="card-title">{item.name}</h2>
              <h6 className="card-title">{item.price}</h6>
            </span>
            <p>{item.desc}</p>
            <div className="card-actions mt-6 justify-end">
              <label className="btn btn-sm" htmlFor="item_modal">
                close
              </label>
              {/* <button className="btn btn-neutral btn-sm">Add to cart</button> */}
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

export default ModalDetails;
