import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const social = [
  {
    id: 0,
    url: "https://www.instagram.com/cleverscomputer/",
    icon: <FaInstagram />,
  },
  {
    id: 1,
    url: "https://www.facebook.com/profile.php?id=61560260110875",
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: "https://www.linkedin.com/company/103264928/admin/dashboard/",
    icon: <FaLinkedin />,
  },
  {
    id: 3,
    url: "https://x.com/CleversComputer",
    icon: <FaXTwitter />,
  },
];

function SocialButtons() {
  return (
    <div className="flex py-10 justify-center">
      <ul>
        <li className="flex gap-[20px]">
          {social.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="hover:bg-[#474748]  h-[28px] w-[28px] rounded-[4px] text-white text-[16px] flex justify-center items-center"
            >
              {item.icon}
            </a>
          ))}
        </li>
      </ul>
    </div>
  );
}

export default SocialButtons;
