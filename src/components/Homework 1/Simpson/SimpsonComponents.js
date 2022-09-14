import './Simpson.css';

export default function SimpsonComponents(props) {

    let {itemName,pic}=props;

    return(
        <div className="card">
            <h2>{itemName}</h2>
            <img src={pic} alt=""/>

        </div>
    );

}
