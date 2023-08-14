"use client";

import AccordionContent from "@/components/Accordion/AccordionContent";
import AccordionItem from "@/components/Accordion/AccordionItem";
import AccordionTrigger from "@/components/Accordion/AccordionTrigger";
import Img from "@/components/Img";
import { headerColorAtom } from "@/jotai/atoms";
import { jotaiStore } from "@/jotai/state-provider";
import * as Accordion from "@radix-ui/react-accordion";
import clsx from "clsx";
import React from "react";

type Props = {};

const page = (props: Props) => {
  const triggerStyle = "bg-[#41C2C0]";
  const contentStyle = "bg-[#90e0e9]";

  jotaiStore.set(headerColorAtom, false);

  return (
    <div
      className={clsx("grid grid-cols-3 min-h-screen place-items-center mx-20")}
    >
      <Img className="w-[28vw]" src="/images/FAQ.svg" />
      <Accordion.Root
        type="single"
        defaultValue="item-1"
        collapsible
        className={clsx("mt-10 w-full  shadow-md")}
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className={triggerStyle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </AccordionTrigger>
          <AccordionContent className={contentStyle}>
            Lorem ipsum dolor sit.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className={triggerStyle}>
            Is it unstyled?
          </AccordionTrigger>
          <AccordionContent className={contentStyle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            numquam reiciendis, officiis voluptatibus unde qui excepturi! Nobis
            eos odio praesentium!
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger className={triggerStyle}>
            Lorem ipsum dolor sit amet.
          </AccordionTrigger>
          <AccordionContent className={contentStyle}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat at
            perspiciatis dicta itaque distinctio inventore, atque quibusdam ut,
            dolorum quod vel omnis deserunt eum quidem exercitationem quasi
            esse. Ex, animi? Minus fugiat a omnis doloremque adipisci facilis
            veniam, soluta vel ab deserunt. Itaque odit eum quidem ea ducimus
            asperiores aut?
          </AccordionContent>
        </AccordionItem>
      </Accordion.Root>
    </div>
  );
};

export default page;
