import github from "../assets/icons/github.svg";

function SocialIcons() {
  return (
    <div className="flex gap-4">
      <a href="https://github.com/fm-anderson/japan-sushi-roll" target="_blank">
        <img src={github} alt="github icon" className="h-5" />
      </a>
    </div>
  );
}

export default SocialIcons;
