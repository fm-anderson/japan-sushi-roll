import SocialIcons from "./SocialIcons";

function Footer() {
  return (
    <footer className="max-w-md bg-base-200 my-1 py-2">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-1 py-2">
          <div className="flex w-full justify-between">
            <SocialIcons />
            <p className="opacity-80">
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
