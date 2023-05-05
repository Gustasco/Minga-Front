import React, { useEffect, useState } from 'react'
import './myComics.css'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import comicsActions from '../../store/comics/actions';
import ComicsCards from '../../components/ComicsCards';
import deleteData from '../../services/deleteData';
import alertActions from '../../store/minga-alert/actions';

const { mingaAlert } = alertActions
const { getMyComics } = comicsActions

const MyComics = () => {
  const [response, setResponse] = useState(null)
  const { token } = useSelector(store => store.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    if(response) {
      dispatch(mingaAlert({ message: response.response, visible: true, status: response.success }))
      setResponse(null)
    }
    if(token) {
      dispatch(getMyComics({
        token
      }))
    }
  }, [response, token])
  const _handleDelete = async (id) => {
    setResponse(await deleteData(`comics/${id}`, token))
  }
  const _handleUpdate = (id) => {
    navigate(`/edit-comic/${id}`)
  }
  return (
    <div className="comicsBody">
      <h1 className="tituloComics">My comics</h1>

      <section>
        <div className="exploradorDeComics">
          <ComicsCards showButtons={true} handleDelete={_handleDelete} handleUpdate={_handleUpdate} />
        </div>
      </section>
  </div>
  )
}

export default MyComics