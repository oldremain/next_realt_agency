import AddFavIcon from "@public/icons/add_fav.svg";

import styles from "../Card.module.scss";

const ActionIcon = () => {
  return (
    <button type="button" className={styles["action-icon"]}>
      <AddFavIcon className={styles.icon} />
    </button>
  );
};

export default ActionIcon;
