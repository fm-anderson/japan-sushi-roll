function ModalCart() {
  return (
    <>
      <input type="checkbox" id="cart_modal" className="modal-toggle" />
      <div className="modal modal-bottom max-w-md" role="dialog">
        <div className="modal-box">
          <div className="pb-8">
            <span className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-7 h-7 stroke-current fill-current"
              >
                <path d="M21 4H2v2h2.3l3.28 9a3 3 0 0 0 2.82 2H19v-2h-8.6a1 1 0 0 1-.94-.66L9 13h9.28a2 2 0 0 0 1.92-1.45L22 5.27A1 1 0 0 0 21.27 4 .84.84 0 0 0 21 4zm-2.75 7h-10L6.43 6h13.24z"></path>
                <circle cx="10.5" cy="19.5" r="1.5"></circle>
                <circle cx="16.5" cy="19.5" r="1.5"></circle>
              </svg>
              <h3 className="font-bold text-lg">CART</h3>
            </span>
          </div>
          <div>
            <ul>
              <li className="flex gap-4">
                <p>cart-item</p>
                <p>$12.99</p>
              </li>
            </ul>
            <div className="card-actions mt-6 justify-end">
              <button className="btn btn-neutral text-lg">Total: $61.78</button>
            </div>
          </div>
          <label
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            htmlFor="cart_modal"
          >
            ✕
          </label>
        </div>
        <label className="modal-backdrop" htmlFor="cart_modal">
          Close
        </label>
      </div>
    </>
  );
}

export default ModalCart;
