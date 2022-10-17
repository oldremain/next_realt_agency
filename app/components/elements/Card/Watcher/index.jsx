import Link from "next/link";

import CameraIcon from "@public/icons/camera.svg";
import ObserverIcon from "@public/icons/360.svg";

import styles from "../Card.module.scss";

const Watcher = () => {
  return (
    <ul className={styles["watcher-list"]}>
      <li className={styles["watcher-list__item"]}>
        <Link href="/">
          <a className={styles["watcher-list__link"]}>
            <CameraIcon />
          </a>
        </Link>
        <span className={styles["watcher-tooltip"]}>Видео</span>
      </li>
      <li className={styles["watcher-list__item"]}>
        <Link href="/">
          <a className={styles["watcher-list__link"]}>
            <ObserverIcon />
          </a>
        </Link>
        <span className={styles["watcher-tooltip"]}>Обзор</span>
      </li>
    </ul>
  );
};

export default Watcher;
