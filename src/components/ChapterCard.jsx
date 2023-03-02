import { useSelector, useDispatch } from "react-redux";
import { Link as Anchor } from "react-router-dom";
import comicActions from "../store/comic/actions";
import React, { useEffect } from "react";
import { useParams } from "react-router";

const { getComic } = comicActions;

const ChapterCard = ({ title, chapterId }) => {
  const comicStore = useSelector((store) => store.comic);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getComic(id));
  }, []);

return (
    <div className="chapterCard">
        <img
            className="imgChapters"
            src={comicStore.comics?.response?.photo}
            alt={title}
        />
        <div className="titleChapter">
        <p className=""> {title} </p>
        </div>
        <div className="boxRead">
        <Anchor to={`/pages/${chapterId}`} className="read">
            Read
        </Anchor>
        </div>
    </div>
);
};

export default ChapterCard;