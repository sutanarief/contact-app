const initialState = {
  contacts: []
}

function reducer (state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case 'CONTACTS/CHANGECONTACTS':
      return { ...state, contacts: payload }
    default:
      return state
  }
}

export default reducer