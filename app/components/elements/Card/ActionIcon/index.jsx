import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { favAdd, removeFav } from "app/features/favourites/favouritesSlice";
import AddFavIcon from "@public/icons/add_fav.svg";

import styles from "../Card.module.scss";

const ActionIcon = ({ id }) => {
  const [idCard, setIdCard] = useState(id);
  const dispatch = useDispatch();

  const favourites = useSelector((state) => state.favourites || []);
  const isExists =
    favourites.findIndex((el) => el.id === id) > -1 ? true : false;

  const handleClick = () => {
    if (isExists) {
      dispatch(removeFav(idCard));
    } else {
      dispatch(favAdd({ id: idCard }));
    }
  };

  return (
    <button
      type="button"
      className={styles["action-icon"]}
      onClick={handleClick}
    >
      <AddFavIcon className={styles.icon} />
    </button>
  );
};

export default ActionIcon;
