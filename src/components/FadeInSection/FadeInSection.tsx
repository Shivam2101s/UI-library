import React from 'react';
import cn from 'classnames';
import s from './FadeInSection.module.scss';

export const FadeInSection = ({ children }: { children: any }) => {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();

  function buildThresholdList(num: number) {
    const thresholds = [];

    for (let i = 1.0; i <= num; i++) {
      const ratio = i / num;
      thresholds.push(ratio);
    }

    thresholds.push(0);
    return thresholds;
  }

  React.useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: buildThresholdList(1000),
    };

    function handleIntersect(entries:any) {
      entries.forEach((entry:any) => {
        setVisible(entry.isIntersecting);
        entry.target.style.opacity = entry.intersectionRatio;
      });
    }

    const observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(domRef.current);
  }, []);

  return (
    <div
      className={cn(s.root, {
        [s.is_visible]: isVisible,
      })}
      ref={domRef}
    >
      {children}
    </div>
  );
};
