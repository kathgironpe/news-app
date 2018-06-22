import {combineReducers} from 'redux';


export default combineReducers({
  dialogs: dialogReducers,
  faves: favesReducer
})
