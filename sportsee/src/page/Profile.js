import '../style/Profile.css';
import { useParams } from 'react-router-dom';
import {FetchData} from '../fetchUtils'
import {useEffect, useState} from 'react';
import Activity from '../component/Activity';
import AverageSessions from '../component/AverageSessions';
import Performance from '../component/Performance';
import Score from '../component/Score';
import Card from '../component/Card';
import calories from '../media/calories.png'
import proteines from '../media/proteines.png'
import glucides from '../media/glucides.png'
import lipides from '../media/lipides.png'
import Header from '../component/Header';
import Aside from '../component/Aside'

function Profile() {
  const [data, setData] = useState();
  const {id} = useParams();
  useEffect(() => {
    FetchData("/user/" + id).then(res => {
      console.log(res);
      setData(res.data);
    })
  },[])

  if(!data){
      return (
        <main id="notFound">Cet utilisateur n'existe pas.</main>
      )
  }

  return (
    <main>
      <Aside />
      <div id="content">
        <div id="title">
          <div id="name">
            <p>Bonjour</p>
            <p id="highlight">{data.userInfos.firstName}</p>
          </div>
          <p id="desc">Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
        
        <div id="rechartsContainer">
          <div id="left">
            <div id="activityContainer">
              <Activity id={id} />
            </div>
            <div style={{marginTop: "20px", height: "30vh"}}>
              <AverageSessions id={id} />
              <Performance id={id} />
              <Score id={id}/>
            </div>
          </div>
          <div id="right">
            <Card image={calories} background="rgba(255, 0, 0, 0.1)" value={data.keyData.calorieCount + "kCal"} type="Calories" />
            <Card image={proteines} background="rgba(74, 184, 255, 0.1)" value={data.keyData.proteinCount  + "g"} type="Proteines" />
            <Card image={glucides} background="rgba(253, 204, 12, 0.1)" value={data.keyData.carbohydrateCount + "g"} type="Glucides" />
            <Card image={lipides} background="rgba(253, 81, 129, 0.1)" value={data.keyData.lipidCount + "g"} type="Lipides" />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Profile;
