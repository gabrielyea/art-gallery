/* eslint-disable react/prop-types */
import {
  AnimatePresence, AnimateSharedLayout, motion, useAnimation,
} from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
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
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
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
  const [ref, inView] = useInView({ threshold: 0.10 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('show');
    } else {
      controls.start('hide');
    }
  }, [controls, inView]);

  const openStyle = { backgroundImage: `url(${data.primaryImageSmall})`, height: '70%' };
  const closeStyle = { backgroundImage: `url(${data.primaryImageSmall})`, height: '90%' };

  return (
    <AnimateSharedLayout>
      <motion.li className={styles.mainContainer} variants={variants}>
        <motion.div
          className={styles.imgContainer}
          ref={ref}
          animate={controls}
          variants={viewVariants}
        >
          <motion.div
            title={data.title}
            className={styles.img}
            onClick={toggleOpen}
            style={open ? openStyle : closeStyle}
            layout
          />
          <AnimatePresence>
            {open && (
              <motion.div
                className={styles.paintData}
                variants={parent}
                initial="initial"
                animate="animate"
                exit="exit"
                layout
              >
                <motion.p variants={child}>
                  Artist:
                  {' '}
                  <span className={styles.info}>{data.artistDisplayName !== '' ? data.artistDisplayName : 'Unknown'}</span>
                </motion.p>
                <motion.p variants={child}>
                  Title:
                  {' '}
                  <span className={styles.info}>{data.title !== '' ? data.title : 'Unknown' }</span>
                </motion.p>
                <motion.p variants={child}>
                  Bio:
                  {' '}
                  <span className={styles.info}>{data.artistDisplayBio !== '' ? data.artistDisplayBio : 'Unknown'}</span>
                </motion.p>
                <motion.p variants={child}>
                  Classification:
                  {' '}
                  <span className={styles.info}>{data.classification !== '' ? data.classification : 'Not specified'}</span>
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.li>
    </AnimateSharedLayout>
  );
};

export default Avatar;
