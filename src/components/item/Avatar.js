/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {
  AnimatePresence, AnimateSharedLayout, motion, useAnimation,
} from 'framer-motion';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import useToggle from '../customHooks/useToggle';
import { fetchData } from '../search/searchSlice';
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

const Avatar = ({ search }) => {
  const [current, setCurrent] = useState(null);
  const [open, toggleOpen] = useToggle(false, true);
  const [ref, inView] = useInView({ threshold: 0.5 });
  const controls = useAnimation();

  const getFromList = async () => {
    const query = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${search}`;
    const response = await axios.get(query);
    setCurrent(response.data);
  };

  useEffect(() => {
    if (inView) {
      controls.start('show');
    } else {
      controls.start('hide');
    }
  }, [controls, inView]);

  useEffect(() => {
    getFromList();
  }, []);

  return (
    <AnimateSharedLayout>
      {current !== null && (
        <motion.li className={styles.mainContainer} variants={variants}>
          <motion.div
            ref={ref}
            animate={controls}
            className={styles.img}
            onClick={toggleOpen}
            layout
            variants={viewVariants}
            style={{ backgroundImage: `url(${current.primaryImage})` }}
          />
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
                {search.artistDisplayName}
              </motion.p>
              <motion.p variants={child}>
                {search.title}
              </motion.p>
            </motion.div>

            )}
          </AnimatePresence>
        </motion.li>
      )}
    </AnimateSharedLayout>
  );
};
export default Avatar;
