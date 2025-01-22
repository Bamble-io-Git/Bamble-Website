import React from 'react';

const useHeaderTitle = (title: string) => {
  React.useEffect(() => {
    document.title = title;
  }, [title]);
};

export default useHeaderTitle;
