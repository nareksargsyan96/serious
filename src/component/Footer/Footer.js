import React, { useState } from "react";
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

// import Tilt from "react-parallax-tilt";
import "./Footer.css";

export const Footer = () => {
  const [show, setShow] = useState(false);

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
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  };
  return (
    <div className="footer">
      <div className="foter_Line">
        <button className="foter_Line_but" type="button" onClick={handleClick}>
          {show ? <LineDown /> : <LineUp />}
        </button>
        <div className="footer_name">FOOTER</div>
      </div>
      <div
        className={show ? "bounce_footer_modal" : "bounce_footer_modal_close"}
      >
        <Bounce bottom opposite collapse when={show}>
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
            {/* <Tilt
                className="track-on-window"
                perspective={500}
                glareEnable={true}
                glareMaxOpacity={0.75}
                glarePosition="all"
                scale={1.02}
                trackOnWindow={true}
              >
                
              </Tilt> */}
          </div>
        </Bounce>
      </div>
    </div>
  );
};
