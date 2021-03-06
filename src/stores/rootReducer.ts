import { combineReducers } from "redux";
import user from './User/Reducer'; 

const appReducer = combineReducers({
  user,
});

const rootReducer = (state: any, action: any) => appReducer(state, action);

export default rootReducer;
