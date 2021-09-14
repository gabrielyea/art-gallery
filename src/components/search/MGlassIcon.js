import { motion } from 'framer-motion';

const MGlassIcon = () => (
  <motion.span
    style={{
      display: 'inline', scale: 0.8, position: 'relative', top: '-10px',
    }}
  >
    <motion.svg
      viewBox="0 0 210 297"
    >
      <motion.path
        initial={{
          pathLength: 0,
          stroke: 'rgb(78, 197, 241)',
        }}
        animate={{
          stroke: 'rgba(238, 238, 238, 0.5)',
          pathLength: 1,
          transition: {
            duration: 1.5,
          },
        }}
        style={{
          strokeWidth: 10, fill: 'none',
        }}
        d="m 79.185864,100.64906 a 72.571427,71.437499 0 0 0 -72.5712813,71.43749 72.571427,71.437499 0 0 0 72.5712813,71.4375 72.571427,71.437499 0 0 0 72.571796,-71.4375 72.571427,71.437499 0 0 0 -72.571796,-71.43749 z m 43.845386,128.51205 55.18474,63.5 z"
      />
    </motion.svg>
  </motion.span>
);

export default MGlassIcon;
