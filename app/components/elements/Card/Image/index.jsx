import Image from "next/future/image";

import path from "@public/images/image.png";

import styles from "../Card.module.scss";

const CardImage = () => {
  return (
    <span className={styles.image}>
      <Image src={path} alt="" />
    </span>
  );
};

export default CardImage;
