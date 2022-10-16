import LocationIcon from "@public/icons/location.svg";

import styles from "./FooterAddress.module.scss";

const FooterAddress = ({ address, phones, iconStyle }) => {
  return (
    <address className={styles.address}>
      <span className={styles.header}>
        <LocationIcon className={`${styles.icon} ${styles[iconStyle]}`} />
        <span>{address}</span>
      </span>
      <ul className={styles.list}>
        {phones.map((phone) => (
          <li key={phone.id} className={styles.item}>
            <a href={`tel:${phone.phone}`} className={styles.link}>
              <span className={styles.phone}>{phone.phone}</span>
              {phone.department}
            </a>
          </li>
        ))}
      </ul>
    </address>
  );
};

export default FooterAddress;
