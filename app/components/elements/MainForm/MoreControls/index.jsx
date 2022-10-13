import styles from "../MainForm.module.scss";

const MoreControls = () => {
  return (
    <button type="button" className={styles["filters-button"]}>
      <span>Расширенный фильтр</span>
    </button>
  );
};

export default MoreControls;
