import styles from "../MainForm.module.scss";

const square_controls = [
  {
    id: 1,
    label: "От",
    name: "square_min",
  },
  {
    id: 2,
    label: "До",
    name: "square_max",
  },
];

const Square = () => {
  return (
    <fieldset className={styles["square-fieldset"]}>
      <legend className={styles["square-legend"]}>Площадь (м²)</legend>
      <div className={styles["square-row"]}>
        {square_controls.map((control) => (
          <div key={control.id} className={styles["square-control"]}>
            <label htmlFor={control.label} className={styles["square-label"]}>
              {control.label}
            </label>
            <input
              type="number"
              id={control.label}
              name={control.name}
              placeholder={control.label}
              className={styles["square-input"]}
            />
          </div>
        ))}
      </div>
    </fieldset>
  );
};

export default Square;
