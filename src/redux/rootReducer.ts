import { combineReducers } from 'redux'
import tasksReducer from './taskList/taskListReducer'
// import cakeReducer from './cake/cakeReducer'
// import iceCreamReducer from './iceCream/iceCreamReducer'
// import userReducer from './user/userReducer'

const rootReducer = combineReducers({
  tasks: tasksReducer
  // cake: cakeReducer,
  // iceCream: iceCreamReducer,
  // user: userReducer
})

export default rootReducer

/// https://github.com/gopinav/React-Redux-Tutorials/blob/master/react-redux-demo/src/redux/iceCream/iceCreamReducer.js
