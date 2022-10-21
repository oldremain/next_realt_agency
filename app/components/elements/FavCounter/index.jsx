import { useSelector } from "react-redux";

import HeartIcon from "@public/icons/heart.svg";

import styles from "./FavCounter.module.scss";

const FavCounter = () => {
  const favouritesItem = useSelector((state) => state.favourites);
  const favouritesCount = favouritesItem.length;

  return (
    <span className={styles.container}>
      <HeartIcon />
      <span className={styles.counter}>{favouritesCount || 0}</span>
    </span>
  );
};

export default FavCounter;
