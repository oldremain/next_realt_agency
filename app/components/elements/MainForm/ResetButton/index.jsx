import ResetIcon from "@public/icons/reset.svg";

import styles from "../MainForm.module.scss";

const ResetButton = () => {
  return (
    <button type="reset" className={styles["reset-button"]}>
      <span>
        <ResetIcon className={styles["reset-icon"]} />
      </span>
      <span>Очистить фильтр</span>
    </button>
  );
};

export default ResetButton;
