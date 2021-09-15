/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
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

const ItemsGallery = ({ list }) => {
  const items = [{ id: 1, author: 'Monet' }, { id: 2, author: 'Rembrant' }, { id: 3, author: 'Velasquez' }, { id: 4, author: 'Golla' }];

  const createItems = () => items.map((item) => (
    <Avatar
      key={item.id}
      data={item}
    />
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
