export function changeContacts(payload) {
  return { type: 'CONTACTS/CHANGECONTACTS', payload}
}

export function fetchContacts(payload) {
  return async (dispatch) => {
    try {
      const response = await fetch('https://simple-contact-crud.herokuapp.com/contact')
      const {data} = await response.json()
      dispatch(changeContacts(data))
    } catch (error) {
      console.log(error)
    }
  }
}

export function editContactInfo(payload, id) {
  return async (dispatch) => {
    try {
      console.log(payload, 'ini edit')
      console.log(id)
      await fetch(`https://simple-contact-crud.herokuapp.com/contact/${id}`, {
        method: 'PUT',
        body: JSON.stringify(payload)
      })
      dispatch(fetchContacts())
    } catch (error) {
      console.log(error)
    }
  }
}

export function addContact(payload) {
  
  return async (dispatch) => {
    try {
      console.log(JSON.stringify(payload))
      await fetch('https://simple-contact-crud.herokuapp.com/contact', {
        method: 'POST',
        body: JSON.stringify(payload)
      })
      dispatch(fetchContacts())
    } catch (error) {
      console.log(error)
    }
  }
}

export function deleteContact(id) {
  return async (dispatch) => {
    try {
      console.log(id)
      const response = await fetch(`https://simple-contact-crud.herokuapp.com/contact/${id}`, {
        method: 'DELETE'
      })
      const data = await response.json()
      console.log(data)
      dispatch(fetchContacts())
      // await fetchContacts()
    } catch (error) {
      console.log(error)
    }
  }
}