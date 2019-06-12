import { createStore, combineReducers } from "redux";
import { createForms } from 'react-redux-form'
import userReducer from './reducers/userReducer'

const initialUserState = {
    firstName: '',
    lastName: ''
}

const store = createStore(combineReducers({
    list: userReducer,
    ...createForms({
        user: initialUserState,
    }),
}));


export default store
