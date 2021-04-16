import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchContacts, deleteContact } from '../store/actions'
import defaultPhoto from '../default.png'
import Modal from '../components/Modal'
import Tilt from 'react-tilt'

export default function Home() {
  const dispatch = useDispatch()
  const contactData = useSelector(state => state.contacts.contacts)

  const handleClick = (e, id) => {
    e.preventDefault()
    console.log(id)
    dispatch(deleteContact(id))
  }

  useEffect(() => {
    dispatch(fetchContacts())
    // eslint-disable-next-line
  }, [contactData])

  return (
    <>
      <div className="container rounded" style={{backgroundColor: 'rgba(255, 250, 250, 0.3)'}}>
        <div className="d-flex justify-content-between pt-3">
          <h2 className="text-dark">
            { contactData.length < 2 ? contactData.length + ' Contact' : contactData.length + ' Contacts'}
          </h2>
          <button className="btn btn-primary" data-bs-target={'#modal2add'} data-bs-toggle="modal">Add Contact</button>
          <Modal/>
        </div>
        <div className="row justify-content-center">
        {contactData.map((contact, i) => {
          return (
            <>
              <Tilt className="card m-2 shadow Tilt" style={{width: "22rem", backgroundColor: 'rgba(255, 250, 250, 0.4)'}} options={{ max: 20, scale: 1, prespective: 1000}}>
                <div className="card-body d-flex">
                  <div className="rounded-circle"  style={{width: "80px", height: "80px"}}>
                    <img src={contact.photo} alt="contact" onError={(e)=>{e.target.onerror = null; e.target.src=defaultPhoto}} className="img-fluid w-100 h-100 rounded-circle" style={{objectFit: 'cover'}}/>
                  </div>
                  <div className="mt-2 ms-3">
                    <h5 className="card-title font-weight-bold">{contact.firstName} {contact.lastName}</h5>
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={'#exampleModal'+ i + 1}>
                      Detail
                    </button>
                  </div>
                </div>
              </Tilt>
              <div className="modal fade" id={'exampleModal' + i + 1} tabIndex="-1" aria-labelledby={'exampleModalLabel' + i + 1} aria-hidden="true"  style={{backgroundColor: 'rgba(255, 250, 250, 0.4)'}}>
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                    <div className="modal-title" style={{width: "80px", height: "80px"}}>
                      <img src={contact.photo} alt="contact" onError={(e)=>{e.target.onerror = null; e.target.src=defaultPhoto}} className="d-inline img-fluid w-100 h-100 rounded" style={{objectFit: 'cover'}}/>
                    </div>
                    <div>
                      <h2 className="text-dark ms-4 font-weight-bold">{contact.firstName} {contact.lastName}</h2>
                      <h4 className="text-dark ms-4">Age: {contact.age}</h4>
                    </div>
                      <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <h4>First Name : {contact.firstName}</h4>
                      <h4>Last Name : {contact.lastName}</h4>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button className="btn btn-primary" data-bs-target={'#modal2' + (i + 1)} data-bs-toggle="modal" data-bs-dismiss="modal">Edit</button>
                      <button className="btn btn-danger" onClick={(e) => handleClick(e, contact.id)}>Delete</button>
                    </div>
                  </div>
                </div>
              </div>
              <Modal contact={contact} i={i + 1}/>
              {/* <div className="modal fade" id={'modal2' + i + 1} aria-hidden="true" aria-labelledby="..." tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="m-5">
                      <form>
                        <div className="form-floating mb-3">
                          <input type="text" className="form-control" id={"firstName" + i + 1} defaultValue={contact.firstName} onChange={onChange} name="firstName"/>
                          <label htmlFor={"firstName" + i + 1}>First Name</label>
                        </div>
                        <div className="form-floating mb-3">
                          <input type="text" className="form-control" id={"lastName" + i + 1} defaultValue={contact.lastName} onChange={onChange} name="lastName"/>
                          <label htmlFor={"lastName" + i + 1}>Last Name</label>
                        </div>
                        <div className="form-floating mb-3">
                          <input type="number" className="form-control" id={"age" + i + 1} defaultValue={contact.age} onChange={onChange} name="age" min="0"/>
                          <label htmlFor={"age" + i + 1}>Age</label>
                        </div>
                        <div className="form-floating">
                          <input type="text" className="form-control" id={"photo" + i + 1} placeholder="Image Link" defaultValue={contact.photo} onChange={onChange} name="photo"/>
                          <label htmlFor={"photo" + i + 1}>Photo</label>
                        </div>
                        <button type="submit" className="btn btn-primary mt-3" data-bs-toggle="modal" data-bs-target={'#exampleModal'+ i + 1} data-bs-dismiss="modal" onClick={(e) => {handleClick(e, contact.id)}}>
                        Save Change
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div> */}
              </>
          )
        })}
        </div>
      </div>
    </>
  )
}