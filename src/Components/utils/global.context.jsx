import { createContext, useReducer, useMemo } from "react";

const getCardsFromLocalStorage = () => {
  const card = localStorage.getItem("card");
  return card ? JSON.parse(card) : [];
};

const setCardToLocalStorage = (card) => {
  localStorage.setItem("card", JSON.stringify(card));
};

export const initialState = {
  theme: "light",
  data: [],
  fav: getCardsFromLocalStorage(),
};

export const ContextGlobal = createContext(undefined);

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      const newTheme = state.theme === "light" ? "dark" : "light";
      return { ...state, theme: newTheme };
    case "SET_DATA":
      return { ...state, data: action.payload };
    case "ADD_CARD_TO_FAV":
      const newFavs = [...state.fav, action.payload];
      setCardToLocalStorage(newFavs);
      return { ...state, fav: newFavs };
    case "REMOVE_CARD_FROM_FAV":
      const newFavs2 = state.fav.filter((item) => item.id !== action.payload);
      setCardToLocalStorage(newFavs2);
      return { ...state, fav: newFavs2 };
    default:
      return state;
  }
};

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [state, dispatch] = useReducer(reducer, initialState);
  const stateMemo = useMemo(
    () => ({
      ...state,
      toggleTheme: () => {
        dispatch({ type: "TOGGLE_THEME" });
      },
      setData: (data) => {
        dispatch({ type: "SET_DATA", payload: data });
      },
      addCardToFav: (card) => {
        dispatch({ type: "ADD_CARD_TO_FAV", payload: card });
      },
      removeCardFromFav: (id) => {
        dispatch({ type: "REMOVE_CARD_FROM_FAV", payload: id });
      },
    }),
    [state, dispatch]
  );

  return (
    <ContextGlobal.Provider value={stateMemo}>
      {children}
    </ContextGlobal.Provider>
  );
};
