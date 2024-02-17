import { useLoaderData } from "react-router-dom";

function ItemModal() {
  const data = useLoaderData();

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return (
    <>
      <input type="checkbox" id="hours_modal" className="modal-toggle" />
      <div className="modal modal-bottom" role="dialog">
        <div className="modal-box">
          <div className="pb-8">
            <h3 className="font-bold text-lg">Store Hours</h3>
            <p className="opacity-80">
              The restaurant's actual hours of operation
            </p>
          </div>
          {days.map((day) => (
            <div key={day} className="border-b-2 py-2">
              <p className="font-semibold">{day}</p>
              <p>11:00 am - 10:00 pm</p>
            </div>
          ))}
          <div className="py-2 flex justify-between">
            <span>
              <p className="font-semibold">Sunday</p>
              <p>11:00 am - 10:00 pm</p>
            </span>
            <span className="badge badge-primary font-mono font-bold align-middle text-primary-content">
              open now
            </span>
          </div>

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
