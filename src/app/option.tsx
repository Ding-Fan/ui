"use client";

// alternative to _app.tsx
// https://stackoverflow.com/a/75963374

import React from "react";

import "./globals.css";
// import "@ouud/y-theme/dist/panda.css";
// import "@ouud/y-theme/dist/index.css";

// font awesome
// ---
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

// dayjs
// ---
// import dayjs from "dayjs";
// import relativeTime from "dayjs/plugin/relativeTime";
// import updateLocale from "dayjs/plugin/updateLocale";

// dayjs.extend(relativeTime);
// dayjs.extend(updateLocale);
// dayjs.updateLocale("en", {
//   relativeTime: {
//     ...dayjs.Ls.en.relativeTime,
//     m: "1 minute",
//     h: "1 hour",
//     d: "1 day",
//     M: "1 month",
//     y: "1 year",
//   },
// });

type Props = {};

const Option = (props: Props) => {
  return <></>;
};

export default Option;
