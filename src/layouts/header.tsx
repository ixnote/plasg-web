import React from "react";
import "./styles.css";
import logomark from "@/assets/imgs/layouts/logomark.svg";
import Image from "next/image";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header">
        <div className="header-content">
          <Image src={logomark} alt="LOGO" />
        </div>
      </div>
    </div>
  );
};

export default Header;
