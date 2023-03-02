import React from 'react'
import { useRef} from 'react'
import updateActions from '../store/authorscompany/actions'
import { useSelector, useDispatch } from 'react-redux'
import alertActions from '../store/minga-alert/actions'
import { Link as Anchor } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
const {update, disable} = updateActions
const {mingaAlert} = alertActions

export default function Form(props) {
    let {data, name} = props
    let storeProfile = useSelector(store => store.auth)
    let {token} = storeProfile
    const dispatch = useDispatch()
    const dataForm = useRef()
    const [active, setActive] = useState(true)
    const saveData = async(e) => {
        e.preventDefault()
        let form = {}
        Array.from(dataForm.current).forEach((element) => element.name && element.value && (form[element.name] = element.value))
        let response = await dispatch(update({data:form, token, name}))
        console.log(response);
        if(response.payload.success === true){
            dispatch(mingaAlert({ message: response.payload.response.data.message, visible: true, status: true }))
        }
        if(response.payload.success === false){
            dispatch(mingaAlert({ message: response.payload.response[0].message, visible: true, status: response.success }))
        }

      }
      const disableAccount = () => {
		setActive(!active)
        if(active === true){
        dispatch(mingaAlert({message: "You account is desactive", visible: true, status: active}))
    }   else if(active === false){
        dispatch(mingaAlert({message: "You account is correctly actived", visible: true, status: true}))
    }
    }
      useEffect(() => {
        dispatch(disable({token, name, active:active}))
      }, [active])
  return (
    <form className='formProfile' ref={dataForm} onSubmit={saveData}>
        {data.map(element => {
            if(element === "date") {
                return <input type="date" key={element} className='inputProfileDate' name={element} placeholder={`Change ${element}`}/>
            }else{
                return  <input type="text" key={element} className='inputProfile' name={element} placeholder={`Change ${element}`}/>
            }
    })}
        <input type="submit" value="Save" id='inputSend' />
		{active === true ? 
        <Anchor className='deleteButton' onClick={disableAccount}>Delete</Anchor> 
        :
        <Anchor className='activeButton' onClick={disableAccount}>Active</Anchor>
        }
    </form>
  )
}