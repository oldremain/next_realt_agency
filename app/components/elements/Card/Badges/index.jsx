import GiftIcon from "@public/icons/gift.svg";

import styles from "../Card.module.scss";

const Badges = () => {
  return (
    <ul className={styles.badges}>
      <li className={styles["badges__item"]}>
        <span>
          <GiftIcon />
        </span>
        <span>Спец. предложение</span>
      </li>
    </ul>
  );
};

export default Badges;
