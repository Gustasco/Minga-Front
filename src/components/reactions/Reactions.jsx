import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect,useState } from 'react'
import "./Reaction.css"
import axios from 'axios'



export default function Reactions() {
    
    const { id } = useParams()
    const [likes,setLike] = useState(0)
    const [dislikes,setDislike] = useState(0)
    const [click, setClick] = useState(false)
    const data = async () => {
        try{
            let token = localStorage.getItem("token")
            let headers = {headers: {'Authorization': `Bearer ${token}`}}
            let response = await axios.get(`http://localhost:8080/api/reactions?comic_id=${id}`,headers)
            let reactions = response?.data?.response?.reactions
            setLike(reactions.likes)
            setDislike(reactions.dislikes)
            }catch(error){
            console.log(error)
        }
    }
    
    const handleButtons = (e)=>{
            let token = localStorage.getItem("token")
            let headers = {headers: {'Authorization': `Bearer ${token}`}}
            axios.post(`http://localhost:8080/api/reactions`,{comic_id:id,name:e.target.id},headers).then( 
            (response)=> {
                console.log(response)
                setClick(!click)
            }
            )
            .catch(error => console.log(error))
        }
    useEffect(
        () => {data()},[click]
        )
        
    return (
    <div className='reactions'>
        <div className='divReactions'>
            <img id='like' onClick={handleButtons} src="../assets/like.png" alt="" className='imgLike' />
            <img id='dislike' onClick={handleButtons} src="../assets/dislike.png" alt="" className='imgDislike'/>
            <div className='contenedorReactions'>
                <p className='like'>likes:{likes}</p>
                <p className='dislike'>dislikes: {dislikes}</p>
                </div>
        </div>
        </div>
    )
}
