import React from "react";

const FooterHelper = (props) => {
  return (
    <div className="flex flex-col gap-[1vw] text-left">
      <h1 className="font-bold text-xl">{props.header}</h1>
        <div>
            {props.subcontent.map((content,index)=>(
            <p key={index}>{content}</p>
        ))}
        </div>
    </div>
  );
};

export default FooterHelper;
