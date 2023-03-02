import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import chapterActions from "../../store/chapter/actions";
import { useNavigate, useParams } from "react-router-dom";
import { PageSlides } from "../../components";
import "./pages.css";

const Pages = () => {
	const { id } = useParams();
	const { response, success } = useSelector((store) => store.chapter);
	const dispatch = useDispatch();
  const navigate = useNavigate()
	const { getChapter } = chapterActions;
  const chaptersIdList = JSON.parse(localStorage.getItem('id-chapters')) || [] // Esto es de pruebas
	const [currentChapter, setCurrentChapter] = useState(0) // TODO change: se debe utilizar una forma mas eficiente para obtener el comic actual
	// TODO change: se debe cambiar el redireccionamiento usando el estado global de Comic Details
	const prev = () => {
		if(!currentChapter) {
			return navigate('/test') // TODO change: En el merge con la rama main se debe cambiar a la pagina de detalles del comic
		}
		return navigate(`/pages/${chaptersIdList[currentChapter - 1]}`)
	}
	const next = () => {
		if((currentChapter === chaptersIdList.length - 1)) {
			return navigate('/test')
		}
		return navigate(`/pages/${chaptersIdList[currentChapter + 1]}`)
	}
	const saveId = (comicId) => {
		localStorage.setItem('comic_id', comicId)
	}
	useEffect(() => {
		dispatch(getChapter(id));
		setCurrentChapter(chaptersIdList.findIndex(chapter => chapter === id))
		saveId(id);
	}, [id]);
	return (
		<div className='page-container'>
			{!success ? (
				<h2 className='message'>{response}</h2>
			) : (
				<>
					<div className='page-title'>
						<h2>
							{response?.order} - {response?.title}
						</h2>
					</div>
					<PageSlides next={next} prev={prev} currentChapter={id} />
				</>
			)}
		</div>
	);
};

export default Pages;
