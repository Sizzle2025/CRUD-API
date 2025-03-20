import './App.css'
import Tableapi from "./table.jsx"
import Popup from './popup.jsx'
import { useState } from 'react';

function App() {
  const [show, setShow] = useState(false);
  const [status,setStatus] = useState(false);
  const [TempData,setTempData] =useState({})

  const handleClose = () => setShow(false);
  const handleShow = (rowdata) => {
    if(rowdata){
      setTempData(rowdata)
    }else{
      setTempData({
        name:null,
        emailId:null,
        location:null,
        qualification:null,
        phoneNo:null
    })
    }
    setShow(true)
  };

  return (
    <>
      <Popup boxShow={show} boxClose={handleClose} datatemp={TempData} setdatatemp={setTempData} ref={status} setRef={setStatus} />
      <Tableapi boxview={handleShow} update={status} setUpdate={setStatus} />
    </>
  )
}

export default App
