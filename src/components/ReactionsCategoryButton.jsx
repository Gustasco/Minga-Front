import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import filterCategoryComicsActions from "../store/comicCategories/actions";
const { filterCategoryComics } = filterCategoryComicsActions;

export default function CategoryButton(props) {
  const { id, index, name } = props;
  const [click, setClick] = useState(true);
  const [color, setColor] = useState(false);
  const dispatch = useDispatch();
  let category = useSelector((store) => store.comics.category);
  
  useEffect(() => {
    if (category.length > 0) {
      if (category.includes(id)) {
        setColor(!color);
      }
    }
  }, []);
  const getId = (e) => {
    setClick(!click);
    setColor(!color);
    dispatch(filterCategoryComics(id));
  };

  return (
    <button
      onClick={getId}
      id={id}
      className={"button" + (index + 1) + (color ? ` active${index + 1}` : "")}
    >
      {name}
    </button>
  );
}
