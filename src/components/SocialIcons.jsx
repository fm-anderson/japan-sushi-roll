import instagram from "../assets/icons/instagram.svg";
import whatsapp from "../assets/icons/whatsapp.svg";

function SocialIcons() {
  return (
    <div className="flex gap-4">
      <a href="https://www.instagram.com/yumisushihouse/" target="_blank">
        <img src={instagram} alt="instagram icon" className="h-5" />
      </a>
      <a href="https://wa.me/+19549345737" target="_blank">
        <img src={whatsapp} alt="whatsapp icon" className="h-5" />
      </a>
    </div>
  );
}

export default SocialIcons;
