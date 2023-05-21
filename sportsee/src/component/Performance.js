import '../style/Performance.css';
import {RadarChart, PolarGrid, PolarAngleAxis, Radar} from 'recharts'
import {FetchData} from '../fetchUtils'
import {useEffect, useState} from 'react';

function Performance(props) {
    const [data, setData] = useState();
    useEffect(() => {
    FetchData("/user/" + props.id + "/performance").then(res => {
        setData(res.data);
    })
  },[])
  if(data){
    const kindNames = data.kind;
    var res = data.data;
    var resData = res.map(item => {
      return {...item, kind: kindNames[item.kind]}
    });

    return (
      <div id="performance">
        <RadarChart outerRadius={90} width={260} height={260} data={resData}>
            <PolarGrid radialLines={false} />
            <PolarAngleAxis dataKey="kind" tick={{ fill: "white", fontSize: 14 }} />
            <Radar name="" dataKey="value" fill="#ff0000" fillOpacity={0.7} />
        </RadarChart>
      </div>
    );
  }
}

export default Performance;
