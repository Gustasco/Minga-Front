import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import './Admin.css'
import { useEffect, useState } from "react";
import React from "react";
import comicActions from "../../store/admin/actions";
const { getAuthors, getCompanies } = comicActions;

export default function AdminPanel(){
    const adminStoreAuthors = useSelector((store)=> store.adminAuthors?.authors?.response)
    const adminStoreCompanies = useSelector((store)=> store.adminCompanies?.companies?.response)
    console.log(adminStoreAuthors)
    const dispatch = useDispatch()
    const token = localStorage.getItem("token")
    const[authors, setAuthors] = useState(true)
    const [ change, setChange ] = useState(true);
    const adminAuthors = async (e) => {
        try {
            const data = {}
            const headers = { headers: { Authorization: `Bearer ${token}` } };
            await axios.put(`http://localhost:8080/api/auth/role/author/${e.target.value}`, data, headers,);
            setChange(!change)
        } catch (error) {
            console.log(error);
        }
    };
    const adminCompanies = async (e) => {
        try {
            const data = {}
            const headers = { headers: { Authorization: `Bearer ${token}` } };
            await axios.put(`http://localhost:8080/api/auth/role/company/${e.target.value}`, data, headers);
            setChange(!change)
        } catch (error) {
            console.log(error);
        }
    };
    const showAuthors = ()=>{
        setAuthors(true)
    }
    const showCompanies = () =>{
        setAuthors(false)
    }
    useEffect(()=>{
        dispatch(getAuthors(token))
    }, [])
    useEffect(()=>{
        dispatch(getCompanies(token))
    }, [])
    return (
        <div>
            <div className="todo">
                <div className="background">
                    <div className="Title">
                        <h1>Panel</h1>
                    </div>
                    <div className="parraf">
                        <p>This is the administrator panel where you can manage authors and companies</p>
                    </div>
                </div>
            <div className="border">
                <div className="entities">
                    <h2>Entities</h2>
                </div>
            <div className="buttons">
            <button
            className={`buttonAdmin${authors ? "": "1"}`}
            onClick={showAuthors}
          >
            Companies
          </button>

          <button className={`buttonAdmin${authors ? "1" : ""}`} onClick={showCompanies}>
            {" "}
            Authors{" "}
          </button>
            </div>
            {authors?(
            adminStoreCompanies?.map((card, index)=>{
                return(
                    <div key={index}  className="tableAdmin">
                    <tr className="tableMax">
                    <td className="table1"><img src="../../../assets/companies.png" className="companiesPng"/></td>
                    <td className="table1">{card.name}</td>
                    <td className="table1">{card.website}</td>
                    <td className="table1"><img src={`${card.logo}`}></img></td>
                    <td className="table1">
                    <td className="table1">
                    <label className="switch">
                        <input className="cm-toggle" name="checkbox" onChange={adminCompanies} checked={change} value={card._id} type="checkbox" id="" />
                    </label>
                    </td>
                    </td>
                    </tr>
                    </div>
                )
            })
        ):adminStoreAuthors?.map((card,index)=>{
            return(
                <div key={index}  className="tableAdmin">
                <tr className="tableMax">
                <td className="table"><img src="../../../assets/authors.png" className="authorsPng"/></td>
                <td className="tableName">{card.name}</td>
                <td className="tableDate">{card.createdAt.slice(0, 10)}</td>
                <td className="tableCity">{card.city},{card.country}</td>
                <td className="tableImage"><img src={`${card.photo}`} className="imageAuthorsAdmin"></img></td>
                <td>
                    <label className="switch" htmlFor="">
                            <input onChange={adminAuthors} value={card._id} checked={card.active} type="checkbox" className="cm-toggle" name="checkbox" id="" />
                    </label>
                </td>
                </tr>
                </div>
            )
            })}
                </div>
            </div>
        </div>
        
    )
}