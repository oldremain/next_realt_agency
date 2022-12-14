import Link from "next/link";

import CardImage from "./Image";
import Price from "./Price";
import Address from "./Address";
import Info from "./Info";
import Badges from "./Badges";
import Watcher from "./Watcher";

import styles from "./Card.module.scss";

const Card = ({ id }) => {
  return (
    <li className={styles.container}>
      <CardImage />
      <Price />
      <div className={styles.body}>
        <Address id={id} />
        <Info />
      </div>
      <Badges />
      <Watcher />
      <Link href="/">
        <a className={styles.link}></a>
      </Link>
    </li>
  );
};

export default Card;
