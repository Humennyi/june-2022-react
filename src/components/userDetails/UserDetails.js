import React from 'react';

const UserDetails = ({user}) => {
    return (
        <div>
            <div>{user.name}</div>
        </div>
    );
};

export default UserDetails;