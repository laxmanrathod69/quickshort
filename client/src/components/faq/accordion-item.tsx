import { DownArrow } from "@/icons/down-arrow";
import { UpArrow } from "@/icons/up-arrow";
import { AccordionItemProps } from "@/types";
import { useRef } from "react";
import { Button } from "../ui/button";

export const AccordionItem = ({
  value,
  question,
  answer,
  selected,
  setSelected,
}: AccordionItemProps) => {
  const isOpen: boolean = selected === value;
  const contentRef = useRef<HTMLDivElement | null>(null);
  const Icon = isOpen ? UpArrow : DownArrow;

  return (
    <li className="">
      <Button
        type="button"
        variant="ghost"
        onClick={() => setSelected(isOpen ? null : value)}
        className={`w-full flex justify-between items-center py-6 px-4 border-b bg-transparent font-semibold text-base rounded-none ${
          isOpen && "bg-blue-200/70"
        }`}
      >
        {question}
        <Icon className="transition-transform duration-300" />
      </Button>

      <div
        className="overflow-hidden transition-all duration-300"
        style={{
          height: isOpen ? contentRef.current?.scrollHeight || "auto" : 0,
        }}
      >
        <div
          className="prose prose-lg text-gray-700 text-sm p-4"
          ref={contentRef}
          dangerouslySetInnerHTML={{ __html: answer }}
        />
      </div>
    </li>
  );
};
