import { combineReducers } from 'redux'

import auth from './auth'

const appReducer = combineReducers({
    auth
})

const rootReducer = (state, action) => {   
  // Clear all data in redux store to initial.
  if (action.type === "CLEAR_REDUX_STATES") state = undefined
  
  return appReducer(state, action)
}

export default rootReducer
