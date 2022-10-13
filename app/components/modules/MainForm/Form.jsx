import styles from "./MainForm.module.scss";

const Form = ({ children }) => {
  return (
    <div className={styles["form-container"]}>
      <form className={styles.form}>{children}</form>
    </div>
  );
};

export default Form;
