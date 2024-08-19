import React from "react";
import FooterHelper from "../components/footerHelper";

const Footer = () => {
  return (
    <div className="bg-black text-white flex flex-col">
      <div className="flex justify-between px-[7vw] py-[2vw]">
        <div className="flex flex-col gap-[1vw] text-left">
          <h1 className="font-bold text-xl">Abstract</h1>
          <p>Branches</p>
        </div>
        <div className="flex gap-[8vw]">
          <FooterHelper
            header={"Resources"}
            subcontent={["Branches", "Help Center", "Release Notes", "Status"]}
          />
          <FooterHelper
            header={"Community"}
            subcontent={[
              "Twitter",
              "LinkedIn",
              "Facebook",
              "Dribble",
              "Podcast",
            ]}
          />
          <FooterHelper
            header={"Company"}
            subcontent={["About Us", "Careers", "Legal"]}
          />
          <FooterHelper
            header={"Contact Us"}
            subcontent={["harshmalik00011@gmail.com"]}
          />
        </div>
      </div>
      <div className="text-center text-gray-500 my-8 text-xl">
        <p>© 2024 Abstract Studio Design, Inc. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
