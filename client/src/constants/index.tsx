import { Copy } from "@/icons/copy";
import { Link } from "@/icons/link";
import { Success } from "@/icons/success";

export const FEATURES = [
  {
    title: "Shorten Links Instantly",
    description: "Easily shorten long URLs into concise, shareable links.",
    icon: <Link className="text-blue-500 w-[1.7rem] h-[1.7rem]" />,
  },
  {
    title: "Copy & Paste with Ease",
    description: "Quickly copy your shortened link and paste it anywhere.",
    icon: <Copy className="text-red-600 w-[1.7rem] h-[1.7rem]" />,
  },
  {
    title: "Success Indicator",
    description: "See a confirmation message when your link is shortened.",
    icon: <Success className="w-[1.7rem] h-[1.7rem]" />,
  },
];

export const FAQ_DATA = [
  {
    question: "What is this QuickShort?",
    answer:
      "This QuickShort is a simple tool that allows you to create concise, shareable links for long URLs.",
  },
  {
    question: "How does it work?",
    answer:
      "Simply enter your long URL, and we'll generate a short, shareable link for you.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes, we take data security seriously. Your information is safe with us.",
  },
  {
    question: "Can I customize my shortened link?",
    answer:
      "While we don't offer customization at the moment, we're working on it!",
  },
  {
    question: "Are there any usage limits?",
    answer:
      "There are no usage limits. You can shorten as many URLs as you like.",
  },
];
