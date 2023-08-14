"use client";

import React, { ReactNode } from "react";
import { Utils } from "../utils/utils";

type Props = {
  path: string;
  children: ReactNode;
};

// * maybe just use anchor with hash

const ScrollLink = ({ path, children }: Props) => {
  const handleClick = () => {
    if (path.includes("#")) {
      const element = document.querySelector(
        Utils.getSubstringFromFirstHash(path)
      );
      // console.log('show element', element)

      const htmlElement = document.querySelector("html");

      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }

      //   if (element) {
      //     const rect = element.getBoundingClientRect()
      //     const scrollTop =
      //       window.pageYOffset || document.documentElement.scrollTop
      //     window.scrollTo({
      //       top: rect.top + scrollTop,
      //       behavior: 'smooth',
      //     })
      //   }

      // if (element && htmlElement) {
      //   const containerRect = htmlElement.getBoundingClientRect()
      //   const elementRect = element.getBoundingClientRect()
      //   const scrollToPosition = elementRect.top - containerRect.top

      //   htmlElement.scrollTo({
      //     top: scrollToPosition,
      //     behavior: 'smooth',
      //   })
      // }
    }
  };

  return (
    <div className="flex items-center justify-center" onClick={handleClick}>
      {children}
    </div>
  );
};

export default ScrollLink;
