/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import styles from './decorationBarStyle.module.scss';

const DecorationBar = ({ internalPos, screenPos, totalSize }) => {
  const sidebar = {
    animate: {
      clipPath: `circle(${totalSize * 1.1}px at ${internalPos.x}px 40px)`,
      transition: {
        type: 'spring',
        stiffness: 20,
        restDelta: 2,
      },
    },
    initial: {
      clipPath: `circle(0 at ${internalPos.x}px 40px)`,
      transition: {
        delay: 0.5,
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
  };
  return (
    <motion.div
      className={styles.mainContainer}
      style={{ top: screenPos.top, right: screenPos.right }}
    >
      <motion.div
        className={styles.decorationBar}
        variants={sidebar}
        initial="initial"
        animate="animate"
      />
    </motion.div>
  );
};

export default DecorationBar;
