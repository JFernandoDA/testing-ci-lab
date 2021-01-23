import * as React from 'react';

export const usePolling = () => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    // Simulate calls to api and count it
    const interval = window.setInterval(() => {
      setCount(c => c + 1);
    }, 500);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  return { count };
};
