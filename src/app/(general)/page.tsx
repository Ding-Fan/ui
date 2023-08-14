"use client";

import Img from "@/components/Img";
import { Utils } from "@/utils/utils";
import clsx from "clsx";
import { useIsInView } from "@/utils/hooks";
import { headerColorAtom } from "@/jotai/atoms";
import { jotaiStore } from "@/jotai/state-provider";
import { useEffect } from "react";
import Picture from "@/components/Picture";

export default function Home() {
  const [ref, isInView] = useIsInView();

  useEffect(() => {
    // setHeaderColorAtom(isInView as boolean);
    jotaiStore.set(headerColorAtom, isInView as boolean);

    // console.log("change header color");
    // console.log(isInView);

    return () => {};
  }, [isInView]);

  return (
    <>
      <div
        ref={ref as any}
        className="hidden md:block bg-white h-[80vh] w-full absolute"
      ></div>
      <div className="container mx-auto relative">
        {Array(5)
          .fill("")
          .map((i, index) => {
            return (
              <div
                key={index}
                className={clsx(
                  "hidden md:flex h-screen items-center justify-center",
                  index === 0 ? "cursor-pointer" : "mx-24 "
                )}
              >
                <Img
                  className="w-full"
                  src={`./images/${index + 1}.svg`}
                  onClick={() => {
                    if (index === 0) {
                      Utils.goTo("");
                    }
                  }}
                />
                {/* <Picture
                  className="w-full"
                  sm={`./images/${index + 1}.svg`}
                  onClick={() => {
                    if (index === 0) {
                      Utils.goTo("");
                    }
                  }}
                /> */}
              </div>
            );
          })}
        {Array(5)
          .fill("")
          .map((i, index) => {
            return (
              <div
                key={index}
                className={clsx(
                  "md:hidden flex h-screen items-center justify-center",
                  index === 0 ? "" : "px-3",
                  index % 2 === 0 ? "" : "bg-[#272A2C]"
                )}
              >
                <Picture
                  className="w-full"
                  xs={`./images/m${index + 1}.png`}
                  sm={`./images/m${index + 1}@2x.png`}
                  md={`./images/m${index + 1}@3x.png`}
                  onClick={() => {
                    if (index === 0) {
                      Utils.goTo("");
                    }
                  }}
                />
                {/* <Img
                  className="w-full"
                  src={`./images/m${index + 1}.svg`}
                  onClick={() => {
                    if (index === 0) {
                      Utils.goTo("");
                    }
                  }}
                /> */}
              </div>
            );
          })}
      </div>
    </>
  );
}
