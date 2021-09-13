import { motion } from 'framer-motion';
import { RiSearchLine } from 'react-icons/ri';
import styles from './searchStyle.module.scss';

const container = {
  initial: {
  },
  animate: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const children1 = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

const children2 = {
  initial: {
    scale: 0,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
  },
};

const Search = () => (

  <motion.div className={styles.mainContainer}>
    <motion.form variants={container} initial="initial" animate="animate">
      <div className={styles.optionsContainer}>
        <motion.div variants={children2} className={styles.option}> Author </motion.div>
        <motion.div variants={children2} className={styles.selected}> Work name </motion.div>
      </div>
      <div className={styles.inputContainer}>
        <motion.div variants={children1}>
          <input type="text" />
        </motion.div>
        <motion.button variants={children1} type="submit">
          <RiSearchLine className={styles.icon} />
        </motion.button>
      </div>
    </motion.form>
  </motion.div>
);

export default Search;
