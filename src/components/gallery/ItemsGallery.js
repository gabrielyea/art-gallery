/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import styles from './itemsGalleryStyle.module.scss';

const container = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
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

const ItemsGallery = ({ list }) => {
  const items = [1, 2, 3, 4];

  const createItems = () => items.map((item) => (
    <div
      key={item}
      style={{ width: '200px', height: '200px', backgroundColor: 'pink' }}
    >
      { item }
    </div>
  ));
  return (
    <div
      className={styles.mainContainer}
      title="gallery"
    >
      {items
        && (
          <motion.ul
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
    </div>
  );
};

export default ItemsGallery;
