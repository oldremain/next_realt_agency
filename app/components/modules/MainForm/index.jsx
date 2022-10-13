import Heading from "@components/elements/Heading";
import Container from "@components/layouts/Container";
import Form from "./Form";
import Location from "./Location";
import Rooms from "./Rooms";
import Price from "./Price";
import Square from "./Square";
import ResetButton from "./ResetButton";
import MoreControls from "./MoreControls";

import styles from "./MainForm.module.scss";

const MainForm = () => {
  return (
    <section className={styles["filters-section"]}>
      <Container>
        <Heading level={1} className={styles.heading}>
          Трехкомнатные квартиры в Бресте
        </Heading>
        <Form>
          <div className={styles.row}>
            <Location />
            <Rooms />
            <Price />
            <Square />
          </div>
          <div className={styles["buttons-row"]}>
            <ResetButton />
            <MoreControls />
          </div>
        </Form>
      </Container>
    </section>
  );
};

export default MainForm;
