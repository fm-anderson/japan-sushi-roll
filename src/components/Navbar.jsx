import logo from "../assets/images/logo-icon.png";

function Navbar({ cartItemsCount }) {
  return (
    <header className="navbar bg-base-100">
      <div className="flex-1 gap-2">
        <img src={logo} alt="Yumi Sushi House Logo" className="h-10" />
        <a className="font-semibold text-2xl">Japan Sushi Roll</a>
      </div>
      <div className="flex-none">
        <label htmlFor="cart_modal" className="btn btn-square btn-ghost">
          <div className="indicator">
            {cartItemsCount > 0 && (
              <span className="badge badge-sm text-xs indicator-item badge-neutral font-semibold">
                {cartItemsCount}
              </span>
            )}
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
          </div>
        </label>
      </div>
    </header>
  );
}

export default Navbar;
