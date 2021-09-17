/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useSelector } from 'react-redux';
import Avatar from '../item/Avatar';
import styles from './itemsGalleryStyle.module.scss';

const container = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      delayChildren: 0.5,
    },
  },
  exit: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const viewVariants = {
  hide: {
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const ItemsGallery = ({ list }) => {
  const [ref, inView] = useInView();
  const controls = useAnimation();
  const allWorks = useSelector((state) => state.list.entities);

  useEffect(() => {
    if (inView) {
      controls.start('show');
    } else {
      controls.start('hide');
    }
  }, [controls, inView]);

  // const createItems = () => works.map((item) => (
  //   <Avatar
  //     key={item.objectID}
  //     data={item}
  //   />
  // ));

  const createOne = (index) => (
    <Avatar
      key={allWorks[index]}
      search={allWorks[index]}
    />
  );

  const handleClick = () => {
    document.documentElement.scrollTop = 0;
  };

  return (
    <div
      className={styles.mainContainer}
      title="gallery"
    >
      {allWorks.length > 0
        && (
          <motion.ul
            data-testid="gallery"
            variants={container}
            initial="initial"
            animate="animate"
            exit="exit"
            className={styles.itemList}
          >
            {createOne(0)}
            {createOne(1)}
          </motion.ul>
        )}
      <motion.button
        variants={viewVariants}
        animate={controls}
        ref={ref}
        style={{ width: '100%', height: '50px' }}
        onClick={handleClick}
      >
        heelo
      </motion.button>
    </div>
  );
};

export default ItemsGallery;
