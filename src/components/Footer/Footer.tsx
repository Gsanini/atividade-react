import React from "react";
import { Link } from "react-router-dom";
import { FooterStyled } from "./StyledFooter";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";

export const Footer: React.FC = () => {
  return (
    <FooterStyled>
      <div>
        <nav>
          <ul>
            <li>
              <Link to={"#"}>About</Link>
            </li>
            <li>
              <Link to={"#"}>Contact</Link>
            </li>
            <li>
              <Link to={"#"}>Terms of Use</Link>
            </li>
            <li>
              <Link to={"#"}>Privacy Policy</Link>
            </li>
          </ul>
        </nav>
        <small>&copy; Your WebSite 2022. All rights reserved</small>
      </div>
      <div>
        <span>
          <BsFacebook />
        </span>
        <span>
          <BsTwitter />
        </span>
        <span>
          <BsInstagram />
        </span>
      </div>
    </FooterStyled>
  );
};
