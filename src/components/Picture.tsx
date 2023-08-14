import React, { ImgHTMLAttributes } from "react";

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  xs?: string;
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
  xl2?: string;
  alt?: string;
}

const Picture = ({
  xs,
  sm,
  md,
  lg,
  xl,
  xl2,
  alt,
  className,
  ...props
}: Props) => {
  const breakpoints = {
    XS: "(min-width: 560px)",
    SM: "(min-width: 640px)",
    MD: "(min-width: 768px)",
    LG: "(min-width: 1024px)",
    XL: "(min-width: 1280px)",
    XL2: "(min-width: 1536px)",
  };

  return (
    <picture>
      {xs && <source srcSet={xs} media={breakpoints.XS} />}
      {sm && <source srcSet={sm} media={breakpoints.SM} />}
      {md && <source srcSet={md} media={breakpoints.MD} />}
      {lg && <source srcSet={lg} media={breakpoints.LG} />}
      {xl && <source srcSet={xl} media={breakpoints.XL} />}
      {xl2 && <source srcSet={xl2} media={breakpoints.XL2} />}
      <img
        className={className}
        src={xs || sm || md || lg || xl || xl2}
        alt={alt || "image"}
        {...props}
      />
    </picture>
  );
};

export default Picture;
