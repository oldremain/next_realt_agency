import Link from "next/link";
import Container from "@components/layouts/Container";

import ChevronIcon from "@public/icons/chevron_link.svg";

import styles from "./HeaderNavigation.module.scss";

const navigation_links = [
  {
    id: 1,
    name: "Недвижимость",
    url: "#",
    icon: <ChevronIcon />,
  },
  {
    id: 2,
    name: "О компании",
    url: "#",
  },
  {
    id: 3,
    name: "Сотрудники",
    url: "#",
  },
  {
    id: 4,
    name: "Отзывы",
    url: "#",
  },
  {
    id: 5,
    name: "Статьи",
    url: "#",
  },
  {
    id: 6,
    name: "Новости",
    url: "#",
  },
  {
    id: 7,
    name: "Контакты",
    url: "#",
  },
];

const HeaderNavigation = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <nav>
          <ul className={styles["navigation-list"]}>
            {navigation_links.map((link) => (
              <li key={link.id} className={styles["navigation-list__item"]}>
                <Link href={link.url}>
                  <a className={styles["navigation-list__link"]}>
                    {link.name}
                    {link.icon && (
                      <span className={styles["chevron-icon"]}>
                        {link.icon}
                      </span>
                    )}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </div>
  );
};

export default HeaderNavigation;
