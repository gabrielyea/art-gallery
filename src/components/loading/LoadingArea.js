/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useSelector } from 'react-redux';
import useDataGetter from '../customHooks/useDataGetter';

const LoadingArea = () => {
  const [current, setOffset] = useState(0);
  const [ref, inView] = useInView({ threshold: 0.5 });
  const { getFromList } = useDataGetter();
  const { loading } = useSelector((state) => state.works);

  useEffect(() => {
    if (inView) {
      getFromList(current + 4);
      setOffset(current + 4);
    }
  }, [inView]);

  return (
    <div
      className="loadingArea"
      ref={ref}
      style={{ width: '100%', height: '50px' }}
    >
      {loading === 'pending' && (
      <div style={{ color: 'white' }}>
        LOADING AREA
      </div>
      )}
    </div>
  );
};

export default LoadingArea;
