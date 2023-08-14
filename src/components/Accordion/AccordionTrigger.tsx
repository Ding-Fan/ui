import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  AccordionHeader,
  AccordionTrigger as Accord,
  AccordionTriggerProps,
} from "@radix-ui/react-accordion";
import React, { ForwardedRef } from "react";
import clsx from "clsx";

type Props = AccordionTriggerProps;

const AccordionTrigger = React.forwardRef(
  (
    { children, className, ...props }: Props,
    forwardedRef: ForwardedRef<HTMLButtonElement>
  ) => (
    <AccordionHeader className={"flex"}>
      <Accord
        className={
          clsx(
            "cursor-pointer h-[45px] px-5 text-[15px] leading-none group flex-1 shadow-[0px_1px_0px]  flex items-center justify-between",
            className
          )
          //   // "&:hover": {
          //   //   bg: "gray.200",
          //   // },
          //   // " group   cursor-default
          //   //     shadow-[0_1px_0] outline-none",
        }
        {...props}
        ref={forwardedRef}
      >
        {children}
        <FontAwesomeIcon
          className={
            clsx(
              "transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]:rotate-180"
            )
            //   // "group-data-[state=open]:rotate-180"
          }
          icon={faChevronDown}
        />
      </Accord>
    </AccordionHeader>
  )
);

AccordionTrigger.displayName = "AccordionTrigger";

export default AccordionTrigger;
