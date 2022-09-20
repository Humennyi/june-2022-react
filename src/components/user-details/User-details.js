

function UserDetails(props) {
    let {user} = props;

    return (
        <div>
            <h3>{user.username}</h3>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <button onClick={()=>showPost(user)}></button>


        </div>
    );
}

export default UserDetails;