import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
import Container from "@components/layouts/Container";

import ChevronIcon from "@public/icons/chevron_link.svg";

import styles from "./HeaderNavigation.module.scss";

const navigation_links = [
  {
    id: 1,
    name: "О компании",
    url: "#",
  },
  {
    id: 2,
    name: "Сотрудники",
    url: "#",
  },
  {
    id: 3,
    name: "Отзывы",
    url: "#",
  },
  {
    id: 4,
    name: "Статьи",
    url: "#",
  },
  {
    id: 5,
    name: "Новости",
    url: "#",
  },
  {
    id: 6,
    name: "Контакты",
    url: "#",
  },
];

const HeaderNavigation = () => {
  const [domLoaded, setDomLoaded] = useState(false);

  const isTabletOrMobile = useMediaQuery({
    query: "(min-width: 654px)",
  });

  const isShowNavigation = useMediaQuery({
    query: "(min-width: 433px)",
  });

  useEffect(() => setDomLoaded(true), []);

  return (
    <>
      {domLoaded && isShowNavigation && (
        <div className={styles.wrapper}>
          <Container>
            <nav className={styles.navigation}>
              <div className={styles["navigation-collapse"]}>
                <span className={styles["navigation-collapse__title"]}>
                  Недвижимость
                </span>
                <span className={styles["chevron-icon"]}>
                  <ChevronIcon />
                </span>
              </div>

              {isTabletOrMobile && (
                <ul className={styles["navigation-list"]}>
                  {navigation_links.map((link) => (
                    <li
                      key={link.id}
                      className={styles["navigation-list__item"]}
                    >
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
              )}
            </nav>
          </Container>
        </div>
      )}
    </>
  );
};

export default HeaderNavigation;
