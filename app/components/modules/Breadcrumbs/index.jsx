import Link from "next/link";
import Container from "@components/layouts/Container";

import styles from "./Breadcrumbs.module.scss";

const breadcrumbs_links = [
  {
    id: 1,
    name: "Недвижимость ",
    url: "#",
  },
  {
    id: 2,
    name: "Квартиры ",
    url: "#",
  },
  {
    id: 3,
    name: "Трехкомнатные ",
    url: "#",
  },
];

const Breadcrumbs = () => {
  return (
    <Container>
      <nav className={styles.breadcrumbs}>
        <ol className={styles["breadcrumbs-list"]}>
          {breadcrumbs_links.map((link) => (
            <li key={link.id} className={styles["breadcrumbs-list__item"]}>
              <Link href={link.url}>
                <a className={styles["breadcrumbs-list__link"]}>{link.name}</a>
              </Link>
            </li>
          ))}
        </ol>
      </nav>
    </Container>
  );
};

export default Breadcrumbs;
