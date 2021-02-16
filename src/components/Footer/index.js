import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import FooterBg from "../../img/Footer-bg.png";
import LogoBee2 from "../../img/Logo-Bee-2.png";
import {
  faFacebookSquare,
  faYoutubeSquare,
  faTwitterSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const FooterWrapper = styled.footer`
  background: url(${FooterBg}) center center repeat-y;
  height: 144px;
  padding: 40px;
  & .container {
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1180px;
  }
  @media screen and (max-width: 568px) {
    padding: 16px;
    & .container {
      flex-direction: column;
    }
  }
`;

const FooterLinksList = styled.ul`
  list-style: none;
  @media screen and (max-width: 568px) {
    margin-top: 8px;
  }
`;

const FooterLinksListItem = styled.li`
  display: inline;
  margin-left: 8px;
`;

const FooterLink = styled.a`
  font-size: 32px;
  color: white;
  text-decoration: none;
  transition: all 200ms;
  &:hover {
    color: #ffca28;
  }
`;

function Footer() {
  const socialLinks = [
    {
      socialMedia: "facebook",
      icon: faFacebookSquare,
      href: "https://www.facebook.com/BigTesterOficial",
    },
    {
      socialMedia: "youtube",
      icon: faYoutubeSquare,
      href: "https://www.instagram.com/big_tester/",
    },
    {
      socialMedia: "twitter",
      icon: faTwitterSquare,
      href: "https://twitter.com/Big__Tester",
    },
    {
      socialMedia: "instagram",
      icon: faInstagram,
      href: "https://www.youtube.com/channel/UCAHjUIldX4vKL0VADpH9sOg",
    },
  ];

  return (
    <FooterWrapper>
      <div className="container">
        <div>
          <img src={LogoBee2} />
        </div>
        <div>
          <FooterLinksList>
            {socialLinks.map((item) => (
              <FooterLinksListItem key={`link__${item.socialMedia}`}>
                <FooterLink href={item.href} target="_blank">
                  <FontAwesomeIcon icon={item.icon} />
                </FooterLink>
              </FooterLinksListItem>
            ))}
          </FooterLinksList>
        </div>
      </div>
    </FooterWrapper>
  );
}

export default Footer;
