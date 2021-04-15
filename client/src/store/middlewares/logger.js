const logger = store => next => action => {
  console.log('mau dispatch action', action)
  console.log('sebelum action', store.getState())

  next(action)

  console.log('hasil action', store.getState())
}

export default logger