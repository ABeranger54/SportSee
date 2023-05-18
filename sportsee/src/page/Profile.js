import '../style/Profile.css';
import { useParams } from 'react-router-dom';
import {FetchData} from '../fetchUtils'
import Activity from '../component/Activity';

function Profile() {
  const {id} = useParams();
  const data = FetchData("/user/" + id);
  console.log(data);

  if(!data){
      return (
        <main id="notFound">Cet utilisateur n'existe pas.</main>
      )
  }

  return (
    <main>
      {JSON.stringify(data)}
      {/* <Activity id={id} /> */}
    </main>
  )
}

export default Profile;
