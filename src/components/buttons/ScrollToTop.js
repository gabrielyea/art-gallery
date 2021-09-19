import { motion, useAnimation } from 'framer-motion';
import { FaRegArrowAltCircleUp } from 'react-icons/fa';
import { useEffect } from 'react';
import styles from './scrollBtn.module.scss';

const viewVariants = {
  hide: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
};

const ScrollToTop = () => {
  const controls = useAnimation();

  const handleClick = () => {
    document.documentElement.scrollTop = 0;
  };

  const handleScroll = () => {
    if (window.scrollY > 1000) {
      controls.start('show');
    } else {
      controls.start('hide');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.button
      className={styles.btn}
      variants={viewVariants}
      animate={controls}
      onClick={handleClick}
    >
      <motion.div
        whileHover={{ scale: 1.2 }}
      >
        <FaRegArrowAltCircleUp className={styles.icon} />
      </motion.div>
    </motion.button>
  );
};

export default ScrollToTop;
