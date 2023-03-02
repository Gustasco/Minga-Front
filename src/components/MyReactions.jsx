import React, { useEffect, useRef, useState } from "react";
import ReactionsCategories from "./ReactionsCategories";
import CardsReactions from "../components/CardsReactions";
import "../views/ComicsView/Comics.view";
import { useDispatch, useSelector } from "react-redux";
import reactionsActions from "../store/myReactions/actions";
import authActions from "../store/auth/actions";

const { getReactions } = reactionsActions;

const MyReactions = () => {
  const auth = useSelector((store) => store.auth.token);//necesario?
  const reactions = useSelector((store) => store.reactions);
  const text = useSelector((store) => store.reactions.text);
  const inputCategory = useSelector((store) => store.filterCategoryComic.filterCategory);
  //console.log(inputCategory)
  const [load, setLoad] = useState(false);
  //console.log(auth)
  //console.log(reactions);
  const dispatch = useDispatch();
  let inputText = useRef(text);

  useEffect(() => {
    let token = localStorage.getItem("token")
    dispatch(getReactions({
      token,
      inputText: inputText?.current?.value,
      inputCategory: inputCategory.join(","),
    
    }));
    
    //console.log(reactions);
  }, [load, inputCategory]);

  return (
    <div className="favouritesBody">
      <h1 className="tituloComics">FAVORITES</h1>
      <label className="contSearch" htmlFor="search">
        <img className="searchImg" src="./assets/Search.png" alt="" />
        <input
           ref={inputText}
          onKeyUp={() => setLoad(!load)}
          className="search"
          type="text"
          id="search"
          placeholder="Find your comic here"
         defaultValue={text}
        />
      </label>

      <section className="sectionCards">
        <div className="exploradorDeComics">
          <h2 className="explore">Explore</h2>

          <ReactionsCategories />
          <CardsReactions />
        </div>
      </section>
    </div>
  );
};
export default MyReactions;
