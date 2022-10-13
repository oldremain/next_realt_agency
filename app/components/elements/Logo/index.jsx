import Link from "next/link";

import LogoIcon from "@public/icons/logo.svg";

import styles from "./Logo.module.scss";

const Logo = () => {
  return (
    <Link href="/">
      <a className={styles.logo}>
        <LogoIcon />
        <span className={styles["logo-text"]}>
          <span>Агентство недвижимости</span>
          <span className={styles["logo-text--styled"]}>Гарант успеха</span>
        </span>
      </a>
    </Link>
  );
};

export default Logo;
