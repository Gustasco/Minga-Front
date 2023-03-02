import { useDispatch , useSelector } from "react-redux";
import { useEffect, useState } from "react";
import React from "react";
import allComicsActions from "../store/getAllComics/actions.getAllComics";
import getIdActions from "../store/getIdActions/getIdActions"
import "./EditChapter.css"


const { getAllComics } = allComicsActions
const { getIdComic } = getIdActions;


const InputComic = () =>{
    const allcomics = useSelector((store)=> store?.allComics?.allcomics)
    
    
    const [idComic, setIdComic] = useState("");
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getAllComics({

        }));
    }, []);
    
    const getValueComic  = (e) =>{
        setIdComic(e.target.value);
        dispatch(getIdComic(idComic));
    }
    useEffect(()=>{
        dispatch(getIdComic(idComic))
    }, [idComic]);

    return(
        <>
        <div className="">
            <select name="categories" 
            onChange={getValueComic} className="selectComic">
                <option>Select Comic</option>
                {allcomics.map((comic)=>{
                    return (
                        <option
                        className=""
                        key={comic.title}
                        value={comic._id}
                        >
                            {comic.title}
                        </option>
                    )
                })}
            </select>
        </div>
        </>
        );
};

export default InputComic