import { useLoaderData } from "react-router-dom";
import fallbackImage from "../assets/images/image-placeholder-featured.jpg";

function Featured() {
  const { featured } = useLoaderData();

  return (
    <div className="mx-4 my-1">
      <div className="card image-full card-bordered card-compact bg-base-100 shadow-xl">
        <figure>
          <img
            className="h-full"
            src={featured.image ? featured.image : fallbackImage}
            alt="Featured Image"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl">{featured.title}</h2>
          {featured.desc && <p>{featured.desc}</p>}
          {featured.price && (
            <p className="text-lg">
              <span
                className={`${featured.discount ? "text-xl text-accent line-through" : "text-2xl"}`}
              >
                {featured.price}
              </span>
              <span className="text-2xl"> {featured.discount}</span>
            </p>
          )}
          <div className="card-actions justify-end">
            <a
              href={featured.actionLink}
              target="_blank"
              className="btn btn-primary btn-sm"
            >
              {featured.action.toUpperCase()}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
