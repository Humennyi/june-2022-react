
function User(props) {
    let {user,showUser} = props;

    return (
        <div>
            <h2>{user.id}-{user.name}</h2>
            <button onClick={()=>showUser(user)}>User-details</button>


        </div>
    );
}

export default User;