import styles from "./BroadcastBadge.module.scss";

const BroadcastBadge = ({ label, value }) => {
  return (
    <span className={styles.badge}>
      <span className={styles.label}>{label}</span>
      <span className={styles.value}>{value}</span>
    </span>
  );
};

export default BroadcastBadge;
