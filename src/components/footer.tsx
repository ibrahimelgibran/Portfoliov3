import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Paragraph } from "./ui/typography";

export default function Footer() {
  const date = new Date();

  return (
    <footer className="w-full flex justify-center items-center p-4">
      <div className="w-full max-w-xl flex justify-center sm:justify-between flex-col sm:flex-row items-center">
        <Paragraph className="font-bold text-sm">
          ©{date.getFullYear()} made with 💙 by me
        </Paragraph>
        <div className="space-x-4 mt-4 sm:mt-0 flex justify-center items-center">
          <Link to="https://github.com/ibrahimelgibran" target="_blank">
            <GithubIcon size={20} />
          </Link>
          <Link
            to="https://www.linkedin.com/in/ibrahimelgibran"
            target="_blank"
          >
            <LinkedinIcon size={20} />
          </Link>
          {/* <Link to="https://www.facebook.com/ibrahimelgibran" target="_blank">
            <FacebookIcon size={20} />
          </Link> */}
          <Link to="https://www.instagram.com/elgibran17/" target="_blank">
            <InstagramIcon size={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
