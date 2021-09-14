/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import styles from './decorationBarStyle.module.scss';

const DecorationBar = ({ rotate, screenPos, totalSize }) => {
  const sidebar = {
    initial: {
      clipPath: 'polygon(0px 0px, 50px 0px, 50px 50px, 0px 50px)',
      transition: {
        delay: 0.5,
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
    animate: {
      clipPath: `polygon(0px 0px, ${totalSize * 1.1}px 0px, ${totalSize * 1.1}px 50px, 0px 50px)`,
      transition: {
        type: 'spring',
        stiffness: 20,
        restDelta: 2,
      },
    },
  };
  return (
    <motion.div
      className={styles.mainContainer}
      style={{ top: screenPos.top, rotate }}
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
