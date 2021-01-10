import React from "react";

const Footer: React.FC = () => {
  return (
    <footer>
      <p> &copy; Maximilian Klammer {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
