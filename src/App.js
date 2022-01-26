import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets'
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import Login from './Login';
import { useEffect } from 'react';
import { auth } from './firebase';



function App() {

  
 const user = useSelector(selectUser); // Pull the user from the data store
 const dispatch = useDispatch(); //Hook, In order to call a redux action


 /* 
  How do we persist our login when we hit refresh-page?
  It listen any authentication change. Adds an observer for changes to the user's sign-in state.
 */
 useEffect(()=> {
  auth.onAuthStateChanged(userAuth => {
    if (userAuth) {
      // user is logged in
      // if they were logged in, dispatch them into the store
      dispatch(login({
        email: userAuth.email,
        uid: userAuth.uid,
        displayName: userAuth.displayName,
        photoUrl: userAuth.photoURL,
      }))
    } else {
      // user is logged out
      dispatch(logout())
    }
  })
 }, [])

  return (
    <div className="app">
    
      <Header />
      
      {/* If there is not user (if user is null), render Login page. */}
      { !user ? (
        <Login />
      ) : (
      <div className="app_body">
        <Sidebar />    
        <Feed />
       <Widgets />
      </div>
      )}

    </div>
  );
}

export default App;
