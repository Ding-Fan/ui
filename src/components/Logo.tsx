import React, { useCallback } from "react";
import Img from "./Img";

type Props = {
  type: "horizontal" | "vertical";
  className?: string;
};

const Logo = ({ className, type }: Props) => {
  const logoHorizontal = "/images/logo-horizontal.svg";
  const logoVertical = "/images/logo-vertical.svg";

  const getLogo = useCallback(() => {
    switch (type) {
      case "vertical":
        return logoVertical;
      case "horizontal":
        return logoHorizontal;
      default:
        return logoHorizontal;
    }
  }, [type]);

  return <Img className={className} src={getLogo()} alt="logo" />;
};

export default Logo;
