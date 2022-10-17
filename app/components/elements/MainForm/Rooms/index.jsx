import { useState } from "react";
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
  const [isChecked, setIsChecked] = useState(1);

  const handleChange = (e) => {
    setIsChecked(e.target.value);
  };

  return (
    <fieldset className={styles["rooms-fieldset"]}>
      <legend className={styles["rooms-legend"]}>Комнаты</legend>
      <div className={styles["rooms-row"]}>
        {rooms_list.map((field, idx) => (
          <div key={idx} className={styles["rooms-control"]}>
            <input
              id={field.id}
              type="radio"
              name="rooms"
              value={field.value}
              onChange={handleChange}
              checked={Number(isChecked) === field.value}
              className={styles["rooms-input"]}
            />
            <label htmlFor={field.id} className={styles["rooms-label"]}>
              {field.label}
            </label>
            <span className={styles.checkmark}></span>
          </div>
        ))}
      </div>
    </fieldset>
  );
};

export default Rooms;
