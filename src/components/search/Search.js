/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { FiRefreshCcw } from 'react-icons/fi';
import { fetchList, clearList } from './listSlice';
import { clearSearch } from './searchSlice';
import MGlassIcon from './MGlassIcon';
import styles from './searchStyle.module.scss';
import useDataGetter from '../customHooks/useDataGetter';

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

const Search = ({ search, toggleSearch }) => {
  const options = [
    {
      name: 'tag',
      message: "Search by tag, i.e., 'clouds'",
      query: 'https://collectionapi.metmuseum.org/public/collection/v1/search?q=',
    },
    {
      name: 'artist',
      message: 'Search by artist or nationality',
      query: 'https://collectionapi.metmuseum.org/public/collection/v1/search?artistOrCulture=true&q=',
    }];

  const [option, setOption] = useState(options[0]);
  const dispatch = useDispatch();
  const { entities: list, loading } = useSelector((state) => state.list);
  const inputRef = useRef(null);
  const { getFromList } = useDataGetter();

  useEffect(() => {
    if (loading === 'idle' && list.length > 0) {
      getFromList(0);
    }
  }, [loading]);

  const handleOption = (e, index) => {
    e.preventDefault();
    setOption(options[index]);
  };

  const clearStates = () => {
    if (search) {
      dispatch(clearSearch());
      dispatch(clearList());
      toggleSearch();
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (search) {
      clearStates();
      return;
    }
    const query = `${option.query}${inputRef.current?.value}`;
    dispatch(fetchList(query));
    toggleSearch();
  };

  return (
    <motion.div className={styles.mainContainer}>
      <motion.form variants={container} initial="initial" animate="animate" onSubmit={handleSearch}>
        <div className={styles.optionsContainer}>
          <motion.button
            variants={children2}
            className={option.name === 'tag' ? styles.selected : styles.option}
            onClick={(e) => handleOption(e, 0)}
            value="tag"
          >
            Tag
          </motion.button>
          <motion.button
            variants={children2}
            className={option.name === 'artist' ? styles.selected : styles.option}
            onClick={(e) => handleOption(e, 1)}
            value="artist"
          >
            Artist
          </motion.button>
        </div>
        <div className={styles.inputContainer}>
          <motion.div variants={children1}>
            <motion.input
              ref={inputRef}
              variants={shadowAnim}
              animate="animate"
              whileFocus="open"
              type="text"
              placeholder={option.message}
              onFocus={clearStates}
            />
          </motion.div>
          {search === true ? (
            <motion.button
              animate={{
                rotate: -360,
                transition: {
                  repeat: Infinity, repeatType: 'loop', duration: 5, ease: 'easeInOut',
                },
              }}
              whileHover={{ scale: 1.2 }}
            >
              <FiRefreshCcw className={styles.icon} />
            </motion.button>
          ) : (
            <motion.button
              whileHover={{ scale: 1.2 }}
            >
              <MGlassIcon />
            </motion.button>
          )}
        </div>
      </motion.form>
    </motion.div>
  );
};

export default Search;
