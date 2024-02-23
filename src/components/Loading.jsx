import logo from "../assets/images/logo.png";

function Loading() {
  return (
    <div className="flex h-screen justify-center items-center relative">
      <span className="loading loading-ring loading-lg absolute"></span>
      <img
        src={logo}
        alt="Japan Sushi Roll Logo"
        className="h-96 w-96 opacity-15 z-[-1]"
      />
    </div>
  );
}

export default Loading;
