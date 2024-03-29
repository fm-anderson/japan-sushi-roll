import { useOutletContext } from "react-router-dom";
import { AddToCart, closeModal } from "../utils/helper";
import fallbackImage from "../assets/images/image-placeholder-modal.png";

function ModalDetails({ item }) {
  const { cartItems, setCartItems } = useOutletContext();

  function handleAddToCart() {
    AddToCart(cartItems, setCartItems, item);
    closeModal("item_modal");
  }

  if (!item) {
    return null;
  }

  return (
    <>
      <input type="checkbox" id="item_modal" className="modal-toggle" />
      <div className="modal max-w-md" role="dialog">
        <div className="card modal-box card-compact bg-base-100 p-0 shadow-xl">
          <figure className="m-4">
            <img src={item.image ? item.image : fallbackImage} alt="Sushi" />
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
              <button
                className="btn btn-neutral btn-sm"
                onClick={handleAddToCart}
              >
                Add to cart
              </button>
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
