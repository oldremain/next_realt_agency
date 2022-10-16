import Link from "next/link";

import styles from "./BroadcastSocial.module.scss";

const BroadcastSocial = ({ className, label, url, icon }) => {
  return (
    <Link href={url}>
      <a className={`${styles.link} ${styles[className]}`}>
        <span className={styles.icon}>{icon}</span>
        <span>{label}</span>
      </a>
    </Link>
  );
};

export default BroadcastSocial;
