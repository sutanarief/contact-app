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