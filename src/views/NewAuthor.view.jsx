import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import alertActions from "../store/minga-alert/actions";
import { Form } from "../components";
import postData from "../services/postData";

const NewAuthor = () => {
	const inputName = useRef();
	const inputLastName = useRef();
	const inputAddress = useRef();
	const inputBirthday = useRef();
	const inputImageUrl = useRef();
	const { mingaAlert } = alertActions;
	const dispatch = useDispatch();
	const _handleSubmit = async (e) => {
		e.preventDefault();
		const [city, country] = inputAddress.current.value.trim().split(",");
		const data = {
			name: inputName.current.value,
			last_name: inputLastName.current.value,
			city,
			country,
			date: inputBirthday.current.value,
			photo: inputImageUrl.current.value
		}
		const response = await postData('http://localhost:8080/api/authors/', {...data, user_id: '63b58ab5f67ecbbe4fe5d0d8'})
		if(!response.success) {
			return dispatch(mingaAlert({ message: response.response[0].message, visible: true, status: response.success }))
		}
		dispatch(mingaAlert({ message: response.response, visible: true, status: response.success }));
	};
	return (
		<div className="chapter">
			<Form handler={_handleSubmit}>
				<h1 className="chapterTitulo">New Author</h1>
				<div></div>
				<label htmlFor="name">
					<input
						type='text'
						name='name'
						id="name"
						className='inputChapter'
						placeholder='Insert name here...'
						ref={inputName}
					/>
				</label>
				<label htmlFor="last-name">
					<input
						type='text'
						name='last-name'
						id='last-name'
						className='inputChapter'
						placeholder='Insert last name here...'
						ref={inputLastName}
					/>
				</label>
				<label htmlFor="address">
					<input
						type='text'
						name='address'
						id='address'
						className='inputChapter'
						placeholder='Insert address here... (city, country)'
						ref={inputAddress}
					/>
				</label>
				<label htmlFor="birth">
					<input
						type='date'
						name='birth'
						id='birth'
						className='inputChapter'
						placeholder='birthday'
						ref={inputBirthday}
					/>
				</label>
				<label htmlFor="image">
					<input
						type='text'
						name='image'
						id='image'
						className='inputChapter'
						placeholder='Insert image url here...'
						ref={inputImageUrl}
					/>
				</label>
			</Form>
		</div>
	);
};

export default NewAuthor;
