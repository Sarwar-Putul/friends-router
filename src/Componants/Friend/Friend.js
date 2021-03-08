import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import FriendDetail from '../FriendDetail/FriendDetail';

const Friend = (props) => {
    const {name, email, id} = props.friend;
    const history = useHistory();
    const handleClick = (friendId)=> {
        history.push(`/friend/${friendId}`);
    }

    const friendStyle ={
        border: '2px solid lightgray',
        margin: '20px',
        borderRadius: '20px',
        padding: '20px'
    }
    return (
        <div style= {friendStyle}>
            <h2>{name}</h2>
            <p>{email}</p>
            <p>id: <Link to ={`/Friend/${id}`}>Show friends detail {id}</Link> </p>
            <button onClick={()=>handleClick(id)}>Click me</button>
        </div>
    );
};

export default Friend;