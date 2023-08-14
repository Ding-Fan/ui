import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faDiscord,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import Logo from "./Logo";
import { Utils } from "@/utils/utils";

type Props = {};

const FooterSection = () => {
  return (
    <div className="w-[16vw] px-8">
      <div className="py-4 text-xl">Services</div>
      <div className="list">
        <div className="item">list item</div>
        <div className="item">list item</div>
        <div className="item">list item</div>
      </div>
    </div>
  );
};

const Footer = (props: Props) => {
  return (
    <div className="footer w-full ">
      <div className="top flex justify-around">
        <div className="logo w-[20vw]">
          {/* <Logo type="vertical" />
          <div className="description">
            We are a mobile and web software development agency based in
            Cambridge, UK. We produce outstanding user-centered online software.
          </div> */}
        </div>
        <div className="flex justify-around pt-6">
          {/* {Array(3)
            .fill(0)
            .map((_, index) => {
              return <FooterSection key={index} />;
            })} */}
        </div>
      </div>

      <div className="bottom flex justify-between px-4 pt-8 pb-4">
        {/* <div className="copyright">© 2022 Ding™. All Rights Reserved.</div> */}
        <div className=""></div>
        <div className="links flex text-2xl text-white ">
          <div className="flex cursor-pointer items-center px-4">
            <FontAwesomeIcon
              icon={faTwitter}
              onClick={() => {
                Utils.goTo("");
              }}
            />
          </div>
          <div className="flex cursor-pointer items-center px-4">
            <FontAwesomeIcon
              icon={faTelegram}
              onClick={() => {
                Utils.goTo("");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
