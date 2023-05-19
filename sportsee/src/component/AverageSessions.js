import '../style/AverageSessions.css';
import {AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip} from 'recharts'
import {FetchData} from '../fetchUtils'
import {useEffect, useState} from 'react';

function AverageSessions(props) {
    const [data, setData] = useState();
    useEffect(() => {
    FetchData("/user/" + props.id + "/average-sessions").then(data => {
      setData(data.data);
    })
  },[])
  if(data){
    const daysLabel = ["L", "M", "M", "J", "V", "S", "D"];
    var minVal = -1;
    var maxVal = 0;
    data.sessions.forEach((e, i) => {
      e.day = daysLabel[i];
      if(e.sessionLength < minVal || minVal === -1) minVal = e.sessionLength;
      if(e.sessionLength > maxVal) maxVal = e.sessionLength;
    });

    return (
      <div id="areaChart">
        <AreaChart width={280} height={280} data={data.sessions} margin={{ top: 0, right: 0, left: 5, bottom: 0 }}>
          <XAxis dataKey="day" axisLine={false} tickLine={false} stroke="#e1e1e1" />
          <YAxis hide={true} domain={[minVal, maxVal + maxVal ]} />
          <CartesianGrid strokeDasharray="3 3" vertical={false} horizontal={false} />
          <Tooltip />
          <Area type="basis" dataKey="sessionLength" stroke="white" strokeWidth={3} fillOpacity={1} fill="transparent" />
          <text x="25" y="40" textAnchor="left" dominantBaseline="left" fill="#e1e1e2" style={{fontSize: "20px"}}>Durée moyenne des sessions</text>
        </AreaChart>
      </div>
    );
  }
}

export default AverageSessions;
