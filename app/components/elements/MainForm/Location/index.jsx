import styles from "../MainForm.module.scss";

const Location = () => {
  return (
    <div className={styles.location}>
      <label htmlFor="location" className={styles["location-label"]}>
        Местоположение
      </label>
      <input
        type="text"
        id="location"
        placeholder="Район, микрорайон, улица"
        className={styles["location-input"]}
      />
    </div>
  );
};

export default Location;
