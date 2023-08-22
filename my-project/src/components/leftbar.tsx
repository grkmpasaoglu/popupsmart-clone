import Image from "next/image";
import Facebook from "@/assets/Facebook.png";
import Pinterest from "@/assets/Pinterest.png";
import Twitter from "@/assets/Twitter.png";
import LinkedIn from "@/assets/LinkedIn.png";

const Leftbar: React.FC = () => {
  return (
    <div>
      <a href="https://facebook.com/">
        <div className="h-6 w-6 mb-6">
          <Image src={Facebook} alt="Facebook Logo" width={24} height={24} />
        </div>
      </a>

      <a href="https://pinterest.com">
        <div className="h-6 w-6 mb-6">
          <Image src={Pinterest} alt="Pinterest Logo" width={24} height={24} />
        </div>
      </a>

      <a href="https://linkedin.com">
        <div className="h-6 w-6 mb-6">
          <Image src={LinkedIn} alt="LinkedIn Logo" width={24} height={24} />
        </div>
      </a>
    </div>
  );
};

export default Leftbar;
