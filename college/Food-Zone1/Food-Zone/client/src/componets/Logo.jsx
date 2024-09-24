import React from "react";
import { Image } from "@nextui-org/react";
import logo from '../assets/logo.png'

export default function Logo() {
  return (
    <Image
     
      width={50}
      height={50}
      src={logo}
      alt="NextUI Album Cover"
      className="mt-5"
    />
  );
}


