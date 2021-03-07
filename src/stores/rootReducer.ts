import { combineReducers } from "redux";
import user from './User/Reducer'; 
import email from './Email/Reducer'; 

const appReducer = combineReducers({
  user,
  email,
});

const rootReducer = (state: any, action: any) => appReducer(state, action);

export default rootReducer;
