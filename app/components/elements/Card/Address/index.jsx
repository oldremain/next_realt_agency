import ActionIcon from "../ActionIcon";

import styles from "../Card.module.scss";

const Address = ({ id }) => {
  return (
    <div className={styles.address}>
      <span>ул. Петруся Бровки 31-2</span>
      <span>3 комнатная квартира</span>
      <ActionIcon id={id} />
    </div>
  );
};

export default Address;
