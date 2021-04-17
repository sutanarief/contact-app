import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addContact, editContactInfo } from '../store/actions'

export default function Modal(props) {
  const dispatch = useDispatch()
  const [ formData, setFormData ] = useState({
    firstName: props.contact ? props.contact.firstName : '',
    lastName: props.contact ? props.contact.lastName : '',
    age: props.contact ? props.contact.age : '',
    photo: props.contact ? props.contact.photo : ''
  })

  const handleSubmit = (e, id) => {
    e.preventDefault()

    const { firstName, lastName, age, photo } = e.target

    const data = {
      firstName: firstName.value || 'N/A',
      lastName: lastName.value || 'N/A',
      age: age.value || 1,
      photo: photo.value || 'N/A'
    }

    if(e.target.firstName.id === 'firstName') {
      dispatch(addContact(data))
    } else if(e.target.firstName.id !== 'firstName') {
      dispatch(editContactInfo(data, id))
    }
  
  }
  const onChange = (e) => {
    const { name, value } = e.target

    switch (name) {
      case 'firstName':
        setFormData({...formData, firstName: value})
        break;
      case 'lastName':
        setFormData({...formData, lastName: value})
        break;
      case 'age':
        setFormData({...formData, age: value})
        break;
      case 'photo':
        setFormData({...formData, photo: value})
        break;
      default:
        break;
    }
  }
  return (
    <div className="modal fade" id={'modal2' + (props.i || 'add')} aria-hidden="true" aria-labelledby="..." tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          {props.contact ? <div className="modal-header"><h4>Edit Contact</h4></div> : <div className="modal-header"><h4>Add Contact</h4></div>}
          <div className="mx-5 my-4">
            <form onSubmit={(e) => handleSubmit(e, props.contact ? props.contact.id : null)}>
              <div className="form-floating mb-3">
                <input type="text" className="form-control" id={"firstName" + (props.i || '')} onChange={onChange} name="firstName" value={formData.firstName}/>
                <label htmlFor={"firstName" + (props.i || '')}>First Name</label>
              </div>
              <div className="form-floating mb-3">
                <input type="text" className="form-control" id={"lastName" + (props.i || '')} onChange={onChange} name="lastName" value={formData.lastName}/>
                <label htmlFor={"lastName" + (props.i || '')}>Last Name</label>
              </div>
              <div className="form-floating mb-3">
                <input type="number" className="form-control" id={"age" + (props.i || '')} onChange={onChange} name="age" min="0" value={formData.age}/>
                <label htmlFor={"age" + (props.i || '')}>Age</label>
              </div>
              <div className="form-floating">
                <input type="text" className="form-control" id={"photo" + (props.i || '')} onChange={onChange} name="photo" value={formData.photo}/>
                <label htmlFor={"photo" + (props.i || '')}>Photo</label>
              </div>
              <button type="submit" className="btn btn-primary mt-3" >
              Save Change
              </button>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  )
}