/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import Avatar from '../item/Avatar';
import LoadingArea from '../loading/LoadingArea';
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

const ItemsGallery = () => {
  const allWorks = useSelector((state) => state.works.entities);
  const galleryRef = useRef(null);

  useEffect(() => {
    if (allWorks.length === 4) {
      galleryRef.current?.scrollIntoView();
    }
  }, [allWorks]);

  const createItems = () => allWorks.map((item) => (
    <Avatar
      key={item.objectID}
      data={item}
    />
  ));

  return (
    <div
      className={styles.mainContainer}
      title="gallery"
    >
      {allWorks.length > 0
        && (
          <motion.ul
            ref={galleryRef}
            data-testid="gallery"
            variants={container}
            initial="initial"
            animate="animate"
            exit="exit"
            className={styles.itemList}
          >
            {createItems()}
          </motion.ul>
        )}
      <LoadingArea />
    </div>
  );
};

export default ItemsGallery;
