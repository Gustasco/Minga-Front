import React, { useEffect, useRef, useState } from "react";
import Categories from "../../components/ComicsCategories";
import Cards from "../../components/ComicsCards";
import "./Comics.css";
import { useDispatch, useSelector } from "react-redux";
import comicsActions from "../../store/comics/actions";

const { getComics } = comicsActions;

const ComicsView = () => {
  const comicsStore = useSelector((store) => store.comics.comics);
  //console.log(comicsStore)
  const text = useSelector((store) => store.comics.text);
  const page = useSelector((store) => store.comics.page);
  useSelector((store) => store.comics);
  const inputCategory = useSelector((store) => store.filterCategoryComic.filterCategory);
  const [load, setLoad] = useState(false);
  const dispatch = useDispatch();
  let inputText = useRef(text);
  const inputSort = "asc";
  const inputLimit = 10;
  //console.log(inputText.current?.value);
  useEffect(() => {
    //console.log(inputCategory)
    dispatch(
      getComics({
        inputText: inputText.current?.value,
        inputCategory: inputCategory.join(","),
        page: page        
      })
    );
  }, [load, inputCategory,page]);

  /*-----boton-----*/

  const next = () => {
    const comicLimit = comicsStore.length
    console.log(comicLimit)
    dispatch(
      getComics({
        inputText: inputText.current.value,
        inputCategory: inputCategory.join(","),
        page: page+1,
      })
    );
  };

  const boton = () => {
    
    const comicLimit = comicsStore.length
    console.log(comicsStore)
    
    if (comicLimit<9) {
      return <button className="noMore">No more comics</button>;
    } else {
      return (
        <button onClick={next} className="buttonNext">
          Next
        </button>
      );
    }
  };
  /*---------boton2-----*/
  const prev = () => {
    const comicLimit = comicsStore.length
    console.log(comicLimit)
    dispatch(
      getComics({
        inputText: inputText.current.value,
        inputCategory: inputCategory.join(","),
        page: page-1,
      })
    );
  };

  const boton2 = () => {
    if (page>1) {
      return (
        <button onClick={prev} className="buttonPrev">
          Prev
        </button>
      );

    }
  };

  return (
    <div className="comicsBody">
      <h1 className="tituloComics">Comics</h1>
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

          <div className="ancorsComics">
            <a className="ancorComics1" href="">
              Adventures
            </a>
            <a className="ancorComics2" href="">
              Nostalgic
            </a>
            <a className="ancorComics3" href="">
              Popular
            </a>
          </div>
          <Categories />
          <Cards />
          {boton2()}
          {boton()}
        </div>
      </section>
    </div>
  );
};
export default ComicsView;
