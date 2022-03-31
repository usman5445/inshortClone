import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";

const context = createContext();

function ContextInshort({ children }) {
  const [state, dispatch] = useReducer(reducer, [{}, {}]);
  return (
    <context.Provider value={{ state, dispatch }}>{children}</context.Provider>
  );
}

export default ContextInshort;

export const GetData = () => useContext(context);

export async function fetchNews(category, dispatch) {
  let url = "";
  category
    ? (url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=b0a818fdb0e444e2b79ee28d1ef73bd3`)
    : (url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=b0a818fdb0e444e2b79ee28d1ef73bd3`);

  await axios
    .get(url)
    .then((resp) =>
      dispatch({ type: "FETCH_DATA", payload: resp.data.articles })
    );
}

function reducer(state, action) {
  switch (action.type) {
    case "FETCH_DATA":
      return (state = action.payload);
    default:
      return state;
  }
}
