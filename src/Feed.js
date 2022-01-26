import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import React, {useEffect, useState} from 'react'
import './Feed.css'
import InputOption from './InputOption';
import Post from './Post';
import { db } from './firebase';
import firebase from 'firebase'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import FlipMove from 'react-flip-move';

function Feed() {

    const user = useSelector(selectUser);

   const [input,setInput] = useState('')
   const [posts, setPosts] = useState([])

   /*
    It creates a real-time listener to firebase collection
    and firebase collection is directly mapped to my "posts"(state)
   */
   useEffect(() => {
    db.collection("posts")
    .orderBy("timestamp","desc")
    .onSnapshot( (snapshot) =>  // Get realtime updates with cloud firestore
        setPosts(snapshot.docs.map((doc) => ({ // Everytime the posts change, I'm going to update my posts piece of state
                id : doc.id,
                data: doc.data(),
                }))
        )
    );
   }, [])

   /*
    When I send a post, I wanna push it to the db (firebase).
    We push an object.
    We create a collection named 'posts'
    */
   const sendPost = e => {
       e.preventDefault();
        db.collection('posts').add({
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl : user.photoUrl || '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        setInput("")
   }
    return (
        <div className="feed">
            <div className="feed_inputContainer">
                <div className="feed_input">
                    <CreateIcon />
                    <form action="">
                        <input value={input} onChange={e => setInput(e.target.value)} type="text" />
                        <button type="submit" onClick={sendPost}>Send</button>
                    </form>
                </div>

                <div className="feed_inputOptions">
                    <InputOption Icon={ImageIcon} title="Photo" color="#90b5f9"/>
                    <InputOption Icon={SubscriptionsIcon} title="Video" color="#e7a33e"/>
                    <InputOption Icon={EventNoteIcon} title="Event" color="#c0cbcd"/>
                    <InputOption Icon={CalendarViewDayIcon} title="Write article" color="#7fc15e"/>
                </div>
            </div>

            {/*  
                First, it is empty, nothing is shown
                but once the posts are created, they are gonna be shown here.
            */}
            <FlipMove>
            {posts.map(({ id, data : {name, description, message, photoUrl }}) => (
                <Post
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photoUrl} 

                />
            ))}
            </FlipMove>
        </div>
    )
}

export default Feed
