import '../style/Aside.css';
import Icon from './Icon';
import yoga from '../media/yoga.png'
import swimming from '../media/swimming.png'
import cycling from '../media/cycling.png'
import bodyBuilding from '../media/bodyBuilding.png'

function Aside() {
  return (
    <aside>
        <nav>
            <Icon image={yoga} desc="Yoga" background="white" />
            <Icon image={swimming} desc="Natation" background="white" />
            <Icon image={cycling} desc="Cyclisme" background="white" />
            <Icon image={bodyBuilding} desc="Musculation" background="white" />
        </nav>
        <p>Copyright, SportSee 2020</p>
    </aside>
  )
}

export default Aside;
