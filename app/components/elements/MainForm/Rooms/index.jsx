import styles from "../MainForm.module.scss";

const rooms_list = [
  {
    id: "1_room",
    label: 1,
    value: 1,
  },
  {
    id: "2_rooms",
    label: 2,
    value: 2,
  },
  {
    id: "3_rooms",
    label: 3,
    value: 3,
  },
  {
    id: "4_rooms",
    label: "4+",
    value: 4,
  },
];

const Rooms = () => {
  return (
    <fieldset className={styles["rooms-fieldset"]}>
      <legend className={styles["rooms-legend"]}>Комнаты</legend>
      <div className={styles["rooms-row"]}>
        {rooms_list.map((field, idx) => (
          <div key={idx} className={styles["rooms-control"]}>
            <label htmlFor={field.id} className={styles["rooms-label"]}>
              {field.label}
            </label>
            <input
              id={field.id}
              type="radio"
              name="rooms"
              value={field.value}
              className={styles["rooms-input"]}
            />
          </div>
        ))}
      </div>
    </fieldset>
  );
};

export default Rooms;
