/* eslint-disable arrow-body-style */
import Search from '../../components/search/Search';
import styles from './homeStyle.module.scss';

const Home = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.titleContainer}>
        <h1>
          Welcome to the gallery.
        </h1>
      </div>
      <Search />
    </div>
  );
};

export default Home;
