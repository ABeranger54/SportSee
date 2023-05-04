import '../style/Profile.css';
import {useEffect, useState} from 'react';
import {FetchData, yes} from '../fetchUtils'

function Profile() {
  const data = FetchData("/user/12/performance/");

  console.log(data);

  return (
    <main>{JSON.stringify(data)}</main>
  )
}

export default Profile;
