import '../style/AverageSessions.css';
import {RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend} from 'recharts'
import {FetchData} from '../fetchUtils'
import {useEffect, useState} from 'react';

function Performance(props) {
    const [data, setData] = useState();
    useEffect(() => {
    FetchData("/user/" + props.id + "/performance").then(data => {
        setData(data.data);
    })
  },[])
  if(data){
    //var kind = data.kind;
    //var res = data.data;
    //var resData = res;

    //resData.map(e => e.kind = kind[e.kind]);
    
    // resData.forEach((e, i) => {
    //     const kindString = kind[res[i].kind];
    //     console.log(kindString);
    //     e.kind = kindString;
    //     console.log(e.kind);
    // });

    // console.log(resData);

    data.data.map((e, i) => e.kind = data.kind[i + 1]);

    return (
        <RadarChart outerRadius={90} width={730} height={250} data={data.data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="kind" />
            <PolarRadiusAxis angle={30} domain={[0, 1]} />
            <Radar name="" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        </RadarChart>
    );
  }
}

export default Performance;
