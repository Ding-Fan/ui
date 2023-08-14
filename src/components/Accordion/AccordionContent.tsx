import {
  AccordionContent as Accord,
  AccordionContentProps,
} from "@radix-ui/react-accordion";
import React, { ForwardedRef } from "react";
import { twMerge } from "tailwind-merge";

type Props = AccordionContentProps;

const AccordionContent = React.forwardRef(
  (
    { children, className, ...props }: Props,
    forwardedRef: ForwardedRef<HTMLDivElement>
  ) => (
    <Accord
      className={twMerge(
        "overflow-hidden text-gray-800 text-[15px]  data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      <div className={"py-[15px] px-5"}>{children}</div>
    </Accord>
  )
);

AccordionContent.displayName = "AccordionContent";

export default AccordionContent;
