import { RiSearchLine } from 'react-icons/ri';
import styles from './searchStyle.module.scss';

const Search = () => (

  <div className={styles.mainContainer}>
    <form>
      <div className={styles.optionsContainer}>
        <div className={styles.option}> Author </div>
        <div className={styles.selected}> Work name </div>
      </div>
      <div className={styles.inputContainer}>
        <div>
          <input type="text" />
        </div>
        <button type="submit">
          <RiSearchLine className={styles.icon} />
        </button>
      </div>
    </form>
  </div>
);

export default Search;
