/* eslint-disable no-unused-vars */
import {
  motion, useAnimation, useTransform, useViewportScroll,
} from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import ScrollToTop from '../../components/buttons/ScrollToTop';
import useToggle from '../../components/customHooks/useToggle';
import useWindowDimensions from '../../components/customHooks/useWindowDimensions';
import DecorationBar from '../../components/decoration_bar/DecorationBar';
import ItemsGallery from '../../components/gallery/ItemsGallery';
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
  const galleryRef = useRef(null);
  const works = useSelector((state) => state.works);

  useEffect(() => {
    if (works.loading === 'idle' && works.entities.length > 0) {
      galleryRef.current?.scrollIntoView();
    }
    // mainContainer.current.addEventListener('DOMNodeInserted', (event) => {
    //   if (event.target.title === 'gallery') {
    //     event.target.scrollIntoView();
    //   }
    // });
  }, [works.loading]);

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
        <ItemsGallery ref={galleryRef} />
        )}
      </motion.div>
    </>
  );
};

export default Home;
