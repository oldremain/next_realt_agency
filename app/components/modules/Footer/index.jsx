import Container from "@components/layouts/Container";
import Heading from "@components/elements/Heading";
import FooterAddress from "@components/elements/FooterAddress";
import FooterSocials from "@components/elements/FooterSocials";

import OkRuIcon from "@public/icons/socials/okru.svg";
import VkIcon from "@public/icons/socials/vk.svg";
import FacebookIcon from "@public/icons/socials/facebook.svg";
import InstagramIcon from "@public/icons/socials/instagram.svg";
import TelegramIcon from "@public/icons/socials/telegram.svg";
import WhatsappIcon from "@public/icons/socials/whatsapp.svg";
import ViberIcon from "@public/icons/socials/viber.svg";

import styles from "./Footer.module.scss";

const phones_list = [
  {
    id: 1,
    phone: "8 (029) 207-11-44 ",
    department: "(Квартирный отдел)",
  },
  {
    id: 2,
    phone: "8 (029) 826-90-05 ",
    department: "(Земельный отдел)",
  },
  {
    id: 3,
    phone: "8 (029) 375-11-55 ",
    department: "(Коммерческая недвижимость)",
  },
];

const PRIMARY_ADDRESS = "г.Брест, просп. Машерова, д. 30";
const SECONDARY_ADDRESS = "г.Брест, бульвар Космонавтов, д. 115";

const social_links_top = [
  {
    id: 1,
    icon: <OkRuIcon />,
    url: "https://ok.ru",
  },
  {
    id: 2,
    icon: <VkIcon />,
    url: "https://vk.com",
  },
  {
    id: 3,
    icon: <FacebookIcon />,
    url: "https://facebook.com/",
  },
  {
    id: 4,
    icon: <InstagramIcon />,
    url: "https://www.instagram.com/",
  },
];

const social_links_bottom = [
  {
    id: 1,
    icon: <TelegramIcon />,
    url: "https://telegram.org",
  },
  {
    id: 2,
    icon: <WhatsappIcon />,
    url: "https://www.whatsapp.com",
  },
  {
    id: 3,
    icon: <ViberIcon />,
    url: "https://www.viber.com",
  },
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <Heading level={2} className={styles.heading}>
          Контакты
        </Heading>
        <div className={styles.contacts}>
          <FooterAddress address={PRIMARY_ADDRESS} phones={phones_list} />
          <FooterAddress
            address={SECONDARY_ADDRESS}
            phones={phones_list}
            iconStyle="--secondary"
          />
          <div className={styles.socials}>
            <FooterSocials title={"Мы в соц. сетях"} icons={social_links_top} />
            <FooterSocials title={"Напишите нам"} icons={social_links_bottom} />
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
