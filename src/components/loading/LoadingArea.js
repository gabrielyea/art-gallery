/* eslint-disable no-unused-vars */
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useSelector } from 'react-redux';
import useDataGetter from '../customHooks/useDataGetter';
import LoadAnimation from '../loader/LoadAnimation';

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
    </div>
  );
};

export default LoadingArea;
