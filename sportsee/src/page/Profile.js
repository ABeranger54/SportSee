import '../style/Profile.css';
import { useParams } from 'react-router-dom';
import {FetchData} from '../fetchUtils'
import {useEffect, useState} from 'react';
import Activity from '../component/Activity';
import AverageSessions from '../component/AverageSessions';
import Performance from '../component/Performance';
import Score from '../component/Score';

function Profile() {
  const [data, setData] = useState();
  const {id} = useParams();
  useEffect(() => {
    FetchData("/user/" + id).then(data => {
      setData(data.data);
    })
  },[])

  if(!data){
      return (
        <main id="notFound">Cet utilisateur n'existe pas.</main>
      )
  }

  return (
    <main>
      {/* {JSON.stringify(data)} */}
      <Activity id={id} />
      <AverageSessions id={id} />
      <Performance id={id} />
      <Score id={id}/>
    </main>
  )
}

export default Profile;
