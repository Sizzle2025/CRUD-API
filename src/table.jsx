import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';

export default function Tableapi(abc){
  const deleteUser = (id) => {
      
    fetch(`https://67d7ed1a9d5e3a10152c9b39.mockapi.io/employee/userdetials/${id}`, {
      method: 'DELETE',
    }).then(res => {
      if (res.ok) {
          return res.json();
      }
      // handle error
    }).then(task => {
      alert("DELETED SUCCESSFULLY....!");
      abc.setUpdate(!abc.update);
    }).catch((error) => {
      console.log(error)
    })
        }
  const[tableData,setTableData] = useState(null);

  useEffect(()=>{
    fetch('https://67d7ed1a9d5e3a10152c9b39.mockapi.io/employee/userdetials', {
      method: 'GET',
      headers: {'content-type':'application/json'},
    }).then(res => {
      if (res.ok) {
          return res.json();
      }
      // handle error
    }).then(tasks => {
      setTableData(tasks.reverse())
    }).catch(error => {
      console.log(error)
    })
  },[abc.update])

    console.log(tableData);

   

    return(
        <>
          <button className='ps-2 pe-2 p-1 rounded bg-warning m-2 border-0' onClick={() => abc.boxview()}>ADD DATA</button>   
    <Table striped bordered hover variant='dark'>
      <thead>
        <tr className='text-center fs-4'>
          <th className='p-3'>S.NO</th>
          <th className='p-3'>Name</th>
          <th className='p-3'>Email</th>
          <th className='p-3'>Phone Number</th>
          <th className='p-3'>Qualification</th>
          <th className='p-3'>Location</th>
          <th className='p-3'>Action</th>
        </tr>
      </thead>
      <tbody>
        {tableData&&tableData.map((item,out)=>{
          return(
            <>
              <tr className='text-center '>
              <td className='p-3'>{out+1}</td>
              <td className='p-3'>{item.name}</td>
              <td className='p-3'>{item.emailId}</td>
              <td className='p-3'>{item.phoneNo}</td>
              <td className='p-3'>{item.qualification}</td>
              <td className='p-3'>{item.location}</td>
              <td className='p-3'><button onClick={()=>abc.boxview(item)} className='bg-warning ps-3 pe-3 p-1  border-0 me-3 rounded-3'>EDIT</button><button onClick={() => deleteUser(item.id) } className='bg-danger border-0 rounded-3 ps-3 pe-3 p-1'>DELETE</button></td>
               </tr>
            </>
          )
        })}
      </tbody>
    </Table>

       </>
    )
}