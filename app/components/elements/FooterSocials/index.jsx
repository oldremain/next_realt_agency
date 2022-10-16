import Heading from "../Heading";

import styles from "./FooterSocials.module.scss";

const FooterSocials = ({ title, icons }) => {
  return (
    <section>
      <Heading level={3} className={styles.heading}>
        {title}
      </Heading>
      <ul className={styles.list}>
        {icons.map((icon) => (
          <li key={icon.id} className={styles.item}>
            <a href={icon.url} className={styles.link}>
              {icon.icon}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FooterSocials;
