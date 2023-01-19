import React from 'react';

const useScrollIntoView = (options: any) => {
  const { scrollIntoView = false, ref } = options;
  React.useEffect(() => {
    if (scrollIntoView) {
      ref?.current?.scrollIntoView();
    }
  }, []);
};

export default useScrollIntoView;
