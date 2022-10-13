import styles from "../MainForm.module.scss";

const price_controls = [
  {
    id: 1,
    label: "От",
    name: "price_min",
  },
  {
    id: 2,
    label: "До",
    name: "price_max",
  },
];

const Price = () => {
  return (
    <fieldset className={styles["price-fieldset"]}>
      <legend className={styles["price-legend"]}>Цена</legend>
      <div className={styles["price-row"]}>
        {price_controls.map((control) => (
          <div key={control.id} className={styles["price-control"]}>
            <label htmlFor={control.label} className={styles["price-label"]}>
              {control.label}
            </label>
            <input
              type="number"
              id={control.label}
              name={control.name}
              placeholder={control.label}
              className={styles["price-input"]}
            />
          </div>
        ))}
      </div>
    </fieldset>
  );
};

export default Price;
