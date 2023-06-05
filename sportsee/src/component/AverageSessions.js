import '../style/AverageSessions.css';
import {AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer} from 'recharts'
import {FetchData} from '../fetchUtils'
import {useEffect, useState} from 'react';

function AverageSessions(props) {
    const [data, setData] = useState();
    useEffect(() => {
    FetchData("/user/" + props.id + "/average-sessions").then(res => {
      setData(res.data);
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
        <ResponsiveContainer id="areaChart" width="100%">
          <AreaChart data={data.sessions} margin={{ top: 0, right: 0, left: 5, bottom: 0 }}>
            <XAxis dataKey="day" axisLine={false} tickLine={false} stroke="#e1e1e1" />
            <YAxis hide={true} domain={[minVal, maxVal + maxVal ]} />
            <Tooltip content={<CustomTooltip />} />
            <Area type="basis" dataKey="sessionLength" stroke="white" strokeWidth={3} fillOpacity={1} fill="transparent" />
            <text x="30" y="40" width={40} textAnchor="left" dominantBaseline="left" fill="#e1e1e2" style={{fontSize: "18px"}}>Durée moyenne des</text>
            <text x="30" y="60" width={40} textAnchor="left" dominantBaseline="left" fill="#e1e1e2" style={{fontSize: "18px"}}>sessions</text>
          </AreaChart>
        </ResponsiveContainer>
    );
  }
}

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="sessions-tooltip">
        <p>{payload[0].value + " min"}</p>
      </div>
    );
  }
  return null;
};

export default AverageSessions;
