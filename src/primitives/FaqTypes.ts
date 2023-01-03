export type FaqItemType = {
  question: string;
  answer: string;
};

export type FaqType = {
  heading?: string;
  faqs: FaqItemType[];
  isOpen?: boolean;
};
