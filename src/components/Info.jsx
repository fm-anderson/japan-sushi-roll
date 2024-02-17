import { useState } from "react";

function Info() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mx-4 mt-2 justify-between flex gap-2">
      <div>
        <label htmlFor="hours_modal">
          <span className="badge badge-ghost font-mono font-bold align-middle text-primary-content">
            view hours
          </span>
        </label>
      </div>
      <div>
        {isOpen ? (
          <span className="badge badge-primary font-mono font-bold align-middle text-primary-content">
            open now
          </span>
        ) : (
          <span className="badge badge-accent font-mono font-bold align-middle text-primary-content">
            closed
          </span>
        )}
      </div>
    </div>
  );
}

export default Info;
