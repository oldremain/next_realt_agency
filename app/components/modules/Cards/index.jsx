import Container from "@components/layouts/Container";
import Heading from "@components/elements/Heading";
import ProductFilter from "@components/elements/ProductFilter";
import Card from "@components/elements/Card";

import styles from "./Cards.module.scss";

const Cards = () => {
  return (
    <section className={styles.section}>
      <Container>
        <Heading level={2} className={styles.heading}>
          Product cards
        </Heading>
        <div className={styles.filter}>
          <ProductFilter />
        </div>
        <ul className={styles["cards-container"]}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </ul>
      </Container>
    </section>
  );
};

export default Cards;
