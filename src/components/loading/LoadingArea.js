import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import useDataGetter from '../customHooks/useDataGetter';

const LoadingArea = () => {
  const [current, setOffset] = useState(0);
  const [ref, inView] = useInView({ threshold: 0.5 });
  const { getFromList } = useDataGetter();

  useEffect(() => {
    if (inView) {
      getFromList(current + 4);
      setOffset(current + 4);
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      style={{ width: '100%', height: '50px' }}
    >
      LOADING AREA
    </div>
  );
};

export default LoadingArea;
