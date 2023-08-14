"use client";

import Link from "next/link";
import React, { Fragment, useEffect } from "react";
import { Utils } from "../utils/utils";
import Logo from "./Logo";
import ScrollLink from "./ScrollLink";
import clsx from "clsx";
import { useAtom, useAtomValue } from "jotai";
import { headerColorAtom } from "@/jotai/atoms";

type HeaderItem = {
  label: string;
  path: string;
};

type Props = {
  fixed?: boolean;
  headerItems: HeaderItem[];
};

const Header = ({ fixed, headerItems }: Props) => {
  // const isBlack = useAtomValue(headerColorAtom);
  const [isBlack, setIsBlack] = useAtom(headerColorAtom);

  // const { t } = useTranslation()
  const headerItemStyle = `items-center cursor-pointer py-3 px-5 transition-all`;

  useEffect(() => {
    // console.log("is black", isBlack);

    return () => {};
  }, [isBlack]);

  // mix-blend-difference
  //    bg-transparent
  //    invert

  // const headerItemStyle = cx(
  //   css({
  //     //  underline-animation;
  //     alignSelf: "center",
  //     cursor: "pointer",
  //     py: 3,
  //     px: {
  //       md: 5,
  //       lg: 7,
  //     },
  //   })
  // );

  return (
    <div
      className={clsx(
        "w-full z-20 bg-transparent",
        fixed ? "fixed" : "absolute",
        isBlack ? "text-black" : "text-white"
      )}
      // {cx(
      //   css({
      //     w: "full",
      //     zIndex: 20,
      //     bg: "transparent",
      //     pos: fixed ? "fixed" : "absolute",
      //   })
      // )}
    >
      <div
        className={clsx(
          "py-2 px-5 font-bold flex items-center justify-center md:justify-between  "
        )}
        // {cx(
        // flex({
        //   // justify: "between",
        //   align: "center",
        // }),
        //   css({
        //     // py: 2,
        //     pt: 2,
        //     pb: 2,
        //     pl: 5,
        //     pr: 5,
        //     // px: 5,
        //     // px: 5,
        //     fontWeight: "bold",
        //     // justifyContent: "space-between",
        //   })
        // )}
      >
        <div>
          <Link legacyBehavior href="/" passHref>
            <a
              className="items-center"
              // {cx(
              //   flex({
              //     alignContent: "center",
              //   })
              // )}
            >
              <div className="flex items-center ">
                <Logo
                  className="w-10"
                  // {css({
                  //   w: 44,
                  // })}
                  type="horizontal"
                />
                <div className="ml-3">Logo</div>
              </div>
            </a>
          </Link>
        </div>
        {/* <div className="test">
        <div className="outer">
          <div className="inner">
            inner
          </div>
        </div>
      </div> */}
        <div
          className="hidden md:flex "
          // {css({
          //   display: "flex",
          //   hideBelow: "md",
          // })}
        >
          {headerItems.map(({ label, path }) => {
            let result = (
              <Link
                legacyBehavior
                key={label}
                href={{
                  pathname: path,
                  // query,
                }}
              >
                {Utils.isValidHttpUrl(path) ? (
                  <a target="_blank" className={headerItemStyle}>
                    {/* {t(`header.items.${label}`)} */}
                    {label}
                  </a>
                ) : (
                  <span className={headerItemStyle}>
                    {/* {t(`header.items.${label}`)} */}
                    {label}
                  </span>
                )}
              </Link>
            );
            if (path.includes("#")) {
              result = (
                <Fragment key={label}>
                  {Utils.isValidHttpUrl(path) ? (
                    <Link legacyBehavior key={label} href="/" as={`${path}`}>
                      <a target="_blank" className={headerItemStyle}>
                        {/* {t(`header.items.${label}`)} */}
                        {label}
                      </a>
                    </Link>
                  ) : (
                    // <ReactScrollLink
                    //   className="header-item"
                    //   duration={100}
                    //   smooth
                    //   hashSpy
                    //   to={path.slice(2)}
                    // >
                    //   {t(`header.items.${label}`)}
                    // </ReactScrollLink>

                    <a className={headerItemStyle} href={path}>
                      {/* {t(`header.items.${label}`)} */}
                      {label}
                    </a>
                  )}
                </Fragment>
              );
            }
            return result;
          })}

          {/* <ThemeSwitcher /> */}
        </div>
      </div>

      <div
        className="grid grid-cols-2 place-items-center md:hidden"
        // className="grid grid-cols-3 place-items-center md:hidden"

        // {cx(
        //   css({
        //     // "grid grid-cols-4 place-items-center md:hidden"
        //     display: "grid",
        //     gridTemplateColumns: 4,
        //     hideFrom: "md",
        //     placeItems: "center",
        //   })
        // )}
      >
        {headerItems.map(({ label, path }) => {
          let result = (
            <Link
              legacyBehavior
              key={label}
              href={{
                pathname: path,
                // query,
              }}
            >
              {Utils.isValidHttpUrl(path) ? (
                <a target="_blank" className={headerItemStyle}>
                  {/* {t(`header.items.${label}`)} */}
                  {label}
                </a>
              ) : (
                <span className={headerItemStyle}>
                  {/* {t(`header.items.${label}`)} */}
                  {label}
                </span>
              )}
            </Link>
          );
          if (path.includes("#")) {
            result = (
              <Fragment key={label}>
                {Utils.isValidHttpUrl(path) ? (
                  <Link legacyBehavior key={label} href="/" as={`${path}`}>
                    <a target="_blank" className={headerItemStyle}>
                      {/* {t(`header.items.${label}`)} */}
                      {label}
                    </a>
                  </Link>
                ) : (
                  <ScrollLink path={path}>
                    <a href={path}>
                      {/* {t(`header.items.${label}`)} */}
                      {label}
                    </a>
                  </ScrollLink>
                )}
              </Fragment>
            );
          }
          return result;
        })}
      </div>
    </div>
  );
};

export default Header;
