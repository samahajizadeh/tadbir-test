import React from "react";
import Image from "next/image";

import tadbirLogo from "../../assets/images/logo.svg";

function Logo(props) {
  return (
    <Image
      src={tadbirLogo}
      alt="کارگزاری آرمان تدبیر نقش جهان"
      width={props.width || 200}
      height={props.height}
    />
  );
}

export default Logo;
