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
        rotate="180deg"
        screenPos={{ top: 250 }}
      />
      <header className={styles.headerContainer}>

        <div className={styles.titleContainer}>
          <h1>
            Welcome to the gallery.
          </h1>
        </div>
        <Search />
      </header>
      <DecorationBar
        totalSize={x}
        rotate="0deg"
        screenPos={{ top: 700 }}
      />
    </div>
  );
};

export default Home;
