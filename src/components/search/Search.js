/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { useState } from 'react';
import { RiSearchLine } from 'react-icons/ri';
import MGlassIcon from './MGlassIcon';
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
  whileHover: {
    scale: 1.2,
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

const shadowAnim = {
  animate: {
    boxShadow: '0px 0px 1px 5px #555',
  },
  open: {
    boxShadow: '0px 0px 1px 20px rgba(80, 198, 241, 0)',
    backgroundColor: 'rgba(238, 238, 238, 0.3)',
    transition: {
      boxShadow: {
        duration: 0.3,
        from: '0px 0px 1px 10px #888}',
      },
    },
  },
};

const Search = () => {
  const [option, setOption] = useState('author');

  const handleClick = (e) => {
    e.preventDefault();
    setOption(e.target.value);
  };

  return (
    <motion.div className={styles.mainContainer}>
      <motion.form variants={container} initial="initial" animate="animate">
        <div className={styles.optionsContainer}>
          <motion.button
            variants={children2}
            className={option === 'author' ? styles.selected : styles.option}
            onClick={(e) => handleClick(e, 'author')}
            value="author"
          >
            Author
          </motion.button>
          <motion.button
            variants={children2}
            className={option === 'work' ? styles.selected : styles.option}
            onClick={(e) => handleClick(e, 'work')}
            value="work"
          >
            Work
          </motion.button>
        </div>
        <div className={styles.inputContainer}>
          <motion.div variants={children1}>
            <motion.input
              variants={shadowAnim}
              animate="animate"
              whileFocus="open"
              type="text"
              placeholder={`Enter ${option} name`}
            />
          </motion.div>
          <motion.button type="submit">
            {/* <RiSearchLine className={styles.icon} /> */}
            <MGlassIcon />
          </motion.button>
        </div>
      </motion.form>
    </motion.div>
  );
};

export default Search;
