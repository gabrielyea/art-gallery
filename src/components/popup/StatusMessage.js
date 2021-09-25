/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';

const variants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
  },
};

const StatusMessage = ({ status }) => (
  <motion.div
    variants={variants}
    initial="initial"
    animate="animate"
    style={{
      display: 'flex', justifyContent: 'center', color: 'white', padding: '1em',
    }}
  >
    {status}
  </motion.div>
);

export default StatusMessage;
