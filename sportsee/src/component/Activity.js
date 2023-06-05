import '../style/Activity.css';
import {BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, ResponsiveContainer} from 'recharts'
import {FetchData} from '../fetchUtils'
import {useEffect, useState} from 'react';

function Activity(props) {
    const [data, setData] = useState();
    useEffect(() => {
    FetchData("/user/" + props.id + "/activity").then(data => {
      setData(data.data);
    })
  },[])
  if(data){
    data.sessions.forEach((e, i) => {
      e.day = i;
    });
    
    return (
      <ResponsiveContainer id="barChart" width="100%" height="100%">
      <BarChart data={data.sessions} >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="day" tickLine={false} tickMargin={20} height={40} />
          <YAxis orientation="right" axisLine={false} tickLine={false} tickMargin={20} />
          <Tooltip content={<CustomTooltip />} />
          <Legend layout="horizontal" verticalAlign="top" align="right" iconType="circle" iconSize="8" wrapperStyle={{paddingBottom: "30px", paddingRight: "15px"}} formatter={(value, entry, index) => <span className="legendText">{value}</span>} />
          <Bar dataKey="kilogram" fill="#1e1e1e" name="Poids (kg)" radius={[100, 100, 0, 0]} barSize={8} />
          <Bar dataKey="calories" fill="#ff0000" name="Calories brûlées (kCal)" radius={[100, 100, 0, 0]} barSize={8} />
          <text x="25" y="25" textAnchor="left" dominantBaseline="left">Activité quotidienne</text>
      </BarChart>
      </ResponsiveContainer>
    );
  }
}

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="performance-tooltip">
        <p>{payload[0].value + "kg"}</p>
        <p>{payload[1].value + "Kcal"}</p>
      </div>
    );
  }
  return null;
};

export default Activity;
