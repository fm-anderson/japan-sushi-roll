import { useState } from "react";

function Overview() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mx-4 mt-2 flex flex-col gap-2">
      <div>
        {isOpen ? (
          <span className="badge badge-primary font-mono font-bold text-primary-content">
            open
          </span>
        ) : (
          <span className="badge badge-accent font-mono font-bold text-primary-content">
            closed
          </span>
        )}
      </div>

      <div className="grid grid-cols-4 gap-2">
        <button className="btn">Fresh</button>
        <button className="btn">Cooked</button>
        <button className="btn">Joys</button>
        <button className="btn">Party</button>
      </div>
    </div>
  );
}

export default Overview;
