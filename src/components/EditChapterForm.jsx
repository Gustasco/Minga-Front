import { useDispatch, useSelector } from "react-redux";
import { useRef, useState } from "react";
import InputChapter from "./InputChapter";
import InputComic from "./InputComic";
import React from "react";
import RenderInfoChapter from "./RenderInfoChapter";
import { Form } from "react-router-dom";
import "./EditChapter.css";
import chapterActions from "../store/chapter/actions";


const { updateChapter,deleteChapter,getChapterDetails } = chapterActions


const EditChaptersForm = () => {
  const chaptersStore = useSelector(
    (store) => store?.chapters?.chapter?.response
  );
  console.log(chaptersStore);
    const data = useRef("")
  const inputData = useRef("");

  const dispatch = useDispatch();

  const editsChapter = async (e) => {
    e.preventDefault();

    const chapter = {
      _id: chaptersStore._id,
      [data.current.value]:inputData.current.value,
    };
    console.log(chapter)
    await dispatch(updateChapter(chapter));
  };

  const deleteChap = async (e) => {
    e.preventDefault();
    const chapter = {
      _id: chaptersStore._id,
      [data.current.value]:inputData.current.value,
    };
    console.log(chapter)
    await dispatch(deleteChapter(chapter));
  };

  return (
    <div className="contenedorEditForm">
      <Form className="formEdit">
        <h1 className="titulo">Edit Chapter</h1>
        <div className="divPrincipal">
          <InputComic />
          <InputChapter />
            <div className="divInputData">
              <select
                name="data"
                className="selectComic"
                ref={data}
              >
                <option className="selecComic">Select Data</option>
                <option value="title">Title</option>
                <option value="pages">Pages</option>
                <option value="order">Order</option>
              </select>
            </div>
            <div className="divInputData">
              <input type="text" placeholder="data to edit" ref={inputData} className="inputData" />
            </div>
            <button className="boton" type="sumbit" onClick={editsChapter}>
            Edit
            </button>
            <button className="botonDelete" type="sumbit" onClick={(e)=>deleteChap(e)}>
            Delete
            </button>
        </div>
      </Form>
      <div>
        <RenderInfoChapter />
      </div>
    </div>
  );
};

export default EditChaptersForm;
