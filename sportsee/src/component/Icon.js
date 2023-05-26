import '../style/Icon.css';

function Icon(props) {
  return (
    <img src={props.image} alt={props.desc} className="icon" style={{backgroundColor: props.background}} />
  )
}

export default Icon;
