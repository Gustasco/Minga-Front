import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import React from "react";
import chapterActions from "../store/chaptersInputs/actions";
import getIdActions from "../store/getIdActions/getIdActions";
import "./EditChapter.css"

const { getChapters } = chapterActions
const { getIdChapter } = getIdActions

const InputChapter = () =>{
    const idComicStore = (useSelector((state)=> state?.id?.idComic?.payload))

    const chapterStore = useSelector((state)=> state?.chapterReducerPato?.chapters)


    
    const [idChapter, setIdChapter] = useState(null)
    
    
    const dispatch = useDispatch()

    const getValueChapter = (e)=>{
        setIdChapter(e.target.value);
        dispatch(getIdChapter(idChapter));
    }

    
    useEffect(()=>{
        if (idComicStore){
            dispatch(getChapters(idComicStore));
        }
    }, [idComicStore]);

    useEffect(()=>{
        dispatch(getIdChapter(idChapter));
    }, [idChapter])


    return(
        <>
        <div className="">
            <select  name="categories" onChange={getValueChapter}
            className="selectComic">
                {<option>Select chapter</option>}
                { chapterStore?.response?.map((chapter)=>{
                    return (
                        <option
                        className=""
                        key={chapter?.title}
                        value={chapter?._id}
                        >
                            {chapter?.title}
                        </option>
                    )
                })}
            </select>
        </div>
        </>
    ) 
}

export default InputChapter 