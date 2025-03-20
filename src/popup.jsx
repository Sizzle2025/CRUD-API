import React from 'react';
// import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export default function Popup(bcd){
    console.log(bcd.datatemp)
    const updateData = () => {
      
fetch(`https://67d7ed1a9d5e3a10152c9b39.mockapi.io/employee/userdetials/${bcd.datatemp.id}`, {
  method: 'PUT', // or PATCH
  headers: {'content-type':'application/json'},
  body: JSON.stringify(bcd.datatemp)
}).then(res => {
  if (res.ok) {
      return res.json();
  }
  // handle error
}).then(task => {
  alert("UPDATED SUCCESS....!")
  console.log(bcd.datatemp.id)
  bcd.setRef(!bcd.ref);
}).catch(error => {
  // handle error
  console.log(error)
})

bcd.boxClose();
    }

    const createUser = () => {
     
      
      fetch('https://67d7ed1a9d5e3a10152c9b39.mockapi.io/employee/userdetials', {
        method: 'POST',
        headers: {'content-type':'application/json'},
        // Send your data in the request body as JSON
        body: JSON.stringify(bcd.datatemp)
      }).then(res => {
        if (res.ok) {
            return res.json();
        }
        // handle error
      }).then(task => {
        alert("created successfully...!")
        bcd.setRef(!bcd.ref)
      }).catch(error => {
        // handle error
      })
      bcd.boxClose();
    }

    return(
        <>

      <Modal show={bcd.boxShow} onHide={bcd.boxClose}>
        <Modal.Header closeButton>
          {bcd.datatemp.id ?
          <Modal.Title>Edit Detials &#9997;</Modal.Title> :
          <Modal.Title>Add Data &#9997;</Modal.Title>}
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="keerthana"
                defaultValue={bcd.datatemp.name}
                onChange={(e)=>bcd.setdatatemp({...bcd.datatemp, name:e.target.value})}
              />
          </Form.Group>
          
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                defaultValue={bcd.datatemp.emailId}
                onChange={(e)=>bcd.setdatatemp({...bcd.setdatatemp, emailId:e.target.value})}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Phone number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="987654334"
                defaultValue={bcd.datatemp.phoneNo}
                onChange={(e)=>bcd.setdatatemp({...bcd.setdatatemp, phoneNo:e.target.value})}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Qualification</Form.Label>
              <Form.Control
                type="text"
                placeholder="B.E Engineering"
                defaultValue={bcd.datatemp.qualification}
                onChange={(e)=>bcd.setdatatemp({...bcd.setdatatemp, qualification:e.target.value})}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="porur"
                defaultValue={bcd.datatemp.location}
                onChange={(e)=>bcd.setdatatemp({...bcd.setdatatemp, location:e.target.value})}
              />
            </Form.Group>
            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={bcd.boxClose}>
            Close
          </Button>
          {bcd.datatemp.id ?
          <Button variant="primary" onClick={updateData}>
            Save Changes
          </Button> :
          <Button variant="success" onClick={createUser}>
            CREATE
          </Button>}
        </Modal.Footer>
      </Modal>
        </>
    )
}