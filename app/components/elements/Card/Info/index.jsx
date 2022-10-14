import styles from "../Card.module.scss";

const infoList = [
  {
    id: 1,
    name: "Лот",
    value: "2476",
  },
  {
    id: 2,
    name: "Район",
    value: "Московский",
  },
  {
    id: 3,
    name: "Площадь",
    value: "49 / 11 / 8.2 м²",
  },
];

const Info = () => {
  return (
    <ul className={styles["info-list"]}>
      {infoList.map((row) => (
        <li key={row.id} className={styles["info-list__row"]}>
          <span className={styles["info-list__col"]}>{row.name}:</span>
          <span className={styles["info-list__col"]}>{row.value}</span>
        </li>
      ))}
    </ul>
  );
};

export default Info;
