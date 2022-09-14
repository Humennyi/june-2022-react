
export default function User(props) {
    let {item:{id,name,status,species,gender,image}}=props;
    return(

        <div className="blok">
            <img src={image} alt=""/>
          <div className="title">
              <h2>{id} {name}</h2>
            <p> {status} {species}</p>
            <p>{gender}</p>
        </div>

        </div>

    );

}