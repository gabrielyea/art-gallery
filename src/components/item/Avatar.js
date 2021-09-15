/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import useToggle from '../customHooks/useToggle';
import styles from './avatarStyle.module.scss';

const variants = {
  initial: {
    y: 50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
};

const parent = {
  initial: {
  },
  animate: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const child = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const Avatar = ({ data }) => {
  const [open, toggleOpen] = useToggle(false, true);

  return (
    <AnimateSharedLayout>
      <motion.li className={styles.mainContainer} variants={variants}>
        <motion.div className={styles.img} onClick={toggleOpen} layout />
        <AnimatePresence>
          {open && (
          <motion.div
            variants={parent}
            initial="initial"
            animate="animate"
            exit="exit"
            className={styles.paintData}
          >
            <motion.p variants={child}>
              { data.author }
            </motion.p>
            <motion.p variants={child}>
              Ut occaecat enim proident in
              aliqua ullamco aute veniam laborum duis exercitation reprehenderit veniam.
            </motion.p>
          </motion.div>

          )}
        </AnimatePresence>
      </motion.li>
    </AnimateSharedLayout>
  );
};
export default Avatar;
