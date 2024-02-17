function Featured() {
  return (
    <div className="mx-4 my-1">
      <div className="card image-full card-bordered card-compact bg-base-100 shadow-xl">
        <figure>
          <img
            className="h-full"
            src="https://img.freepik.com/premium-vector/watercolor-horizontal-flatlay-composition-seamless-border-with-traditional-japanese-food-sushi_714749-140.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl">Yumi Sushi Class</h2>
          <p className="text-lg">
            <span className="text-xl text-accent line-through">$249.99</span>
            <span className="text-2xl"> $179.99</span>
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary btn-sm">LEARN MORE</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
