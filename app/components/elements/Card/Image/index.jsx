import Image from "next/image";

import path from "@public/images/apartaments/image1.jpg";

import styles from "../Card.module.scss";

const CardImage = () => {
  return (
    <div className={styles.image}>
      <Image src={path} alt="" layout="fill" />;
    </div>
  );
};

export default CardImage;
