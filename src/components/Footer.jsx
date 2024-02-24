import SocialIcons from "./SocialIcons";

function Footer() {
  return (
    <footer className="max-w-md bg-base-200 my-1 py-2 w-full">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-2 py-1">
          <div className="flex w-full justify-between">
            <SocialIcons />
            <p className="opacity-70">
              By:{" "}
              <a
                className="font-mono text-blue-600 underline visited:text-purple-600 hover:text-blue-800"
                href="https://github.com/fm-anderson"
                target="_blank"
              >
                <span className="font-semibold">fm-anderson</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
