import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import alertActions from "../store/minga-alert/actions";
import { Form } from "../components";
import { useParams } from "react-router-dom";
import comicActions from "../store/comic/actions";
import updateData from "../services/updateData";

const token = localStorage.getItem('token')
const { mingaAlert } = alertActions;
const { getComic } = comicActions

const UpdateComic = () => {
  const comic = useSelector(store => store.comic.comics.response)
	const [title, setTitle] = useState(comic?.title);
	const [description, setDescription] = useState(comic?.description);
	const [photo, setPhoto] = useState(comic?.photo);
	const [categories, setCategories] = useState([]);
  const [response, setResponse] = useState(null)
  const { id } = useParams()
	const dispatch = useDispatch();
	const getData = async () => {
		try {
			const response = await axios.get("http://localhost:8080/api/categories");
			setCategories(response.data.response);
		} catch (err) {
			console.log(err);
		}
	};
  const alert = () => {
    if (!response.success) {
			return dispatch(
				mingaAlert({
					message: response.response,
					visible: true,
					status: response.success,
				})
			);
		}
		dispatch(
			mingaAlert({
				message: response.response,
				visible: true,
				status: response.success,
			})
		);
  }
  useEffect(() => {
    if(response) {
      alert()
      setResponse(null)
    }
    getData()
    dispatch(getComic(id))

  },[response])
	const _handleSubmit = async (e) => {
		e.preventDefault();
		let data = {
			title,
			description,
			photo
		};
		setResponse(await updateData(`comics/${id}`, data, token))
	};
	return (
		<div className='chapter'>
			<Form handler={_handleSubmit}>
				<h1 className='chapterTitulo'>Edit comic</h1>
				<label htmlFor='titulo'>
					<input
						className='inputChapter'
						type='text'
						id='titulo'
						placeholder='Insert title'
						value={title}
            onChange={(e)=> setTitle(e.target.value)}
					/>
				</label>
				<label htmlFor='Descripcion'>
					<input
						className='inputChapter'
						type='text'
						id='descripcion'
						placeholder='Insert description'
						value={description}
            onChange={(e) => setDescription(e.target.value)}
					/>
				</label>
				<label htmlFor='Foto de Portada'>
					<input
						className='inputChapter'
						type='text'
						id='fotoPortada'
						placeholder='Insert cover photo'
						value={photo}
            onChange={(e) => setPhoto(e.target.value)}
					/>
				</label>
			</Form>
		</div>
	);
};
export default UpdateComic;
