export interface ClassProp {
  className?: string;
}

export interface FeaturesCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface AccordionItemProps {
  value: number;
  question: string;
  answer: string;
  selected: number | null;
  setSelected: (index: number | null) => void;
}
