/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import cn from 'classnames';
import { FaqType } from '../../primitives/FaqTypes';
import Markdown from 'markdown-to-jsx';
import ChevronDown from '../icons/ChevronDown';
import Divider from '../Divider';
import Typography from '../Typography';
import s from './Faq.module.scss';

export const Faq = ({ heading = "FAQ's", faqs, isOpen = true }: FaqType) => {
  const [faqOpen, setFaqOpen] = useState(isOpen);
  const [activeFaqId, setActiveFaqId] = useState(-1);
  function handleActiveFaq(id:any) {
    if (activeFaqId === id) {
      setActiveFaqId(-1);
    } else setActiveFaqId(id);
  }
  return (
    <div className={s.root}>
      <div className={s.top} onClick={() => setFaqOpen((state) => !state)}>
        <Typography
          renderAs="H3"
          variant="h3"
          label={heading}
          color="text_default"
        />
        <span
          className={cn(s.icon, {
            [s.active]: faqOpen,
          })}
        >
          <ChevronDown />
        </span>
      </div>
      <Divider />
      {faqOpen && (
        <div className={s.bottom}>
          {faqs &&
            faqs?.map((item, idx) => (
              <div className={s.item} key={item?.question}>
                <div
                  className={cn(s.question, {
                    [s.hidden]: activeFaqId !== idx,
                  })}
                  onClick={() => handleActiveFaq(idx)}
                >
                  <Typography
                    renderAs="P"
                    variant="body_sb"
                    label={item?.question}
                    color="text_default"
                  />
                  <span
                    className={cn(s.icon, { [s.active]: activeFaqId === idx })}
                  >
                    <ChevronDown />
                  </span>
                </div>
                {activeFaqId === idx && (
                  <div className={cn(s.answer)}>
                    <Markdown className={s.answerText}>{item?.answer}</Markdown>
                  </div>
                )}
                <Divider />
              </div>
            ))}
        </div>
      )}
    </div>
  );
};
