import Container from "@components/layouts/Container";

import IlvoIcon from "@public/icons/logos/ilvo.svg";
import KufarIcon from "@public/icons/logos/kufar.svg";
import DomovitaIcon from "@public/icons/logos/domovita.svg";

import styles from "./Copyright.module.scss";

const logos_list = [
  {
    id: 1,
    icon: <IlvoIcon />,
    url: "#",
  },
  {
    id: 2,
    icon: <KufarIcon />,
    url: "#",
  },
  {
    id: 3,
    icon: <DomovitaIcon />,
    url: "#",
  },
];

const Copyright = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className={styles.container}>
      <Container>
        <div className={styles.content}>
          <p className={styles.text}>
            <small>Агенство недвижимости “Гарант успеха” {currentYear}</small>
          </p>

          <ul className={styles["logos-list"]}>
            {logos_list.map((logo) => (
              <li key={logo.id}>
                <a href={logo.url}>{logo.icon}</a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Copyright;
