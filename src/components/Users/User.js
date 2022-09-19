

function User(props) {
    let {user,lift}=props;
    return (
        <div className='obj'>
          <h3>{user.id}  name-{user.name}</h3>
            <button onClick={()=>lift(user)} className='btn'>Details</button>
        </div>
    );
}

export default User;