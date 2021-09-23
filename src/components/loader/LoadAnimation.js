import { motion } from 'framer-motion';
import styles from './loadAnimation.module.scss';

const ballVariants = {
  animate: {
    rotate: 360,
    borderRadius: ['0%', '100%', '0%'],
    margin: [10, 50],
    width: 50,
    transition: {
      repeat: Infinity,
      repeatType: 'reverse',
      duration: 2,
      ease: 'easeInOut',
    },
  },
};

const container = {
  animate: {
    rotate: 360,
    transition: {
      duration: 5,
      repeat: Infinity,
      repeatType: 'loop',
      ease: 'linear',
    },
  },
};

const balls = [1, 2, 3, 4];

const LoadAnimation = () => {
  const createBalls = () => balls.map((b) => (
    <motion.div
      key={b}
      className={styles.ball}
      variants={ballVariants}
      animate="animate"
    />
  ));

  return (
    <>
      <motion.div
        className={styles.mainContainer}
      >
        <motion.div
          className={styles.rotatingFigs}
          variants={container}
          animate="animate"
        >
          {createBalls()}
        </motion.div>
      </motion.div>
    </>
  );
};

export default LoadAnimation;
