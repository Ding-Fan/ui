/* eslint-disable @next/next/no-img-element */
"use client";

import React, { ImgHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends ImgHTMLAttributes<HTMLImageElement> {}

const Img = ({ className = "", src = "", alt = "", ...props }: Props) => {
  return <img className={twMerge(className)} src={src} alt={alt} {...props} />;
};

export default Img;
