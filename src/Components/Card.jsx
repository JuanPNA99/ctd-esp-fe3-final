import React, { useContext, useEffect, useState } from "react";
import { ContextGlobal } from "../Components/utils/global.context";
import "./Card.css";

const Card = ({ name, username, id }) => {
  const [isFav, setIsFav] = useState(false);
  const { addCardToFav, removeCardFromFav, fav } = useContext(ContextGlobal);

  const addFav = (e) => {
    e.stopPropagation();
    e.preventDefault();
    // Aqui iria la logica para agregar la Card en el localStorage
    addCardToFav({ name, username, id });
  };

  const removeFav = (e) => {
    e.stopPropagation();
    e.preventDefault();
    removeCardFromFav(id);
  };

  useEffect(() => {
    setIsFav(fav.some((fav) => fav.id === id));
  }, [fav, id]);

  return (
    <div className="card">
      <img className="image" src="images/doctor.jpg" alt="doctor" />
      {/* En cada card deberan mostrar en name - username y el id */}
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
      <ul className="list cardList">
        <li>{name}</li>
        <li>{username}</li>
        <li>{id}</li>
      </ul>
      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      {isFav ? (
        <button onClick={removeFav}>Remove fav</button>
      ) : (
        <button onClick={addFav}>Add fav</button>
      )}
    </div>
  );
};

export default Card;
