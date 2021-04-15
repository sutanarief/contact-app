import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchContacts } from '../store/actions'
import { NavLink } from 'react-router-dom'
import defaultPhoto from '../default.png'
import Tilt from 'react-tilt'

export default function Home() {
  const dispatch = useDispatch()
  const contactData = useSelector(state => state.contacts.contacts)
  const [defaultImage, setDefaultImage ] = useState('')

  useEffect(() => {
    dispatch(fetchContacts(null))
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <div className="container bg-light">
        <div className="d-flex justify-content-between pt-3">
          <h2 className="text-dark">
            { contactData.length < 2 ? contactData.length + ' Contact' : contactData.length + ' Contacts'}
          </h2>
          <button className="btn btn-primary">Add Contact</button>
        </div>
        <div className="row justify-content-center">
        {contactData.map((contact, i) => {
          return (
            <>
              <Tilt className="card m-2 Tilt shadow" style={{width: "20rem"}} options={{ max: 20, scale: 1, prespective: 1000}}>
                <div className="card-body d-flex">
                  <div className="rounded-circle"  style={{width: "80px", height: "80px"}}>
                    <img src={contact.photo} alt="contact" onError={(e)=>{e.target.onerror = null; e.target.src=defaultPhoto}} className="img-fluid w-100 h-100 rounded-circle" style={{objectFit: 'cover'}}/>
                  </div>
                  <div className="mt-2 ms-3">
                    <h5 className="card-title font-weight-bold">{contact.firstName} {contact.lastName}</h5>
                    {/* <NavLink to="/" className="card-link">Detail</NavLink> */}
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={'#exampleModal'+ i}>
                      Detail
                    </button>
                  </div>
                </div>
              </Tilt>
              <div className="modal fade" id={'exampleModal' + i} tabindex="-1" aria-labelledby={'exampleModalLabel' + i} aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header bg-dark">
                    {/* <img src={contact.photo} id={'exampleModalLabel' + i} alt="contact" onError={(e)=>{e.target.onerror = null; e.target.src=defaultPhoto}} className="img-fluid w-100 h-100 rounded-circle" style={{objectFit: 'cover'}}/> */}
                      {/* <h5 className="modal-title" id={'exampleModalLabel' + i}>{contact.firstName}</h5> */}
                    <div className="modal-title" style={{width: "80px", height: "80px"}}>
                      <img src={contact.photo} alt="contact" onError={(e)=>{e.target.onerror = null; e.target.src=defaultPhoto}} className="d-inline img-fluid w-100 h-100 rounded" style={{objectFit: 'cover'}}/>
                    </div>
                    <div>
                      <h2 className="text-white ms-4">{contact.firstName} {contact.lastName}</h2>
                      <h4 className="text-white ms-4">Age: {contact.age}</h4>
                    </div>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <h4>First Name : {contact.firstName}</h4>
                      <h4>Last Name : {contact.lastName}</h4>
                      <h4></h4>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      {/* <button type="button" className="btn btn-primary">Edit</button> */}
                    <a className="btn btn-primary" data-bs-target="#modal2" data-bs-toggle="modal" data-bs-dismiss="modal" role="button">Edit</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal fade" id="modal2" aria-hidden="true" aria-labelledby="..." tabindex="-1">
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    ...
                    <div className="modal-footer">
                      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={'#exampleModal'+ i} data-bs-dismiss="modal">
                      Save Change
                    </button>
                    </div>
                  </div>
                </div>
              </div>
              </>
          )
        })}
        </div>
      </div>
    </>
  )
}