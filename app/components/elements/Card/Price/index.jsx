import styles from "../Card.module.scss";

const Price = () => {
  return (
    <div className={styles.price}>
      <span className={styles["price-left"]}>1 234 456 BYN</span>
      <span className={styles["price-delimeter"]}>/</span>
      <span className={styles["price-right"]}>35 456 USD</span>
    </div>
  );
};

export default Price;
