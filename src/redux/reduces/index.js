import { combineReducers } from "redux";
import HomeReduce from './HomeReduce'
import AdminReduce from './AdminReduces';
import OrderReduces from "./OrderReduces";
const rootReducer = combineReducers({
    HomeReduce,
    AdminReduce,
    OrderReduces
  });
export default rootReducer;
  