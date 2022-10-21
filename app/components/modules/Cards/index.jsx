import Container from "@components/layouts/Container";
import Heading from "@components/elements/Heading";
import ProductFilter from "@components/elements/ProductFilter";
import Card from "@components/elements/Card";

import styles from "./Cards.module.scss";

const cards_items = [1, 2, 3, 4, 5, 6, 7, 8];

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
          {cards_items.map((card) => (
            <Card key={card} id={card} />
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default Cards;
