import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="mx-8 text-xs text-muted-foreground mt-auto mb-7">
      <div className="flex justify-start space-x-3 mb-3">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="text-base hover:text-blue-600" />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-base hover:text-gray-800" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-base hover:text-blue-700" />
        </a>
      </div>
      <p>© 2024 akiJacky.com All rights reserved.</p>
    </footer>
  );
}