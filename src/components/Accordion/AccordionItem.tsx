import {
  AccordionItem as Accord,
  AccordionItemProps,
} from "@radix-ui/react-accordion";
import clsx from "clsx";
import React, { ForwardedRef, ReactNode } from "react";

type Props = AccordionItemProps;

const AccordionItem = React.forwardRef(
  (
    { children, className, ...props }: Props,
    forwardedRef: ForwardedRef<HTMLDivElement>
  ) => (
    <Accord
      className={clsx(
        "overflow-hidden mt-[1px] first:mt-0 first:rounded-t-[2rem] last:rounded-b-[2rem] focus-within:shadow-sm focus-within:shadow-gray-800 focus-within:relative focus-within:z-10",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      {children}
    </Accord>
  )
);

AccordionItem.displayName = "AccordionItem";

export default AccordionItem;
