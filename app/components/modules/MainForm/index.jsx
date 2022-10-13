import Heading from "@components/elements/Heading";
import Container from "@components/layouts/Container";
import Form from "@components/elements/MainForm/Form";
import Location from "@components/elements/MainForm/Location";
import Rooms from "@components/elements/MainForm/Rooms";
import Price from "@components/elements/MainForm/Price";
import Square from "@components/elements/MainForm/Square";
import ResetButton from "@components/elements/MainForm/ResetButton";
import MoreControls from "@components/elements/MainForm/MoreControls";

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
