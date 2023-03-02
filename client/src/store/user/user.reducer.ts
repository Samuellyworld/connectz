// importing relevant module
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { USER_ACTION_TYPES } from './user.types';

// user types;
interface currentUserTypes {
   currentUser : {
      email : string | any,
      phone : string | any,
      token : string | any
   }
}

// initial state;
const initialState: currentUserTypes= {
  currentUser : {
    email : "",
    phone : "",
    token : ""
  }
}

// setting user actions;
export const userSlice = createSlice({
  name: USER_ACTION_TYPES.SET_CURRENT_USER,
  initialState,
  reducers : {
   setCurrentEmail : (state :any, action :PayloadAction<string> | any) => {
    state.currentUser.email = action.payload
   },
   setCurrentPhone : (state :any, action :PayloadAction<string> | any) => {
    state.currentUser.phone = action.payload
   },
   setCurrentUser :  (state :any, action :PayloadAction<string> | any) => {
    state.currentUser.token = action.payload
   }
  }
  
})

// dispatch
export const {setCurrentUser, setCurrentEmail, setCurrentPhone} = userSlice.actions

//reducer
export default userSlice.reducer