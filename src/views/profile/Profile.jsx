import React from 'react'
import Navbar from '../../layout/Navbar'
import Form from '../../components/ProfileForm'
import { useSelector } from 'react-redux'
import './profile.css'
export default function Profile() {
  const info = useSelector((store) => store.auth)
  console.log(info)
  const {is_author, is_company} = info
  let data = []
  let name = ""
  if (is_author) {
    data = ["name","last_name","city","country","date","photo"]
    name = "authors"
  }
  if(is_company){
    data = ["name","logo","website","description"]
    name = "companies"
  }
  return (
    <div>
        <Navbar/>
        {is_author || is_company ?         
        <div className='contProfile'>
          <div className='marginProfile'>
              <div className='editImageP'>
                  <img src={info.photo} alt="profileImg"  className='profileImage'/>
              </div>
            <Form data={data} name={name}/>
            </div>
        </div>
        :
          <div className='displayNoAuth'>
            <div className='noAuth'>
                    <h2 className='noAuth'>You need to be an author or a company to edit your data</h2>
            </div>
          </div>
        }
    </div>
  )
}