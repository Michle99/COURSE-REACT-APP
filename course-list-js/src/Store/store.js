import { createStore } from "redux";
import StoreReducers  from './reducers';

const store = createStore(StoreReducers);
export default store;