import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import React from "react";
import chapterActions from "../store/chapters/actions";
import "./EditChapter.css"

const { getChapterDetails , } = chapterActions


const RenderInfoChapter = () =>{
    const chapterStore = useSelector((store) => store?.id?.idChapter?.payload);

    
    const chaptersStore = useSelector((store)=> store?.chapters?.chapter?.response)

    const dispatch = useDispatch();

    
    useEffect(()=>{
        if (chapterStore){
            dispatch(getChapterDetails(chapterStore))
        }
    }, [chapterStore])

    return(
        <>
        <div className="contenedorDeDatos">
            <div className="">
                <p className=""> { chaptersStore?.title === undefined ? null : `Title: "${chaptersStore?.title}"` } </p>
                <p className=""> { chaptersStore?.order === undefined ? `"Choose a chapter to see the details"` : `Order: ${chaptersStore?.order}` } </p>
                <p className=""> { chaptersStore?.pages === undefined ? null : `Pages: ${chaptersStore?.pages.length}` } </p>
            </div>
        </div>
        </>
    )
}


export default RenderInfoChapter