import { useLoaderData } from "react-router-dom";
import StatusBadge from "./StatusBadge";

function ItemModal() {
  const { hours, currentDay } = useLoaderData();

  return (
    <>
      <input type="checkbox" id="hours_modal" className="modal-toggle" />
      <div className="modal modal-bottom max-w-md" role="dialog">
        <div className="modal-box">
          <div className="pb-8">
            <h3 className="font-bold text-lg">Store Hours</h3>
            <p className="opacity-80">
              The restaurant's actual hours of operation
            </p>
          </div>
          {hours.map((item, index) => (
            <div
              key={item.day}
              className={`py-2 flex justify-between items-center ${
                index === hours.length - 1 ? "last:border-b-0" : "border-b-2"
              }`}
            >
              <span>
                <p className="font-semibold">{item.day}</p>
                <p>
                  {item.from.toLowerCase() === "closed"
                    ? "Closed"
                    : `${item.from} - ${item.to}`}
                </p>
              </span>
              {item.day === currentDay && <StatusBadge isOpen={true} />}
            </div>
          ))}

          <label
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            htmlFor="hours_modal"
          >
            ✕
          </label>
        </div>
        <label className="modal-backdrop" htmlFor="hours_modal">
          Close
        </label>
      </div>
    </>
  );
}

export default ItemModal;
