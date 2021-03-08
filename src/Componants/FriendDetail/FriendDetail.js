import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetail = () => {
    const {friendId} = useParams();

    const [friend, setFriend] = useState({});

    useEffect(() => {
        const url=`https://jsonplaceholder.typicode.com/users/${friendId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data))
    }, []);
    const {name, username, email, phone, website} = friend;
    return (
        <div>
            <h1>ID: {friendId}</h1>
            <h2>Name: {name}</h2>
            <h4>Nick Name: {username}</h4>
            <h4>Email: {email}</h4>
            <h4>Phone No: {phone}</h4>
            <h4>Website: {website}</h4>

        </div>
    );
};

export default FriendDetail;