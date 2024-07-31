import { createStore } from 'redux';
import rootReducer from './rootReducer';
const dummyReducer = () => 100;
const store = createStore(rootReducer);


export default store;
