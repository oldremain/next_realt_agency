import Image from "next/future/image";
import Container from "@components/layouts/Container";
import Heading from "@components/elements/Heading";
import imgPath from "@public/images/decor/decor.png";

import styles from "./Decor.module.scss";

const Decor = () => {
  return (
    <aside className={styles.aside}>
      <Container>
        <Heading level={2} className={styles.heading}>
          Decoration content
        </Heading>
        <div className={styles.content}>
          <div className={styles["image-container"]}>
            <Image src={imgPath} alt="" className={styles.image} />
          </div>
          <div className={styles.text}>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry`s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
        </div>
      </Container>
    </aside>
  );
};

export default Decor;
