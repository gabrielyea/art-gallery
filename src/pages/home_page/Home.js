/* eslint-disable no-unused-vars */
import useWindowDimensions from '../../components/customHooks/useWindowDimensions';
import DecorationBar from '../../components/decoration_bar/DecorationBar';
import Search from '../../components/search/Search';
import styles from './homeStyle.module.scss';

const Home = () => {
  const [x, y] = useWindowDimensions();

  return (
    <div className={styles.mainContainer}>
      <DecorationBar
        totalSize={x}
        internalPos={{ x, y: '40' }}
        screenPos={{ top: 250, right: 0 }}
      />
      <div className={styles.titleContainer}>
        <h1>
          Welcome to the gallery.
        </h1>
      </div>
      <Search />
      <DecorationBar
        totalSize={x}
        internalPos={{ x: '40', y: '40' }}
        screenPos={{ top: 700, right: 0 }}
      />
    </div>
  );
};

export default Home;
