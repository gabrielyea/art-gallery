import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import ScrollToTop from '../../components/buttons/ScrollToTop';
import useToggle from '../../components/customHooks/useToggle';
import useWindowDimensions from '../../components/customHooks/useWindowDimensions';
import DecorationBar from '../../components/decoration_bar/DecorationBar';
import ItemsGallery from '../../components/gallery/ItemsGallery';
import Loader from '../../components/loader/Loader';
import Search from '../../components/search/Search';
import styles from './homeStyle.module.scss';

const container = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

const Home = () => {
  const { x } = useWindowDimensions();
  const [search, toggleSearch] = useToggle(false, true);
  const mainContainer = useRef(null);
  const { loading, status } = useSelector((state) => state.list);

  return (
    <>
      <ScrollToTop />
      <motion.div
        className={styles.mainContainer}
        initial="initial"
        animate="animate"
        variants={container}
        ref={mainContainer}
      >
        <DecorationBar
          totalSize={x}
          rotate="180deg"
        />
        <header className={styles.headerContainer}>

          <div className={styles.titleContainer}>
            <h1>
              Welcome to the gallery.
            </h1>
          </div>
          <Search
            search={toggleSearch}
          />
        </header>
        <DecorationBar
          totalSize={x}
          rotate="0deg"
        />
        {search && (
          <>
            {console.log(loading)}
            <Loader loading={loading} status={status} auto={false} position="80%">
              <ItemsGallery />
            </Loader>
          </>
        )}
      </motion.div>
    </>
  );
};

export default Home;
