import styles from "./MainForm.module.scss";

const Location = () => {
  return (
    <div className={styles.location}>
      <label className={styles["location-label"]}>Местоположение</label>
      <input
        type="text"
        placeholder="Район, микрорайон, улица"
        className={styles["location-input"]}
      />
    </div>
  );
};

export default Location;
