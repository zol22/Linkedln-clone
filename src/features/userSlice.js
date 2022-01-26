import { createSlice } from '@reduxjs/toolkit';
/*  Actions are essentially things that your react components can call that trigger a reducer
    to modify the state in some sort of way.

  State: Where you keep your variables and what you define to be your variable initially.
  Action: Describe what you wanna do. What your react components call when they want something
  to happen to a variable in the redux state.
  Reducers: Describes how your actions transform state into the next state. This does something
  based on the action that is called.
  Dispatch: In order to call a redux action.

*/
export const userSlice = createSlice({
  name: 'user', // The name of this slice is user
  initialState : {
    user : null // By default , it uses the varibale "value" but you can change it 
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload; // this is like the reducer to the action: login
      // action is essentially a variable that redux allows you to pass in that you
      //can give it a payload which essentially allow you to pass in any value.
    },
    logout: (state) => {
      state.user = null; // this is like the reducer to the action: logout
    },
  },
});

/* login and logout are the actions 
*/
export const { login, logout } = userSlice.actions; // export the actions

export const selectUser = (state) => state.user.user; // pull from the user slice , the user variable

export default userSlice.reducer; // export the reducer
// Add the reducer to their configure store (store.js)
