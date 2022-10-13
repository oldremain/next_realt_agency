import HeartIcon from "@public/icons/heart.svg";

import styles from "./FavCounter.module.scss";

const FavCounter = () => {
  return (
    <span className={styles.container}>
      <HeartIcon />
      <span className={styles.counter}>2</span>
    </span>
  );
};

export default FavCounter;
