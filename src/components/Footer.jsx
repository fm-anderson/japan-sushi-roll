function Footer() {
  return (
    <footer className="max-w-md bg-base-200">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-1 py-2">
          <div className="flex gap-6">
            <h1>Yumi Sushi House © {new Date().getFullYear()}</h1>
          </div>

          <div>
            <p>
              Created by:{" "}
              <a
                className="text-blue-600 underline visited:text-purple-600 hover:text-blue-800"
                href="https://github.com/fm-anderson"
                target="_blank"
              >
                fm-anderson
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
