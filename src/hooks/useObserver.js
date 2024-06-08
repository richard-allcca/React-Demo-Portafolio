import { useEffect } from 'react';

export const useObserver = (elementRef, dependency, setElementHeight) => {
  useEffect(() => {
    const element = elementRef.current;

    if (!element) {
      return;
    }

    // Function to update the element height
    const updateHeight = () => {
      const height = element.offsetHeight; // Get the height of the element
      setElementHeight(height);
    };

    // Initial measurement after the component is mounted
    updateHeight();

    // Create a ResizeObserver to monitor element height changes
    const resizeObserver = new ResizeObserver(updateHeight);

    // Start observing the element
    resizeObserver.observe(element);

    // Cleanup when the component unmounts
    return () => {
      resizeObserver.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dependency]);
};
