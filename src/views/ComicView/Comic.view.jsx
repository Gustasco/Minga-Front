import { useDispatch, useSelector } from "react-redux";
import Reactions from "../../components/reactions/Reactions";
import { useEffect, useState } from "react";
import "./Comic.css";
import React from "react";
import comicActions from "../../store/comic/actions";
import { Chapters } from "../../components";
import { useParams } from "react-router-dom";
const { getComic } = comicActions;


export default function ComicView() {
  const comicStore = useSelector((store) => store.comic);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getComic(id));
  }, []);
  const [chapter, setChapter] = useState(false);
  const showChapter = () => {
    setChapter(true);
  };
  const showManga = () => {
    setChapter(false);
  };

  return (
    <div className="comicEverything">
      <div className="comic">
        <div className="photoComic">
          <img
            className="photo"
            src={comicStore.comics?.response?.photo}
            alt="photo"
          />
          <p className="author">By {comicStore.comics?.response?.author_id?.name}</p>
        </div>
        <div className="titlesote">
          <p className="titleComic">{comicStore.comics?.response?.title}</p>
        </div>
        <div className="categoCom">
          <p  className="categoryName">{comicStore.comics?.response?.category_id?.name}</p>
          <p className="companyName">Company name</p>
        </div>
        <div className="Reactions">
          <Reactions/>
        </div>

        <div className="butons">
          <button
            className={`botonSwitch ${chapter ? "": "activeBoton"}`}
            onClick={showManga}
          >
            Manga
          </button>

          <button className={`botonSwitch ${chapter ? "activeBoton" : ""}`} onClick={showChapter}>
            {" "}
            Chapter{" "}
          </button>
        </div>
        <div className="allDivs">
          {chapter ? (
              <Chapters />
          )
           :
            (
            <div className="descriptionChapter">
              <p className="description">
                {comicStore.comics?.response?.description}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
