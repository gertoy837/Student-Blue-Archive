import React from "react";
import satu from "./img/satu.png";

function Footer() {
  return (
    <footer>
      <div className="right">
        <img src={satu} alt={satu} />
        <p>Copyright&copy; Student By Blue Archive ❤️</p>
      </div>
    </footer>
  );
}

export default Footer;
