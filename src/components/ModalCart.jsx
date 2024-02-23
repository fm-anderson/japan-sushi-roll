import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { removeFromCart, sumTotal } from "../utils/helper";
import trash from "../assets/icons/trash.svg";

function ModalCart() {
  const { cartItems, setCartItems } = useOutletContext();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalPrice(sumTotal(cartItems));
  }, [cartItems]);

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
            {cartItems.length === 0 ? (
              <p className="text-center text-gray-500 py-4">
                Your cart is empty.
              </p>
            ) : (
              <>
                <ul>
                  {cartItems.map((item) => (
                    <li
                      key={item.id}
                      className="flex gap-2 mb-3 border-b-2 justify-between"
                    >
                      <span className="flex gap-1 items-center">
                        <p className="font-semibold">
                          <span className="text-sm mr-2">{item.quantity}x</span>
                          {item.price}
                        </p>
                        <p>{item.name}</p>
                        <p className="text-sm">({item.menu})</p>
                      </span>
                      <span className="flex items-end p-1">
                        <button
                          className="btn-ghost"
                          onClick={() =>
                            removeFromCart(cartItems, setCartItems, item.id)
                          }
                        >
                          <img src={trash} alt="trash icon" className="h-6" />
                        </button>
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="card-actions mt-6 justify-end">
                  <button className="btn btn-neutral text-lg">
                    Total: ${totalPrice.toFixed(2)}
                  </button>
                </div>
              </>
            )}
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
