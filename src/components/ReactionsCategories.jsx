import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactionsCategoryButton from "./ReactionsCategoryButton";

const ComicsCategoriesForReactions = () => {
  const [categories, setCategories] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/categories");
      setCategories(response.data.response);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="allButons">
      {categories.map((category, index) => {
        return (
          <ReactionsCategoryButton
            index={index}
            key={index}
            id={category._id}
            name={category.name}
          />
        );
      })}
    </div>
  );
};
export default ComicsCategoriesForReactions;
