import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'
import { useSelector, useDispatch } from "react-redux";
import alertActions from "../store/minga-alert/actions";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Layout = () => {
  const { visible, message, status } = useSelector((store) => store.alert)
  const dispatch = useDispatch()
  const { mingaAlert } = alertActions
  const MySwal = withReactContent(Swal);
  function alert(bool) {
      bool &&(
        MySwal.fire({
          title: <p>{message}</p>,
          didClose: () => {
            dispatch(mingaAlert({ message: "", visible: false, status: false }));
          },
          icon: status ? 'success' : 'error',
        })
      )
  }
  alert(visible)
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout