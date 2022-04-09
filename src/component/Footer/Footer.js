import React from "react";
import Bounce from "react-reveal/Bounce";

import { ReactComponent as LineDown } from "../../Img/lineDown.svg";
import { ReactComponent as LineUp } from "../../Img/lineUp.svg";
import { ReactComponent as Vector } from "../../Img/Vector.svg";
import { ReactComponent as Telegram } from "../../Img/telegram.svg";
import { ReactComponent as Wkontakte } from "../../Img/wk.svg";
import { ReactComponent as LinkedIn } from "../../Img/linkedIn.svg";
import { ReactComponent as Facebook } from "../../Img/fb.svg";
import { ReactComponent as Instagram } from "../../Img/instagram.svg";
import { ReactComponent as WhatsApp } from "../../Img/whatsApp.svg";

import "./Footer.css";

export const Footer = ({ showFooter, toggleShow }) => {
  const footerSocial = [
    {
      link: "#",
      img: <Vector />,
    },
    {
      link: "#",
      img: <LinkedIn />,
    },
    {
      link: "#",
      img: <Facebook />,
    },
    {
      link: "#",
      img: <Instagram />,
    },
    {
      link: "#",
      img: <Wkontakte />,
    },
    {
      link: "#",
      img: <Telegram />,
    },
    {
      link: "#",
      img: <WhatsApp />,
    },
  ];
  const handleClick = () => {
    toggleShow(!showFooter);
  };
  return (
    <div className="footer">
      <div className="footer_Line">
        <button className="footer_Line_but" type="button" onClick={handleClick}>
          <div className="footer__btn-icon">
            {showFooter ? <LineDown /> : <LineUp />}
          </div>
          <span className="footer__btn-name">FOOTER</span>
        </button>
      </div>
      <div
        className={
          showFooter ? "bounce_footer_modal" : "bounce_footer_modal_close"
        }
      >
        <Bounce bottom opposite collapse when={showFooter}>
          <div className="footer_modal">
            <ul className="footer_social">
              {footerSocial.map((item, index) => {
                return (
                  <li key={index} className="social">
                    <a href={item.link}>{item.img}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </Bounce>
      </div>
    </div>
  );
};
