/* eslint-disable no-unused-vars */
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useSelector } from 'react-redux';
import useDataGetter from '../customHooks/useDataGetter';
import LoadAnimation from '../loader/LoadAnimation';
import StatusMessage from '../popup/StatusMessage';

const variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 0.5,
  },
  exit: {
    opacity: 0,
  },
};

const LoadingArea = () => {
  const [current, setOffset] = useState(0);
  const [ref, inView] = useInView({ threshold: 1 });
  const { getFromList } = useDataGetter();
  const { loading, error } = useSelector((state) => state.works);

  const getDataStack = () => {
    getFromList(current + 4);
    setOffset(current + 4);
  };

  useEffect(() => {
    if (inView && error === null) {
      getDataStack();
    }
  }, [inView]);

  return (
    <div
      className="loadingArea"
      ref={ref}
      style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '50px',
      }}
    >
      {error === null ? (
        <AnimatePresence>
          {loading === 'pending' && (
          <motion.div
            style={{ color: 'white' }}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <LoadAnimation />
          </motion.div>
          )}
        </AnimatePresence>
      )
        : (
          <StatusMessage status={error} />
        )}
    </div>
  );
};

export default LoadingArea;
