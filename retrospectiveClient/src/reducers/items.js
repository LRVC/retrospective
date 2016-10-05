const item = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        content: action.content
      }
    default:
      return state
  }
}


const items = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [
        ...state,
        item(undefined, action)
      ]
    default:
      return state
  }
}

export default items
