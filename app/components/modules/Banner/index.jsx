import Image from "next/future/image";

import Container from "@components/layouts/Container";
import Heading from "@components/elements/Heading";
import BroadcastBadge from "@components/elements/BroadcastBadge";
import BroadcastSocial from "@components/elements/BroadcastSocial";

import { FaTelegramPlane } from "react-icons/fa";
import { SiViber } from "react-icons/si";

import CircleSmIcon from "@public/icons/circle_sm.svg";
import CircleLgIcon from "@public/icons/circle_lg.svg";
import house from "@public/images/banner/house.png";
import flat from "@public/images/banner/flat.png";

import styles from "./Banner.module.scss";

const social_links = [
  {
    id: 1,
    label: "telegram",
    url: "https://telegram.org/",
    icon: <FaTelegramPlane />,
  },
  {
    id: 2,
    label: "viber",
    url: "https://www.viber.com/",
    icon: <SiViber />,
  },
];

const badges_list = [
  {
    id: 1,
    label: "Категория:",
    value: "Трехкомнатные",
  },
  {
    id: 2,
    label: "Комнат:",
    value: "3",
  },
  {
    id: 3,
    label: "Цена:",
    value: "до 150 000 USD",
  },
];

const Banner = () => {
  return (
    <aside>
      <Container>
        <section className={styles.aside}>
          <div className={styles["aside__left"]}>
            <Heading level={2} className={styles.heading}>
              Подпишитесь на рассылку новых объектов и изменений цен по
              выбранным{" "}
              <nobr>
                вами{" "}
                <span className={styles["word-accent"]}>
                  <CircleSmIcon className={styles["circle-icon--sm"]} />
                  фильтрам
                </span>
              </nobr>
            </Heading>
            <ul className={styles["badges-list"]}>
              {badges_list.map((badge) => (
                <li key={badge.id}>
                  <BroadcastBadge label={badge.label} value={badge.value} />
                </li>
              ))}
            </ul>
            <ul className={styles["social-list"]}>
              {social_links.map((link) => (
                <li key={link.id}>
                  <BroadcastSocial
                    className={link.label}
                    label={link.label}
                    url={link.url}
                    icon={link.icon}
                  />
                </li>
              ))}
            </ul>
          </div>
          <div className={styles["aside__right"]}>
            <CircleLgIcon className={styles["circle-icon--lg"]} />
            <Image
              src={house}
              alt=""
              layout="responsive"
              className={styles.house}
            />
            <Image src={flat} alt="" className={styles.flat} />
          </div>
        </section>
      </Container>
    </aside>
  );
};

export default Banner;
