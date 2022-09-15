export default function UserComponent({item,chooseUser}){
    console.log(item)
    return(<div>
 <h2>{item.id} - {item.name}</h2>
        <button onClick={()=>{
            chooseUser(item.id);
        }}> detals</button>
        </div>);
}