import React from "react";

const Footer = () => {
  return (
    <footer className="backdrop-blur-md bg-slate-900 bg-opacity-85 w-full flex flex-col space-y-2 justify-center p-4">
      <div className="flex justify-center space-x-5">
        <a
          href="mailto:rpa.techclub@kluniversity.in"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="https://img.icons8.com/fluent/30/000000/mail.png" />
        </a>
        <a
          href="https://t.me/rpatechclub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="https://img.icons8.com/fluent/30/000000/telegram-app.png" />
        </a>
        <a
          href="https://www.linkedin.com/in/rpa-technical-club-1a5598244/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" />
        </a>
        <a
          href="https://www.instagram.com/rpa.klef/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" />
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="https://img.icons8.com/fluent/30/000000/twitter.png" />
        </a>
      </div>
      <br />
      <p className="text-center text-gray-400 font-medium">
        &copy; 2024 RPA Club. All rights reservered.
      </p>
    </footer>
  );
};

export default Footer;
