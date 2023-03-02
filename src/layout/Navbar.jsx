import React, {useState} from 'react'
import { Link as Anchor } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import authActions from '../store/auth/actions'

const { cerrar_sesion } = authActions

const Navbar = () => {
    
    const [variable, setVariable] = useState(false)
    let { is_online,token } = useSelector(store => store.auth)
    const [online, setOnline] = useState(is_online)
    let dispatch = useDispatch()
    
    const menuPequeño=()=> setVariable(!variable)
    const signout = async(event) => await dispatch(cerrar_sesion(token))    
    return ( 
    <div className='navBarcito'>
        <div className='izquierda'>
        <img onClick={menuPequeño} className='menu' src='../assets/images/menu.png' alt='menu'/>
        {
            variable ?(
            <div className='opciones'>
                <Anchor className='comi' to="/">Home</Anchor>
                <Anchor className='comi' to="/new-author">New author</Anchor>
                <Anchor className='comi' to="/new-comic">New comic</Anchor>
                <Anchor className='comi' to="/new-chapter">New chapter</Anchor>
                <Anchor className='comi' to="/comics">Comics</Anchor>
                <Anchor className='comi' to="/reactions/me">Favourites</Anchor>
                <Anchor className='comi' to="/profile/me">Profile</Anchor>
                <Anchor className="comi" to="/admin">AdminPanel</Anchor>
            {is_online ? (
                <p className='comi' href='#' onClick={signout}>Sign Out</p>
            ) : (
                <>
                    <Anchor className='comi' to="/signup">Sign Up</Anchor>
                    <Anchor className='comi' to="/signin">Sign In</Anchor>
                </>
            )}
        </div>
            )
            : null
        }
        </div>
        <div className='derecha'>
        <a href="#"><img className='logo' src='../assets/images/Logo.png' alt='nav'/></a>
        </div>
    </div>
    )
}

export default Navbar