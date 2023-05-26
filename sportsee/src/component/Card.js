import '../style/Card.css';
import Icon from './Icon'

function Card(props) {
  return (
    <div className="card">
        <Icon image={props.image} desc={props.type} background={props.background} />
        <div>
            <h2>{props.value}</h2>
            <p>{props.type}</p>
        </div>
    </div>
  )
}

export default Card;
